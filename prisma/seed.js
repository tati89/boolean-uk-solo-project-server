const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const { categories, items } = require("../src/utils/mockData");

async function seed() {
  for (const category of categories) {
    await dbClient.category.create({
      data: category,
    });
  }

  for (const item of items) {
    await dbClient.item.create({
      data: item,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
