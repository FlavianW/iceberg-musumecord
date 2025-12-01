<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    let counter = 0;

    function counterUpdate():number{
        return counter+=1;
    }

</script>

<div class="admin-panel">
    <h1 class="neon-title">Submissions (Randomisées)</h1>
    <p style="color: var(--text-muted)">Total : {data.suggestions.length}</p>
    
    <div class="list">
        {#each data.suggestions as item}
            <div class="card">
                <p class="content">{item.content}</p>
                <div class="meta">
                    <span class="id-badge">#{counterUpdate()}</span>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .admin-panel { max-width: 800px; margin: 0 auto; padding: 4rem 1rem; }
    
    .neon-title {
        font-size: 2.5rem;
        color: var(--text-main);
        text-shadow: 0 0 10px rgba(255,255,255,0.2);
        margin-bottom: 1rem;
    }

    .list { display: grid; gap: 1.5rem; }

    .card {
        background: var(--bg-card);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--border);
        padding: 1.5rem;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .content {
        color: var(--text-main); 
        font-size: 1.1rem;
        margin: 0 0 1rem 0;
        white-space: pre-wrap;
        line-height: 1.6;
    }

    .meta {
        display: flex;
        /* CHANGEMENT ICI : aligne le badge ID tout à droite */
        justify-content: flex-end; 
        align-items: center;
        border-top: 1px solid var(--border);
        padding-top: 10px;
    }

    .id-badge {
        background: var(--primary);
        color: #000;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.8rem;
        font-weight: bold;
    }
</style>