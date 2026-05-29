import { useState, useRef } from "react";
import "./App.css";
import DropdownSection from "./components/DropdownSection";
import sections from "./data.js";
import InputForm from "./components/InputForm";
import CVResume from "./components/CVResume.jsx";
import Preview from "./components/Preview.jsx";
//import Experience from "./components/Experience.jsx";

function App() {
  const [personal, setPersonal] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const detailsRefs = useRef({});

  const [experience, setExperience] = useState([
    {
      position: "Software Engineer Intern",
      company: "Microsft",
      city: "Redmond",
      state: "Washington",
      date: "May 2026",
      isEditing: false,
    },
  ]);

  const [education, setEducation] = useState([
    {
      position: "",
      company: "",
      city: "",
      state: "",
      date: "",
      isEditing: false,
    },
  ]);

  const [skills, setSkills] = useState([
    {
      position: "",
      company: "",
      city: "",
      state: "",
      date: "",
      isEditing: false,
    },
  ]);

  const [draft, setDraft] = useState({});

  const formData = { personal, experience, education, skills, draft };

  const setterMap = {
    experience: setExperience,
    education: setEducation,
    skills: setSkills,
  };

  const dataMap = {
    experience,
    education,
    skills,
  };

  function handleAddNew(section) {
    setIsAdding(true);
    setDraft({});
    if (section.type == "multi") {
      const setter = setterMap[section.key];
      setter((prev) => [...prev, { isEditing: true }]);
    }
  }

  function handleSave(section) {
    if (section.type == "multi") {
      const setter = setterMap[section.key];
      setter((prev) =>
        prev.map((item) =>
          item.isEditing ? { ...draft, isEditing: false } : item,
        ),
      );
    }
    setIsAdding(false);
    setDraft({});
  }

  function handleStateChange(section, name, value) {
    if (section.type == "multi") {
      setDraft((prev) => ({ ...prev, [name]: value }));
    } else {
      setPersonal((prev) => ({ ...prev, [name]: value }));
    }
  }

  return (
    <>
      {sections.map((section) => (
        <DropdownSection
          key={section.key}
          title={section.title}
          ref={(el) => (detailsRefs.current[section.key] = el)}
          onToggle = {(e) =>{
            if(e.target.open){
              setIsAdding(false)
              Object.entries(detailsRefs.current).forEach(([key, el]) =>{
                if(key != section.key) el.open = false;
              })
            }
          }}
        >
          {!isAdding &&
            section.type == "multi" &&
            dataMap[section.key].map((input, index) => (
              <Preview key={index} name={input[section.previewField]} />
            ))}
          {!isAdding && (
            <button onClick={() => handleAddNew(section)}>
              Edit
            </button>
          )}
          <form>
            {isAdding && (
              <>
                {section.fields.map((field) => (
                  <InputForm
                    key={field.name}
                    title={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    inputValue={
                      section.type == "single"
                        ? personal[field.name] || ""
                        : draft[field.name] || ""
                    }
                    onChange={(e) =>
                      handleStateChange(section, field.name, e.target.value)
                    }
                  />
                ))}
                <button type="button" onClick={() => handleSave(section)}>
                  Save
                </button>
              </>
            )}
          </form>
        </DropdownSection>
      ))}
      <CVResume formData={formData} draftInput={draft}></CVResume>
    </>
  );
}
export default App;
