"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { services } from "@/lib/data"
import { usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const societeLinks = [
  { href: "/societe#historique", title: "Historique" },
  { href: "/societe#qse", title: "Démarche QSE" },
  { href: "/societe#agences", title: "Nos agences" },
]

const NavItem = ({
  children,
  href,
  dropdownItems,
  dropdownGridClass,
}: {
  children: React.ReactNode
  href?: string
  dropdownItems?: React.ReactNode
  dropdownGridClass?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const content = href ? (
    <Link href={href} className="font-medium text-sm transition-colors hover:text-blue-700">
      {children}
    </Link>
  ) : (
    <div className="flex items-center gap-1 font-medium text-sm cursor-default">
      {children}
      <ChevronDown
        className={cn("h-4 w-4 transition-transform", {
          "transform rotate-180": isHovered,
        })}
      />
    </div>
  )

  return (
    <div
      className="relative py-2"
      onMouseEnter={() => dropdownItems && setIsHovered(true)}
      onMouseLeave={() => dropdownItems && setIsHovered(false)}
    >
      {content}
      <AnimatePresence>
        {isHovered && dropdownItems && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max"
          >
            <div className="bg-white rounded-md shadow-lg border p-4">
              <ul className={cn("grid gap-3", dropdownGridClass)}>{dropdownItems}</ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src="/sogefra-logo.png" alt="Sogefra Logo" width={150} height={40} />
        </Link>

        {/* Desktop Menu - Rebuilt */}
        <nav className="ml-auto hidden lg:flex items-center gap-6">
          <NavItem href="/">Accueil</NavItem>
          <NavItem
            dropdownItems={
              <>
                <li className="row-span-3">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/societe"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-blue-900">Le Cabinet Sogefra</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Notre histoire, nos valeurs et nos équipes.
                    </p>
                  </Link>
                </li>
                {societeLinks.map((link) => (
                  <ListItem key={link.title} href={link.href} title={link.title} />
                ))}
              </>
            }
            dropdownGridClass="md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
          >
            Société
          </NavItem>
          <NavItem
            dropdownItems={services.map((service) => (
              <ListItem key={service.title} title={service.title} href={`/prestations/${service.slug}`}>
                {service.shortDescription}
              </ListItem>
            ))}
            dropdownGridClass="w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
          >
            Prestations
          </NavItem>
          <NavItem href="/references">Références</NavItem>
          <NavItem href="/actualites">Actualités</NavItem>
          <NavItem href="/recrutement">Recrutement</NavItem>
        </nav>

        <div className="ml-auto lg:ml-4 flex items-center">
          <Button asChild className="hidden lg:inline-flex bg-blue-700 hover:bg-blue-800">
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2" aria-label="Ouvrir le menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/">
                  <Image src="/sogefra-logo.png" alt="Sogefra Logo" width={150} height={40} />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Fermer le menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="p-4">
                <Accordion type="single" collapsible className="w-full">
                  <Link href="/" className="block py-3 text-lg font-medium">
                    Accueil
                  </Link>
                  <AccordionItem value="societe">
                    <AccordionTrigger className="text-lg font-medium">Société</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Link href="/societe" className="block py-2">
                        Vue d'ensemble
                      </Link>
                      {societeLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block py-2">
                          {link.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="prestations">
                    <AccordionTrigger className="text-lg font-medium">Prestations</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Link href="/prestations" className="block py-2">
                        Toutes les prestations
                      </Link>
                      {services.map((service) => (
                        <Link key={service.slug} href={`/prestations/${service.slug}`} className="block py-2">
                          {service.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <Link href="/references" className="block py-3 text-lg font-medium">
                    Références
                  </Link>
                  <Link href="/actualites" className="block py-3 text-lg font-medium">
                    Actualités
                  </Link>
                  <Link href="/recrutement" className="block py-3 text-lg font-medium">
                    Recrutement
                  </Link>
                </Accordion>
                <Button asChild className="w-full mt-8 bg-blue-700 hover:bg-blue-800">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
