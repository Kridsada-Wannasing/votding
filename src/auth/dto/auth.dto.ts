import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export interface SignInDTOInterface {
  email: string;
  password: string;
}

export interface SignUpDTOInterface extends SignInDTOInterface {
  username: string;
  firstName: string;
  lastName: string;
  imagePath?: string;
}

export class SignUpDTO implements SignUpDTOInterface {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @IsOptional()
  @IsString()
  imagePath?: string;
}
