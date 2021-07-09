// TypeScript with React
// http://localhost:3000/isolated/exercise/05.tsx

// 🦺 add type definitions for each function
type OperationFn = (left: number, right: number) => number;

// type Operator = '+' | '-' | '*' | '/';
// const operations: Record<Operator, OperationFn> = {
//   '+': (left, right) => left + right,
//   '-': (left, right) => left - right,
//   '*': (left, right) => left * right,
//   '/': (left, right) => left / right,
// }

// https://numb86-tech.hatenablog.com/entry/2021/04/02/233540
const createOperations = <OperationType extends Record<string, OperationFn>>(
  opts: OperationType
) => opts;

const operations = createOperations({
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
})

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
  left?: number;
  operator?: keyof typeof operations;
  right?: number;
}

// type User = {name: string; isCute?: boolean}
// // name is required, isCute is optional, so these both compile:
// const kody = {name: 'Kody', isCute: true}
// const peter = {name: 'Peter'}

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({left = 0, operator = "+", right = 0}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} right={2} />
      <Calculator operator="-" />
      <Calculator left={1} operator="*" />
      <Calculator operator="/" right={2} />
    </div>
  )
}

export {App}
