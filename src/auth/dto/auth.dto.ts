import { isNotEmpty, isString } from 'class-validator';

export class AuthDto {
  @isNotEmpty()
  @isString()
  email: string;
  password: string;
}
