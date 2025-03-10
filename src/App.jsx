// import './App.css'

import { useRef, useState } from "react";

function App() {
  const title = useRef();
  const des = useRef();
  const [todo, setToto] = useState([]);
  function addTodo(event) {
    event.preventDefault();
    console.log("hello world");
    console.log(title.current.value);
    console.log(des.current.value);
    todo.push({
      title: title.current.value,
      des: des.current.value,
      id: Date.now(),
    });
    setToto([...todo]);
    title.current.value = "";
    des.current.value = "";
  }
  const delTodo = (index) => {
    console.log(index);
    todo.splice(index, 1);
    setToto([...todo]);
  };
  const editTodo = (index) => {
    console.log(index);
    const updateVal = prompt(
      "change the blog and update it. What's in your mind now."
    );
    todo[index].des = updateVal;
    setToto([...todo]);
  };
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333" }}>Todo-App</h1>
      <form
        onSubmit={addTodo}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          display: "inline-block",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          ref={title}
          style={{
            width: "80%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
            border: "1px solid black",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter what's in your mind"
          ref={des}
          style={{
            width: "80%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            fontSize: "16px",
            outline: "none",
            border: "1px solid black",
          }}
        />
        <br />
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            margin: "10px 5px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add todo
        </button>
      </form>
      <div>
        {todo.length > 0 ? (
          todo.map((item, index) => {
            return (
              <div
                key={item.id}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  width: "60%",
                  textAlign: "left",
                  margin: "20px auto",
                }}
              >
                <h3 style={{ margin: 0, color: "#333" }}>
                  Title: {item.title}
                </h3>
                <h3 style={{ margin: "10px 0", color: "#333" }}>
                  Description: {item.des}
                </h3>
                <button
                  onClick={() => delTodo(index)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    margin: "10px 5px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => editTodo(index)}
                  style={{
                    backgroundColor: "#ffc107",
                    color: "black",
                    border: "none",
                    padding: "10px 20px",
                    margin: "10px 5px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })
        ) : (
          <h1 style={{ color: "#555" }}>No todo found...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
