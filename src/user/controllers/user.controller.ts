import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { PartialType } from '@nestjs/mapped-types';
import { SignUpDTO } from 'src/auth/dto/auth.dto';

export class UserQueryParams extends PartialType(SignUpDTO) {}

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService.name) private readonly userService: UserService,
  ) {}

  @Get()
  async find(@Query() query: UserQueryParams) {
    return this.userService.find(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
