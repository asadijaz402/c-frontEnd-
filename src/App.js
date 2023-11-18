import logo from './logo.svg';
import './App.css';
import UserManagement from './components/UserManagement';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <h1 className="text-3xl font-bold underline" >User Management Interface</h1>
      <UserManagement />
      <Dashboard />
    </div>
  );
}

export default App;
