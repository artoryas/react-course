import { BrowserRouter as Router, Routes, Route,  Link, Outlet, Navigate } from 'react-router-dom';

import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

import './App.css';
import Messages from './components/Messages/Messages';
import Photos from './components/Photos/Photos';
import { useState } from 'react';

export default function App() {
  const [authed, setAuthed] = useState(false);

  return (
    <main>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/content">
                Content
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={
            <CheckForAuth authed={authed}>
               <Profile />
               <h1>Hello!</h1>
            </CheckForAuth>
          } />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/content" element={<Layout />} >
            <Route path="messages" element={<Messages />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  )
}

function CheckForAuth({ authed, children }) {
  return authed ?
        children :
        <Navigate to="/login" replace />
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="messages">
              Messages
            </Link>
          </li>
          <li>
            <Link to="photos">
              Photos
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}