
const Footer = () => {
    return (
        <footer className={'flex flex-col gap-[24px] min-h-[260px] items-center justify-between ' +
            ' mt-auto py-[48px] px-[24px]'}>
            <div className={`flex flex-col items-center justify-center`}>
                <h2 className={'font-primary text-4xl font-normal text-text'}>
                    Find me on:
                </h2>
                <div className={`flex items-center justify-center gap-1  
                `}>
                    <p className={`font-secondary text-[20px] leading-[1.7] text-muted`}>Instagram:</p>
                    <a className={`font-secondary text-[18px] leading-[1.7] text-muted hover:text-accent 
                  `}
                       href={`https://www.instagram.com/olferents/`}
                       target='_blank'
                       rel='noopener noreferrer'>
                        @olferents
                    </a>
                </div>
                <div className={`flex items-center justify-center gap-1  
                `}>
                    <p className={`font-secondary text-[20px] leading-[1.7] text-muted`}>Email:</p>
                    <a className={`font-secondary text-[18px] leading-[1.7] text-muted hover:text-accent`}
                    href='mailto:ohferents96@gmail.com'>ohferents96@gmail.com</a>
                </div>


            </div>
            <p className={`text-muted font-secondary text-xs `}>© 2026 Oleh Ferents Productions</p>

        </footer>
    );
};

export default Footer;