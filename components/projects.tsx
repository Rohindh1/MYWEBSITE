"use client"

import { useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Automated Robotic Arm",
    description: "Designed and built a 6-axis robotic arm with precision control systems for industrial applications.",
    category: "robotics",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["Arduino", "Servo Motors", "C++", "3D Printing"],
  },
  {
    id: 2,
    title: "Smart Home Automation System",
    description: "Developed an IoT-based home automation system with voice control and mobile app integration.",
    category: "iot",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["Raspberry Pi", "Node.js", "MQTT", "React Native"],
  },
  {
    id: 3,
    title: "CNC Machine Design",
    description: "Engineered a compact CNC machine with high precision for educational purposes.",
    category: "mechanical",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["SolidWorks", "GRBL", "Stepper Motors", "Arduino"],
  },
  {
    id: 4,
    title: "Autonomous Drone",
    description: "Built an autonomous drone with obstacle avoidance and path planning capabilities.",
    category: "robotics",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["ROS", "Computer Vision", "Python", "IMU Sensors"],
  },
  {
    id: 5,
    title: "Energy Monitoring System",
    description:
      "Created a real-time energy monitoring system for industrial applications with predictive maintenance.",
    category: "iot",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["ESP32", "InfluxDB", "Grafana", "Machine Learning"],
  },
  {
    id: 6,
    title: "Hydraulic Press Design",
    description: "Designed and simulated a hydraulic press system with safety features and precise control.",
    category: "mechanical",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: ["AutoCAD", "Fluid Dynamics", "PLC", "HMI"],
  },
]

export default function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="robotics">Robotics</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
              <TabsTrigger value="mechanical">Mechanical</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => openProjectModal(project)} />
              ))}
            </div>
          </TabsContent>

          {["robotics", "iot", "mechanical"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} onClick={() => openProjectModal(project)} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                  <Button variant="ghost" onClick={closeProjectModal}>
                    ✕
                  </Button>
                </div>

                <div className="relative aspect-video mb-6 bg-black/10 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background/80 hover:bg-background"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background/80 hover:bg-background"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-gray-400"}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-lg mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <Card className="overflow-hidden project-card cursor-pointer" onClick={onClick}>
      <div className="aspect-video overflow-hidden">
        <img
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
              +{project.technologies.length - 2} more
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
