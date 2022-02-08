import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1"

// Interface (Used to Define Structure) in TS with datatypes
interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(URL).then(response => {
    // Tell the TS compiler that the response will be a Todo object that we just created above
    const todo = response.data as Todo

    // We can make errors/typos and forget what the actual properties are -> hence we use TS
    const { id, title, completed } = todo
    logTodo(id, title, completed)
    
})

// Need to define type in function defination
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo ID: ${id}
    Title: ${title}
    Completed?: ${completed}
    `)
}