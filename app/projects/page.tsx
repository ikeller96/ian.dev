const projects = [
  {
    name: "Project 1",
    description: "This is a description of Project 1.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    name: "Project 2",
    description: "This is a description of Project 2.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    name: "Project 3",
    description: "This is a description of Project 3.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export default function Projects() {
  return (
    <div id="projects" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Projects</h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {projects.map((project) => (
              <article key={project.name} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={project.link}
                      className="relative z-10 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-200"
                    >
                      View Project
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={project.link}>
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

