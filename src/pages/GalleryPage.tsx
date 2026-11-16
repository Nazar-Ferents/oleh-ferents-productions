import Album from "../components/AlbumComponents/Album.tsx";

const GalleryPage = () => {
    return (
        <div className={`flex flex-col max-w-[1400px] w-full justify-center items-center 
        mt-[120px] mx-auto mb-[80px] gap-[48px] px-[48px]`}>
            <h1 className={`font-primary text-[56px] text-text uppercase font-light tracking-wide `}>Gallery</h1>
            <Album/>
        </div>
    );
};

export default GalleryPage;