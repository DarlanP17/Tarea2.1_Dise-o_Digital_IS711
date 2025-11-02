import * as z from 'zod'

const productSchema = z.object({
    nombre: z.string().nonempty({ message: "El nombre es obligatorio" }),
    precio: z.number().nonnegative().min(1,{message: "El precio debe ser mayor a 0" }),
    descripcion: z.string().min(10,{message: "La descripcion debe tener al menos 10 caracteres" }),
    disponible: z.boolean(),
}).strict()

export const validateProduct = (product) => {
    return productSchema.safeParse(product)
}