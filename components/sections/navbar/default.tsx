"use client"

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
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import { GradientButton } from "@/components/ui/gradient-button";
// import {
//   RegisterLink,
//   LoginLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImg from "@/public/pixil-frame.png";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser()
  console.log(user);
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
              <Image
                src={logoImg}
                alt="Togthr Logo"
                width={140}
                height={30}
                style={{ marginBottom: "6px" }}
              />
              {/* <h1>Togthr</h1> */}
            </a>
            <Navigation isAuthenticated={isSignedIn} />
          </NavbarLeft>
          <NavbarRight>
            <SignedOut>
              <SignInButton />
              <GradientButton variant="variant" asChild>
                <SignUpButton />
              </GradientButton>
            </SignedOut>
            
            <SignedIn>
            {/* <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {user?.fullName
                      ? user.fullName.charAt(0).toUpperCase()
                      : "?"}
                  </Button> */}
              <UserButton />
            </SignedIn>
            
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
                      <span>Togthr</span>
                    </a>

                    {/* <a
                      href={siteConfig.url}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Getting Started
                    </a> */}
                    <a
                      href={siteConfig.chat}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      chat
                    </a>
                    <a
                      href={siteConfig.dashboard}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Dashboard
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
