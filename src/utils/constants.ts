import { CalculatorState } from "./types"

export const ACTIONS = {
    ADD_DIGIT : "add-digit",
    CLEAR: "clear",
    CHOOSE_OPERATION: "choose-operation",
    EVALUATE: "evaluate",
    DELETE: "delete"
}

export const initialState: CalculatorState = {
    override: false,
    currentOperand: "",
    previousOperand: "",
    operation: ""
}