import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/sogefra-logo.png"
                alt="Sogefra Logo"
                width={180}
                height={48}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sky-200 text-sm">L'expertise géomètre au service de vos projets depuis 1965.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <Linkedin />
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                <Facebook />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/societe" className="text-sky-200 hover:text-white hover:underline">
                  Société
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-sky-200 hover:text-white hover:underline">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-sky-200 hover:text-white hover:underline">
                  Références
                </Link>
              </li>
              <li>
                <Link href="/recrutement" className="text-sky-200 hover:text-white hover:underline">
                  Recrutement
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sky-200 hover:text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Pôles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#map" className="text-sky-200 hover:text-white hover:underline">
                  Pôle Île-de-France
                </Link>
              </li>
              <li>
                <Link href="/#map" className="text-sky-200 hover:text-white hover:underline">
                  Pôle Auvergne-Rhône-Alpes
                </Link>
              </li>
              <li>
                <Link href="/#map" className="text-sky-200 hover:text-white hover:underline">
                  Pôle Nouvelle-Aquitaine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sky-200 text-sm mb-4">Restez informé de nos dernières actualités.</p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-sky-800 border-sky-700 rounded-r-none text-white placeholder:text-sky-300"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-sky-800 text-center text-sm text-sky-300">
          <p>
            &copy; {new Date().getFullYear()} Sogefra. Tous droits réservés. |{" "}
            <Link href="/mentions-legales" className="hover:underline">
              Mentions Légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
