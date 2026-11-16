import Photo from "./Photo.tsx";
import Lightbox from "./Lightbox.tsx";
import {useAlbum} from "../../hooks/useAlbum.ts";

const Album = () => {

    const {verticalPhotos,horizontalPhotos,openAlbum,closeAlbum,nextPhoto,prevPhoto,selectedIndex,order} = useAlbum();
    return (
        <div className={`flex flex-col gap-[40px] md:gap-[64px]`}>
            {
                selectedIndex !==null && <Lightbox photo={order[selectedIndex]} closeAlbum={closeAlbum} key={selectedIndex}
                                           nextPhoto={nextPhoto} prevPhoto={prevPhoto}/>
            }

            <div className={`grid grid-cols-2 md:grid-cols-3 gap-[12px] md:gap-[24px]`}>
                {
                    verticalPhotos.map((photo) => (<Photo key={photo.id} photo={photo} openAlbum={openAlbum}/>))
                }
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[24px]`}>
                {
                    horizontalPhotos.map((photo) => (<Photo key={photo.id} photo={photo} openAlbum={openAlbum}/>))
                }
            </div>

        </div>
    );
};

export default Album;