import { ProductService } from "../services/product.service.js";
import { validateProduct } from "../schemas/product.schema.js";
import sendResponse from '../helpers/sendResponse.js'

export class ProductController {

    static async getAllProducts(req, res) {

        const products = await ProductService.getAllProducts()

        res.json({
            success: true,
            message: 'Listado de productos',
            data: products
        })
    }

    static async getProductById(req, res) {
        const { id } = req.params

        const product = await ProductService.getProductById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'No existe este producto',
                data: null
            })
        }

        res.json({
            success: true,
            message: 'Producto encontrado',
            data: product
        })
    }

    static async createProduct(req, res) {
        const { success, error, data: safeData } = validateProduct(req.body)

        if (!success) {
            return sendResponse({ res, message: 'Error de validación', data: error.issues, statusCode: 400 })
        }

        const newProduct = await ProductService.addProduct(safeData)

        return sendResponse({ res, message: 'Producto creado', data: newProduct, statusCode: 201 })
    }

    static async updateProduct(req, res) {
        const { id } = req.params
        const updatedFields = req.body

        const { success, error, data: safeData } = validateProduct(updatedFields)

        if (!success) {
            return sendResponse({ res, message: 'Error de validación', data: error.issues, statusCode: 400 })
        }

        try {
            const updatedProduct = await ProductService.modifyProduct(id, safeData)
            return sendResponse({ res, message: 'Producto actualizado', data: updatedProduct, statusCode: 200 })
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: error.message,
                data: null
            })
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params
        try {
            const result = await ProductService.deleteProduct(id)
            res.json({
                success: true,
                message: result.message,
                data: null
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message,
                data: null
            })
        }
    }

    static async getProductsAvailable(req, res) {
        const products = await ProductService.getProductsAvailable()
        res.json({
            success: true,
            message: 'Listado de productos disponibles',
            data: products
        })
    }

}