import '../styles/Experience.css'

export default function Experience({ data, onChange, onAdd, onDelete}) {
  return (
    <div className="experience">
      <fieldset>
        <legend>Experience</legend>
        {data.map((info) => {
          return (
            <ListItem
              dataLength={data.length}
              data={info}
              onChange={onChange}
              onDelete={onDelete}
              key={info.id}
            />
          );
        })}
        <div className="addButton">
          <button type="button" onClick={onAdd}>
            Add
          </button>
        </div>
      </fieldset>
    </div>
  );
}

function ListItem({ dataLength, data, onChange, onDelete }) {
  function handleOnChange(e, id) {
    const key = e.target.name;
    const value = e.target.value;

    onChange(id, key, value);
  }

  return (
    <div className="expField">
      <div className="inputFields">
        <div className="field">
          <label htmlFor={"company-" + data.id}>Company Name: </label>
          <input
            type="text"
            name="company"
            id={"company-" + data.id}
            defaultValue={data.company}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"position-" + data.id}>Position: </label>
          <input
            type="text"
            name="position"
            id={"position-" + data.id}
            defaultValue={data.position}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"responsibilities-" + data.id}> Responsibilities:{' '}</label>
          <input
            type="text"
            name="responsibilities"
            id={"responsibilities-" + data.id}
            defaultValue={data.responsibilities}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"startDate-" + data.id}> Start Date: </label>
          <input
            type="date"
            min="1900"
            max="2100"
            name="startDate"
            id={"startDate-" + data.id}
            defaultValue={data.startDate}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"endDate-" + data.id}>End Date: </label>
          <input
            type="date"
            min="1900"
            max="2100"
            name="endDate"
            id={"endDate-" + data.id}
            defaultValue={data.endDate}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
      </div>
      {dataLength > 1 && (
        <div className="deleteButton">
          <button type="button" onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
