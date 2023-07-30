'use strict';

{
  let todos = [
    {id: 0, title: 'aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa', isCompleted: false},
    {id: 1, title: 'bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb', isCompleted: false},
    {id: 2, title: 'ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc', isCompleted: false},
  ];

  const renderTodo = (todo) => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = todo.isCompleted;
    input.addEventListener('change', () => {
      todos.forEach((item) => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted;
        }
      });
    });
    const span = document.createElement('span');
    span.textContent = todo.title;
    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(span);
    const button = document.createElement('button');
    button.textContent = 'Del';
    button.addEventListener('click', () => {
      if (!confirm('Sure?')) {
          return;
      }
      li.remove();
      todos = todos.filter((item) => {
        return item.id !== todo.id;
      });
    });
    const li = document.createElement('li');
    li.appendChild(label);
    li.appendChild(button);
    document.querySelector('#todos').appendChild(li);
  };

  const renderTodos = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };

  document.querySelector('#add-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#add-form input');
    const todo = {
      id: Date.now(),
      title: input.value,
      isCompleted: false,
    };
    renderTodo(todo);
    todos.push(todo);
    input.value = '';
    input.focus();
  });

  document.querySelector('#purge').addEventListener('click', () => {
    if (!confirm('Sure?')) {
      return;
    }
    todos = todos.filter((todo) => {
      return todo.isCompleted === false;
    });
    document.querySelectorAll('#todos li').forEach((li) => {
      li.remove();
    });
    renderTodos(todos);
  });

  renderTodos();
}