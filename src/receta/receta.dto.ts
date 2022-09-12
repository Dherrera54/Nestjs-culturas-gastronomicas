import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class RecetaDto {

    @IsString()
    @IsNotEmpty()    
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
    
    @IsUrl()
    @IsNotEmpty()
    foto: string;

    @IsString()
    @IsNotEmpty()
    proceso: string;
   
    @IsUrl()
    @IsNotEmpty()
    video: string;
}
