import {albums} from "../data/data.ts";

const AboutPage = () => {
    const Fallen_Angel = albums.find(photo => photo.title==='Fallen Angel')
    const Trapped = albums.find(photo => photo.title==='Trapped')
    const Misunderstood = albums.find(photo => photo.title==='Misunderstood')
    return (
        <div className={`flex flex-col items-center justify-center mt-[96px] md:mt-[120px] mx-auto gap-[32px] md:gap-[64px] w-full
        max-w-[1400px] mb-[48px] md:mb-[80px] px-[16px] md:px-[48px] `}>
            <div className={`flex flex-col-reverse items-stretch md:flex-row md:items-center justify-between gap-[24px] md:gap-[24px] bg-bg md:min-h-[460px] w-full `}>
                <div className={`flex flex-col px-[24px] py-[8px] pb-[32px] md:py-0 md:pl-[64px] md:pr-0 justify-center items-start flex-1 gap-[24px]`}>
                    <h1 className={`font-primary text-[32px] md:text-[48px] font-normal leading-[1.15] text-text`}>Hello, I’m Oleh</h1>
                    <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                        I’m a 21-year-old graphic design student and digital artist, originally from Ukraine
                        and now living in Poland. It started in school, when I edited photos with my brother just for fun.
                        Today I work mostly in Photoshop, creating posters, photo manipulations, logos and sign designs,
                        and what began as a game has become something I take seriously.</p>
                </div>
                {
                    Fallen_Angel && <img className={`self-stretch shrink-0 w-full h-[280px] md:h-auto md:w-[40%] object-cover`}
                                         src={Fallen_Angel.icon} alt={Fallen_Angel.title}/>
                }


            </div>
            <div className={`flex flex-col items-stretch md:flex-row md:items-center justify-between gap-[24px] md:gap-[24px] bg-bg md:min-h-[460px] w-full `}>
                {
                    Trapped && <img className={`self-stretch shrink-0 w-full h-[280px] md:h-auto md:w-[40%] object-cover`}
                        src={Trapped.icon} alt={Trapped.title}/>
                }

                <div className={`flex flex-col px-[24px] py-[8px] pb-[32px] md:py-0 md:pr-[64px] md:pl-0 justify-center items-start flex-1 gap-[24px]`}>
                    <h2 className={`font-primary text-[32px] md:text-[48px] font-normal leading-[1.15] text-text`}>Art as a language</h2>
                    <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                        I don’t always have someone to talk to, so my art speaks for me. Every piece shows how I felt
                        at the moment I made it: heavy, quiet, lost or hopeful.
                        I’m not trying to explain these feelings, only to share them.
                        If you look at a work and feel a little of what I felt, it did its job.</p>
                </div>

            </div>
            <div className={`flex flex-col-reverse items-stretch md:flex-row md:items-center justify-between gap-[24px] md:gap-[24px] bg-bg md:min-h-[460px] w-full `}>
                <div className={`flex flex-col px-[24px] py-[8px] pb-[32px] md:py-0 md:pl-[64px] md:pr-0 justify-center items-start flex-1 gap-[24px]`}>
                    <h2 className={`font-primary text-[32px] md:text-[48px] font-normal leading-[1.15] text-text`}>Let’s work together</h2>
                    <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                        Alongside my studies I take on commissions, including logos and sign designs, and
                        I’ve already worked on a few projects for clients. If you need a design, or just want to say
                        hi, message me on Instagram <a
                        className={`font-secondary text-[18px] leading-[1.7] text-muted hover:text-accent`}
                                                       href={`https://www.instagram.com/olferents/`}
                                                       target='_blank'
                                                       rel='noopener noreferrer'>
                                 @olferents
                        </a>.
                    </p>
                </div>
                {
                    Misunderstood && <img className={`self-stretch shrink-0 w-full h-[280px] md:h-auto md:w-[40%] object-cover`}
                                          src={Misunderstood.icon} alt={Misunderstood.title}/>
                }
            </div>

        </div>
    );
};

export default AboutPage;
