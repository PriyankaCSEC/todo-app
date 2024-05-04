import { useEffect, useState } from 'react';

interface Todo {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
}

export default function ExampleTodo() {
    const auth_token = '123tyuhjtyfuimi9iygu456dfghjk67njk';
    const [todos, setTodos] = useState<Todo[]>([]);
    


    useEffect(() => {
        // api for todo // useEffect is called once DOM is loaded
        fetch('/api/detail/sql/get-all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth_token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setTodos(data.results))
            .finally(() => console.log('Finally API request completed'));
    }, []);

    return (
        <div className="flex flex-col gap-7 m-5">
            <h1 className="font-bold text-2xl">Blogs Lists:</h1>
              <div className="flex flex-col gap-2">
            {
            
            todos.map((todo) => {
                return <div className='text-xl' key={todo.id}>{todo.title}</div>;
            })}
              </div>

        </div>
    );
}
