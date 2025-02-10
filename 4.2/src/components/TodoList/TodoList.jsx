import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import s from "./TodoList.module.css";

// export const TodoList = () => {
//   const [todos, setTodos] = useState(() => {
//     //1.ідемо в local storage
//     //2.забираємо по ключу значення
//     //3.приводимо його в парс
//     //4.перевіряємо довжину
//     //5.якщо є довжина повертаємо наш масив
//     //6.інакше повернемо дефолтне значення
//     const savedData = JSON.parse(localStorage.getItem('todos'));
//     if (savedData?.length) {
//       return savedData;
//     }
//     return [];
//   });
const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);
//ще один спосіб
  const [newValue, setNewValue] = useState("");


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const handleDelete = (id) => {
    const newData = todos.filter((item) => item.id !== id);

    setTodos(newData);
  };

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newValue,
    };
    setTodos((prev) => [...prev, newObj]);
  };
  //додає тест після кнопки ADD

  return (
    <div>
      <div className="flex">
        <input
          onChange={(e) => setNewValue(e.target.value)}
          className={s.input}
        />
        <button onClick={addTodo} className="btn border">
          Add
        </button>
      </div>

      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};
