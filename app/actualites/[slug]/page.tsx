import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { actualites } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export async function generateStaticParams() {
  return actualites.map((actu) => ({
    slug: actu.slug,
  }))
}

export default function ActualiteDetailPage({ params }: { params: { slug: string } }) {
  const actualite = actualites.find((a) => a.slug === params.slug)
  if (!actualite) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <AnimatedSection>
          <section className="w-full py-16 md:py-24 bg-sky-50">
            <div className="container px-4 md:px-6 text-center">
              <Badge variant="secondary" className="mb-4">
                {actualite.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-blue-900">{actualite.title}</h1>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{actualite.date}</span>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <AnimatedSection>
              <Image
                src={actualite.image || "/placeholder.svg"}
                alt={actualite.title}
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full aspect-video mb-8"
              />
            </AnimatedSection>
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <p>{actualite.fullBody}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
