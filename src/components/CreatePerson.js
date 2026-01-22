import React from 'react'

function CreatePerson({person}) {
  let {name:myname,age:myage,skill:myskill}=person;
  return (
    <div>
    My name is {myname}.I am {myage} years old.I am skilled in {myskill}.
    </div>
  )
}

export default CreatePerson

// We cannot access the key prop in the child component.It is only for the React .