import React, { useState } from 'react';

const ActiveSprintPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', assignee: 'User 1', status: 'To Do' },
    { id: 2, title: 'Task 2', assignee: 'User 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', assignee: 'User 1', status: 'Done' },
    // ... other tasks
  ]);

  const [filteredUser, setFilteredUser] = useState('');

  // Функция для отображения доски Канбан с активными задачами
  const renderKanbanBoard = () => {
    // Получаем уникальных участников команды
    const teamMembers = Array.from(new Set(tasks.map((task) => task.assignee)));

    // Фильтруем задачи по выбранному участнику
    const filteredTasks = filteredUser
      ? tasks.filter((task) => task.assignee === filteredUser)
      : tasks;

    return (
      <div>
        {/* Фильтр по участникам команды */}
        <div>
          <button onClick={() => setFilteredUser('')}>All Members</button>
          {teamMembers.map((member) => (
            <button key={member} onClick={() => setFilteredUser(member)}>
              {member}
            </button>
          ))}
        </div>

        {/* Доска Канбан */}
        <div>
          <div>
            <h3>To Do</h3>
            {filteredTasks
              .filter((task) => task.status === 'To Do')
              .map((task) => (
                <div key={task.id}>{task.title}</div>
              ))}
          </div>
          <div>
            <h3>In Progress</h3>
            {filteredTasks
              .filter((task) => task.status === 'In Progress')
              .map((task) => (
                <div key={task.id}>{task.title}</div>
              ))}
          </div>
          <div>
            <h3>Done</h3>
            {filteredTasks
              .filter((task) => task.status === 'Done')
              .map((task) => (
                <div key={task.id}>{task.title}</div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Активный спринт</h1>
      {renderKanbanBoard()}
    </div>
  );
};

export default ActiveSprintPage;