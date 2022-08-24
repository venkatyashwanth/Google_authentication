import './App.css';
import { useState } from 'react';
import { app } from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function App() {
  let auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [data, setData] = useState('');

  const handleInput = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const sendData = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <form onSubmit={sendData}>
        <h2>SignUp With Google</h2>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div>
          <label htmlFor="password">Passw: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
