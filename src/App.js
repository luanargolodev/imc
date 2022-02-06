import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="app-input">
        <input type="text" placeholder="Peso em kg - Ex: 90" />
        <input type="text" placeholder="Altura em cm - Ex: 189" />
        <button>Calcular</button>
      </div>
      <h2>Seu imc foi 25, você está abaixo do peso!</h2>
    </div>
  );
}

export default App;
