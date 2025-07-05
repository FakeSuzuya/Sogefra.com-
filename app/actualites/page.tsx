import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { actualites } from "@/lib/data"

export default function ActualitesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <AnimatedSection>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  Nos Actualités
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Suivez les dernières nouvelles de Sogefra, nos projets et nos innovations.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {actualites.map((post, index) => (
                <AnimatedSection key={post.slug} delay={0.1 * index}>
                  <Link href={`/actualites/${post.slug}`} className="h-full block group">
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        width={400}
                        height={250}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit">
                          {post.category}
                        </Badge>
                        <CardTitle className="pt-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </CardFooter>
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
