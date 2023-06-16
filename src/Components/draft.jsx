//
// import * as React from "react";
// import {addDoc, collection} from "firebase/firestore";
// import {auth, db} from "../config/firebase";
//
//
// export default Submit(){
//     const [userData, setUserData] =
//         React.useState({
//             userID: '',
//             userFirstName: '',
//             userLastName: '',
//             userEmail: '',
//             userPhone: '',
//             PizzaToppings: [],
//             favoriteFood: [],
//             skills: [],
//             superpowers: [],
//         },[]);
//
//
//
//     const dbRef = collection(db,"users");
//     const onSubmit = async () => {
//         try {
//             await addDoc(dbRef, {
//                 userID: auth?.currentUser?.uid,
//                 userFirstName: userData.userFirstName,
//                 userLastName: userData.userFirstName,
//                 userEmail: userData.userEmail,
//                 userPhone: userData.userPhone,
//                 PizzaToppings: userData.PizzaToppings,
//                 favoriteFood: userData.favoriteFood,
//                 skills: userData.skills,
//                 superpowers: userData.superpowers,
//             });
//         } catch(err) {
//             console.error(err)
//         }
//     };
//
// };