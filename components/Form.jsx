import { useState } from 'react'
import General from './General'
import Education from './Educational'
import Experience from './Experience'
import '../styles/Form.css'

export default function Form({ onSubmit, information }) {
  const [general, setGeneral] = useState(information.general);
  const [education, setEducation] = useState(information.education);
  const [experience, setExperience] = useState(information.experience);

  function updateGeneralValue(key, value) {
    setGeneral((prev) => ({ ...prev, [key]: value }));
  }

  function updateEducationValue(id, key, value) {
    setEducation((prev) => prev.map((data) => (data.id === id ? { ...data, [key]: value } : data)),
    );
  }

  function updateExperienceValue(id, key, value) {
    setExperience((prev) => prev.map((data) => (data.id === id ? { ...data, [key]: value } : data)),
    );
  }

  function addEducation() {
    setEducation((prev) => [
      ...prev,
      { id: crypto.randomUUID(), school: '', major: '', date: '' },
    ]);
  }

  function addExperience() {
    setExperience((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
      },
    ]);
  }

  function deleteEducation(id) {
    setEducation((prev) => prev.filter((data) => data.id !== id));
  }

  function deleteExperience(id) {
    setExperience((prev) => prev.filter((data) => data.id !== id));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit({ general, education, experience });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <General data={general} onChange={updateGeneralValue} />
      <Education 
        data={education}
        onChange={updateEducationValue}
        onAdd={addEducation}
        onDelete={deleteEducation}
      />
      <Experience
        data={experience}
        onChange={updateExperienceValue}
        onAdd={addExperience}
        onDelete={deleteExperience}
      />
      <div className="submitButton">
        <button>Submit</button>
      </div>
    </form>
  );
}
