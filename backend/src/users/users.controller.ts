import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('users')
export class UsersController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users;
  }
}
