import ExampleTodo from "./components/ExampleTodo";
import {BrowserRouter as Router , Route ,Link,Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import GoogleSearch from "./components/GoogleSearch";
import Pinterest from "./components/Pinterest";
import BlogById from "./components/BlogById";
import AddTodo from "./components/AddTodo";




export default function App() {

  
  return (
   <Router>
    <div className="flex items-center justify-center">
   <nav>
                    <ul className="flex flex-row gap-3 underline text-blue-500">
                     <li>
                      <Link to="/exampletodo">ExampleTodo</Link>
                     </li>
                     <li>
                      <Link to="/counter">Counter</Link>
                     </li>
                     <li>
                      <Link to="/GoogleSearch">GoogleSearch</Link>
                     </li>
                     <li>
                      <Link to="/pinterest">Pinterest</Link>
                     </li>
                     <li>
                      <Link to="/blog/:id">Blog Details</Link>
                     </li>
                     <li>
                      <Link to="/addtodo">Add Todo</Link>
                     </li>

                    </ul>


   </nav>
   </div>
   <Routes>
               <Route path="/exampletodo" Component ={ExampleTodo}/>
               <Route path="/counter" Component ={Counter}/>
               <Route path="/GoogleSearch" Component ={GoogleSearch}/>
               <Route path="/pinterest" Component ={Pinterest}/>
               <Route path="/blog/:id" Component ={BlogById}/>
               <Route path="/addtodo" Component ={AddTodo}/>
   
   </Routes>
   
   </Router>
  );
}