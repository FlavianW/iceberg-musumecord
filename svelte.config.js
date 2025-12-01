// svelte.config.js
// Change l'import ici :
import adapter from '@sveltejs/adapter-node'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        // change 'adapter-auto' par 'adapter-node' ici
        adapter: adapter() 
    }
};

export default config;