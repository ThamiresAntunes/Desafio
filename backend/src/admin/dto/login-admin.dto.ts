import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginAdminDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}
