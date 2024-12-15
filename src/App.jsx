import React, { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import './App.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div className="app-container">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options feedback={feedback} />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
