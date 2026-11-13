import type {IAlbum} from "../../interfaces/IAlbum.ts";
import {albums} from "../../data/data.ts";
import Photo from "./Photo.tsx";

const Album = () => {
    const photos:IAlbum[] = albums

    return (
        <div>
            {
                photos.map((photo) => (<Photo key={photo.id} photo={photo} />))
            }
        </div>
    );
};

export default Album;