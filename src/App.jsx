import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css'
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (mailboxes) => {
    setMailboxes([...mailboxes, newMailbox]); 
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Mailbox List</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
};

export default App;


