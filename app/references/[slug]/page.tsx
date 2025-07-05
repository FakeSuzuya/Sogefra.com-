import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { references } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return references.map((ref) => ({
    slug: ref.slug,
  }))
}

export default function ReferenceDetailPage({ params }: { params: { slug: string } }) {
  const reference = references.find((r) => r.slug === params.slug)
  if (!reference) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <section className="relative w-full h-[50vh] min-h-[300px] max-h-[500px]">
          <Image
            src={reference.image || "/placeholder.svg"}
            alt={reference.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <AnimatedSection>
              <div className="container text-center text-white">
                <Badge variant="secondary" className="mb-4">
                  {reference.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">{reference.title}</h1>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600">{reference.shortDescription}</p>
                <p>{reference.fullBody}</p>
              </div>
            </AnimatedSection>

            {reference.gallery && reference.gallery.length > 0 && (
              <AnimatedSection>
                <div className="mt-12 md:mt-24">
                  <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Galerie du Projet</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {reference.gallery.map((img, index) => (
                      <Image
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Galerie image ${index + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>
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
