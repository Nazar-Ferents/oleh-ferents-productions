import {useEffect, useState} from "react";
import type {IAlbum} from "../interfaces/IAlbum.ts";
import {albums} from "../data/data.ts";


export const useAlbum = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const verticalPhotos:IAlbum[] = albums.filter(photo => photo.orientation==='vertical')
    const horizontalPhotos:IAlbum[] = albums.filter(photo => photo.orientation==='horizontal')

    const order = [...verticalPhotos, ...horizontalPhotos]

    const openAlbum = (photo:IAlbum)=>{
        const index = order.findIndex(element => element.id===photo.id)
        setSelectedIndex(index);
    }

    const closeAlbum = ()=>{
        setSelectedIndex(null);
    }
    useEffect(() => {
        if(selectedIndex===null){
            return
        }

        const handleEscape = (event:KeyboardEvent)=>{
            if(event.key === 'Escape'){
                closeAlbum();
            }
        }

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        }
    },[selectedIndex])

    const nextPhoto = ()=>{
        if(selectedIndex !== null && order.length>selectedIndex+1){
            setSelectedIndex(selectedIndex+1);
        }
        else{
            setSelectedIndex(0)
        }
    }

    const prevPhoto = ()=>{
        if(selectedIndex !== null && selectedIndex-1>=0){
            setSelectedIndex(selectedIndex-1);
        }
        else{
            setSelectedIndex(order.length-1)
        }
    }
    return {verticalPhotos,horizontalPhotos,openAlbum,closeAlbum,nextPhoto,prevPhoto,selectedIndex,order}
}