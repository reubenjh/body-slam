import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.snorlaxMoves.create({
      data: {
        identifier: "bodyslam",
        type: "normal",
        name: "Body Slam",
        damage: 100,
        pp: 10,
        imageSrc: "/bodyslam.webp",
      },
    });
    await prisma.snorlaxMoves.create({
      data: {
        identifier: "megapunch",
        type: "normal",
        name: "Mega Punch",
        damage: 80,
        pp: 20,
        imageSrc: "/megapunch.webp",
      },
    });
    await prisma.snorlaxMoves.create({
      data: {
        identifier: "hyperbeam",
        type: "normal",
        name: "Hyper Beam",
        damage: 200,
        pp: 5,
        imageSrc: "/hyperbeam.webp",
      },
    });
    await prisma.snorlaxMoves.create({
      data: {
        identifier: "rest",
        type: "psychic",
        name: "Rest",
        damage: 0,
        pp: 15,
        imageSrc: "/rest.webp",
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
