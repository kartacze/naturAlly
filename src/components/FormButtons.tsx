import { Button } from "./Button";

export const FormButtons = (): JSX.Element => {
  return (
    <div className="flex items-center justify-end gap-[11px]">
      <div className="sm:flex hidden flex-col items-start gap-2 p-2 relative flex-1 grow">
        <Button type="stroked" >Cancel</Button>
      </div>
      <div className="flex flex-col items-end justify-center gap-2 p-2 relative flex-1 grow">
        <Button type="filled" >Continue</Button>
      </div>
    </div>
  );
};
