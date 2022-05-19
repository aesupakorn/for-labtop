import React from 'react';

const List = ({people}) => {
 
  const allPeople = people.map((person)=>{
    const {id,name,age,image:img} = person;
    return <article key={id} className='person'>
      <img src={img} alt={name}/>
      <div>
        {name}
        <p>{age} years</p>
      </div>
    </article>
  })
  return (
    <>
      <h2>list component</h2>
     
      {allPeople}
    </>
  );
};

export default List;
