import Button from "./Button";
import "../styles/generalForm.css";

import type { GeneralInfo } from "./types/cv";

type GeneralFormType = {
  generalInfo: GeneralInfo;
  onClickHandler: () => void;
}

function GeneralInfoForm({generalInfo, onClickHandler}: GeneralFormType) {
  return (
    <form className="general_form">
      <fieldset>
        <legend>
          <h2 className="general_form--title">About</h2>
        </legend>
        <div className="general_form--name">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="given-name"
            required
            value={generalInfo.name}
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
          />
        </div>

        <Button type="submit" onClickHandler={onClickHandler}>
          Submit
        </Button>
      </fieldset>
    </form>
  );
}

export default GeneralInfoForm;
