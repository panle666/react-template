import { pathsHelper } from "../../helpers/pathsHelper";

export const HaHa = () => {
  function goHome() {
    pathsHelper.goHome();
  }
  return (
    <div>
      <div>haha</div>
      <div onClick={goHome}>goHome</div>
    </div>
  );
};
