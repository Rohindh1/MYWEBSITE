"use client"

import { useState, useEffect } from "react"
import { Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      try {
        const sections = ["home", "about", "skills", "certificates", "projects", "experience", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      } catch (error) {
        console.error("Error in scroll handler:", error)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    } catch (error) {
      console.error("Error scrolling to section:", error)
    }
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const mailtoLink = `mailto:rohindh18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
  }

  // ROHINDH'S SKILLS - Focused on project-related expertise
  const skillCategories = [
    {
      category: "Automation & Control",
      skills: [
        "PLC Programming (Schneider)",
        "HMI Configuration & Design",
        "Motion Control Systems",
        "Industrial Communication Protocols",
      ],
    },
    {
      category: "Robotics",
      skills: [
        "Collaborative Robot Programming",
        "Robot Path Planning",
        "Integration with Control Systems",
        "Safety System Implementation",
      ],
    },
    {
      category: "Design & Simulation",
      skills: ["SolidWorks", "AutoCAD", "FluidSIM", "MATLAB & Simulink"],
    },
    {
      category: "Software Development",
      skills: ["Python", "Data Logging Systems", "Excel Integration", "User Interface Design"],
    },
  ]

  // ROHINDH'S CERTIFICATES - Professional Certifications & Courses
  const certificates = [
    {
      title: "Basics Of MATLAB and Simulink",
      issuer: "Dept. of Mechatronics REC, in association with ISTE Students",
      date: "August 2022",
      description:
        "Comprehensive course covering MATLAB programming fundamentals and Simulink modeling for engineering applications.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Automation in Manufacturing",
      issuer: "NPTEL",
      date: "October 2022",
      description:
        "Advanced course on manufacturing automation, covering industrial processes, control systems, and optimization techniques.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Innovation in Industry 4.0",
      issuer: "NPTEL",
      date: "October 2023",
      description:
        "Explored the intersection of technology and social innovation in the context of Industry 4.0 and smart manufacturing.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Technology Development Internship",
      issuer: "Brakes India Private Limited",
      date: "June - August 2022",
      description:
        "28-day intensive internship in technology development department, gaining hands-on experience in automotive brake systems.",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  // ROHINDH'S COLLEGE PROJECTS
  const collegeProjects = [
    {
      title: "Twin Station Non-Return Valve Leak Test Rig",
      description:
        "Design and development of a testing rig for Non-Return Valve (NRV) evaluation in automotive hydraulic braking systems. The test rig performs comprehensive leak tests, burst tests, and vacuum tests to ensure valve quality and reliability.",
      tech: ["SolidWorks", "FluidSIM", "Pneumatic Systems", "Test Automation"],
      highlights: [
        "Designed 3D models and pneumatic circuits for precise simulation and performance evaluation",
        "Implemented automated leak and differential vacuum tests to reduce assessment time",
        "Improved testing consistency and accuracy through systematic test procedures",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Variable Speed in Theo Jansen Mechanism",
      description:
        "Designed and developed a Theo Jansen Mechanism that mimics spider-like movement. Working in a team of three, I focused on mechanism design and programming to create a functional walking system with variable speed control.",
      tech: ["SolidWorks", "CAD Design", "Motor Control", "Kinematics", "Prototyping"],
      highlights: [
        "Designed and simulated the walking mechanism using SolidWorks",
        "Implemented variable speed control to simulate different walking conditions",
        "Successfully demonstrated a functional prototype that mimicked spider-like motion",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Student Tracking System Using ESP32, BLE & LoRa",
      description:
        "Designed a student tracking system using local positioning technology to enhance campus safety and automate attendance processes. The system leverages ESP32 microcontrollers, Bluetooth Low Energy (BLE), and LoRa communication for efficient and long-range data transmission.",
      tech: ["ESP32", "BLE", "LoRa", "IoT", "Embedded Systems", "Web Interface"],
      highlights: [
        "Developed a cost-effective, reliable solution for real-time location tracking",
        "Implemented low power operation for long-term deployment in campus environments",
        "Created an automated attendance system that reduced manual record-keeping",
      ],
      gradient: "from-green-500 to-teal-500",
    },
  ]

  // ROHINDH'S INDUSTRIAL PROJECTS
  const industrialProjects = [
    {
      title: "Hinge Durability Testing System with Real-Time Data Logging",
      description:
        "Developed an automated system to evaluate the durability and performance of hinges using precise motion control. The system incorporates two servo-driven motors controlled by Lexium 32D drives for accurate hinge movement and a VFD-controlled motor (ATV310) for adjusting the wheels' height for mobility.",
      highlights: [
        "Managed the entire system with a Schneider TM251SESC PLC and intuitive HMI interface",
        "Developed a Python-based application for generating Excel reports with servo parameters, timing, and torque values",
        "Implemented continuous torque monitoring to validate hinge performance and ensure reliability",
        "Enhanced testing accuracy, reduced manual intervention, and improved overall efficiency",
      ],
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Integration of HMIET6400 with HT-900 Weighing Indicator Using Modbus",
      description:
        "Successfully completed the installation and integration of HMIET6400 with the HT-900 weighing indicator using Modbus protocol. The project involved mounting the HMI, configuring parameters, and ensuring proper power and signal connections for seamless communication between systems.",
      highlights: [
        "Established reliable communication between the HMI and weighing system using Modbus protocol",
        "Implemented custom display layouts and user-friendly touch controls to meet specific requirements",
        "Optimized Modbus communication parameters for stable and reliable data exchange",
        "Conducted comprehensive testing to ensure accurate weight readings and smooth data updates",
        "Completed the project successfully within the planned timeframe and provided user training",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Automation of Adhesive Application Using Collaborative Robot and PLC",
      description:
        "Managed a complete automation process for robotic gluing application, including control panel design, wiring, PLC programming, and robot programming. The system was designed to automate the adhesive application process for improved consistency and reduced manual intervention.",
      highlights: [
        "Programmed precise gluing paths using the Dobot Nova 5 robot, ensuring uniform adhesive coverage",
        "Controlled the process with a Schneider Electric TM200 PLC for sequencing, safety interlocks, and communication",
        "Designed and wired the control panel, configured I/O connections, and integrated safety features",
        "Delivered a reliable and efficient gluing solution that improved product quality and production efficiency",
      ],
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "Integration of Doosan H2017 Cobot with Trumpf & Amada Bending Machines",
      description:
        "Led the integration of a Doosan H-Series collaborative robot (cobot) in a 7-axis configuration with a linear rail to automate bending operations on Trumpf and Amada press brakes. The extended mobility allowed the cobot to handle multiple machine stations efficiently, optimizing material handling and reducing idle time.",
      highlights: [
        "Programmed the cobot for precise loading, unloading, and positioning of metal sheets",
        "Utilized Schneider TM200 PLC to synchronize robot motion with the bending machines",
        "Developed PLC logic for real-time motion control, adaptive positioning, and safety interlocks",
        "Implemented advanced safety measures including emergency stops, light curtains, and fail-safe protocols",
        "Significantly improved production throughput, efficiency, and quality in sheet metal bending operations",
      ],
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Docking and Undocking for Fuel System in Mini-Satellite",
      description:
        "Designed and implemented an automated docking and undocking system using Schneider TM251 PLC, ensuring precise alignment and seamless connection of equipment. Developed PLC logic for real-time control of actuators, sensors, and safety interlocks, enabling smooth engagement and disengagement of docking mechanisms.",
      highlights: [
        "Integrated Modbus/TCP and digital I/O for efficient communication with peripheral devices",
        "Implemented advanced positioning algorithms and feedback systems to ensure precise docking alignment",
        "Developed HMI interfaces for real-time monitoring and control",
        "Enhanced operational efficiency, reduced cycle times, and improved equipment longevity",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "IoT-Enabled Smart Pick and Place Automation",
      description:
        "Developed a comprehensive lab-based pick and place system that integrated a TM262M15MESS8T Schneider PLC with IoT capabilities to manage and monitor operations, coordinating a Dobot M1Pro SCARA robot for precise manipulation.",
      highlights: [
        "Designed detailed schematics and control strategies incorporating a 57CM23-3A stepper motor",
        "Implemented an EM2RS-556 servo drive for dynamic motion control",
        "Utilized HMIET6400 for a user-friendly interface for real-time monitoring and adjustments",
        "Integrated TM3DM8RG I/O module for expanded connectivity with sensors and actuators",
        "Performed rigorous testing to validate communication, synchronization, and overall performance",
      ],
      gradient: "from-green-600 to-teal-600",
    },
  ]

  // ROHINDH'S EXPERIENCE - Work Experience
  const experience = [
    {
      title: "Jr. Automation & Robotics Engineer",
      company: "Mayuras Automation & Robotic Systems",
      period: "Present",
      description:
        "Programmed and integrated PLCs, HMIs, servo drives, and VFDs for motion control and process automation. Worked with robotics, pneumatic systems to optimize manufacturing and testing processes. Managed multiple end-to-end automation projects, from conceptual design to commissioning, improving operational efficiency and reducing manual intervention.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Project Intern",
      company: "Brakes India Private Limited",
      period: "Jan 2024 – Feb 2024",
      description:
        "Developed a Twin Station NRV Testing Rig to enhance accuracy and efficiency in testing automotive hydraulic braking system valves. Designed 3D models and pneumatic circuits using SolidWorks and FluidSIM for precise simulation and performance evaluation. Implemented automated leak and differential vacuum tests, reducing assessment time and improving testing consistency.",
      gradient: "from-green-500 to-blue-500",
    },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "certificates", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section ? "text-purple-400 font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {["home", "about", "skills", "certificates", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-white/70 hover:text-white"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* PROFILE IMAGE */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="w-[200px] h-[200px] mx-auto mb-8 rounded-full border-4 border-white/20 relative z-10 overflow-hidden">
                <img
                  src="/images/profile/rohindh-profile.jpg"
                  alt="Rohindh P Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {"Hi, I'm "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rohindh P
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Mechatronics Engineer passionate about automation, robotics, and control systems. Seeking opportunities to
            apply expertise in the intricate fusion of mechanics, electronics, and automation.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              View My Work
            </Button>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link
              href="http://www.linkedin.com/in/rohindh-p-2a3120273"
              className="text-white/70 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:rohindh18@gmail.com" className="text-white/70 hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/80 mb-6">
                {
                  "I'm a passionate Mechatronics Engineer with expertise in automation, robotics, and control systems. I graduated from Rajalakshmi Engineering College with a CGPA of 8.19, specializing in the intricate fusion of mechanical, electrical, and control systems."
                }
              </p>
              <p className="text-lg text-white/80 mb-6">
                Currently working as a Jr. Automation & Robotics Engineer at Mayuras Automation & Robotic Systems, where
                I program PLCs, integrate HMIs, and optimize manufacturing processes through automation and robotics
                solutions.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  Automation Expert
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                  Robotics Engineer
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                  Innovation Driven
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                  Problem Solver
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-30"></div>
              <div className="relative z-10 rounded-lg overflow-hidden w-full h-[400px]">
                <img
                  src="/images/about/robot-thinking.jpg"
                  alt="About Rohindh P"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <Card
                key={category.category}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2 text-white/80">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Certificates & Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-white/80 text-base">{cert.issuer}</CardDescription>
                    </div>
                    <Badge className={`bg-gradient-to-r ${cert.gradient} text-white border-0 ml-4`}>{cert.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Projects</h2>

          {/* COLLEGE PROJECTS */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                College Projects
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collegeProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-white/70">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.highlights && (
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Key Highlights:</h4>
                        <ul className="pl-2 space-y-1 text-white/70">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-white/20 text-white border-white/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* INDUSTRIAL PROJECTS */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industrial Projects
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrialProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-white/70">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.highlights && (
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Key Highlights:</h4>
                        <ul className="pl-2 space-y-1 text-white/70">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-white/80">{exp.company}</CardDescription>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}>{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">{"Let's Work Together"}</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto text-center">
            {
              "I'm always interested in new opportunities in automation, robotics, and mechatronics engineering. Let's discuss how we can bring innovative solutions to life."
            }
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Mail className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-white/80">rohindh18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Linkedin className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">LinkedIn</h4>
                    <Link
                      href="http://www.linkedin.com/in/rohindh-p-2a3120273"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/rohindh-p-2a3120273
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Phone</h4>
                    <p className="text-white/80">+91 7397468602</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <p className="text-white/60 text-sm mt-4 text-center">
                Your message will be sent directly to my email inbox
              </p>
            </div>
          </div>

          <Separator className="my-12 bg-white/20" />
          <p className="text-white/60 text-center">© 2024 Rohindh P. Built with Next.js and Tailwind CSS.</p>
        </div>
      </section>
    </div>
  )
}
