import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(dto: LoginAdminDto) {
    const admin = await this.prisma.admin.findUnique({
      where: { email: dto.email },
    });
    if (!admin) {
      throw new Error('User not found');
    }

    const verifyPassword = await bcrypt.compare(dto.senha, admin.senha);
    if (!verifyPassword) {
      throw new Error('Invalid credentials');
    }

    const payload = { sub: admin.id, email: admin.email };
    const token = this.jwt.sign(payload);

    return {
      access_token: token,
    };
  }
}
