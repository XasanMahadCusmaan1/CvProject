import Button from "./Button";
import type { GeneralInfo } from "../types/cv";

type cvResultsType = {
  generalInfo: GeneralInfo;
  onEdit: () => void;
};

function CvResult({ generalInfo, onEdit }: cvResultsType) {
  return (
    <section>
      <span>Name : {generalInfo.name}</span><br />
      <span>Email : {generalInfo.email}</span><br />
      <span>Tel : {generalInfo.phone}</span>
      <hr />
      <Button type="button" onClickHandler={onEdit}>
        Edit
      </Button>
    </section>
  );
}

export default CvResult;
