import React from 'react'

type Todo ={
  userId:number
  id:number
  title:string
  completed:boolean
}



export default function AddTodo() {

  const [todo, setTodo] = React.useState<Todo>()
  const onSubmitData = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch ('https://jsonplaceholder.typicode.com/todos',{
    }, )
  }

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={onSubmitData} >
         <input type="text" name="title" placeholder='Enter your title' value={todo?.title}
         onChange={(data)=> {

          setTodo({
           ...todo!,
           title:String(data.target.value),
         }) 

      } }/>

         <input type="number" name="id" placeholder='Enter your user id' value={todo?.id}
         onChange={(data)=> {

          setTodo({
           ...todo!,
           id:Number(data.target.value),
         }) 

      }}/>
         <input type="checkbox" name="completed" placeholder='Enter your Completed'  
          onChange={(data)=> {

            setTodo({
             ...todo!,
             id:Number(data.target.value),
           }) 
  
        }}/>
         <button type='submit'>Create Todo</button>


      </form>
    </div>
    
  )
}
