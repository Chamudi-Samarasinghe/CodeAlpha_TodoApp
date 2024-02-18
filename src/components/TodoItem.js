import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={task.completed}
          onChange={handleChange}
          color="primary"
          
        />
        <Typography
          style={{ color: task.completed ? '#888' : 'inherit', textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </Typography>
      </div>
      <Button
        //size="small"
        //variant="outlined"
        color="secondary"
        onClick={() => deleteTask(task.id)}
        style = {{marginLeft:'5px', color:'red', size:'20px', borderBlockColor:'red', fontWeight:'bold'}}
      >
        X
      </Button>
    </div>
  );
}

export default TodoItem;

