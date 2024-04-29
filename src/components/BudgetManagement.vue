<script setup>
    import { computed } from 'vue'
    import CircleProgress from 'vue3-circle-progress'
    import "vue3-circle-progress/dist/circle-progress.css"
    import { formatQuantity } from '../helpers'

    const props = defineProps({
        budgetState: {
            type: Number,
            required: true
        },
        available: {
            type: Number,
            required: true
        },
        spent: {
            type: Number,
            required: true
        }
    })

    defineEmits(['reset-app'])

    const percent = computed(() => {
        return parseInt(((props.budgetState - props.available) / props.budgetState) * 100)
    })
</script>

<template>
    <div class="two-columns">
        <div class="container-graphic">
            <p class="percent">{{ percent }}%</p>
            <CircleProgress 
                :percent="percent"
                :size="250"
                :border-width="30"
                :border-bg-width="30"
                fill-color="#3b82f6"
                empty-color="#eeeeee"
            />
        </div>
        <div class="container-budget">
            <button 
                class="reset-app"
                type="button"   
                @click="$emit('reset-app')" 
            >
                Resetear App
            </button>
            <p>
                <span>Presupuesto:</span> {{ formatQuantity(budgetState) }}
            </p>
            <p>
                <span>Disponible:</span> {{ formatQuantity(available) }}
            </p>
            <p>
                <span>Gastado:</span> {{ formatQuantity(spent) }}
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
        position: relative;
    }

    .reset-app {
        background-color: #e04545;
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

    .percent {
        position: absolute;
        margin: auto;
        top: calc(50% - 1.5rem);
        left: 0;
        right: 0;
        text-align: center;
        z-index: 100;
        font-size: 3rem;
        font-weight: 900;
        color: var(--gray-dark);
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