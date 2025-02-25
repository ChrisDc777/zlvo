import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


export default function FooterSection() {
  return (
    <footer className="w-full px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Togthr</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <a
                href={siteConfig.chat}
                className="text-sm text-muted-foreground"
              >
                chat
              </a>
              <a
                href={siteConfig.dashboard}
                className="text-sm text-muted-foreground"
              >
                Dashboard
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                About
              </a>
              {/* <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Careers
              </a> */}
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a
                href={siteConfig.links.email}
                className="text-sm text-muted-foreground"
              >
                Email
              </a>
              <a
                href={siteConfig.links.instagram}
                className="text-sm text-muted-foreground flex items-center gap-1"
              >
                Instagram <InstagramLogoIcon/>
              </a>
              <a
                href={siteConfig.links.github}
                className="text-sm text-muted-foreground flex items-center gap-1"
              >
                Github <GitHubLogoIcon />
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Chris Dcosta.</div>
            <div className="flex items-center gap-4">
              <a href={siteConfig.url}>Privacy Policy</a>
              <a href={siteConfig.url}>Terms of Service</a>
              {/* <ModeToggle /> */}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
