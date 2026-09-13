import { useState } from 'react'
import '../styles/General.css'

export default function General() {
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [telephone, setTelephone] = useState(' ');

  return (
    <>
      <h1>General Information</h1>
        <label>
          First Name:{' '}
        </label>
        <input
          size='30'
          type="text"
          className="first-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label>
          Last Name:{' '}
        </label>
        <input
          size='30'
          type="text"
          className="last-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label>
          Email:{' '}
        </label>
        <input
          size='30'
          type="text"
          className="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>
          Telephone:{' '}
        </label>
        <input
          type="number"
          className="telephone"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
    </>
  );
}
