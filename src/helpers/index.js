export const formatQuantity = (quantity) => {
    return Number(quantity).toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS'
    })
}

export const formatDate = (date) => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('es-ES', options)
}