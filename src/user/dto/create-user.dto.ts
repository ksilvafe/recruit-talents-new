import { IsEmail, IsString, MinLength, IsNumber } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  phone: number;

  @IsString()
  @MinLength(8)
  password: string;
}
