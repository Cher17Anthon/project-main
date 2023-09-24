import React, { useState } from 'react';

const AddTaskPage = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskSubtitle, setTaskSubtitle] = useState('');
  const [taskAuthor, setTaskAuthor] = useState('');
  const [taskExecutor, setTaskExecutor] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskId, setTaskId] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [observers, setObservers] = useState('');
  const [sprintName, setSprintName] = useState('');
  const [sprintGoal, setSprintGoal] = useState('');
  const [sprintDuration, setSprintDuration] = useState('');
  const [sprintStartDate, setSprintStartDate] = useState('');
  const [sprintEndDate, setSprintEndDate] = useState('');
  const [participants, setParticipants] = useState([]);

  const addTask = () => {
    if (
      taskTitle &&
      taskSubtitle &&
      taskAuthor &&
      taskExecutor &&
      taskTime &&
      taskDescription &&
      taskId
    ) {
      const newTask = {
        title: taskTitle,
        subtitle: taskSubtitle,
        author: taskAuthor,
        executor: taskExecutor,
        time: taskTime,
        description: taskDescription,
        id: taskId,
        additionalComments,
        observers,
      };
      // Add newTask to task list or perform necessary action
      // ...
      alert('Task added successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const addSprint = () => {
    if (sprintName && sprintGoal && sprintDuration && sprintStartDate && sprintEndDate) {
      const newSprint = {
        name: sprintName,
        goal: sprintGoal,
        duration: sprintDuration,
        startDate: sprintStartDate,
        endDate: sprintEndDate,
      };
      // Add newSprint to sprint list or perform necessary action
      // ...
      alert('Sprint added successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const addParticipant = () => {
    // Validate that required fields are filled
    const isRequiredFieldsFilled = participants.every(
      (participant) => participant.name && participant.position && participant.department
    );

    if (isRequiredFieldsFilled) {
      // Add new participant to participants list
      const newParticipant = {
        name: '',
        position: '',
        department: '',
      };
      setParticipants([...participants, newParticipant]);
    } else {
      alert('Please fill in all the required fields for the participant.');
    }
  };

  return (
    <div>
      <h1>Добавление задачи</h1>
      <div>
        {/* Fields for adding a task */}
      </div>

      <button onClick={addTask}>Добавить задачу</button>

      <h1>Добавление спринта</h1>
      <div>
        {/* Fields for adding a sprint */}
      </div>

      <button onClick={addSprint}>Добавить спринт</button>

      {/* Participant component */}
      <div>
        {/* Fields for adding a participant */}
        <button onClick={addParticipant}>Добавить участника</button>
      </div>
    </div>
  );
};

export default AddTaskPage;