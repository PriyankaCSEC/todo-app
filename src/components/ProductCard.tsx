


interface ProductCartProps{
    name: string ;
    ratings: number;
    actual_price: number;
    discount_price : number;
    image: string;

}





export default function ProductCard({name,ratings,image,actual_price,discount_price}:ProductCartProps) {
  return (
    <div className='flex h-screen w-full'>
    <div id="produt-container" className=' flex  '>
        <div className='flex flex-col gap-4  bg-slate-200  border-black shadow-xl mr-80 mb-80'>
        <img src={image} alt={name} className='m-6' />
        <h1>{name}</h1>
        <div>{ratings}</div>
        <div className='flex flex-row gap-4'>
         <span>{actual_price}</span>
         <span>{discount_price}</span>

        </div>
        <div className='flex flex-row gap-16'>
            <button className='bg-blue-500 text-white rounded-full px-4 '>Add to Cart</button>
            <button className='bg-blue-500 text-white rounded-full px-4 '>Buy now</button>
        </div>
      
    </div>
    </div>
    </div>
  )
}
