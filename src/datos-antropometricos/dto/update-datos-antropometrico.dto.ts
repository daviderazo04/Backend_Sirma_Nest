    // src/datos-antropometricos/dto/update-datos-antropometrico.dto.ts

    import { PartialType } from '@nestjs/mapped-types'; // O @nestjs/swagger
    // CORRECCIÓN: Asegúrate de que el nombre del archivo en la ruta coincida exactamente
    // Si tu archivo se llama 'create-datos-antropometrico.dto.ts' (singular 'o'):
    import { CreateDatosantropometricosDto } from './create-datos-antropometrico.dto';
    // Si tu archivo se llama 'create-datos-antropometricos.dto.ts' (plural 's'):
    // import { CreateDatosantropometricosDto } from './create-datos-antropometricos.dto';


    export class UpdateDatosantropometricosDto extends PartialType(
      CreateDatosantropometricosDto,
    ) {}
    