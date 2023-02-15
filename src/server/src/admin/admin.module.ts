import { Module } from '@nestjs/common';

// Module
import { MongooseModule } from '@nestjs/mongoose';

// Providers
import { AdminService } from './admin.service';

// Schema
import { Admin, AdminSchema } from '../schemas/admin.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
  providers: [AdminService],
  controllers: [],
  exports: [AdminService],
})
export class AdminModule {}
