// src/routes/+page.server.ts
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // On compte le nombre total d'entrées
    const count = await prisma.suggestion.count();

    return { 
        count 
    };
};