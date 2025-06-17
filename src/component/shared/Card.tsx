import { useState } from "react"
import { ExternalLink, Folder } from "lucide-react"

interface CardProps {
  darkMode: boolean
  title: string
  description: string
  linkToUrl: string
  used: string[]
}

export default function Card({ darkMode, title, description, linkToUrl, used }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${darkMode
          ? "bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50"
          : "bg-white border border-gray-200 hover:border-purple-500/50 shadow-lg hover:shadow-xl"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Purple glow effect on hover */}
      <div
        className={`absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
      ></div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Header with icons */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`p-3 rounded-xl transition-all duration-300 ${isHovered ? "bg-purple-500 shadow-lg shadow-purple-500/25" : darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
          >
            <Folder
              className={`w-6 h-6 transition-colors duration-300 ${isHovered ? "text-white" : darkMode ? "text-gray-300" : "text-gray-600"
                }`}
            />
          </div>
          <div className="flex gap-2">
            <button
              className={`p-2 rounded-lg transition-all duration-200 ${darkMode
                  ? "bg-gray-700/50 hover:bg-purple-500 text-gray-300 hover:text-white"
                  : "bg-gray-100 hover:bg-purple-500 text-gray-600 hover:text-white"
                }`}
              onClick={() => window.open(linkToUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isHovered ? "text-purple-500" : darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className={`leading-relaxed mb-6 flex-grow ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {used.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm font-medium rounded-lg border transition-all duration-200 ${darkMode
                  ? "bg-gray-700/50 text-gray-300 border-gray-600 hover:border-purple-500 hover:text-purple-400"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-500 hover:text-purple-600"
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-purple-500 transition-all duration-500 ${isHovered ? "w-full" : "w-0"
            }`}
        ></div>
      </div>
    </div>
  )
}
