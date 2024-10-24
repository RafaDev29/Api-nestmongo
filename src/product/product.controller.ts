import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service'


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'product successfully create',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {

        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json(product);

    }

    //delete de una manera pasando el productId

    @Delete('/delete/:productID')
    async deleteProduct(@Res() res, @Param('productID') productID) {

        const product = await this.productService.deleteProduct(productID);
        if (!product) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json(product);
    }
    //segunda forma de eliminar un producto con product/delete?productID=3b334abc56cccb4sc75b5da
    @Delete('/delete')
    async deleteProduct2(@Res() res, @Query('productID') productID) {
        const productDelete = await this.productService.deleteProduct(productID)
        if (!productDelete) throw new NotFoundException('Producto no encontrado');

        return res.status(HttpStatus.OK).json({
            message: 'producto eliminado',
            productDelete: productDelete
        })
    }

    @Put('/update')
   async  updateProduct(@Res() res , @Body()  createProductDTO : CreateProductDTO , @Query('productID') productID ){
       const productUpdate = await this.productService.updateProduct(productID, createProductDTO)
       if (!productUpdate) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Producto actualizado',
             productUpdate
        })
    }

}
