# Dockerfile

# --- Étape 1 : Builder ---
FROM node:20-alpine AS builder

WORKDIR /app

# IMPORTANT : On installe OpenSSL pour que Prisma fonctionne
RUN apk update && apk add --no-cache openssl

# Copie des fichiers de dépendances
COPY package*.json ./
COPY prisma ./prisma/

# Installation des dépendances
RUN npm ci

# Copie du reste du code
COPY . .

# Génération du client Prisma (avec la nouvelle target linux-musl)
RUN npx prisma generate

# IMPORTANT : On synchronise SvelteKit pour créer le dossier .svelte-kit/types
# Cela corrige l'erreur "Cannot find base config file"
RUN npx svelte-kit sync

# Construction du site
RUN npm run build

# Nettoyage
RUN npm prune --production

# --- Étape 2 : Runner ---
FROM node:20-alpine

WORKDIR /app

# On réinstalle OpenSSL aussi dans l'image finale pour l'exécution
RUN apk update && apk add --no-cache openssl

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY --from=builder /app/package.json .
COPY --from=builder /app/prisma prisma/

ENV NODE_ENV=production
ENV DATABASE_URL="file:/app/prisma/dev.db"

EXPOSE 3000

# Démarrage
CMD npx prisma migrate deploy && node build