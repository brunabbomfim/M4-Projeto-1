import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDTO {

  @ApiProperty ({
    description: 'Seu nome',
    example: 'Bruna'
  })
  @IsNotEmpty()
    name: string;
  @ApiProperty ({
    description: 'Seu email',
    example: 'bruna@gmail.com'
  })
  @IsNotEmpty()
  @IsEmail()
    email: string;
  @ApiProperty ({
    description: 'Sua senha',
    example: '123456'
  })
  @IsNotEmpty()
    password: string;
  @ApiProperty ({
    description: 'Seu CPF',
    example: '12345678900'
  })
    cpf: string;

    isAdmin: string;
}
