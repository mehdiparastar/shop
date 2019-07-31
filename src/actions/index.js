export const incrementCounter = (counter) => ({
    type: 'INC_COUNTER',
    counter
})

export const deleteCounter = (counterId)=>({
    type: 'DEL_COUNTER',
    counterId
})

export const resetCounters = () => ({
    type: 'RESET_COUNTERS'
})