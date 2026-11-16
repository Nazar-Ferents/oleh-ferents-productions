import type {FC} from "react";
import type {IAlbum} from "../../interfaces/IAlbum.ts";

type Props = {
    photo:IAlbum;
    openAlbum:(photo:IAlbum) => void;
}
const Photo:FC<Props> = ({photo,openAlbum}) => {

    return (
        <div
        onClick={()=>{openAlbum(photo)}}
            className={'cursor-pointer overflow-hidden shadow-[0_0_24px] shadow-bg ' +
            'hover:shadow-accent/25 transition duration-300 group ' +
            `${photo.orientation==='horizontal' ? 'aspect-3/2':'aspect-4/5'}`

        }>

            <img className={`object-cover size-full group-hover:scale-[1.05] group-hover:brightness-[110%] 
            transition duration-300 `}
                 src={photo.icon} alt={photo.title}/>
        </div>
    );
};

export default Photo;