import { ISalles } from './ISalles';

export interface ISalleService {
  getAllSalles(): ISalleService[],
  createSalle(data: ISalles): void;
};