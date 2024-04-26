<script setup>
 
    defineProps(['filter'])
    defineEmits(['update:filter'])
</script>
<template>
    <div class="filters shadow container">
        <form>
            <div class="field">
                <label for="filter">Filtrar Gastos</label>
                <select
                    id="filter"
                    :value="filter"
                    @input="$emit('update:filter', $event.target.value)"
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
        </form>
    </div>
</template>

<style scoped>
    .filters {
        margin-top: 10rem;
    }

    .filters .field {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .filters label {
        font-size: 3rem;
        font-weight: 900;
        color: var(--gray-dark);
    }

    .filters select {
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        background-color: var(--gray-light);
        text-align: center;
    }
</style>