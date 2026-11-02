import Button from "./Button";
import "../styles/cvResult.css";
import type { GeneralInfo, Education, Experience } from "../types/cv";

type cvResultsType = {
  generalInfo: GeneralInfo;
  education: Education;
  experience: Experience;
  onEdit: () => void;
};

function CvResult({ generalInfo, education, experience, onEdit }: cvResultsType) {
  return (
    <div className="cv-result">
      <article className="resume" aria-label="Your CV">
        <header className="resume__header">
          <h1>{generalInfo.name}</h1>
          <p>{experience.position}</p>
        </header>
        <div className="resume__columns">
          <aside className="resume__contact" aria-label="Contact information">
            <h2>Contact</h2>
            <dl>
              <div><dt>Phone</dt><dd><a href={`tel:${generalInfo.phone}`}>{generalInfo.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${generalInfo.email}`}>{generalInfo.email}</a></dd></div>
            </dl>
          </aside>
          <div className="resume__main">
            <section className="resume__section">
              <h2>Experience</h2>
              <p className="resume__date"><time dateTime={experience.startDate}>{experience.startDate}</time> – <time dateTime={experience.endDate}>{experience.endDate}</time></p>
              <h3>{experience.position}</h3>
              <p className="resume__organization">{experience.company}</p>
              <p className="resume__responsibilities">{experience.responsibilities}</p>
            </section>
            <section className="resume__section">
              <h2>Education</h2>
              <p className="resume__date"><time dateTime={education.studyDate}>{education.studyDate}</time></p>
              <h3>{education.studyTitle}</h3>
              <p className="resume__organization">{education.school}</p>
            </section>
          </div>
        </div>
      </article>
      <div className="cv-result__actions">
        <Button type="button" onClickHandler={onEdit}>Edit CV</Button>
      </div>
    </div>
  );
}

export default CvResult;
