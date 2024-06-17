import React from "react";
import { Table, Button, Badge } from "react-bootstrap";

function TodoTable(todos, setTodo) {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Level</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.name}</td>
              <td>{todo.desc}</td>
              <td>{todo.level}</td>
              <td>
                <Badge bg={todo.status === "Pending" ? "warning" : "success"}>
                  {todo.status}
                </Badge>
              </td>
              <td>
                <div className="d-flex">
                  <Button
                    variant="success"
                    className="mx-1"
                    onClick={() => {
                      const updateTodo = [...todos];
                      updateTodo[index].status = "Complete";
                      setTodo(updateTodo);
                    }}
                  >
                    Mark complete
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-1"
                    onClick={() => {
                      const updatedTodos = todos.filter((_, i) => i !== index);
                      setTodo(updatedTodos);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center">
              No todos found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TodoTable;
