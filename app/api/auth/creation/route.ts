import { db } from "@/app/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { users } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log("data",user);

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong...");
  }

  const existingDbUser = await db
    .select()
    .from(users)
    .where(eq(users.id, user.id));

  if (existingDbUser.length === 0) {
    await db.insert(users).values({
      id: user.id,
    });
  }

  return NextResponse.redirect(
    `${process.env.KINDE_SITE_URL}/dashboard`
    // process.env.NODE_ENV === "development"
    // ? "http://localhost:3000/"
    // : "https://shoe-marshal.vercel.app/"
  );
}