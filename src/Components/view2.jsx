import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import {ref, listAll, getDownloadURL} from "firebase/storage"
import {useEffect, useState} from "react";
import {auth, db, storage} from "../config/firebase";
import {doc, getDoc} from "firebase/firestore";

export function StandardImageList() {
    const [imageListGallery, setImageListGallery] = useState([]);
    const {index} = useParams();
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
        <Box
            sx={{
                width: '100%', // Set the width to 100% or an appropriate value based on your layout
                my: 3,
                mx: 1,
                display: "grid",
                gap: "16px", // Adjust the gap between images as needed
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Adjust the minimum column width as needed

            }}
        >

            <ImageList
                className="pictures"
                sx={{
                    width: '100%', // Take full width of the container
                    height: 300, // Automatically adjust height based on content
                    my: 3, mx: 1
                }}
                cols={2} // Default: 2 columns
                rowHeight="auto"
                gap={8} // Adjust the gap between images as needed

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
        </Box>
    );
}
