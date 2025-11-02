import products from '../db/local/products.json' with { type: 'json' }


export class ProductService {

    static async getAllProducts() {
        return products
    }

    static async getProductById(id) {
        const product = products.find(item => Number(item.id) === Number(id))
        return product
    }

    static async addProduct(newProduct) {
        const nextId = products.reduce((max, p) => {
            const n = Number(p.id)
            return Number.isFinite(n) ? Math.max(max, n) : max
            }, 0) + 1
        const addProduct = {id: nextId, ...newProduct, fecha_ingreso: new Date().toISOString()}
        products.push(addProduct)
        return addProduct
    }

    static async modifyProduct(id, updatedFields) {
        const index = products.findIndex(item => Number(item.id) === Number(id))
        if (index === -1) {
            throw new Error('Producto no encontrado')
        }
        products[index] = { ...products[index], ...updatedFields }
        return products[index]
    }

    static async deleteProduct(id) {
        const index = products.findIndex(item => Number(item.id) === Number(id))
        if (index === -1) {
            throw new Error('Producto no encontrado')
        }
        products.splice(index, 1)
        return { message: 'Producto eliminado' }
    }

    static async getProductsAvailable() {
        return products.filter(item => item.disponible === true)
    }
}
