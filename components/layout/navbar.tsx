"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { BRAND_LOGO_PATH } from "@/lib/constants";

const navigationLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/profile", label: "Profile", isRoute: true },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="FishWise AI home">
          <Image
            src={BRAND_LOGO_PATH}
            alt="FishWise AI logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-base font-semibold tracking-tight">FishWise AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigationLinks.map((link) =>
            "isRoute" in link && link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="#analysis"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Analyze Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-border/70 md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navigationLinks.map((link) =>
              "isRoute" in link && link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="#analysis"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Analyze Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
