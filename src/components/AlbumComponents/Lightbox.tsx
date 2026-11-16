import type {FC} from "react";
import type {IAlbum} from "../../interfaces/IAlbum.ts";

type PropsType = {
    photo:IAlbum;
    closeAlbum:() => void;
    nextPhoto:() => void;
    prevPhoto:() => void;
}

const Lightbox:FC<PropsType> = ({photo,closeAlbum,nextPhoto,prevPhoto}) => {
    return (
        <div className={`fixed inset-0 z-[60] bg-bg/90 flex items-center justify-center 
                `}>
            <button
                onClick={()=>{prevPhoto()}}
                aria-label={"Previous photo"}
                title={"Previous photo"}
                className={` cursor-pointer text-muted left-[20px] absolute text-5xl 
                hover:text-accent  transition p-[12px]`}>
                {'<'}

            </button>
            <img className={`h-[90%] w-full object-contain`} src={photo.icon} alt={photo.title}/>
            <button
                onClick={()=>{closeAlbum()}}
                aria-label={"Close"}
                title={"Close"}
                className={'cursor-pointer absolute text-2xl top-[10px] hover:text-accent transition right-[20px] ' +
                    'text-muted p-[12px]'}>
                ✕
            </button>
            <button
                onClick={()=>{nextPhoto()}}
                aria-label={"Next photo"}
                title={"Next photo"}
                className={`cursor-pointer absolute text-[48px] text-muted right-[20px] hover:text-accent transition p-[12px]`}>
                {'>'}
            </button>
        </div>
    );
};

export default Lightbox;