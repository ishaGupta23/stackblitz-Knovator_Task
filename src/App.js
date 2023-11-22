import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState({
    title: '',
    description: '',
    rating: '0',
  });

  const [feedback, setFeedback] = useState([]);

  function handleSubmit() {
     
      setFeedback([...feedback, data]);

      setData({
        title: '',
        description: '',
        rating: '0',
      });
  }



  function handleReset() {
    setData({
      title: '',
      description: '',
      rating: '0',
    });
  }

  return (
    <div className="App">
      <h1>Give Feedback </h1>

      <div>
        <h2>Title of Content</h2>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          
        /><br/>
        <hr/>
        <textarea
          placeholder="write here"
          rows={5} cols={30}
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        /><br/>
        <input
          placeholder="Give Rating"
          type="number" max={10}
          value={data.rating}
          onChange={(e) => setData({ ...data, rating: e.target.value })}
        />
        <br/>

        <button type="button" onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>

      <hr/>
      <div className="feedbacklist">
        <h1>Feedback Submitted</h1>
        {feedback.map((feedbackItem, index) => (
          <div key={index}>
            <h4>{feedbackItem.title}</h4>
            <h5>{feedbackItem.description}</h5>
            <h4>{feedbackItem.rating}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
