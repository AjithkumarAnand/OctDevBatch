import { useNavigate } from "react-router-dom";

function HomeComponent(props) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <h4 className="homee pt-4">Welcome {props.params.name}</h4>
        <div className="btnList">
          <button
            className="btn btn-primary col-2 "
            onClick={() => navigate("/list")}
          >
            Go to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
