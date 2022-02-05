import { useState, useEffect, useRef, memo, useMemo, useReducer } from 'react'

function calculate(state, action) {
    switch (action) {
        case 'up':
            return state + 1
        case 'down':
            return state - 1
        default:
            throw new Error('Invalid action222')
    }
}

function Body() {
    const [number, setNumber] = useReducer(calculate, 0)

    return (
        <div className="body">
            <h1>{number}</h1>
            <button onClick={() => setNumber('up')}>Up</button>
            <button onClick={() => setNumber('down')}>Down</button>
            <button onClick={() => setNumber('down')}>fsdfds</button>
            <button onClick={() => setNumber('down')}>Down4444444444444444444444444</button>
        </div>
    )
}

export default Body
