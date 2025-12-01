<script lang="ts">
    import { onMount } from 'svelte';

    let isDark = true; 

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            isDark = savedTheme === 'dark';
        } else {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        updateTheme();
    });

    function toggleTheme() {
        isDark = !isDark;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateTheme();
    }

    function updateTheme() {
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }
</script>

<div class="background-anim"></div>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Changer le thème">
    {isDark ? '☀️' : '🌙'}
</button>

<slot />

<style>
    /* VARIABLES GLOBALES - DESIGN NÉON */
    :global(:root) {
        /* Valeurs par défaut (Light Mode Modern) */
        --bg-main: #f0f2f5;
        --bg-card: rgba(255, 255, 255, 0.8); /* Translucide */
        --bg-input: #ffffff;
        --text-main: #1a1a1a;
        --text-muted: #666;
        --primary: #6366f1; /* Indigo moderne */
        --accent: #ec4899; /* Pink */
        --glow: 0 4px 20px rgba(99, 102, 241, 0.3);
        --border: rgba(0, 0, 0, 0.1);
    }

    :global(.dark) {
        /* Mode Sombre (Cyber Ice) */
        --bg-main: #0a0b1e; /* Bleu nuit très profond */
        --bg-card: rgba(20, 25, 50, 0.6); /* Verre sombre */
        --bg-input: rgba(0, 0, 0, 0.4);
        --text-main: #ffffff;
        --text-muted: #a0a0c0;
        --primary: #00f2ea; /* Cyan Néon */
        --accent: #ff0055; /* Rose Néon */
        --glow: 0 0 20px rgba(0, 242, 234, 0.4);
        --border: rgba(255, 255, 255, 0.1);
    }

    :global(body) {
        background-color: var(--bg-main);
        color: var(--text-main);
        margin: 0;
        font-family: 'Inter', system-ui, sans-serif; /* Police plus moderne */
        min-height: 100vh;
        overflow-x: hidden;
    }

    /* Arrière-plan animé subtil */
    .background-anim {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: radial-gradient(circle at 50% 10%, rgba(99, 102, 241, 0.15), transparent 60%),
                    radial-gradient(circle at 90% 90%, rgba(236, 72, 153, 0.15), transparent 60%);
        z-index: -1;
        pointer-events: none;
    }

    /* Style global des boutons */
    :global(button), :global(.btn-start) {
        font-family: inherit;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Bouton thème */
    .theme-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border);
        color: var(--text-main);
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 12px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .theme-toggle:hover {
        background: var(--bg-main);
        border-color: var(--primary);
        box-shadow: var(--glow);
    }
</style>