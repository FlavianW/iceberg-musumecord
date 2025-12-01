// prisma.config.ts
import { defineConfig } from '@prisma/config'; // Si cette ligne fait une erreur, retire-la et utilise juste export default

export default {
  datasource: {
    provider: 'sqlite',
    url: 'file:./dev.db'
  }
};