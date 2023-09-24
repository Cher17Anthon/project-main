import React, { useState } from 'react';

const MainDashboard = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const [sprintInfo, setSprintInfo] = useState('');
  const [activeTab, setActiveTab] = useState('product');

  const [selectedUser, setSelectedUser] = useState('');
  const [showTeamStats, setShowTeamStats] = useState(false);

  const handleUserStats = (user) => {
    setSelectedUser(user);
    setShowTeamStats(false);
  };

  const handleTeamStats = () => {
    setSelectedUser('');
    setShowTeamStats(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const addCompletedTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
  };

  const renderStatsChart = () => {
    return <div>Stats Chart</div>;
  };

  return (
    <div>
      <h1>Главная (Рабочий стол)</h1>
      <div>
        <h2>Список выполненных задач:</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>

        <h2>Информация о текущем спринте:</h2>
        <p>{sprintInfo}</p>

        <h2>Вкладки:</h2>
        <div>
          <button onClick={() => handleTabChange('product')}>Product</button>
          <button onClick={() => handleTabChange('backlog')}>Backlog</button>
        </div>

        <h2>Выбор пользователя и команды:</h2>
        <div>
          <button onClick={() => handleUserStats('user1')}>User 1</button>
          <button onClick={() => handleUserStats('user2')}>User 2</button>
          <button onClick={() => handleTeamStats()}>All Team</button>
        </div>

        <h2>Статистика:</h2>
        {showTeamStats ? (
          <p>Статистика всей команды</p>
        ) : (
          <p>Статистика пользователя: {selectedUser}</p>
        )}
      </div>

      <div>{renderStatsChart()}</div>
    </div>
  );
};

export default MainDashboard;