import "../styles/generalSection.css";

import type { GeneralInfo } from "../types/cv";

type GeneralSectionProps = {
  generalInfo: GeneralInfo;
  inputChangeHandler: (
    inputValue: string,
    nameValue: keyof GeneralInfo,
  ) => void;
  onSubmitHandler: () => void;
};

function GeneralSection({
  generalInfo,
  inputChangeHandler,
}: GeneralSectionProps) {
  return (
    <fieldset className="general_form">
      <legend>About</legend>
      <div className="general_form--name">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="given-name"
          required
          value={generalInfo.name}
          onChange={(e) => inputChangeHandler(e.target.value, "name")}
        />
      </div>
      <div className="general_form--email">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          value={generalInfo.email}
          onChange={(e) => inputChangeHandler(e.target.value, "email")}
        />
      </div>
      <div className="general_form--phone">
        <label htmlFor="phone">Phone </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          required
          value={generalInfo.phone}
          onChange={(e) => inputChangeHandler(e.target.value, "phone")}
        />
      </div>
    </fieldset>
  );
}

export default GeneralSection;
