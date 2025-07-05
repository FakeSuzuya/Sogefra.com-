"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFormState } from "react-dom"
import { submitContactForm, type FormState } from "./actions"
import { SubmitButton } from "@/components/submit-button"
import { MapPin, Phone, Mail, Loader2, LocateFixed } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const poles = [
  { name: "Pôle Île-de-France", coords: { latitude: 48.8566, longitude: 2.3522 } },
  { name: "Pôle Auvergne-Rhône-Alpes", coords: { latitude: 45.764, longitude: 4.8357 } },
  { name: "Pôle Nouvelle-Aquitaine", coords: { latitude: 44.8378, longitude: -0.5792 } },
]

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export default function ContactPage() {
  const initialState: FormState = { message: "", success: false, key: 0 }
  const [state, formAction] = useFormState(submitContactForm, initialState)
  const [recommendedPole, setRecommendedPole] = useState<string | null>(null)
  const [geoLoading, setGeoLoading] = useState(false)
  const [selectedPole, setSelectedPole] = useState<string | undefined>()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success("Message envoyé !", {
          description: state.message,
        })
        formRef.current?.reset()
        setSelectedPole(undefined)
      } else {
        toast.error("Erreur de validation", {
          description: state.message || "Veuillez corriger les erreurs dans le formulaire.",
        })
      }
    }
  }, [state])

  const handleGeoLocate = () => {
    if (navigator.geolocation) {
      setGeoLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          let closestPole = null
          let minDistance = Number.POSITIVE_INFINITY

          poles.forEach((pole) => {
            const distance = getDistance(latitude, longitude, pole.coords.latitude, pole.coords.longitude)
            if (distance < minDistance) {
              minDistance = distance
              closestPole = pole.name
            }
          })
          setRecommendedPole(closestPole)
          setSelectedPole(closestPole || undefined)
          setGeoLoading(false)
        },
        () => {
          setGeoLoading(false)
          toast.error("Géolocalisation refusée", {
            description: "Vous pouvez sélectionner un pôle manuellement.",
          })
        },
      )
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1 pt-20">
        <AnimatedSection>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  Contact & Devis
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Une question ? Un projet à nous soumettre ? Notre équipe est à votre écoute.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container grid lg:grid-cols-5 gap-8 lg:gap-12 px-4 md:px-6">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-blue-900">Nos Coordonnées</h2>
                <div className="space-y-6 mt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Siège Social</h3>
                      <p className="text-gray-600">123 Rue de la Précision, 75000 Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Téléphone</h3>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">contact@sogefra.com</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyez-nous un message</CardTitle>
                    <CardDescription>Remplissez le formulaire et nous vous répondrons rapidement.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form ref={formRef} action={formAction} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom complet</Label>
                          <Input id="name" name="name" />
                          {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name[0]}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" />
                          {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pole">Pôle concerné</Label>
                        <div className="flex gap-2">
                          <Select name="pole" value={selectedPole} onValueChange={setSelectedPole}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un pôle" />
                            </SelectTrigger>
                            <SelectContent>
                              {poles.map((pole) => (
                                <SelectItem key={pole.name} value={pole.name}>
                                  {pole.name} {recommendedPole === pole.name && "(Recommandé)"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleGeoLocate}
                            disabled={geoLoading}
                            className="px-3 bg-transparent"
                          >
                            {geoLoading ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                              <LocateFixed className="h-5 w-5" />
                            )}
                            <span className="sr-only">Trouver le pôle le plus proche</span>
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet</Label>
                        <Input id="subject" name="subject" />
                        {state.errors?.subject && <p className="text-red-500 text-sm">{state.errors.subject[0]}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Votre message</Label>
                        <Textarea id="message" name="message" rows={5} />
                        {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message[0]}</p>}
                      </div>
                      <SubmitButton />
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
