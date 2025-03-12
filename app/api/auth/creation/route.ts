import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

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

  // Email Verification URL
  const emailVerificationUrl = `https://usw5-cai.dm-us.informaticacloud.com/active-bpel/public/rt/hmV7REr6f09d9K2gz9gMse/Email_verification?Email_ID=${user.email}`;

  try {
    await fetch(emailVerificationUrl, { method: "GET" });
  } catch (error) {
    console.error("Error during email verification:", error);
  }

  return NextResponse.redirect(`${process.env.KINDE_SITE_URL}/dashboard`);
}
