import { ACTIONS } from "../utils/constants"
import { CalculatorAction } from "../utils/types"

interface DigitButtonProps {
  dispatch:  React.Dispatch<CalculatorAction>,
  digit: string
}
function DigitButton({dispatch, digit}: DigitButtonProps) {
  return (
    <button
      onClick={() => dispatch({
        type: ACTIONS.ADD_DIGIT,
        payload: { digit, operation: "" }
    })}
    > {digit} </button>
  )
}

export default DigitButton