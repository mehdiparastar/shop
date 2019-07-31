export default (state = [], action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            const counters = [...state]
            const index = counters.indexOf(action.counter)
            counters[index] = { ...action.counter }
            counters[index].value++
            return [...counters]
        case 'DEL_COUNTER':
            const filteredCounters = state.filter(c => c.id !== action.counterId)
            return [...filteredCounters]
        case 'RESET_COUNTERS':
            const resetCounter = state.map(c => {
                c.value = 0
                return c
            })
            return [...resetCounter]
        default: return state
    }
}
