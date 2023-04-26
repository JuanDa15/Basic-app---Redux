import { createReducer, on } from "@ngrx/store";
import { decrement, divide, increment, multiply, reset } from "./counter.actions";
const initialState = 10

export const counterReducer = createReducer(
    initialState,
    on(increment, (state): number => state + 1),
    on(decrement, (state): number => state - 1),
    on(multiply, (state, {value}): number => state * value),
    on(divide, (state, {value}): number => state / value),
    on(reset, (state): number => 0)
);
