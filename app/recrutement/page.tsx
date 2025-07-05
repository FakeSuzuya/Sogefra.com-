"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { submitRecruitmentForm, type RecruitmentFormState } from "./actions"
import { SubmitButton } from "@/components/submit-button"
import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react"

export default function RecrutementPage() {
  const jobOffers = [
    {
      title: "Géomètre-Topographe Confirmé",
      location: "Paris (75)",
      type: "CDI",
    },
    {
      title: "Projeteur VRD",
      location: "Lyon (69)",
      type: "CDI",
    },
    {
      title: "Technicien Géomètre Débutant",
      location: "Bordeaux (33)",
      type: "CDD",
    },
    {
      title: "Alternant Ingénieur Géomètre",
      location: "Toutes agences",
      type: "Alternance",
    },
  ]

  const benefits = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Projets d'envergure",
      description: "Participez à des chantiers emblématiques et diversifiés.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Évolution de carrière",
      description: "Nous favorisons la montée en compétences et la promotion interne.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Formation continue",
      description: "Accédez aux dernières technologies et formations du secteur.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Esprit d'équipe",
      description: "Rejoignez une entreprise à taille humaine avec une forte cohésion.",
    },
  ]

  const initialState: RecruitmentFormState = { message: "", success: false }
  const [state, formAction] = useActionState(submitRecruitmentForm, initialState)

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="w-full py-24 md:py-32 lg:py-40 bg-sky-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-sky-500">
                  Nous Rejoindre
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Participez à des projets d'envergure et développez vos compétences au sein d'une équipe passionnée.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-blue-900">Pourquoi Sogefra ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <div className="text-center space-y-2">
                    <div className="inline-block bg-blue-100 p-4 rounded-full">{benefit.icon}</div>
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="offres" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-blue-900">Nos Offres d'Emploi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {jobOffers.map((job, index) => (
                <AnimatedSection key={index} delay={0.1 * index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>
                        {job.location} - {job.type}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="candidature" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-4 text-blue-900">
              Candidature Spontanée
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Aucune offre ne vous correspond ? N'hésitez pas à nous envoyer votre profil, nous l'étudierons avec la
              plus grande attention.
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <form action={formAction} className="space-y-4">
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
                    <Label htmlFor="cv">Votre CV (PDF)</Label>
                    <Input id="cv" name="cv" type="file" accept=".pdf" />
                    {state.errors?.cv && <p className="text-red-500 text-sm">{state.errors.cv[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Lettre de motivation</Label>
                    <Textarea id="message" name="message" rows={5} />
                    {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                  {state.message && (
                    <p className={`${state.success ? "text-green-600" : "text-red-500"} text-sm font-semibold pt-2`}>
                      {state.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
