import { Router } from 'express';
import { SalleService } from '../services/sallesService';
import { SalleController } from '../controllers/sallesController';

const sallesService = new SalleService();
const sallesController = new SalleController(sallesService);

const sallesRouter = Router();

sallesRouter.get('/', (req, res, next) => sallesController.getAllSalles(req, res, next));

sallesRouter.get('/:cep', (req, res, next) => sallesController.findByCep(req, res, next));

sallesRouter.post('/', (req, res, next) => sallesController.createSalle(req, res, next));

export { sallesRouter }