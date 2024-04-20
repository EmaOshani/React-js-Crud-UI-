import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to react page</h2>
        <button className='users-button' onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
