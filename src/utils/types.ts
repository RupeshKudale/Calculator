
export type CalculatorState = {
    override: boolean,
    currentOperand: string,
    previousOperand: string,
    operation: string
}

export type CalculatorAction = {
    type: string,
    payload: Payload
}

type Payload = {
    digit: string;
    operation: string;
}