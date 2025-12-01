// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
// IMPORTANT : On utilise 'dynamic' pour que Docker puisse injecter les valeurs au démarrage
import { env } from '$env/dynamic/private'; 

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/admin')) {
        const auth = event.request.headers.get('Authorization');

        // On récupère les valeurs depuis le .env (ou les variables Docker)
        // On met des valeurs par défaut au cas où le .env est vide
        const user = env.ADMIN_USER || 'admin';
        const pass = env.ADMIN_PASS || 'password';

        if (auth !== `Basic ${btoa(`${user}:${pass}`)}`) {
            return new Response('Non autorisé', {
                status: 401,
                headers: { 'WWW-Authenticate': 'Basic realm="Zone Admin"' }
            });
        }
    }

    return resolve(event);
};