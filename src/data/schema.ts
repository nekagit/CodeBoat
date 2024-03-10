import { z } from 'zod'

// Definieren des Schemas für das Anwesen (Property)
const propertySchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  type: z.enum(['house', 'apartment', 'villa', 'condo']),
  bedrooms: z.number(),
  bathrooms: z.number(),
  amenities: z.array(z.string()),
  pricePerNight: z.number()
})

// Definieren des Schemas für den Kunden (Customer)
export const customerSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  property: propertySchema
})

// Definieren des Typs Customer basierend auf dem Schema
export type Customer = z.infer<typeof customerSchema>
