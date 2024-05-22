import React from "react"
import {TodoRowItems} from "./TodoRowItem"

export const  TodoTable: React.FC<{todo: TodoModel[], deleteTodo: Function}> = (props)  => {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todo.map(todo  => (
                    <TodoRowItems 
                                key={todo.rowNumber}
                                rowNumber = {todo.rowNumber}
                                rowDescription = {todo.rowDescription}
                                rowAssigned = {todo.rowAssigned}
                                deleteTodo={props.deleteTodo}
                                /> 
                ))}
            </tbody>

        </table>
    )
}

