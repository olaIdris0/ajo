
import axios from "axios";
const BASE_URL = "http://13.50.228.186:5000";

export const client = axios.create({
  baseURL: BASE_URL
})


// {
//     "email": "kanmiairs@gmail.com",
//     "phoneNumber": "09054234567",
//     "organisationName": "Blast Saint",
//     "password": "$2b$10$.XIktuoS58/AblNhymDQ2.aQrA1ZeODUK/MozikoRYSmEYknpr8a6",
//     "role": "organisation",
//     "prefferedUrl": "raoatech@ajo.com",
//     "kycVerified": false,
//     "_id": "65d06c2886b396b76ebb736d",
//     "createdAt": "2024-02-17T08:19:52.893Z",
//     "updatedAt": "2024-02-17T08:19:52.893Z",
//     "__v": 0
// }