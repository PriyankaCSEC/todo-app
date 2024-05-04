import PinterestImage from "./PinterestImage"



// interface PinterestImageProps{
// images : string[]

// }



export default function Pinterest() {
    
  const image=[{
    src:'https://i.pinimg.com/564x/3f/ea/02/3fea0205b2e36ac4086152f42be280f1.jpg',
    alt:'image'
   },
   {
    src:'https://i.pinimg.com/564x/38/55/2a/38552ad4d7effca147ac634827191bbe.jpg',
    alt:'image'
   },{
    src:'https://i.pinimg.com/564x/32/5f/70/325f70dee8744160fd89975343e5c3e1.jpg',
    alt:'image'
   },{
    src:'https://i.pinimg.com/564x/c3/1c/56/c31c56ebf4b6a3c643c2acf8865bfdee.jpg',
    alt:'image'
   },{
    src:'https://i.pinimg.com/564x/ae/bc/47/aebc477271d0c2c6cada02f92d4a667c.jpg',
    alt:'image'
   },
   {
    src:'https://i.pinimg.com/736x/48/80/37/488037afd6e6098fa9c8d36022642c88.jpg',
    alt:'image'
   },
   {
    src:'https://i.pinimg.com/564x/ae/88/31/ae8831775f14c4c7c84089640784c8b1.jpg',
    alt:'jkayy',
   },
   {
    src:'https://i.pinimg.com/564x/3d/9f/c4/3d9fc4c7d3032bb0a6dca45ccd78c32a.jpg',
    alt:'image',
   },
   {
    src:'https://i.pinimg.com/564x/fd/41/7d/fd417d303b9423f6451f2a497a79f86a.jpg',
    alt:'image',
   },
   {
    src:'https://i.pinimg.com/564x/17/2c/47/172c47e7a705b8b3bf545cd16c319c94.jpg',
    alt:'image',
   },
   {
    src:'https://i.pinimg.com/564x/31/01/47/310147609763e1dfba74d9c296e482bf.jpg',
    alt:'image',
   }
  
  ]
  
  
  return (
        
      
          
    <div className="h-screen w-full">
    <div className="flex flex-col gap-6">
      <div className="mt-4 flex flex-col items-center">
        <img src="https://logohistory.net/wp-content/uploads/2023/07/Pinterest-Logo.svg" alt="pinterest" width="100" />
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row gap-2 ml-7 mt-2" >
            <div>
              <button id="button" className="rounded-full bg-black px-3 text-white py-2 " >Home</button>
            </div>
            <div>
              <button id="button" className="rounded-full bg-white px-3 text-black py-2 " >Explore</button>
            </div>
            <div>
              <button id="button" className="rounded-full bg-white px-3 text-black py-2 " >Create</button>
            </div>
            </div>
      <div className="relative ml-7 flex w-full items-center justify-center py-2">
        <input type="text" className="relative w-full rounded-full border bg-gray-200 p-2 px-10 text-black" placeholder="search" />
      </div>
      <div className="absolute inset-x-72 px-2 inset-y-[135px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-gray-500">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <div className="py-4 ml-3 ">
        <button><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell text-gray-500"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>
      </div>
      <div className="py-3 ml-3 ">
       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more text-gray-500">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg></button>
      </div>
      <div className="py-3 mr-4 ml-3">
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round text-gray-500"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></button>
      </div>
      
      </div>
      <div className="ml-4 mr-4 columns-2 sm:columns-3 md:columns-4 lg:columns-6 ">
    
        {
          image.map((imageItem,index)=>(
              <PinterestImage key={index} src={imageItem.src} alt={imageItem.alt} />
          ))
        }
        </div>
        </div>
    </div>
     
       
    )
  }
