const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: [
    { level: 'warn', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'error', emit: 'event' },
  ],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

prisma.$on('warn', (e) => {
  console.warn('Prisma Warning:', e);
});

prisma.$on('info', (e) => {
  console.info('Prisma Info:', e);
});

prisma.$on('error', (e) => {
  console.error('Prisma Error:', e);
});

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = { prisma, connectDB };
