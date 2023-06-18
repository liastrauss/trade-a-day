import React, { useEffect, useState } from 'react';
import { ref } from 'firebase/storage';
import { listAll, getDownloadURL } from 'firebase/storage';
import {db, storage} from '../config/firebase';
import {doc, getDoc, updateDoc} from "firebase/firestore";
function MainImage({ eventInfoData }) {

    const [imageListGallery, setImageListGallery] = useState([]);

    useEffect(() => {
        if (eventInfoData && eventInfoData.hostID) {
            const imageListRef = ref(storage, `${eventInfoData.hostID}/`);
            listAll(imageListRef)
                .then((response) => {
                    const downloadPromises = response.items.map((item) =>
                        getDownloadURL(item)
                    );
                    Promise.all(downloadPromises)
                        .then((urls) => {
                            setImageListGallery(urls);
                        })
                        .catch((error) => {
                            console.error('Error retrieving image URLs:', error);
                        });
                })
                .catch((error) => {
                    console.error('Error retrieving image list:', error);
                });
        }
    }, [eventInfoData]);

    const updateUser = async () => {
        try {
            // db.collection("DataBase1").doc(eventInfoData.id).update({picture: imageListGallery[0]})
            const userDoc = doc(db, 'DataBase1', eventInfoData.id);

            // Check if the document exists
            const docSnapshot = await getDoc(userDoc);
            if (docSnapshot.exists()) {
                // Document exists, proceed with the update
                const newField = { picture: imageListGallery[0] };
                await updateDoc(userDoc, newField);
                console.log('Document updated successfully');
            } else {
                console.log('Document does not exist');
            }
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };


    useEffect(() => {
        if (eventInfoData?.picture === "none" && imageListGallery.length>0) {
            console.log('User...');
            updateUser()
        }
    }, [eventInfoData, imageListGallery]);

    return null;
}

export default MainImage;
