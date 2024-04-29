
<script setup>
    import { ref } from 'vue';
    import AlertMessage from './AlertMessage.vue';

    const budgetState = ref(0)
    const error = ref('')

    const emit = defineEmits(['set-budget'])
    
    const setBudget = () => {
        if(budgetState.value <= 0 || budgetState.value === ''){
            error.value = 'Presupuesto no valido'
            setTimeout(() => {
                error.value = ''
            }, 3000)
            return
        } 

        emit('set-budget', budgetState.value)
    }

</script>

<template>
    <form
        class="budget"
        @submit.prevent="setBudget"
    >
        <AlertMessage v-if="error">{{ error }}</AlertMessage>
        <div class="field">
            <label for="new-budget">Definir presupuesto</label>
            <input 
                id="new-budget"
                class="new-budget"
                placeholder="Añade tu presupuesto"
                type="number"
                min="0"
                v-model.number="budgetState"
            />
        </div>
        <input type="submit" value="Definir presupuesto"/>
    </form>
</template>

<style scoped>
    .budget {
        width: 100%;
    }

    .budget label {
        font-size: 2.2rem;
        text-align: center;
        font-weight: 700;
        color: var(--blue);
    }
    
    .budget input[type="number"]{
        background-color: var(--gray-light);
        border-radius: 1rem;
        font-weight: 700;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
        text-align: center;
    }

    .budget input[type="submit"]{
        background-color: var(--blue);
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
        margin-top: 2rem;
        color: var(--white);
        text-align: center;
        font-weight: 900;
        width: 100%;
        transition: background-color 300ms ease;
    }

    .budget input[type="submit"]:hover {
        background-color: #1048A4;
        cursor: pointer;
    }

    .field {
        display: grid;
        gap: 2rem;
    }
</style>