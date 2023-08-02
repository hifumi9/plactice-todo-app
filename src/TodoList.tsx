import { useState } from "react";
import todoData from "./assets/data/todos.json";

type Todo = {
  id: number;
  title: string;
  description: string;
};

export const TodoList = () => {
  const [todos, setTodos] = useState(todoData);

  // console.log(Object.entries(todoData));

  Object.entries(todoData).map((value: [string, Todo]) => {
    console.log(value[1].title);
  });

  return (
    <>
      <div>
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.title + ":" + todo.description}</span>
            </li>
          );
        })}
      </div>
    </>
  );
};
