import type { Todo } from "../types";

type TodoItemProps = {
    todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
    return (
      <li>
          <strong>{todo.title}</strong>
          <span>{todo.completed ? "(完了)" : "(未完了)"}</span>
          {todo.dueDate && (
            <span style={{ color: new Date(todo.dueDate) < new Date() ? "red" : "inherit" }}>
              期限: {todo.dueDate}
            </span>
          )}
      </li>
  );
}