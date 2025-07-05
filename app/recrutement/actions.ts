"use server"

import { z } from "zod"

const MAX_FILE_SIZE = 5000000 // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"]

const recruitmentSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  cv: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `La taille max. du fichier est de 5MB.`)
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), "Seuls les fichiers .pdf sont acceptés."),
  message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères." }),
})

export type RecruitmentFormState = {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    cv?: string[]
    message?: string[]
  }
  success: boolean
}

export async function submitRecruitmentForm(
  prevState: RecruitmentFormState,
  formData: FormData,
): Promise<RecruitmentFormState> {
  const validatedFields = recruitmentSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    cv: formData.get("cv"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      message: "Erreur de validation. Veuillez corriger les champs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Ici, vous géreriez le stockage du fichier (ex: Vercel Blob) et l'envoi de l'email.
  console.log("Candidature reçue :", validatedFields.data.name)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: "Merci pour votre candidature ! Nous l'avons bien reçue et reviendrons vers vous prochainement.",
    success: true,
  }
}
