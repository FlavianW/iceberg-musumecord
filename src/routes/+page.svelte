<script lang="ts">
    import type { PageData } from './$types';
    
    // On récupère la donnée 'count' envoyée par le serveur
    export let data: PageData;

    // On transforme le nombre en texte, puis on sépare chaque chiffre
    // Ex: 128 devient ['1', '2', '8']
    $: digits = data.count.toString().split('');
</script>

<div class="counter-container">
    <div class="counter-label">Singeries récoltées</div>
    <div class="digits-row">
        {#each digits as digit}
            <img src="/counter/{digit}.gif" alt={digit} class="digit-img" />
        {/each}
    </div>
</div>

<main class="container">
    <div class="card">
        <h1>📜 Règles de l'Iceberg</h1>
        <p class="intro">Avant de contribuer à l'iceberg du serveur, merci de lire ceci :</p>
        
        <ul class="rules">
            <li><strong>Full anonyme (no troll) :</strong> Pas de logs sauvegardés. (au cas ou vous voulez pas qu'on sache que c'est vous, 
                écrivez le et on fera pas de chasse à la sorcière en voc)</li>
            <li><strong>Une Ref a la fois :</strong> Comme ca on découvre tout au fur et à mesure. (Vous pouvez faire plusieurs submissions)</li>
            <li><strong>Essayez d'être un peu mystérieux :</strong> De pas tout balancer direct, comme ça on en parle dans le voc.</li>
            <li>⚠️<strong>IMPORTANT</strong> Il faut que minimum 3 personnes du serv soit au courant de votre histoire.</li>
        </ul>

        <div class="actions">
            <a href="/submit" class="btn-start">J'ai compris, je veux écrire</a>
        </div>
    </div>
</main>

<style>
    .container { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
    
    /* --- STYLE DU COMPTEUR --- */
    .counter-container {
        position: fixed;
        left: 40px; /* Décalé du bord gauche */
        top: 50%;   /* Centré verticalement */
        transform: translateY(-50%);
        
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--border);
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        z-index: 100; /* Pour passer au dessus du fond */
    }

    .counter-label {
        font-size: 0.8rem;
        font-weight: bold;
        letter-spacing: 2px;
        color: var(--primary);
        text-transform: uppercase;
    }

    .digits-row {
        display: flex;
        gap: 2px; /* Espacement entre les chiffres */
        padding: 5px;
    }

    .digit-img {
        height: 100%; /* Taille des chiffres, ajuste selon tes GIFs */
        width: auto;
        display: block;
    }

    /* En mobile, on déplace le compteur en bas pour pas gêner */
    @media (max-width: 800px) {
        .counter-container {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin-bottom: 2rem;
            width: fit-content;
        }
        .container {
            flex-direction: column;
        }
    }

    /* --- STYLE DE LA CARTE (Déjà fait avant) --- */
    .card { 
        background: var(--bg-card);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border);
        padding: 3rem; 
        border-radius: 24px; 
        max-width: 500px; 
        box-shadow: 0 20px 40px rgba(0,0,0,0.2); 
    }
    
    h1 { 
        color: var(--text-main); 
        text-align: center; 
        margin-bottom: 0.5rem;
        font-weight: 800;
        letter-spacing: -1px;
    }

    h1::after {
        content: ''; display: block; width: 50px; height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        margin: 15px auto; border-radius: 2px;
    }
    
    .intro { color: var(--text-muted); text-align: center; margin-bottom: 2rem; }
    
    .rules { list-style: none; padding: 0; margin-bottom: 2.5rem; }
    
    .rules li { 
        background: rgba(255,255,255,0.03); 
        padding: 15px; margin-bottom: 12px; 
        border-radius: 12px; 
        border: 1px solid var(--border);
        color: var(--text-muted); 
    }
    .rules strong { color: var(--primary); }

    .actions { text-align: center; }
    
    .btn-start { 
        background: transparent;
        color: var(--primary);
        border: 2px solid var(--primary);
        text-decoration: none; padding: 15px 40px; 
        border-radius: 50px; font-weight: bold; 
        display: inline-block; 
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 0 10px rgba(0,0,0,0);
    }

    .btn-start:hover { 
        background: var(--primary);
        color: #0a0b1e; 
        box-shadow: 0 0 30px var(--primary); 
        transform: translateY(-3px);
    }
</style>