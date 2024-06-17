import { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Table,
  Button,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  // Store state data
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [level, setLevel] = useState("Low");
  const [todos, setTodo] = useState([]);

  const addTodo = () => {
    if (name && desc) {
      const newTodo = { name, desc, level, status: "Pending" };
      setTodo((prevTodo) => [...prevTodo, newTodo]);

      // Clear form input
      setName("");
      setDesc("");
      setLevel("Low");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="">
            <div>
              <h2 className="text-center">Todo App</h2>
              <div className="app-left">
                <div className="">
                  <Row className="mb-2">
                    <Col sm={3} className="d-flex align-item-center">
                      <Form.Label>Name: </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control
                        column
                        sm={7}
                        type="email"
                        placeholder="Job name (ex: Sport time, ...)"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col sm={3} className="d-flex align-item-center">
                      <Form.Label>Description: </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Control
                        column
                        sm={7}
                        type="email"
                        placeholder="Job description (ex: Running, Swimming, ...)"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col sm={3} className="d-flex align-item-center">
                      <Form.Label>Level: </Form.Label>
                    </Col>
                    <Col sm={9}>
                      <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => setLevel(e.target.value)}
                        value={level}
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <Row>
                  <Col sm={12}>
                    <div className="d-flex justify-content-center">
                      <Button
                        className="px-5"
                        variant="success"
                        onClick={addTodo}
                      >
                        Save
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col>
            <h2 className="text-center">Todo List</h2>
            <Row>
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
                          <Badge
                            bg={
                              todo.status === "Pending" ? "warning" : "success"
                            }
                          >
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
                                const updatedTodos = todos.filter(
                                  (_, i) => i !== index
                                );
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
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
