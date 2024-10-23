export class CreateProductDTO {

   readonly name :string; // el readonly lo usariamos para trabajar con datos inmutables
   readonly  description : string ;
   readonly  imgaeURL : string;
   readonly price : number ;
   readonly createdAt : Date
               
}