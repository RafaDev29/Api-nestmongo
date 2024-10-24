import {Document} from 'mongoose'
export interface Product extends Document{ //esto es y podria ser un objeto peor no se puede pasar asi als ervicio, como modelo se tien que pasar como documento y por eso importamos Documents y eso heredara nuestro objeto
  readonly  name : string;
  readonly description : string ;
  readonly imageURL: string ;
  readonly price: number;
  readonly createdAt : Date;
}
//programación, funcional, reactiva, y POO 