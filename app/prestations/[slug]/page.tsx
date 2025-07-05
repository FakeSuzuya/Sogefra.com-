import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { services, references } from "@/lib/data"
import { notFound } from "next/navigation"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function PrestationDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) {
    notFound()
  }

  const reference = references.find((r) => r.slug === service.relatedReferenceSlug)

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="w-full py-24 md:py-32 lg:py-40 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">{service.icon}</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  {service.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">{service.shortDescription}</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 px-4 md:px-6">
            <AnimatedSection>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-900">Notre expertise à votre service</h2>
                <p className="text-gray-600">{service.fullDescription}</p>
                <ul className="space-y-2 pt-4">
                  {service.keyPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            {reference && (
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-blue-900">Projet de Référence</h2>
                  <Link href={`/references#${reference.slug}`} className="block group">
                    <Card className="hover:shadow-xl transition-shadow">
                      <Image
                        src={reference.image || "/placeholder.svg"}
                        alt={reference.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-blue-700 transition-colors">
                          {reference.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{reference.description}</p>
                        <div className="flex items-center justify-end text-sm font-semibold text-blue-600 pt-4">
                          Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
