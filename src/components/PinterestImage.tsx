
interface PinterestImageProps{
    src: string;
    alt : string; 

}


export default function PinterestImage({src, alt}:PinterestImageProps) {

 


  return (
    
    <img  className="mb-10 rounded-2xl"src={src} alt={alt} />
   
   
  )
}
