import GeneralInfoForm from "./components/GeneralForm";
import CvResult from "./components/CvResult";
import { useState } from "react";

import type { GeneralInfo } from "./types/cv";

import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function inputChange(
    inputValue: string,
    fieldName: keyof GeneralInfo,
  ) {
    setGeneralInfo({ ...generalInfo, [fieldName]: inputValue });
  }
  function onSubmitHandler() {
    setIsEditing(false)
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
            Build your CV easily with this React CV Builder — just fill in your
            details, edit them anytime, and get a clean, ready-to-download
            resume in seconds.
          </p>
        </div>
      </header>
      <main>
        <section className="form-section">
          <div className="general-information">
            {isEditing && (
              <GeneralInfoForm
                generalInfo={generalInfo}
                inputChangeHandler={inputChange}
                onSubmitHandler={onSubmitHandler}
              />
            )}
          </div>
          <div className="educational-experience"></div>
          <div className="practical-experience"></div>
        </section>
        <section className="cv-section">
          {!isEditing && <CvResult generalInfo={generalInfo} onEdit={onEdit} />}
        </section>
      </main>
    </>
  );
}

export default App;
