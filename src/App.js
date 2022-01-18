import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [resultado, setResultado] = useState("");


  const operaciones = ['/', '*', '+', '-', '.'];

  const calcular = value => {

    if (
      operaciones.includes(value) && calc === '' ||
      operaciones.includes(value) && operaciones.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operaciones.includes(value)) {
      resultado(eval(calc + value).toString())
    }
  }


  const crearNumeros = () => {
    const numeros = [];

    for (let i = 1; i < 10; i++) {
      numeros.push(
        <button
          onClick={() => calcular(i.toString())}
          key={i}>
          {i}</button>
      )
    }
    return numeros
  }

  const calcularTotal = () => {
    setCalc(eval(calc).toString())
  }

  const BorraUltimo = () => {
    if (calc === '') {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value)

  }
  return (
    <div className="App">
      <div className="calculadora">
        <div className="display">
          {resultado ? <span>({resultado})</span> : ''}
          {calc || '0'}
        </div>

        <div className="operadores">
          <button onClick={() => calcular('/')}>/</button>
          <button onClick={() => calcular('*')}>*</button>
          <button onClick={() => calcular('+')}>+</button>
          <button onClick={() => calcular('-')}>-</button>

          <button onClick={BorraUltimo}>DEL</button>
        </div>

        <div className="numeros">
          {crearNumeros()}
          <button onClick={() => calcular('0')}>0</button>
          <button onClick={() => calcular('.')}>.</button>
          <button onClick={calcularTotal}>=</button>

        </div>
      </div>
    </div>

  );
}

export default App;
