import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(dto: AuthDto) {
    // generate the password hash

    // save the new user in the db

    //return the saved user
    return { msg: 'signed up!' };
  }

  signin() {
    return { msg: 'signed in!' };
  }
}
