import { PartialType } from '@nestjs/swagger';
import { CreateFarmacologicoDto } from './create-farmacologico.dto';

export class UpdateFarmacologicoDto extends PartialType(CreateFarmacologicoDto) {}
