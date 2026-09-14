// import General from '../components/General'
// import Education from '../components/Educational'
// import './App.css'
// import Experience from '../components/Experience';

// function App() {
//   return (
//     <div className="populate">
//       <General />
//       <Education />
//       <Experience />
//     </div>
//   );
// }

import { useState } from "react";
import Form from "../components/Form";
import Display from "../components/Display";
import "./App.css";

const informationTemplate = {
  general: { name: "", email: "", contact: "" },
  education: [{ id: crypto.randomUUID(), school: "", study: "", year: "" }],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ],
};

function App() {
  const [information, setInformation] = useState(() => {
    try {
      const localInformation = localStorage.getItem("cvInformation");
      return localInformation
        ? JSON.parse(localInformation)
        : informationTemplate;
    } catch (error) {
      console.error("Failed to load local storage: ", error);
      return informationTemplate;
    }
  });

  const [displayForm, setDisplayForm] = useState(true);

  function onSubmit(data) {
    setInformation(data);
    setDisplayForm(false);
    localStorage.setItem("cvInformation", JSON.stringify(data));
  }

  function onEdit() {
    setDisplayForm(true);
  }

  return displayForm ? (
    <Form information={information} onSubmit={onSubmit} />
  ) : (
    <Display information={information} onEdit={onEdit} />
  );
}

export default App;
