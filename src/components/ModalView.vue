<script setup>
    import { ref } from 'vue';
    import closeModal from '../assets/img/close.svg'
    import AlertMessage from './AlertMessage.vue'

    const error = ref('')

    const props = defineProps ({
        modal: {
            type: Object,
            required: true 
        },
        name: {
            type: String,
            required: true 
        },
        quantity: {
            type: [String, Number],
            required: true 
        },
        category: {
            type: String,
            required: true 
        }
    })

    const emit = defineEmits(['hide-modal', 'update:name', 'update:quantity', 'update:category', 'save-expense'])

    const addExpense = () => {
        const {name, quantity, category} = props
        if([name,quantity, category].includes('')){
            error.value = 'Los campos no pueden estar vacios'
            setTimeout(() => {
                error.value = ''
            }, 3000)
            return
        }

        if(quantity <= 0){
            error.value = 'La cantidad no puede ser menor o igual a "0"'
            setTimeout(() => {
                error.value = ''
            }, 3000)
            return
        }

        emit('save-expense')
    }
</script>
<template>
    <div class="modal">
        <div class="close-modal">
            <img 
                :src="closeModal" alt="close modal icon"
                @click="$emit('hide-modal')"
            />
        </div>
        <div 
            class="container container-form"
            :class="[modal.animateModal ? 'animate' : '']"
            >
            <form 
                class="new-expense"
                @submit.prevent="addExpense"
                >
                <legend>Añadir gasto</legend>
                <AlertMessage v-if="error">{{ error }}</AlertMessage>
                <div class="field">
                    <label for="name">Nombre gasto:</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Añade el nombre del gasto"
                        :value="name"
                        @input="$emit('update:name', $event.target.value)"
                        >
                </div>
                    <div class="field">
                        <label for="quantity">Cantidad:</label>
                        <input 
                        type="number"
                        id="quantity"
                        placeholder="Añade la cantidad del gasto, ej: 300"
                        :value="quantity"
                        @input="$emit('update:quantity', +$event.target.value)"
                    >
                </div>
                <div class="field">
                    <label for="category">Cantegoría:</label>
                    <select
                        id="category"
                        :value="category"
                        @input="$emit('update:category', $event.target.value)"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                    </select>
                </div>
                <input 
                type="submit"
                value="Añadir gasto"    
                >
            </form>
        </div>
    </div>
</template>

<style scoped>
    

    .close-modal {
        position: absolute;
        right: 3rem;
        top: 3rem;
    }

    .close-modal img {
        width: 3rem;
        transition: opacity 0.3s
    }

    .close-modal img:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    .container-form {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        opacity: 0;
    }

    .container-form.animate {
        opacity: 1;
    }
    
    .field {
        display: grid;
        gap: 2rem;
    }

    .modal {
        position: absolute;
        background-color: rgb(0 0 0 / 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .new-expense {
        margin: 10rem auto 0 auto;
        display: grid;
        gap: 2rem;
    }
    
    .new-expense label {
        color: var(--white);
        font-size: 3rem;
    }

    .new-expense legend {
        text-align: center;
        color: var(--white);
        font-size: 3rem;
        font-weight: 700;
    }

    .new-expense input,
    .new-expense select {
        background-color: var(--gray-light);
        border-radius: 1rem;
        padding: 1rem;
        border: none;
        font-size: 2.2rem;
    }

    .new-expense input[type="submit"] {
        background-color: var(--blue);
        color: var(--white);
        font-weight: 700;
    }

    .new-expense input[type="submit"]:hover {
        background-color: #1646c9;
        cursor: pointer;
    }

    
    
</style>

