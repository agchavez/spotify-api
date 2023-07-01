import { PrismaClient } from '../prisma/generated/client';
import { PrismaClient as StoreClient } from '../prisma/generated/tienda';

export const prisma = new PrismaClient();
export const store = new StoreClient();

export default prisma;
