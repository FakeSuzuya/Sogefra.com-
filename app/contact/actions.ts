"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  pole: z.string().optional(),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
})

export type FormState = {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
  success: boolean
  key: number
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    pole: formData.get("pole"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      message: "Erreur de validation. Veuillez corriger les champs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      key: prevState.key + 1,
    }
  }

  console.log("Données du formulaire validées :", validatedFields.data)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.",
    success: true,
    errors: {},
    key: prevState.key + 1,
  }
}
