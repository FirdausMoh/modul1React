// // class component
// class CounterHandler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//     };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrementCount = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2><strong>{this.state.count}</strong></h2>
//         <div>
//           <button onClick={this.decrementCount}>-1</button>
//           <button onClick={this.incrementCount}>+1</button>
//         </div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<CounterHandler />, document.getElementById('counter'));


// Functional Component
const CounterHandler = () => {
  const [count, setCount] = React.useState(1);

  const incrementCount = () => {
      setCount(count + 1);
  };

  const decrementCount = () => {
      setCount(count - 1);
  };
  return (
      <div>
          <h1>{count}</h1>
          <div>
              <button onClick={decrementCount} >-1</button>
              <button onClick={incrementCount} >+1</button>
          </div>
          
      </div>
  );
}

const myApp = <CounterHandler/>

ReactDOM.createRoot(document.getElementById('counter')).render(myApp);
