import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { ArrayOverlap, DeepPartial, Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from 'src/utils/types/nullable.type';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(this.usersRepository.create(createProfileDto));
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions<FindUserDto>
  ): Promise<User[]> {
    const filters = paginationOptions.filters;

    return this.usersRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      where: {
        fullName: filters?.fullName && Like(`%${filters.fullName}%`),
        username: filters?.username && Like(`%${filters.username}%`),
        isLeader: filters?.isLeader && filters.isLeader,

        // TODO: change for arrays (countries / specialities / experiences)
        country: filters?.country && Like(`%${filters.country}%`),
        speciality: filters?.speciality && Like(`%${filters.speciality}%`),
        experience: filters?.experience && Like(`%${filters.experience}%`),

        skills: {
          programmingLanguages:
            filters?.programmingLanguages && ArrayOverlap(filters.programmingLanguages),
          frameworks: filters?.frameworks && ArrayOverlap(filters.frameworks),
          tools: filters?.tools && ArrayOverlap(filters.tools),
          fields: filters?.fields && ArrayOverlap(filters.fields),
        },
      },
    });
  }

  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.usersRepository.findOne({
      where: fields,
    });
  }

  update(id: User['id'], payload: DeepPartial<User>): Promise<User> {
    return this.usersRepository.save(
      this.usersRepository.create({
        id,
        ...payload,
      })
    );
  }

  async softDelete(id: User['id']): Promise<void> {
    await this.usersRepository.softDelete(id);
  }
}
