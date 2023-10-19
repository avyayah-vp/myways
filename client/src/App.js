import './App.css';
import Chatroom from './components/Chatroom';
import Taskboard from './components/Taskboard';

function App() {
  return (
    <div className="App">
      <div className="chatroom-container">
        <Chatroom />
      </div>
      <div className="taskboard-container">
        <Taskboard />
      </div>
    </div>
  );
}

export default App;
