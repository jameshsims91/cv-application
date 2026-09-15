import '../styles/General.css'

export default function General({ data, onChange }) {
  function handleOnChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    onChange(key, value);
  }

  return (
    <div className="gen">
      <fieldset>
        <legend>General Information</legend>
        <div className="general-inputFields">
          <div className="field">
            <label htmlFor="first">First Name: </label>
            <input
              type="text"
              id="first"
              name="first"
              defaultValue={data.first}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="last">Last Name: </label>
            <input
              type="text"
              id="last"
              name="last"
              defaultValue={data.last}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="number">Number: </label>
            <input
              type="tel"
              id="number"
              name="number"
              defaultValue={data.number}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
