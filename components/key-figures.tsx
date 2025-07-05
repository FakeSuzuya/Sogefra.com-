"use client"

import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { Building, Users, FolderKanban, Calendar } from "lucide-react"

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString("fr-FR")
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, to])

  return <span ref={ref}>0</span>
}

export function KeyFigures() {
  const figures = [
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      value: new Date().getFullYear() - 1965,
      label: "ans d'expérience",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      value: 150,
      label: "collaborateurs experts",
    },
    {
      icon: <FolderKanban className="h-10 w-10 text-blue-600" />,
      value: 20000,
      label: "projets réalisés",
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      value: 3,
      label: "pôles en France",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              {figure.icon}
              <div className="text-4xl md:text-5xl font-bold text-blue-800 mt-4">
                <AnimatedCounter to={figure.value} />
                {index === 0 && "+"}
              </div>
              <p className="text-sm text-gray-600 mt-2">{figure.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
