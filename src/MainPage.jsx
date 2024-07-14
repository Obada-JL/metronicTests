import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="d-flex gap-3">
      <Link to={"/charts"}>Charts</Link>
      <Link to={"/lists"}>Lists</Link>
      <Link to={"/forms"}>Forms</Link>
      <Link to={"/wizard"}>Wizard</Link>

      {/* <KTIcon iconName="information-5" className="fs-2tx text-warning me-4" /> */}
      <i className="ki-duotone ki-chart">
        <i className="path1"></i>
        <i className="path2"></i>
      </i>

      <i className="ki-solid ki-chart"></i>

      <i className="ki-outline ki-chart"></i>
    </div>
  );
}
export default MainPage;
