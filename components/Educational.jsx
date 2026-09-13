import { useState } from 'react'
import '../styles/Educational.css'

export default function Education() {
  const [schoolName, setSchoolName] = useState(' ');
  const [major, setMajor] = useState(' ');
  const [dateOfStudy, setDateOfStudy] = useState(' ');

  return (
    <>
      <h1>Education</h1>
        <label>
          School Name:{' '}
        </label>
        <input
          size='40' 
          type="text"
          className="school name"
          value={schoolName}
          onChange={(event) => setSchoolName(event.target.value)}
        />
        <label>
          Major:{' '}
        </label>
        <input
          size='40'
          type="text"
          className="major"
          value={major}
          onChange={(event) => setMajor(event.target.value)}
        />
        <label>
          Date of Study:{' '}
        </label>
        <input
          size='40'
          type="date"
          className="date-of-study"
          value={dateOfStudy}
          onChange={(event) => setDateOfStudy(event.target.value)}
        />
    </>
  );
}
