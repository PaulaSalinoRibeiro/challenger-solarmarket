import { Request, Response, NextFunction } from 'express';
import { ISalleService } from '../../interfaces/ISalleService';

export class SalleController {

  constructor(private service: ISalleService) {
    this.service = service;
  }

  getAllSalles(req: Request, res: Response, next: NextFunction) {
    try {
      const allSalles = this.service.getAllSalles();
      res.status(200).json(allSalles);
    } catch (error) {
      next(error);
    }
  }

  createSalle(req: Request, res: Response, next: NextFunction) {
    try {
      this.service.createSalle(req.body);
      res.status(201).end();
    } catch (error) {
      next(error);
    }
  }

  findByCep(req: Request, res: Response, next: NextFunction) {
    try {
      const salesByCep = this.service.findByCep(req.params.cep);
      res.status(200).json(salesByCep);
    } catch (error) {
      next(error);
    }
  }
}