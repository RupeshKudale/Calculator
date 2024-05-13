import { CalculatorAction, CalculatorState } from "./types";

import { ACTIONS } from "./constants";

export function reducer( state: CalculatorState, action: CalculatorAction ): CalculatorState {
    const { type, payload } = action;
    switch(type) {
      case ACTIONS.ADD_DIGIT:
        if(state.override) {
          return {
            ...state,
            override: false,
            currentOperand: payload.digit,
          }
        }
        if(payload.digit === "0" && state.currentOperand === "0") {
          return state;
        }
        if(payload.digit === "." && state.currentOperand.includes(".")) {
          return state;
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        }
      
      case ACTIONS.CLEAR:
        return {
          ...state,
          currentOperand: "",
          previousOperand: "",
          operation: ""
        }
      
      case ACTIONS.CHOOSE_OPERATION: 
        if(state.currentOperand === "" && state.previousOperand === "") {
          return state;
        }
        if(state.currentOperand === "") {
          return {
            ...state,
            operation: payload.operation,
          }
        }
        if(state.previousOperand === "") {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: ""
          }
        }
  
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: ""
        }
      
      case ACTIONS.EVALUATE: 
        if(state.currentOperand === "" || state.previousOperand === ""
        || state.operation === "") {
          return state;
        }
  
        return {
          ...state,
          override: true,
          previousOperand: "",
          currentOperand: evaluate(state),
          operation: ""
        };
  
      case ACTIONS.DELETE: 
        if(state.override) {
          return {
            ...state,
            override: false,
            currentOperand: ""
          }
        }
        if(state.currentOperand === "") {
          return state; 
        }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      };
      
      default: 
        return state;
    }
  }

export function evaluate(state: CalculatorState) {
    const { previousOperand, currentOperand, operation } = state;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return "";
    let computation;
    switch(operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        computation = "";
    }
    return computation.toString();
  }
  