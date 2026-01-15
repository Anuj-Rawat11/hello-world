import React from 'react'

// function Greet(){
//     return <h1>Hello Vishwas</h1>;
// }

// const Greet = () => <h1>Hello Vishwas</h1>;
// export const Greet = () => <h1>Hello Vishwas</h1>;

// Default Export:The default export allows us to import the component with any name.
// Named Export:It allows you to import the component only with the same name.
// export default Greet;

// const Welcome =() => <h1>Wecome everyone</h1>;

// const Welcome=(props)=>{
//     console.log(props);
// return (
// <div>
//     <h1>Welcome {props.name}</h1>
//     <h1>You are {props.age} years old.</h1>
//  </div>
// );

// };
// export default Welcome;

// const Greet= ({name,age}) => {
//   return (
//     <div>
//       <h1>Hello {name}.</h1>
//       <h1>You are {age} years old.</h1>
//     </div>
//   )
// };
const Greet= (props) => {
    const {name:newName,age:newAge}=props;
  return (
    <div>
      <h1>Hello {newName}.</h1>
      <h1>You are {newAge} years old.</h1>
    </div>
  )
};

export default Greet;
