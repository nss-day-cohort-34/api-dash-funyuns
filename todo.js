const placingTodos = document.querySelector("#todo__List")

const todoFetcher = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(todos => todos.json())
        .then(arrayOfTodos => {
            for (const todo of arrayOfTodos) {
                if(todo.id < 30) { const convertedTodo = todoConverter(todo)
                displayTodoInDOM(convertedTodo)}
            }
        })
}

todoFetcher()

const todoConverter = (todoObject) => {
    return `
    <section class="todo">
    <h1 class="todo__name">${todoObject.title}</h1>
    <h2 class="todo__complete">${todoObject.completed}</h2>
    </section>
    `
}

const displayTodoInDOM = (todoHTMLRep) => {
    placingTodos.innerHTML += todoHTMLRep
}