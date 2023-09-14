import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    glucoseLevel: '',
    insulinLevel: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App">
      <h1>Diabetes Input Form</h1>
      <form>
        <label>Glucose Level:</label>
        <input
          type="text"
          name="glucoseLevel"
          value={formData.glucoseLevel}
          onChange={handleChange}
        />

        <label>Insulin Level:</label>
        <input
          type="text"
          name="insulinLevel"
          value={formData.insulinLevel}
          onChange={handleChange}
        />
      </form>

      <div className="result">
        <h2>Input Result:</h2>
        <p>Glucose Level: {formData.glucoseLevel}</p>
        <p>Insulin Level: {formData.insulinLevel}</p>
      </div>
    </div>
  );
}

export default App;
