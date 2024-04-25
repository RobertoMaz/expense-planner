<script setup>
  import { ref, reactive } from "vue";
  import Budget  from "./components/Budget.vue"
  import BudgetManagement from "./components/BudgetManagement.vue"
  import ModalView from './components/ModalView.vue'
  import ExpenseList from "./components/ExpenseList.vue";
  import iconNewExpense from './assets/img/new-expense.svg'

  const available = ref(0)
  const budgetState = ref(0)
  const expenses = ref([])
  const modal = reactive({
    showModal: false,
    animateModal: false
  })
  const expense = reactive({
    id: null,
    name: '',
    quantity: '',
    category: '',
    date: Date.now()
  })

  const hideModal = () => {
    modal.animateModal = false
    setTimeout(() => {
      modal.showModal = false
    },300)

  }

  const saveExpense = () => {
    expenses.value.push({...expense, id:self.crypto.randomUUID()})
    hideModal()
    Object.assign(expense, {
      id: null,
      name: '',
      quantity: '',
      category: '',
      date: Date.now()
    })
  }

  const setBudget = (quantity) => {
    budgetState.value = quantity
    available.value = quantity
  }
  
  const showModal = () => {
    modal.showModal = true
    setTimeout(() => {
      modal.animateModal = true
    },300)
  }

</script>

<template>
  <div>
    <header>
      <h1>Planificador de gastos</h1>
      <div class="container-header container shadow">
        <Budget 
          v-if="budgetState === 0"
          @set-budget="setBudget"
        />
        <BudgetManagement 
          v-else
          :budgetState="budgetState"
          :available="available"
        />

      </div>
    </header>
    <main v-if="budgetState > 0">
      <div class="container expense-list">
        <h2>{{ expenses.length > 0 ? 'Gastos' : 'No hay gastos' }}</h2>
        <ExpenseList 
          v-for="expense in expenses"
          :key="expense.id"
          :expense="expense"
        />
      </div>
      <div class="create-expense">
        <img 
          :src="iconNewExpense" 
          alt="icon new expense"
          @click="showModal"
        />
      </div>
      <ModalView 
        v-if="modal.showModal"
        @hide-modal="hideModal"
        @save-expense="saveExpense"
        :modal="modal"
        v-model:name="expense.name"
        v-model:quantity="expense.quantity"
        v-model:category="expense.category"
      />
    </main>
  </div>
</template>

<style>
  :root {
    --blue: #3b82f6;
    --white: #FFF;
    --gray-light: #eeeeee;
    --gray: #94a3b8;
    --gray-dark: #64748b;
    --black: #000;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--gray-light);
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  header {
    background-color: var(--blue);
  }

  header h1 {
    padding: 3rem 0;
    margin: 0;
    color: var(--white);
    text-align: center;
  }

  .container {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
  }

  .container-header {
    margin-top: -5rem;
    transform: translateY(5rem);
    padding: 5rem ;
  }

  .create-expense {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
  }
  
  .create-expense img{
    width: 5rem;
    transition: opacity 0.3s
  }

  .create-expense img:hover{
    cursor: pointer;
    opacity: 0.5;
  }

  .expense-list {
    margin-top: 10rem;
  }

  .expense-list h2{
    font-weight: 900;
    color: var(--gray-dark);
  }

  .shadow {
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: var(--white);
    border-radius: 1.2rem;
    padding: 5rem;
  }
</style>
