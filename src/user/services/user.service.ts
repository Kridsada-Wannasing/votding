import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import { UserQueryParams } from '../controllers/user.controller';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  //   async findOne() {
  //     return this.userModel.findOne({})
  //   }

  async find(query: UserQueryParams): Promise<User[]> {
    return this.userModel.find(query);
  }
}
