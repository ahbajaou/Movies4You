import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/" className="logo">Movie4You</Link>
            </div>
            <div>
                <Link to="/" className="nav" >Home</Link>
                <br></br>
                <Link to="/favo" className="" >Favorite</Link>
            </div>
        </nav>
    );
}
export default Navbar;