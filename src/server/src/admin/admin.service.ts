import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>) {}

  async createAdmin(adminId: string, email: string, firstname: string, lastname: string, picture: string) {
    const admins = await this.adminModel.create([{ adminId, email, firstname, lastname, picture, isVerified: false }]);
    const admin = admins[0];
    return admin;
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.adminModel.findOne({ email });
    return admin;
  }
}
