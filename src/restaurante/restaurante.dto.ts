import {IsDate, IsNotEmpty, IsNumber, IsString} from 'class-validator';
export class RestauranteDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly ciudad: string;
 
 @IsNumber()
 @IsNotEmpty()
 readonly estrellas: string;
 
 @IsDate()
 @IsNotEmpty()
 readonly fecha: string;
 
}