import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={`flex fixed w-full  justify-between items-center bg-bg/70 backdrop-blur-[8px] border-b border-border
        inset-x-0 top-0 z-50 h-[64px] px-[48px]`}>

            <Link to={'/'} className={`font-primary text-[22px] font-normal text-accent uppercase
            tracking-widest`}>
                Oleh Ferents</Link>

            <nav className={`flex gap-[32px] font-secondary text-[14px] uppercase tracking-wide  
            `}>
                <NavLink to={'/'} className={({isActive})=>`hover:text-accent 
                ${isActive ? `text-text`:'text-muted'}  transition`}>
                    home</NavLink>
                <NavLink to={'/gallery'} className={({isActive})=>`hover:text-accent 
                ${isActive ? `text-text`:'text-muted'} transition`}>
                    gallery</NavLink>
                <NavLink to={'/about'} className={({isActive})=>`hover:text-accent 
                ${isActive ? `text-text`:'text-muted'} transition`}>
                    about</NavLink>
            </nav>

        </header>
    );
};

export default Header;