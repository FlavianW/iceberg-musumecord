<script lang="ts">
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';
    export let form: ActionData;
</script>

<main class="container">
    <div class="form-wrapper">
        <a href="/" class="back-link">← Retour aux règles</a>
        
        <h2>🖋️ Ecris ta singerie</h2>
        <p class="subtext">Ecris ce que tu veux mais oublie pas les règles sinon on va te djoufara</p>

        {#if form?.success}
            <div class="success-message">
                <h3>✅ Envoyé !</h3>
                <p>C'est dans la boîte. N'hésite pas a en rajouter d'autres singeries !</p>
            </div>
        {/if}

        <form method="POST" use:enhance>
            <div class="input-group">
                <textarea 
                    name="content" 
                    placeholder="Ex: Le serveur a été créé par erreur..." 
                    rows="6"
                    required
                ></textarea>
                <div class="glow-bar"></div>
            </div>
            
            <button type="submit">Envoyer ma submission</button>
        </form>
    </div>
</main>

<style>
    .container { display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
    .form-wrapper { width: 100%; max-width: 600px; }

    .back-link { color: var(--text-muted); text-decoration: none; margin-bottom: 2rem; display: block; transition: color 0.2s;}
    .back-link:hover { color: var(--primary); }

    h2 { 
        color: var(--text-main); font-size: 2.5rem; margin-bottom: 0.5rem; 
        text-shadow: 0 0 20px rgba(0,0,0,0.5);
    }
    .subtext { color: var(--text-muted); margin-bottom: 2.5rem; }

    .input-group { position: relative; margin-bottom: 2rem; }
    
    textarea {
        width: 100%;
        /* AJOUT ICI : Pour que le padding ne dépasse pas la largeur */
        box-sizing: border-box; 
        background: var(--bg-input); 
        border: 2px solid var(--border);
        color: var(--text-main);
        padding: 25px;
        font-size: 1.2rem;
        border-radius: 16px;
        outline: none;
        resize: vertical;
        font-family: inherit;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    textarea:focus {
        border-color: var(--primary);
        box-shadow: var(--glow); /* Lueur néon autour de la boite */
        background: var(--bg-card);
    }

    button {
        width: 100%;
        /* AJOUT ICI : Pour l'alignement parfait avec la textbox */
        box-sizing: border-box; 
        padding: 20px;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        color: white;
        border: none;
        border-radius: 16px;
        font-size: 1.2rem;
        font-weight: 800;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    button:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 40px rgba(236, 72, 153, 0.4); /* Lueur rose/violette */
    }

    .success-message {
        background: rgba(0, 242, 234, 0.1); /* Fond cyan très léger */
        border: 1px solid var(--primary);
        padding: 20px;
        border-radius: 16px;
        margin-bottom: 30px;
        box-shadow: var(--glow);
    }
    .success-message h3 { margin: 0 0 5px 0; color: var(--primary); }
    .success-message p { margin: 0; color: var(--text-main); }
</style>