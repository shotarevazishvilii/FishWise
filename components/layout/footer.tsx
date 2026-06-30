import Image from "next/image";
import Link from "next/link";

import { BRAND_LOGO_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="FishWise AI home">
              <Image
                src={BRAND_LOGO_PATH}
                alt="FishWise AI logo"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="text-base font-semibold tracking-tight">FishWise AI</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              AI-powered fishing forecast and recommendations to help anglers
              plan smarter, safer, and more productive trips.
            </p>
          </div>

          <nav aria-label="Footer links" className="flex gap-6 text-sm">
            <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </a>
          </nav>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FishWise AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
