<script setup>
    import image from '../assets/img/graphic.jpg'

    const props = defineProps({
        budgetState: {
            type: Number,
            required: true
        }
    })
</script>

<template>
    <div class="two-columns">
        <div class="container-graphic">
            <img 
                :src="image"
            />
        </div>
        <div class="container-budget">
            <button class="reset-app">
                Resetear App
            </button>
            <p>
                <span>Presupuesto:</span> ${{ budgetState }}
            </p>
            <p>
                <span>Disponible:</span> ${{ budgetState }}
            </p>
            <p>
                <span>Gastado:</span> $0
            </p>
        </div>
    </div>
</template>


<style scoped>
    .container-budget {
        width: 100%;
    }

    .container-budget p {
        font-size: 2.4rem;
        text-align: center;
        color: var(--gray-dark);
    }
    
    .container-budget span {
        color: var(--blue);
        font-weight: 900;
    }
    
    .container-graphic {
        margin-bottom: 4rem;
    }

    .reset-app {
        background-color: #dd3838;
        border: none;
        padding: 1rem;
        width: 100%;
        color: var(--white);
        font-weight: 900;
        text-transform: uppercase;
        border-radius: 1rem;
        transition-property: background-color;
        transition-duration: 300ms;
    }

    .reset-app:hover {
        cursor: pointer;
        background-color: #bd2727;
    }
    
    .two-columns {
        display: flex;
        flex-direction: column;
    }
    
    @media (min-width: 768px) {
        .container-budget p {
            text-align: left;
        }

        .container-graphic {
            margin-bottom: 0rem;
        }
        
        .two-columns {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
    }
</style>