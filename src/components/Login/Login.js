import { useNavigate } from "react-router";

export default function Login({ authed,  setAuthed }) {
  const navigate = useNavigate();

  function onLogin() {
    setAuthed(true);
    navigate('/profile');
  }

  return (
    <div>
      <h1>
        Login page!
        is Authed? {authed ? 'Yes' : 'No'}
      </h1>
      <button onClick={onLogin}>
        Login
      </button>
    </div>
    
  )
}