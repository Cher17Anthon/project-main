import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes} from 'react-router-dom';
import MainDashboard from './Home/Home';
import ActiveSprintPage from './Sprint/Sprint';
import AddTaskPage from './Admin/Admin';


function App() {
  return (
    <div className="App">
      <h1>Наш аналог jira</h1>
      <Router>
        <div className="router-nav-container">
          <nav className='navigation-menu'>
            <div className='navigation-menu__container'>
              <div>
                <Link to='/home' className='link'>Главная</Link>
              </div>
              <div>
                <Link to='/sprint' className='link'>Активный спринт</Link>
              </div>
              <div>
                <Link to='/admin' className='link'>Панель администратора</Link>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/home' element={<MainDashboard />}/>
          <Route path='/sprint' element={<ActiveSprintPage />}/>
          <Route path='/admin' element={<AddTaskPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
