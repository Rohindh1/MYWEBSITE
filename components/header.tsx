"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-primary">
            Rohindh P
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-lg hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#education" className="text-lg hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="#projects" className="text-lg hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-lg hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <ModeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background">
          <nav className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white w-full"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
