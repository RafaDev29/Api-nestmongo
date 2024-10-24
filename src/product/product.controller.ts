import { Controller, Post, Get, Delete, Put, Res, HttpStatus, Body, Param } from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
      const product= await  this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'product successfully create',
            product: product
        })
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
             products
         })
    }
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID){

    const product = await this.productService.getProduct(productID);
    return res.status(HttpStatus.OK).json(product)

  }

}
