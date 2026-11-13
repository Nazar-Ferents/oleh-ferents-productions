
const Footer = () => {
    return (
        <footer className={'flex flex-col gap-[24px] min-h-[260px] items-center justify-between ' +
            ' mt-auto py-[48px] px-[24px]'}>
            <div className={`flex flex-col items-center justify-center`}>
                <h2 className={'font-primary text-4xl font-normal text-text'}>
                    Find me on Instagram
                </h2>
                <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                    @olferents
                </p>
            </div>
            <p className={`text-muted font-secondary text-xs`}>© 2026 Oleh Ferents Productions</p>

        </footer>
    );
};

export default Footer;