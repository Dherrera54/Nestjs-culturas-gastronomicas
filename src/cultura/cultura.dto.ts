import {IsNotEmpty, IsString} from 'class-validator';

export class CulturaDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly descripcion: string;
 

}
