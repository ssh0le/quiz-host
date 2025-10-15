/// <reference types="react" />

//
// These declares remote modules and the objects they carry.
//

declare module 'remote1/App' {
  const CounterApp1: React.ComponentType;

  export default CounterApp1;
}

declare module 'remote2/App' {
  const CounterApp2: React.ComponentType;

  export default CounterApp2;
}
