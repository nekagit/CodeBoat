import { z } from 'zod'

// Define the schema for the property (Property)
const propertySchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  type: z.enum(['house', 'apartment']),
  bedrooms: z.number(),
  bathrooms: z.number(),
  amenities: z.array(z.string()),
  pricePerNight: z.number()
})

// Define the schema for the customer (Customer)
export const customerSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  address: z.string(),
  phoneNumber: z.string(),
  property: propertySchema,
  status: z.string(), // Add status property
  priority: z.string() // Add priority property
})

// Define the Customer type based on the schema
export type Customer = z.infer<typeof customerSchema>

const data: Customer[] = [
    {
        id: "1",
        fullName: "John Doe",
        address: "123 Main St",
        phoneNumber: "123-456-7890",
        property: {
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
            type: "house",
            bedrooms: 3,
            bathrooms: 2,
            amenities: ["Swimming Pool", "Gym"],
            pricePerNight: 150
        },
        status: "todo", // Add status property value
        priority: "medium" // Add priority property value
    },
    // Add more customer objects with all properties
];

export { data };
