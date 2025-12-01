// src/routes/admin/+page.server.ts
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // 1. On récupère tout sans ordre spécifique
    const suggestions = await prisma.suggestion.findMany();

    // 2. On mélange le tableau (Algorithme de Fisher-Yates pour un vrai hasard)
    for (let i = suggestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [suggestions[i], suggestions[j]] = [suggestions[j], suggestions[i]];
    }

    return { suggestions };
}) satisfies PageServerLoad;