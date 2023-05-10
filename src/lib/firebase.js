import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import {getDownloadURL, getStorage, listAll, ref, uploadBytes } from 'firebase/storage'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ecommerce-f6c82.firebaseapp.com",
    projectId: "ecommerce-f6c82",
    storageBucket: "ecommerce-f6c82.appspot.com",
    messagingSenderId: "637659560469",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-53T1WFVFNN"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
  export const storage = getStorage(app)
  
  onAuthStateChanged(auth, user=> {
    if (user) {
      console.log(auth.currentUser)
      //  setUsername(user.displayName);
      //  setUserImg(user.photoURL);
    } else {
      
    }
   })
export const logOut = async () => { 
   await signOut(auth)
}

  
  const showLoginError = async (error) => { 
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      
    }
    if (error.code == AuthErrorCodes.INVALID_EMAIL) {
      
    }
  }
  
  const login = async () => {
    const loginEmail = 'ovuoachidera@gmail.com';
    const loginPassword = 'o123hd';
    try{
  
      const userCrediential = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(userCrediential);
    } catch (error) {
      console.log(error)
      showLoginError(error)
    }
  }
 export const signup = async (name,email,password,confirm,userName) => {
    if (name && email && password && confirm) {
      if (password == confirm) {
    try{
          await createUserWithEmailAndPassword(auth, email, password).then(() => {
            updateProfile(auth.currentUser, {
            displayName:name ,
            }).then(() => {
                userName(auth.currentUser?.displayName?.split(' '))
                // console.log(user)
                window.location.replace(window.location.origin); 
            })
            
          });
    } catch (error) {
      console.log(error)
      showLoginError(error)
    }
  }
  }
  }
   
    

 export const uploadImage = (setOpenLogout,setUserImage) => {
         let inputFile = document.getElementById('input-img-file');
        let profileName = document.getElementById('image_profileName');
        let imgContainer = document.getElementById('image_contanier');
        // const {setOpenLogout,updateProfile,auth}=action.payload

        // console.log('upload')
        inputFile.onchange = () => {
            console.log('upload_in')
            const fileUrl = inputFile.files[0]; 
            // const imgUrl= URL.createObjectURL(inputFile.files[0]);
            // const reader = new FileReader();
            // reader.readAsDataURL(fileUrl)
            const imageRef = ref(storage, `customerImages/${auth.currentUser.uid}`);
            uploadBytes(imageRef, fileUrl).then((snap) => {
                alert('uploaded');
                getDownloadURL(snap.ref).then((url) => {
                [...imgContainer.children].map((item) => {
                if (item.tagName === 'IMG' ) {
                    imgContainer.removeChild(item)
                }
                setOpenLogout(false);
                })
                profileName.classList.add('hidden')
                imgContainer.appendChild(
                    Object.assign(
                        document.createElement('img'),
                        {
                            src: url,
                            alt: 'profile_pic',
                            className:'w-full h-full rounded-full img'
                        }
                     )
                 )
                  setUserImage(url)  
                })
            })
            // // console.log(inputFile.files)
            // reader.addEventListener('load', () => {
            // const imgUrl= URL.createObjectURL(new Blob([inputFile.files[0]]));
            //     // localStorage.setItem('userImg', reader.result);
            //     updateProfile(auth.currentUser, {
            //       photoURL:imgUrl,
            //     }).then(() => {
            //       // Profile updated!
            //       console.log('profile updated')
            //     }).catch((error) => {
            //       console.log(error)
            //     });
            // })
        //     if (imgUrl) {
        //     [...imgContainer.children].map((item) => {
        //     if (item.tagName === 'IMG' ) {
        //         imgContainer.removeChild(item)
        //     }
        //     setOpenLogout(false);
        //     })
        //     profileName.classList.add('hidden')
        //     imgContainer.appendChild(
        //         Object.assign(
        //             document.createElement('img'),
        //             {
        //                 src: imgUrl,
        //                 alt: 'profile_pic',
        //                 className:'w-full h-full rounded-full img'
        //             }
        //          )
        //      )
        //  }  
        }
    }