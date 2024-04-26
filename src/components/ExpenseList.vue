<script setup>
    import { formatQuantity, formatDate } from '../helpers'
    import IconSaving from '../assets/img/icon_saving.svg'
    import IconHome from '../assets/img/icon_home.svg'
    import IconFood from '../assets/img/icon_food.svg'
    import IconExpense from '../assets/img/icon_expense.svg'
    import IconLeisure from '../assets/img/icon_leisure.svg'
    import IconHealth from '../assets/img/icon_health.svg'
    import IconSubscription from '../assets/img/icon_subscription.svg'

    const dictionaryIcons = {
        ahorro : IconSaving,
        comida : IconFood,
        casa : IconHome,
        gastos : IconExpense,
        ocio : IconLeisure,
        salud : IconHealth,
        subscripciones : IconSubscription
    }

    const props = defineProps({
        expense: {
            type: Object,
            required: true
        }
    })

    defineEmits(['select-expense'])
</script>
<template>
    <div class="expense shadow">
        <div class="content">
            <img
                :src="dictionaryIcons[expense.category]"
                alt="Icono gasto"
                class="icon"
            />
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p 
                    class="name" 
                    @click="$emit('select-expense', expense.id)"
                >{{ expense.name }}</p>
                <p class="date">
                    Fecha: 
                    <span>
                        {{ formatDate(expense.date) }}
                    </span>
                </p>
            </div>
        </div>
        <p class="quantity">{{ formatQuantity(expense.quantity) }}</p>
    </div>
</template>


<style scoped>
    .category {
        color: var(--gray);
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 900;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    
    .date {
        color: var(--gray-dark);
        font-size: 1.6rem;
        font-weight: 900;
    }

    .date span{
        font-weight: 400;
    }

    .details p {
        margin: 0 0 1rem 0;
    }

    .expense {
      display: flex;
      justify-content: space-between;  
      align-items: center;
      margin-bottom: 2rem;
    }

    .icon {
        width: 5rem;
    }

    .name {color: var(--gray-dark);
        color: var(--gray-dark);
        font-size: 2.4rem;
        font-weight: 700;
        cursor: pointer;
    }

    .quantity {
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
    }

</style>