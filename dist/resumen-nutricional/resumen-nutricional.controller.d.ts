import { DataSource } from 'typeorm';
export declare class ResumenNutricionalController {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getResumen(): Promise<any>;
}
