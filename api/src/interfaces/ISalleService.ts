import { ISalles } from './ISalles';

export interface ISalleService {
  getAllSalles(): ISalles[],
  createSalle(data: ISalles): void,
  findByCep(cep: string): ISalles[] | void
};