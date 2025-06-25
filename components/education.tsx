export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-primary pl-8 pb-12">
            <div className="absolute -left-3 top-0">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
            </div>
            <div className="bg-background/80 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-2">Bachelor of Engineering (Mechatronics)</h3>
              <h4 className="text-xl mb-2">Rajalakshmi Engineering College, Thandalam, Chennai</h4>
              <p className="text-lg mb-4">2020 - 2024</p>
              <p className="mb-4">Major in Mechanical and Electrical Engineering</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Core Subjects</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mechanical Design</li>
                    <li>Electrical Systems</li>
                    <li>Control Engineering</li>
                    <li>Automation</li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Skills Developed</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>CAD/CAM</li>
                    <li>Circuit Design</li>
                    <li>PLC Programming</li>
                    <li>Robotics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
