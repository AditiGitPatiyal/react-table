import { NavLink} from 'react-router-dom'
import './Header.css'
const Header=()=>{
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/products">Products</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </div>    
            </nav>
        </>
    );
}
export default Header