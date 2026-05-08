import { Request, Response } from 'express';
import { CollegeService } from '../services/college.service';
import { catchAsync } from '../utils/catchAsync';

const collegeService = new CollegeService();

export const getColleges = catchAsync(async (req: Request, res: Response) => {
  const result = await collegeService.getColleges(req.query);
  res.status(200).json({ success: true, data: result });
});

export const getCollegeById = catchAsync(async (req: Request, res: Response) => {
  const college = await collegeService.getCollegeById(Number(req.params.id));
  if (!college) {
    return res.status(404).json({ success: false, message: 'College not found' });
  }
  res.status(200).json({ success: true, data: college });
});

export const compareColleges = catchAsync(async (req: Request, res: Response) => {
  const idsString = req.query.ids as string;
  if (!idsString) {
    return res.status(400).json({ success: false, message: 'Please provide college IDs to compare' });
  }
  
  const ids = idsString.split(',').map(Number).filter(id => !isNaN(id));
  if (ids.length < 2 || ids.length > 3) {
    return res.status(400).json({ success: false, message: 'Please provide 2-3 valid college IDs' });
  }

  const colleges = await collegeService.compareColleges(ids);
  res.status(200).json({ success: true, data: colleges });
});
