import { Request, Response, NextFunction } from 'express';
import { ISalleService } from '../../interfaces/ISalleService';

export class SalleController {

  constructor(private service: ISalleService) {
    this.service = service;
  }

  getAllSalles(req: Request, res: Response, next: NextFunction) {
    try {
      const allSalles = this.service.getAllSalles();
      res.status(200).json(allSalles)
    } catch (error) {
      next(error)
    }
  }

}