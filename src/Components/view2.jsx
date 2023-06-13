import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Albume, Albume2} from "../pages/OverView-elements/Albume";
import Box from "@mui/material/Box";
import {cardData} from "../data/card-data";
import {useParams} from "react-router-dom";
import {ref, listAll,getDownloadURL} from "firebase/storage"
import {useEffect, useState} from "react";
import {auth, db, storage} from "../config/firebase";
import {v4} from "uuid";
import {useTheme} from "@mui/material/styles";
import {doc, getDoc} from "firebase/firestore";

export function StandardImageList() {
    const [imageListGallery, setImageListGallery] = useState([]);
    const { index } = useParams();
    const [eventInfoData, setEventInfoData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchEventInfoData() {
            try {
                const eventInfoRef = doc(db, "DataBase1", index);
                const eventInfoSnapshot = await getDoc(eventInfoRef);
                const data = eventInfoSnapshot.data();
                setEventInfoData(data);
            } catch (error) {
                console.error("Error retrieving event info:", error);
            }
        }

        fetchEventInfoData();
    }, [index]);

    useEffect(() => {
        if (eventInfoData && eventInfoData.hostID) {
            const imageListRef = ref(storage, `${eventInfoData.hostID}/`);
            listAll(imageListRef)
                .then((response) => {
                    const downloadPromises = response.items.map((item) => getDownloadURL(item));
                    Promise.all(downloadPromises)
                        .then((urls) => {
                            setImageListGallery(urls);
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            console.error("Error retrieving image URLs:", error);
                            setIsLoading(false);
                        });
                })
                .catch((error) => {
                    console.error("Error retrieving image list:", error);
                    setIsLoading(false);
                });
        }
    }, [eventInfoData]);

    if (isLoading) {
        return <div>Loading images...</div>;
    }

    return (
        <ImageList
            className="pictures"
            sx={{ width: 800, height: 250, my: 3, mx: 1 }}
            cols={2}
            rowHeight={164}
        >
            {imageListGallery.map((url) => (
                <ImageListItem key={url}>
                    <img
                        src={`${url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="gallery"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
