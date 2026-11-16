import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={`flex flex-col items-center justify-center text-center gap-[16px] min-h-[70vh] pt-[64px] px-[24px]`}>
            <p className={`font-primary text-[120px] leading-none font-light text-surface-light`}>404</p>
            <h1 className={`font-primary text-[40px] font-normal text-text`}>Page not found</h1>
            <p className={`font-secondary text-[18px] leading-[1.7] text-muted max-w-[460px]`}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to={'/'} className={`font-secondary text-accent hover:text-accent-light transition mt-[8px]`}>
                Back to home
            </Link>
        </div>
    );
};

export default PageNotFound;
