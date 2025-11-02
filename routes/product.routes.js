import { Router } from "express"
import { ProductController} from "../controllers/product.controller.js"

const productRouter = Router()

productRouter.get('/', ProductController.getAllProducts)
productRouter.get('/disponibles', ProductController.getProductsAvailable)
productRouter.get('/:id', ProductController.getProductById)
productRouter.post('/', ProductController.createProduct)
productRouter.put('/:id', ProductController.updateProduct)
productRouter.delete('/:id', ProductController.deleteProduct)

export default productRouter