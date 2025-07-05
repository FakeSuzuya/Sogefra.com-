import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { references } from "@/lib/data"

export default function ReferencesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <AnimatedSection>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  Nos Références
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Découvrez quelques-uns des projets emblématiques sur lesquels Sogefra a mis son expertise à profit.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {references.map((ref, index) => (
                <AnimatedSection key={ref.slug} delay={0.1 * index}>
                  <Link href={`/references/${ref.slug}`} className="h-full block group">
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <Image
                        src={ref.image || "/placeholder.svg"}
                        width={400}
                        height={250}
                        alt={ref.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit">
                          {ref.category}
                        </Badge>
                        <CardTitle className="pt-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                          {ref.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 text-sm">{ref.shortDescription}</p>
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
