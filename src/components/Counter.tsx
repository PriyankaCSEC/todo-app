import  { useState } from 'react'

export default function Counter() {
 const [count , setCount] = useState<number>(0);
 const [name , setName ] = useState<string>('Priyanka');
 const [is_disabled , setDisabled ] = useState<boolean>(false);
 

  return (

      
      <div className="flex flex-col gap-4">
      
      <h1 className={`text-2xl font-bold ${is_disabled ? 'text-red-500' : 'text-green-500'}`}>
  {is_disabled ? 'Input Disabled' : 'Input Enabled'}
</h1>

      <h1>{count}</h1>
      <h1>{name}</h1>

      

      <div className='flex flex-row gap-4'>
      <button className ="bg-blue-200"onClick={() => {
        setCount(count+1);
        setName('Priyanka bala');
        setDisabled(false);
      }}> increase
      </button>

      <button className ="bg-blue-200" onClick={()=>{
        setCount(count-1);
        setName('Priyanka');
        setDisabled(true);
      }}> Decrease</button></div>

       <div><input type = "text" className='border py-2'
      id="name"
      value={name}
      disabled = {is_disabled}
      onChange={(e) => setName(e.target.value)}
      />
</div>
    </div>

 
  )
}
