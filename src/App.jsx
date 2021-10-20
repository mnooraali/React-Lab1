import { Todo } from './Components/Todo';

export const App = () => {
  const todos = [
    { title: "Morning", details: "Drinking Coffee" },
    { title: "Afternoon", details: "Read a Book" },
    { title: "At 5 P.M.", details: "Have Lunch" },
    { title: "At 8 P.M.", details: "Go to GYM" },
    { title: "Before Sleeping", details: "my forth post body" },
  ];
  return (
    <div>
      <h1>My Todo List</h1>

      {todos.map((td) => (
        <Todo title={td.title} details={td.details} />
      ))}

    </div>
  );
};
