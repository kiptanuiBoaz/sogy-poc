import React, {  useState } from "react";
import "./new.scss";
import Sidebar from "../sidebar/Sidebar";
// ./src/components/pages/sign-up/SignUp
// import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import {storageRef ,setDoc, serverTimestamp, doc } from "firebase/firestore";
// import { auth, db, storage } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {useNavigate} from "react-router-dom";

export const SignUp = () => {
    const title="title";
    const inputs=[
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",
        },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",
        },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",        },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",        },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",       
         },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",       
         },
        { 
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",
            },
        {
            placeholder:"John Doe",
            label:"label",
            id:1,
            type:"text",        },]
        const [file, setFile] = useState("");
        const [data, setData] = useState({});
        // const [perc, setPerce] = useState(null);
        const navigate = useNavigate();

//   useEffect(() => {
//     const uploadFile = () => {

//     //   const name = new Date().getTime() + file.name;
//     // //   const storageRef = ref(storage, name);
//     //   const uploadTask = uploadBytesResumable(storageRef, file);

//       // Register three observers:
//       // 1. 'state_changed' observer, called any time the state changes
//       // 2. Error observer, called on failure
//       // 3. Completion observer, called on successful completion
//     //   uploadTask.on('state_changed',
//     //     (snapshot) => {
//     //       // Observe state change events such as progress, pause, and resume
//     //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     //       setPerce(progress);
//     //       console.log('Upload is ' + progress + '% done');
//     //       switch (snapshot.state) {
//     //         case 'paused':
//     //           console.log('Upload is paused');
//     //           break;
//     //         case 'running':
//     //           console.log('Upload is running');
//     //           break;
//     //         default:
//     //           break;
//     //       }
//     //     },
//     //     (error) => {
//     //       // Handle unsuccessful uploads
//     //       console.log(error);
//     //     },
//     //     () => {
//     //       // Handle successful uploads on complete
//     //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//     //         setData((prev) => ({ ...prev, img: downloadURL }))
//     //       });
//     //     }
//     //   );


//     }
//     file && uploadFile();
//   }, [file])

//   const handleAdd = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await createUserWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );

//       await setDoc(doc(db, "users", res.user.uid), {
//         ...data,
//         timeStamp: serverTimestamp()
//       });
//       navigate(-1)
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }

//   }

  const handleInput = (e) => {

    setData({ ...data, [e.target.id]: e.target.value })
  }



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map(({ placeholder, label, id, type }) => (
                <div className="formInput" key={id}>
                  <label>{label}</label>
                  <input id={id} onChange={handleInput} type={type} placeholder={placeholder} />
                </div>
              ))}
              <button 
              // dissbled={perc !==null &&  perc < 100} 
            //   onClick={handleAdd}
              >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

