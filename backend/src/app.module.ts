import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SolicitationModule } from './solicitation/solicitation.module';
import { AdminService } from './admin/admin.service';
@Module({
  imports: [PrismaModule, SolicitationModule],
  providers: [AdminService],
})
export class AppModule {}
