"use server";

import { db } from "@/app/db";
import { journals } from "@/app/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
// import { auth } from "@kinde-oss/kinde-auth-nextjs/server";

export const createJournalEntry = async (
  title: string,
  content: string,
  label: string,
  userId: string,
) => {
  try {
    await db.insert(journals).values({
      title: title,
      content: content,
      label: label,
      userId: userId,
    });
    revalidatePath("/journal"); // Revalidate the journal page
    return { success: true };
  } catch (error) {
    console.error("Error creating journal entry:", error);
    return { success: false, error: "Failed to create journal entry" };
  }
};

export const getJournalEntriesByUserId = async (userId: string) => {
  try {
    const entries = await db.select().from(journals).where(eq(journals.userId, userId)).orderBy(desc(journals.createdAt));
    return entries;
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    return [];
  }
};
