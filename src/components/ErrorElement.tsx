import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className="section">
    <h4> The was an error ........</h4>
    </div>
  );
};

export default ErrorElement;
