import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-20"></div>
      <div className="container relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-primary">Rohindh P</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Mechatronics Engineer specializing in the fusion of mechanics, electronics, control systems, and automation
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
