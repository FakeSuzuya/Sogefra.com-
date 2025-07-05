import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ruler, Building, MapPin, DraftingCompass, HardHat, Scan, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PrestationsPage() {
  const services = [
    {
      slug: "foncier",
      icon: <Ruler className="h-8 w-8 text-blue-800" />,
      title: "Foncier",
      description: "Délimitation, bornage, division de propriétés et conseil en droit foncier.",
    },
    {
      slug: "urbanisme",
      icon: <Building className="h-8 w-8 text-blue-800" />,
      title: "Urbanisme",
      description: "Accompagnement pour permis d'aménager, déclarations préalables et études d'impact.",
    },
    {
      slug: "topographie",
      icon: <MapPin className="h-8 w-8 text-blue-800" />,
      title: "Topographie",
      description: "Levés topographiques, plans de corps de rue, implantation et récolement.",
    },
    {
      slug: "copropriete",
      icon: <DraftingCompass className="h-8 w-8 text-blue-800" />,
      title: "Copropriété & Volumes",
      description: "Établissement ou modification d'états descriptifs de division et calcul de tantièmes.",
    },
    {
      slug: "vrd",
      icon: <HardHat className="h-8 w-8 text-blue-800" />,
      title: "Ingénierie VRD",
      description: "Conception et suivi de projets de voirie et réseaux divers (assainissement, eau potable).",
    },
    {
      slug: "3d",
      icon: <Scan className="h-8 w-8 text-blue-800" />,
      title: "Lasergrammétrie 3D",
      description: "Numérisation 3D de haute précision pour l'industrie, le patrimoine et le bâtiment.",
    },
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
                  Nos Prestations
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Une gamme complète de services pour répondre à tous les besoins de vos projets d'aménagement.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.slug} delay={0.1 * index}>
                  <Link href={`/prestations/${service.slug}`} className="h-full block group">
                    <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="bg-blue-100 p-4 rounded-full">{service.icon}</div>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <CardTitle className="pt-4 text-blue-900">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
