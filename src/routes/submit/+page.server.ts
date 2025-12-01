// src/routes/submit/+page.server.ts
import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const content = data.get('content');

        if (!content || typeof content !== 'string' || content.trim().length === 0) {
            return fail(400, { missing: true });
        }

        try {
            await prisma.suggestion.create({
                data: { content: content.trim() }
            });
            return { success: true };
        } catch (error) {
            return fail(500, { error: "Erreur base de données" });
        }
    }
} satisfies Actions;