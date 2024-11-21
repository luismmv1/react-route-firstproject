import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div>
                <h1>404</h1>
                <h2>Error Esta ruta no existe</h2>
                <Link to="/" className="btn btn-dark">Volver al Inicio</Link>
            </div>
        </>
    )
}
export default NotFound;