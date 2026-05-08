import { Router } from 'express';
import collegeRoutes from './college.routes';

const router = Router();

router.use('/colleges', collegeRoutes);

export default router;
