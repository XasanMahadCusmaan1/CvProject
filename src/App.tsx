import GeneralSection from "./components/GeneralSection";
import CvResult from "./components/CvResult";
import { useState } from "react";
import Button from "./components/Button";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import type { GeneralInfo, Education, Experience } from "./types/cv";

import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const [education, setEducation] = useState<Education>({
    school: "",
    studyTitle: "",
    studyDate: "",
  });

  const [experience, setExperience] = useState<Experience>({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  function educationChange(value: string, fieldName: keyof Education) {
    setEducation((previous) => ({ ...previous, [fieldName]: value }));
  }

  function experienceChange(value: string, fieldName: keyof Experience) {
    setExperience((previous) => ({ ...previous, [fieldName]: value }));
  }

  function inputChange(value: string, fieldName: keyof GeneralInfo) {
    setGeneralInfo((previous) => ({ ...previous, [fieldName]: value }));
  }
  function onSubmitHandler() {
    setIsEditing(false);
  }

  function onEdit() {
    setIsEditing(true);
  }

  return (
    <>
      <header>
        <div className="header-container">
          <h1>CV/Resume Builder</h1>
          <p className="header-description">
            Add your details, review your CV, and return to edit whenever you need.
          </p>
        </div>
      </header>
      <form
        className={`cv-builder ${isEditing ? "cv-builder--editing" : "cv-builder--preview"}`}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <section className="form-section">
          <div className="general-information">
            {isEditing && (
              <GeneralSection
                generalInfo={generalInfo}
                inputChangeHandler={inputChange}
                onSubmitHandler={onSubmitHandler}
              />
            )}
          </div>
          <div className="educational-experience">
            {isEditing && (
              <EducationSection
                education={education}
                inputChangeHandler={educationChange}
              />
            )}
          </div>
          <div className="practical-experience">
            {isEditing && (
              <ExperienceSection
                experience={experience}
                inputChangeHandler={experienceChange}
              />
            )}
          </div>
        </section>
        <section className="cv-section">
          {!isEditing && (
            <CvResult
              generalInfo={generalInfo}
              education={education}
              experience={experience}
              onEdit={onEdit}
            />
          )}
        </section>
        {isEditing && <Button type="submit">Submit</Button>}
      </form>
    </>
  );
}

export default App;
