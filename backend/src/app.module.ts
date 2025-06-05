import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SolicitationModule } from './solicitation/solicitation.module';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [PrismaModule, SolicitationModule, AdminModule],
})
export class AppModule {}
