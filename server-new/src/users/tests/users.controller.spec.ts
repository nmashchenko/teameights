import { RolesService } from '@Roles/roles.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { TokensService } from '@/tokens/tokens.service';
import { Model } from 'mongoose';
import { UserDocument } from '../users.schema';

describe('UsersController', () => {
  let usersService: UsersService;
  let rolesService: RolesService;
  let tokensService: TokensService;
  let usersController: UsersController;
  let model: Model<UserDocument>;

  beforeEach(async () => {
      usersService = new UsersService(model, rolesService, tokensService);
		  usersController = new UsersController(usersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined(); 
  });
});
