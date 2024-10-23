import { Controller, Post, Get, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';

@Controller('product')
export class ProductController {

@Post('/create')
createPost(@Res() res){
    return res.status(HttpStatus.OK).json({
        message: 'recibido'
    })
}

}
