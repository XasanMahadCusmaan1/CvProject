import Button from "./Button";
import type { GeneralInfo } from "../types/cv";

type cvResultsType = {
  generalInfo: GeneralInfo;
  onEdit: () => void;
};

function CvResult({ generalInfo, onEdit }: cvResultsType) {
  return (
    <section>
      <span>Person Name : {generalInfo.name}</span>
      <span>Person Email : {generalInfo.email}</span>
      <span>Person Tel : {generalInfo.phone}</span>
      <Button type="button" onClickHandler={onEdit}>
        Edit
      </Button>
    </section>
  );
}

export default CvResult;
