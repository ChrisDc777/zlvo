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

  let dbUser = await db.select().from(users).where(eq(users.id, user.id))
  // console.log("chk", dbUser);


  if (dbUser.length === 0) {
    // console.log("hi")
    let dbUser = await db.insert(users).values({
      id: user.id,
    })
    // console.log("object", dbUser);
  }

  return NextResponse.redirect(
    "http://localhost:3000/dashboard"
    // process.env.NODE_ENV === "development"
      // ? "http://localhost:3000/"
      // : "https://shoe-marshal.vercel.app/"
  );
}