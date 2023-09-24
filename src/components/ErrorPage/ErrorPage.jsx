import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex justify-center items-center">
                <h2>Oopps !!!</h2>
                <Link to="/"> <button className="btn">Go Back</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;