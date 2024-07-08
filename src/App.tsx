import { configureWithTimeout, useValue } from "../../src/index"

configureWithTimeout()

let count = 0

function Count() {
  useValue(() => count)

  return <p>{count}</p>
}

function DoubleCount() {
  useValue(() => count)

  return <p>{count * 2}</p>
}

const state = {
  textInput: "",
}

function TextInput() {
  useValue(() => state.textInput)

  return (
    <input
      type="text"
      value={state.textInput}
      onChange={(e) => {
        state.textInput = e.target.value
      }}
    />
  )
}

function DisplayText() {
  useValue(() => state.textInput)

  return <p>{state.textInput}</p>
}

export default function App() {
  return (
    <div>
      <TextInput />
      <DisplayText />

      <Count />
      <DoubleCount />
      <button onClick={() => count++}>Increment</button>
      <button onClick={() => count--}>Decrement</button>
    </div>
  )
}
