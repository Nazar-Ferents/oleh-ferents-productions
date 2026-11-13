import {albums} from "../data/data.ts";
import collage from "../assets/poster_grid.jpg"
import {Link} from "react-router-dom";

const HomePage = () => {

    const mainPhoto = albums.find(photo => photo.title==='Isolation (World)')
    const secondPhoto = albums.find(photo => photo.title==='Given Evolution')

    return (
        <div>
            <div className={`flex flex-col justify-center items-center h-screen sticky top-0`}>
                <div className={`flex flex-col justify-center items-center absolute z-10 
                inset-x-0 bottom-40 font-primary 
                `}>
                    <h1 className={`text-5xl md:text-7xl font-light uppercase tracking-widest text-text
                    
                    `}>Oleh Ferents</h1>
                    <h3 className={`text-base md:text-xl font-normal tracking-wide text-accent
                    `}>Visual artist. Foggy reality</h3>
                </div>
                {mainPhoto &&
                    <img className={`w-full absolute inset-0 h-full object-cover`}
                         src={mainPhoto.icon} alt={mainPhoto.title}/>
                }



            </div>
            <div className={`bg-surface relative py-[80px] `}>
                <div className={`relative min-h-[580px] overflow-hidden flex items-center `}>
                    {secondPhoto &&
                        <div className={`absolute inset-0 bg-cover bg-center bg-fixed`}
                             style={{backgroundImage: `url(${secondPhoto.icon})`}}></div>
                    }
                    <div className={`absolute inset-0 bg-linear-to-r from-surface to-transparent`}></div>
                    <div className={`flex flex-col gap-[24px] 
                    relative z-10 w-[460px] pl-[48px] `}>
                        <h2 className={`text-text text-5xl font-normal font-primary leading-[1.15]`}>
                            Where reality fades into <span className={`text-accent`}>fog </span>
                            and emotion takes shape.
                        </h2>
                        <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                            Dark, surreal and deeply personal. Each piece explores the feelings
                            we rarely say out loud: isolation, escape,
                            fear and hope. Step inside, take your time, and see what you recognize.
                            </p>
                    </div>


                </div>
                <div className={'flex gap-[24px] items-center min-h-[460px] w-full relative mt-[80px] ' +
                    'mb-[20px]'}>

                        <div className={`w-[25%] self-stretch shrink-0 relative overflow-hidden bg-cover  
                        bg-fixed`}

                             style={{backgroundImage: `url(${collage})`}}>

                        </div>

                    <div className={`flex bg-linear-to-r from-surface-light from-0%
                     to-surface to-100% w-full self-stretch items-center justify-center`}>
                        <div className={`w-[45%] flex flex-col gap-[24px]`}>
                            <h2 className=
                                    {`text-text font-primary text-5xl font-normal leading-[1.15]`}>
                                Every piece tells a <span className={`text-accent`}>story </span>
                                of its own.</h2>
                            <p className={`font-secondary text-[18px] leading-[1.7] text-muted`}>
                                Photo manipulation, posters and digital art, each one built around a single emotion.
                                Take your time and see which one speaks to you.
                                </p>
                            <Link to={'/gallery'} className={`bg-accent text-[#0a0a0b] py-[12px] px-[28px]
                            rounded-full hover:bg-accent-light transition text-center font-secondary`} >
                                View gallery</Link>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default HomePage;