import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CollegeService {
  async getColleges(filters: any) {
    const { search, location, state, minRating, minPlacement, minFees, maxFees, page = 1, limit = 10 } = filters;
    const skip = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (search) whereClause.name = { contains: search, mode: 'insensitive' };
    if (location) whereClause.location = { contains: location, mode: 'insensitive' };
    if (state) whereClause.state = { contains: state, mode: 'insensitive' };
    if (minRating) whereClause.rating = { gte: Number(minRating) };
    if (minPlacement) whereClause.placements = { some: { placementPercentage: { gte: Number(minPlacement) } } };
    if (minFees || maxFees) {
      whereClause.fees = {};
      if (minFees) whereClause.fees.gte = Number(minFees);
      if (maxFees) whereClause.fees.lte = Number(maxFees);
    }

    const [colleges, total] = await Promise.all([
      prisma.college.findMany({
        where: whereClause,
        skip,
        take: Number(limit),
        orderBy: { rating: 'desc' },
      }),
      prisma.college.count({ where: whereClause }),
    ]);

    return { colleges, total, page: Number(page), limit: Number(limit) };
  }

  async getCollegeById(id: number) {
    return prisma.college.findUnique({
      where: { id },
      include: { courses: true, placements: true },
    });
  }

  async compareColleges(ids: number[]) {
    return prisma.college.findMany({
      where: { id: { in: ids } },
      include: { placements: true },
    });
  }
}
