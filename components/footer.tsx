import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rohindh P</h3>
            <p className="mb-4">
              Mechatronics Engineer specializing in the fusion of mechanics, electronics, control systems, and
              automation.
            </p>
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-accent transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: +91 7397468602</li>
              <li>Email: rohindh18@gmail.com</li>
              <li>
                <a
                  href="https://linkedin.com/in/rohindh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
