interface OutputBoxProps {
  previousOperand: string;
  currentOperand: string;
  operation: string;
}
function OutputBox({ previousOperand, currentOperand, operation }: OutputBoxProps) {
  return (
    <div className='output'>
    <div className='previous-operand'>{previousOperand} {operation}</div>
    <div className='current-operand'>{currentOperand}</div>
  </div>
  )
}

export default OutputBox