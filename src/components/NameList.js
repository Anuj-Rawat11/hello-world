import React from "react";
// import CreatePerson from "./CreatePerson";

function NameList() {
  let names = ["Bucky","Bucky","Bruce", "Peter", "Diana", "Robert","Wanda","Bruce"];
  // let nameList=names.map(name => <h2>{name}</h2>)
  // let persons = [
  //   {
  //     id: 1,
  //     name: "Bruce",
  //     age: 23,
  //     skill: "React",
  //   },
  //   {
  //     id: 2,
  //     name: "Clark",
  //     age: 26,
  //     skill: "Java",
  //   },
  //   {
  //     id: 3,
  //     name: "Clint",
  //     age: 23,
  //     skill: "C",
  //   },
  //   {
  //     id: 4,
  //     name: "Bill",
  //     age: 23,
  //     skill: "PHP",
  //   },
  // ];
  // let personList=persons.map(person=><div><h2>My name is {person.name}.I am {person.age} years old.I am skilled in {person.skill}</h2></div>)
  // let personList=persons.map(person=><CreatePerson person={person} key={person.id} />)
  let nameList=names.map((name,index)=><h2 key={index}>{index}:-{name}</h2>)
  return (
    <div>
      {/* {nameList} */}
      {/* {   names.map(name => <h2>{name}</h2>) } */}
      {/* Name :
{
  persons[0].name
} */}
      {/* {
persons.map(person=>(<div><h2>Name:{person.name}</h2><h2>Age:{person.age}</h2><h2>Skill:{person.skill}</h2></div>))
} */}
      {/* {
personList
} */}
      {/* {
  personList
} */}
{
  nameList
}
    </div>

    // <div>
    //   <h2>{names[0]}</h2>
    //   <h2>{names[1]}</h2>
    //   <h2>{names[2]}</h2>
    //   <h2>{names[3]}</h2>
    // </div>
  );
}

export default NameList;

// In React to improve efficieny which list rendering the key prop is used.It is the unique value passed,which helps identify the item in the list
// changed,removed or added.In such a way,there is no need to completely re render the previous list.
// If in the list we do not have any unique value to be passed as key prop we can use the index of the
// array as key prop.
// It is not recommended to use index as key prop when the list is dynamic i.e.when we are adding or removing the items from the list.
// In that case we may use npm package uuid to generate unique keys for the list items or we can hash some unique
// values of the item to generate unique keys.
