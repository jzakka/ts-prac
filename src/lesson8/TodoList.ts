import { Todo } from "./types.js";

export default class TodoList {
    private static _counter: number = 0;
    constructor(private todos: Todo[] = []) {}

    add(title: string): void {
        this.todos.push({
            id: ++TodoList._counter,
            title: title,
            completed: false,
        })
    }

    toggle(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    getAll(): Todo[] {
        return this.todos;
    }

    getCompleted(): Todo[] {
        return this.todos.filter(todo => todo.completed)
    }

    getPending(): Todo[] {
        return this.todos.filter(todo => !todo.completed)
    }
}


