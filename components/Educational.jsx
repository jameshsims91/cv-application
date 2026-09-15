import '../styles/Educational.css'

export default function Education({ data, onChange, onAdd, onDelete }) {
  
  return (
    <div className="edu">
      <fieldset>
        <legend>Education</legend>
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
    <div className="eduField">
      <div className="inputFields">
        <div className="field">
          <label htmlFor={"school-" + data.id}>School Name: </label>
          <input
            type="text"
            name="school"
            id={"school-" + data.id}
            defaultValue={data.school}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"major-" + data.id}>Major: </label>
          <input
            type="text"
            name="major"
            id={"major-" + data.id}
            defaultValue={data.major}
            onChange={(e) => handleOnChange(e, data.id)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor={"date-" + data.id}>Date Graduated: </label>
          <input
            type="date"
            min='1900'
            max='2100'
            name="date"
            id={"date-" + data.id}
            defaultValue={data.date}
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
