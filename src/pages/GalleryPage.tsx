import Album from "../components/AlbumComponents/Album.tsx";

const GalleryPage = () => {
    return (
        <div className={`flex flex-col max-w-[1400px] w-full justify-center items-center 
        mt-[96px] md:mt-[120px] mx-auto mb-[48px] md:mb-[80px] gap-[32px] md:gap-[48px] px-[16px] md:px-[48px]`}>
            <h1 className={`font-primary text-[36px] md:text-[56px] text-text uppercase font-light tracking-wide `}>Gallery</h1>
            <Album/>
        </div>
    );
};

export default GalleryPage;