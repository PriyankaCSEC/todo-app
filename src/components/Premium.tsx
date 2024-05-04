import { useState } from "react";

export default function Premium() {
    const [is_annual , setAnnual ] = useState<boolean>(false);



  return (
    <div className=' py-6 rounded-xl m-5 border bg-gray-400  gap-2 shadow-xl mr-96'>
     <div className='m-5'> 
        <h1 className='font-bold text-5xl '>{is_annual ? "$24/month":  "$244/yr"}</h1>
      
      
      <input  type="checkbox" className="bg-blue-400 border" onChange={(e) => {
          setAnnual(e.target.checked);
        }}></input>

<p>Everything's yours, unlimited use!!</p>
</div>
    </div>
  )
}
