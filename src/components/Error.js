import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <>
        <div className="error-container">
            <h3>{err.status}</h3>
            <h1>oops!!!</h1>
            <h2>Page not found try again</h2>
        </div>
        </>
    );
}

export default Error;