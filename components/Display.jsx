import '../styles/Display.css'

export default function Display({ information, onEdit }) {
  return (
    <div className="display">
      <General data={information.general} />
      <Education data={information.education} />
      <Experience data={information.experience} />
      <div className="editButton">
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

function General({ data }) {
  return (
    <div className="general-block">
      <h2>General</h2>
      <div className="info">
        <span className="label">First Name: </span> {data.first}
      </div>
      <div className="info">
        <span className="label">Last Name: </span> {data.last}
      </div>
      <div className="info">
        <span className="label">Email: </span> {data.email}
      </div>
      <div className="info">
        <span className="label">Number: </span> {data.number}
      </div>
    </div>
  );
}

function Education({ data }) {
  return (
    <div className="section-block">
      <h2>Education</h2>
      {data.map((info) => {
        return (
          <div className="card-content" key={info.id}>
            <div className="info">
              <span className="label">School: </span> {info.school}
            </div>
            <div className="info">
              <span className="label">Major: </span> {info.major}
            </div>
            <div className="info">
              <span className="label">Date Graduated: </span> {info.date}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Experience({ data }) {
  return (
    <div className="experience-block">
      <h2>Experience</h2>
      {data.map((info) => {
        return (
          <div className="card-content" key={info.id}>
            <div className="info">
              <span className="label">Company Name: </span> {info.company}
            </div>
            <div className="info">
              <span className="label">Position: </span> {info.position}
            </div>
            <div className="info">
              <span className="label">From: </span> {info.startDate}
            </div>
            <div className="info">
              <span className="label">To: </span> {info.endDate}
            </div>
            <div className="responsibility-row">
              <span className="label">Responsibilities: </span>{' '} {info.responsibilities}
            </div>
          </div>
        );
      })}
    </div>
  );
}