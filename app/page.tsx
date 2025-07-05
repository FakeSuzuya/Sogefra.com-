import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Ruler, Building, MapPin, DraftingCompass, HardHat, Scan } from "lucide-react"
import { Header } from "@/components/header"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"
import { KeyFigures } from "@/components/key-figures"
import dynamic from "next/dynamic"

const InteractiveMap = dynamic(() => import("@/components/interactive-map").then((mod) => mod.InteractiveMap), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full rounded-lg shadow-lg bg-gray-200 animate-pulse" />,
})

export default function SogefraLandingPage() {
  const services = [
    {
      icon: <Ruler className="h-6 w-6 text-blue-800" />,
      title: "Foncier",
      description: "Délimitation, bornage, division de propriétés et conseil en droit foncier.",
    },
    {
      icon: <Building className="h-6 w-6 text-blue-800" />,
      title: "Urbanisme",
      description: "Accompagnement pour permis d'aménager, déclarations préalables et études d'impact.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-800" />,
      title: "Topographie",
      description: "Levés topographiques, plans de corps de rue, implantation et récolement.",
    },
    {
      icon: <DraftingCompass className="h-6 w-6 text-blue-800" />,
      title: "Copropriété",
      description: "Établissement ou modification d'états descriptifs de division et calcul de tantièmes.",
    },
    {
      icon: <HardHat className="h-6 w-6 text-blue-800" />,
      title: "Ingénierie VRD",
      description: "Conception et suivi de projets de voirie et réseaux divers (assainissement, eau potable).",
    },
    {
      icon: <Scan className="h-6 w-6 text-blue-800" />,
      title: "Lasergrammétrie 3D",
      description: "Numérisation 3D de haute précision pour l'industrie, le patrimoine et le bâtiment.",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <section id="hero" className="w-full py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                    L'expertise géomètre au service de vos projets
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Sogefra, votre partenaire de confiance pour tous vos besoins en topographie, urbanisme, foncier et
                    ingénierie VRD depuis 1965.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/prestations"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900"
                    prefetch={false}
                  >
                    Découvrir nos métiers
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-blue-700 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-900 text-blue-700"
                    prefetch={false}
                  >
                    Nous contacter
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Image
                  src="/hero-image.png"
                  width="600"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  priority
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <KeyFigures />

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-blue-800">Nos Métiers</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                  Une expertise complète pour vos projets
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nous couvrons l'ensemble des domaines du géomètre-expert et du bureau d'études pour vous accompagner à
                  chaque étape.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} delay={0.1 * (index + 1)}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">{service.icon}</div>
                      <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="map" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-blue-800">Nos Pôles</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Une présence nationale</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nos trois pôles stratégiques nous permettent de couvrir l'ensemble du territoire français.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <InteractiveMap />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
