import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { countIncrement, countDecrement, incrementCountBy5, resetCount} from '../Redux/Slices/counterSlice'
export const Counter = () => {

    const count = useSelector((state) => {
        return state.counter.count;
    });

    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(countIncrement());
    }
    const handleDecrement = () => {
        dispatch(countDecrement());
    }
    const IncrementBy5 = () => {
        dispatch(incrementCountBy5(5));
    }
    const handleReset =() =>{
        dispatch(resetCount());
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>&emsp;
            <button onClick={handleDecrement}>-</button>&emsp;
            <button onClick={IncrementBy5}>+5</button>&emsp;
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
