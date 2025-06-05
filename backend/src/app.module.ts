import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SolicitationModule } from './solicitation/solicitation.module';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [PrismaModule, SolicitationModule, AdminModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AppModule {}
