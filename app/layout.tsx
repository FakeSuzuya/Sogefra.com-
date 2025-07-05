import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Sogefra - Géomètres Experts",
  description: "L'expertise géomètre au service de vos projets depuis 1965.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
