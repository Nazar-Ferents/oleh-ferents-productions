import type {FC} from "react";
import type {IAlbum} from "../../interfaces/IAlbum.ts";

type Props = {
    photo:IAlbum;
}
const Photo:FC<Props> = ({photo}) => {

    return (
        <div>

            <img src={photo.icon} alt={photo.title}/>
        </div>
    );
};

export default Photo;