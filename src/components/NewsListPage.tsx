
import NewsCard from './NewsCard'

export default function NewsListPage() {

const news= [{
     title: 'title 1',
     date:'2024-3-4'
},
{
    title: 'title 2',
     date:'2024-3-9'
}]

  return (
    <div>{
            news.map((newsItem, index)=>  (
            
                <NewsCard title={newsItem.title} date={newsItem.date} key={index}/>
            ))
        
        }
      
    </div>
  )
}

