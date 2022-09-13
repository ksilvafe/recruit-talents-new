import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
    async create(createUserDto: CreateUserDto): Promise<User> {
      const user = this.repository.create(createUserDto);
      return await this.repository.save(user);
    }

    async findAll(): Promise<User[]> {
      return await this.repository.find();
    }

    // async findOne(id: number): Promise<User> {
    //   return await this.repository.findOne(id);
    // }

    update(id: number, updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }

    remove(id: number) {
      return `This action removes a #${id} user`;
    }
  }
}
