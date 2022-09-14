import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class PaisDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;
}
