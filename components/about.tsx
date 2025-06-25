export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Career Objective</h3>
            <p className="text-lg mb-6">
              Seeking opportunities to apply my expertise, collaborate with visionary teams, and make a meaningful
              impact in the world of engineering. I am eager to immerse myself in the intricate fusion of mechanics,
              electronics, control systems, and automation. My objective is to contribute my skills to a forward-looking
              organization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold">Mechanical Engineering</h4>
                  <p>Design and analysis of mechanical systems</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-xl font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold">Electrical Engineering</h4>
                  <p>Circuit design and electrical systems</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xl font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-bold">Control Systems</h4>
                  <p>Automation and control system design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Rohindh P"
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">Rohindh P</h3>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
