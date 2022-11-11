import { ISalles } from '../../interfaces/ISalles';
import { ISalleService } from '../../interfaces/ISalleService';
import { salles } from '../../databases/sallesDb';
import { CustomerError } from '../../helpers/CustomerError';

export class SalleService implements ISalleService {
  
  constructor(private database = salles) {
    this.database = database 
  }
  
  getAllSalles(): ISalles[] {
    return this.database
  }
  createSalle(data: ISalles): void {
    this.database.push(data)
  }

  findByCep(cep: string): ISalles[] | void {
    const salles = this.database.filter(item => item.address.cep === cep)
    
    if(!salles) throw new CustomerError(404, 'Not Found!')

    return salles
  } 
}