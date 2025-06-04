import { PartialType } from '@nestjs/swagger';
import { CreateAndrologicoDto } from './create-andrologico.dto';

export class UpdateAndrologicoDto extends PartialType(CreateAndrologicoDto) {}
