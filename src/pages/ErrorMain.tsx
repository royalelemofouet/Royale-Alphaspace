import { Link, useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";
const ErrorMain = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div className="section flex flex-col gap-10 items-start">
    <h4> The was an error ........</h4>
    <Button asChild size = {"lg"} variant= {"default"}>
        <Link to = "/">Back Home</Link>
    </Button>
    </div>
  );

};

export default ErrorMain;
