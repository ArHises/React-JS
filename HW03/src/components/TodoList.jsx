import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const card = (task) => {
    return (
      <>
        <CardContent>
          <Typography style={{ wordWrap: "break-word" }} variant="body2">
            {task}
          </Typography>
        </CardContent>
      </>
    );
  };

  return (
    <>
      <TextField
        id="outlined-task-input"
        label="Task"
        multiline
        maxRows={4}
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button variant="outlined" onClick={addTask}>
        Add Task
      </Button>
      {tasks.map((task, index) => (
        <div style={({ display: "flex" }, { flexwrap: "wrap" })} key={index}>
          <Card sx={{ maxWidth: 275 }} variant="outlined">
            {card(task)}
          </Card>
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeTask(index)}
          >
            Delete
          </Button>
        </div>
      ))}
    </>
  );
}
