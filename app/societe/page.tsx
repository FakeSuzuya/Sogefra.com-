import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Milestone } from "lucide-react"
import { QseSection } from "./qse-section"

export default function SocietePage() {
  const timeline = [
    { year: "1965", event: "Création du cabinet par Jean Sogefra." },
    { year: "1990", event: "Ouverture du pôle Auvergne-Rhône-Alpes." },
    { year: "2005", event: "Intégration des technologies de scan 3D." },
    { year: "2015", event: "Certification ISO 9001." },
    { year: "2023", event: "Lancement de notre démarche RSE." },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="w-full py-24 md:py-32 lg:py-40 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  Notre Société
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Plus d'un demi-siècle d'histoire, de valeurs et d'innovation au service de nos clients.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="historique" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-blue-900">Notre Histoire</h2>
              <div className="relative">
                <div className="absolute left-1/2 w-0.5 h-full bg-blue-200 -translate-x-1/2" />
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center w-full mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <div className="p-4 bg-white rounded-lg shadow-md">
                        <div className="font-bold text-blue-700 text-lg">{item.year}</div>
                        <p className="text-gray-600">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center">
                      <Milestone className="text-white" size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <QseSection />
      </main>
      <Footer />
    </div>
  )
}
