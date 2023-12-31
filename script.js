const {useState, useEffect} = React;

const CurrencyConverter = () => {
  const [rate, setRate] = useState(0.89);
  const [usd, setUsd] = useState(1);
  const [euro, setEuro] = useState(1 * 0.89);

  const toUsd = (amount, rate) => {
    return amount * (1 / rate);
  }

  const toEuro = (amount, rate) => {
    return amount * rate;
  }

  const convert = (amount, rate, equation) => {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }

  const handleUsdChange = (event) => {
    const euro = convert(event.target.value, rate, toEuro);
    setUsd(event.target.value);
    setEuro(euro);
  }

  const handleEuroChange = (event) => {
    const usd = convert(event.target.value, rate, toUsd);
    setEuro(event.target.value);
    setUsd(usd);
  }

  return (
    <div className="container">
      <div className="text-center p-3 mb-2">
        <h2 className="mb-2">Currency Converter</h2>
        <h4>USD 1 : {rate} EURO</h4>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <span className="mr-1">USD</span>
          <input value={usd} onChange={handleUsdChange} type="number" />
          <span className="mx-3">=</span>
          <input value={euro} onChange={handleEuroChange} type="number" />
          <span className="ml-1">EURO</span>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <CurrencyConverter />,
  document.getElementById('root')
);




// class CurrencyConverter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         rate: 0.89,
//         usd: 1,
//         euro: 1 * 0.89,
//       };
  
//       this.handleUsdChange = this.handleUsdChange.bind(this);
//       this.handleEuroChange = this.handleEuroChange.bind(this);
//     }
  
//     toUsd(amount, rate) {
//       return amount * (1 / rate);
//     }
  
//     toEuro(amount, rate) {
//       return amount * rate;
//     }
  
//     convert(amount, rate, equation) {
//       console.log(typeof amount);
//       const input = parseFloat(amount);
//       if (Number.isNaN(input)) {
//         return '';
//       }
//       return equation(input, rate).toFixed(3);
//     }
  
//     handleUsdChange(event) {
//       const euro = this.convert(event.target.value, this.state.rate, this.toEuro);
//       this.setState({
//         usd: event.target.value,
//         euro
//       });
//     }
  
//     handleEuroChange(event) {
//       const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
//       this.setState({
//         euro: event.target.value,
//         usd
//       });
//     }
  
//     render() {
//       const { rate, usd, euro } = this.state;
  
//       return (
//         <div className="container">
//           <div className="text-center p-3 mb-2">
//             <h2 className="mb-2">Currency Converter</h2>
//             <h4>USD 1 : {rate} EURO</h4>
//           </div>
//           <div className="row text-center">
//             <div className="col-12">
//               <span className="mr-1">USD</span>
//               <input value={usd} onChange={this.handleUsdChange} type="number" />
//               <span className="mx-3">=</span>
//               <input value={euro} onChange={this.handleEuroChange} type="number" />
//               <span className="ml-1">EURO</span>
//             </div>
//           </div>
//         </div>
//       )
//     }
//     // don't be lazy
//   }
  
//   const container = document.getElementById('root');
//   const root = ReactDOM.createRoot(container);
//   root.render(<CurrencyConverter />);