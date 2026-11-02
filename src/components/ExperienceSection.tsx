import type { Experience } from "../types/cv";
import "../styles/generalSection.css";

type ExperienceSectionProps = {
  experience: Experience;
  inputChangeHandler: (value: string, fieldName: keyof Experience) => void;
};

function ExperienceSection({ experience, inputChangeHandler }: ExperienceSectionProps) {
  return (
    <fieldset className="general_form">
      <legend>Experience</legend>
      <div className="general_form--experience">
        <label htmlFor="company">Company </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          required
          value={experience.company}
          onChange={(e) => inputChangeHandler(e.target.value, "company")}
        />
      </div>
      <div className="general_form--positon">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          autoComplete="organization-title"
          required
          value={experience.position}
          onChange={(e) => inputChangeHandler(e.target.value, "position")}
        />
      </div>
      <div className="general_form--res">
        <label htmlFor="res">Responsibilities</label>
        <textarea
          name="responsibilities"
          id="res"
          placeholder="type what you do"
          required
          value={experience.responsibilities}
          onChange={(e) => inputChangeHandler(e.target.value, "responsibilities")}
        />
      </div>
      <div className="general_form--period">
        <label htmlFor="start-date">Start date</label>
        <input
          type="date"
          name="startDate"
          id="start-date"
          required
          value={experience.startDate}
          onChange={(e) => inputChangeHandler(e.target.value, "startDate")}
        />
        <label htmlFor="end-date">End date</label>
        <input
          type="date"
          name="endDate"
          id="end-date"
          required
          min={experience.startDate || undefined}
          value={experience.endDate}
          onChange={(e) => inputChangeHandler(e.target.value, "endDate")}
        />
      </div>
    </fieldset>
  );
}

export default ExperienceSection;
