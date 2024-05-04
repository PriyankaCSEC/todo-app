

interface NewsCardProps{
    title: string;
    date: string;
}


export default function NewsCard({title ,date }:NewsCardProps) {
  return (
    <div>
      
    <div className="border shadow-lg flex flex-col gap-8 ">
      <h1 className="text-2xl">{title}</h1>
      <p>{date}</p>
    </div>
    </div>
  )
}
