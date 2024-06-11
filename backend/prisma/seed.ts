import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // create two dummy articles
    const push1 = await prisma.taste.create({

        data : {
            taste: 'Ligth',
            description: 'taste from another world.',
            price: 12,

        },
    });

}



  


// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });