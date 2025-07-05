"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { Award, Leaf, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QseSection() {
  return (
    <AnimatedSection>
      <section id="qse" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-blue-900">
            Notre Engagement Qualité, Sécurité & Environnement
          </h2>
          <Tabs defaultValue="qse" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="qse">ISO 9001</TabsTrigger>
              <TabsTrigger value="iso14001">ISO 14001 & 45001</TabsTrigger>
              <TabsTrigger value="dd">Développement Durable</TabsTrigger>
            </TabsList>
            <TabsContent value="qse">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="w-8 h-8 text-blue-600" />
                  <CardTitle>Qualité (ISO 9001)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Notre certification ISO 9001 témoigne de notre engagement à fournir des prestations de la plus haute
                    qualité. Nous suivons un système de management rigoureux pour garantir la satisfaction de nos
                    clients, l'amélioration continue de nos processus et la conformité de nos livrables.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="iso14001">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                  <CardTitle>Sécurité & Environnement (ISO 14001 & 45001)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    La sécurité de nos collaborateurs et la protection de l'environnement sont au cœur de nos
                    préoccupations. Nos certifications ISO 14001 (environnement) et 45001 (santé et sécurité au travail)
                    structurent notre démarche pour maîtriser nos impacts, prévenir les risques et assurer un
                    environnement de travail sûr pour tous.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dd">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Leaf className="w-8 h-8 text-blue-600" />
                  <CardTitle>Démarche Développement Durable (RSE)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Au-delà des certifications, nous intégrons les principes du développement durable dans toutes nos
                    activités. Cela se traduit par des choix de technologies moins énergivores, la promotion de la
                    mobilité douce pour nos équipes, et un engagement sociétal fort auprès de nos communautés locales.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </AnimatedSection>
  )
}
