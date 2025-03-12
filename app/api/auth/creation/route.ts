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

  if (!user || user === null || !user.id) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const existingDbUser = await db
    .select()
    .from(users)
    .where(eq(users.id, user.id));

  if (existingDbUser.length === 0) {
    await db.insert(users).values({
      id: user.id,
    });

    // Email Verification URL
    const emailVerificationUrl = `https://usw5-cai.dm-us.informaticacloud.com/active-bpel/public/rt/hmV7REr6f09d9K2gz9gMse/Email_verification?Email_ID=${user.email}`;

    try {
      await fetch(emailVerificationUrl, { method: "GET" });
      // Redirect regardless of the fetch result (success or failure)
    } catch (error) {
      console.error("Error during email verification:", error);
      // Optionally, handle the error in some way (e.g., log it) before redirecting
    }

    return NextResponse.redirect(`${process.env.KINDE_SITE_URL}/dashboard`);
  }

  return NextResponse.redirect(`${process.env.KINDE_SITE_URL}/dashboard`);
}
