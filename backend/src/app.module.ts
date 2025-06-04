import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SolicitationModule } from './solicitation/solicitation.module';
@Module({
  imports: [PrismaModule, SolicitationModule],
})
export class AppModule {}
