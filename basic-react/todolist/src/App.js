import './App.css';
import React,{ useState } from 'react';

function App() {
  //State
  
  const [note , setNote] = useState({content:"",author:""});
  const [form, setForm] = useState([]) ;
  const [editNote, setEditNote] = useState(null);

  //Function
  function onNoteValueChange(event){
    const{name , value} = event.target
    setNote((prevnote)=>{
      
      return {...prevnote,[name]:value}
    })
  }
  function onEditNoteValueChange(event){
    const {name,value} = event.target
    setEditNote(prevnote=>{return {...prevnote,[name]:value}})

  }
  function onSubmitForm(event){
    event.preventDefault()
    setForm((prevform)=>{
      
      note.id = Date.now().toString()
      return [note,...prevform]
    })
    setNote({content:"",author:""}) 
  }
  function onSubmitEditNote(event){
    event.preventDefault()
    setForm((prevform)=>{
      let newForm = prevform.map((element)=>{
        if(editNote.id === element.id){
          element.author = editNote.author
          element.content = editNote.content
        }
        return element
      })
      return newForm
    })
    setEditNote(null)
  }
  function noteDelete(id){
    
    setForm((prevForm)=>{
      return prevForm.filter((element)=>element.id !== id)
    })
    setEditNote(null)
  }
  
  let editNoteElement = null;
  if(!!editNote){
    editNoteElement = (
      <div className='note-edit'>
        <form onSubmit={onSubmitEditNote}>
            <div>
                <textarea
                  className='item'
                  rows="3"
                  type="text"
                  placeholder='Enter Todo'
                  value ={editNote.content}
                  name = "content"
                  onChange = {onEditNoteValueChange}
                />
            </div>
            <div>
                <input
                  className='item'
                  type="text"
                  placeholder='Enter Author'
                  value ={editNote.author}
                  name="author"
                  onChange = {onEditNoteValueChange}
                />
            </div>
            <div><button className="submit-button" type="submit">submit</button></div>
          </form>
      </div>
    )
  }

  //Elements
  const noteElements = form.map((theForm)=>{
      return(
        <div key={theForm.id} className='app-form'>
          <p>{theForm.content}</p>
          <h3>By: {theForm.author}</h3>
          <p>
            <a href='#' onClick={()=>{setEditNote(theForm)}}>Edit</a>
            <span>|</span>
            <a href='#' onClick={()=> noteDelete(theForm.id)}>Delete</a>
          </p>    
        </div>
      )
  })
    
  
  
  
  return (
    <main className='app-main'>
      <div className='app-container'>
        <div className='sub-container'>
          <h3>Todo list</h3>        
          <form onSubmit={onSubmitForm}>
            <div>
                <textarea
                  className='item'
                  rows="3"
                  type="text"
                  placeholder='Enter Todo'
                  value ={note.content}
                  name = "content"
                  onChange={onNoteValueChange}
                />
            </div>
            <div>
                <input
                  className='item'
                  type="text"
                  placeholder='Enter Author'
                  value ={note.author}
                  name="author"
                  onChange={onNoteValueChange}
                />
            </div>
            <div><button className="submit-button" type="submit">submit</button></div>
          </form>
        </div>
        
        <div className='app-notes'>
          {noteElements}
        </div>
      </div>
      {editNoteElement}
    </main>
  )
}

export default App;
