import { Router } from 'express';
import { getColleges, getCollegeById, compareColleges } from '../controllers/college.controller';

const router = Router();

router.get('/compare', compareColleges);
router.get('/', getColleges);
router.get('/:id', getCollegeById);

export default router;
