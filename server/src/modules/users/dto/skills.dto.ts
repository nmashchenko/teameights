import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Speciality, specialityValues } from '../../../utils/types/specialities.type';
import {
  Designer,
  designerValues,
  Developer,
  developerValues,
  ProjectManager,
  projectManagerValues,
} from '../../../utils/types/focuses.type';

class SkillsDto {
  @ApiProperty({ enum: specialityValues })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(specialityValues)
  speciality: Speciality;

  @ApiProperty()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  coreTools: string[];

  @ApiProperty()
  @IsOptional()
  @ArrayNotEmpty({ message: 'mustBeNotEmpty' })
  additionalTools?: string[];
}

export class DeveloperDto extends SkillsDto {
  @ApiProperty({ enum: developerValues })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(developerValues)
  focus: Developer;
}

export class DesignerDto extends SkillsDto {
  @ApiProperty({ enum: designerValues })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(designerValues)
  focus: Designer;
}

export class ProjectManagerDto extends SkillsDto {
  @ApiProperty({ enum: projectManagerValues })
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  @IsIn(projectManagerValues)
  focus: ProjectManager;
}
