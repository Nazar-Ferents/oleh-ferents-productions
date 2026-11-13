import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={`flex gap-10`}>
            <div>
            <Link to={'/'}>Oleh Ferents</Link>

            </div>
           <Link to={'/'}>home</Link>
           <Link to={'/gallery'}>gallery</Link>
           <Link to={'/about'}>about</Link>
        </div>
    );
};

export default Header;