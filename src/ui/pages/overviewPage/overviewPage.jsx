import "./overviewPage.css";
import { BsFilterLeft, BsSearch, BsGridFill } from "react-icons/bs";
import { TbColumns } from "react-icons/tb";
import Project from "../../components/overview/project/project";

const OverviewPage = () => {
  return (
    <div id="v_container">
      <div className="view_container">
        <div className="view_topbar">
          <div className="view_search">
            <BsSearch size=".8em" />
            <input type="text" placeholder="Search a Project" />
          </div>
          <div className="view_grid">
            <TbColumns size="1.4em" />
            <BsGridFill />
          </div>
        </div>
        <header className="view_header">
          <h1>Project name</h1>
          <h1>Contact person</h1>
          <h1>Project lead</h1>
          <h1 id="view_progress">
            Progess <BsFilterLeft size="1.2em" />
          </h1>
          <h1 id="view_deadline">Deadline</h1>
        </header>
        <div id="view_project">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
