import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { ArrayOverlap, DeepPartial, FindOptionsWhere, In, Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from 'src/utils/types/nullable.type';
import { FilterUserDto, SortUserDto } from './dto/query-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(this.usersRepository.create(createProfileDto));
  }

  async findManyWithPagination({
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    filterOptions?: FilterUserDto | null;
    sortOptions?: SortUserDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<User[]> {
    const where: FindOptionsWhere<User> = {};

    if (filterOptions) {
      where.fullName = filterOptions?.fullName && Like(`%${filterOptions.fullName}%`);
      where.username = filterOptions?.username && Like(`%${filterOptions.username}%`);
      where.isLeader = filterOptions?.isLeader && filterOptions.isLeader;

      where.country = filterOptions?.countries && In(filterOptions.countries);
      where.experience = filterOptions?.experience && Like(`%${filterOptions.experience}%`);

      where.skills = {
        speciality: filterOptions?.specialities && In(filterOptions.specialities),
        focus: filterOptions?.focuses && In(filterOptions.focuses),
        coreTools: filterOptions?.coreTools && ArrayOverlap(filterOptions.coreTools),
        additionalTools:
          filterOptions?.additionalTools && ArrayOverlap(filterOptions.additionalTools),
      };
    }

    return this.usersRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      where: where,
      order: sortOptions?.reduce(
        (accumulator, sort) => ({
          ...accumulator,
          [sort.orderBy]: sort.order,
        }),
        {}
      ),
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
