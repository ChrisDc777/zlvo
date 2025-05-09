import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: any) {
  return withAuth(req);
}

export const config = {
  matcher: [
    "/chat/:path*", "/dashboard", "/extract",
    // Run on everything but Next internals and static files
    // '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ]
};