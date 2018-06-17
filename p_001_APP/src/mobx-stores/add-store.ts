interface Todo {
    id: number;
    task: string;
    completed: boolean;
    assignee: any;
}

export class TodoStore {
    todos: Array<Todo> = [];

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    };

    report() {
        if (this.todos.length === 0) {
            return 'none'
        }

        return `next todo: ${this.todos[0]}, Progress ${this.completedTodosCount}/${this.todos.length}`
    }

    addTodo(task: string) {
        this.todos.push({
            id: 123,
            task: task,
            completed: false,
            assignee: null
        });
    }
};

