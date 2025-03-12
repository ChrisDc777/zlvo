// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  // const { getUser, isAuthenticated } = getKindeServerSession();
  // const user = await getUser();

  // // const { isAuthenticated } = getKindeServerSession();
  // const isUserAuthenticated = await isAuthenticated();

  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={siteConfig.url}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {/* <LaunchUI /> */}
              {/* <Image
                src={logoImg}
                alt="winged Logo"
                width={140}
                height={30}
                style={{ marginBottom: "6px" }}
              /> */}
              <h1>🕊️ Smart Structuring</h1>
              <span className="ml-1 text-xs text-blue-400">by Team Winged</span>
            </a>
            <Navigation isAuthenticated={isUserAuthenticated} />
          </NavbarLeft>
          <NavbarRight>
            {isUserAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 transition-colors duration-300 hover:from-gray-900 hover:to-gray-800 hover:text-gray-100"
                  >
                    {user?.given_name
                      ? user.given_name.charAt(0).toUpperCase()
                      : "?"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <LogoutLink className="block w-full text-base">
                      Log Out
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <LoginLink className="text-md hidden md:block">
                  Sign in
                </LoginLink>
                <GradientButton variant="variant" asChild>
                  <RegisterLink>Sign up</RegisterLink>
                </GradientButton>
              </>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a
                      href={siteConfig.url}
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span>🕊️ Team Winged</span>
                    </a>

                    {/* <a
                      href={siteConfig.url}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Getting Started
                    </a> */}
                    
                    <a
                      href={siteConfig.dashboard}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Dashboard
                    </a>
                    <a
                      href={siteConfig.extract}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      extract
                    </a>
                  </nav>
                </SheetContent>
              </SheetTitle>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
