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
      localStorage.setItem('username',user.displayName)
      localStorage.setItem('userImg',user.photoURL)
    } else {
       localStorage.setItem('username','')
      localStorage.setItem('userImg','')
    }
   })
export const logOut = async (setLoading) => {
  setLoading(true)
  await signOut(auth).then(() => {
    localStorage.setItem('username','')
    localStorage.setItem('userImg','')
    setLoading(false)
   })
}

  
export const showError = async (error,setError) => {
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
     return setError('password is incorrect')
    }
    if (error.code === AuthErrorCodes.INVALID_EMAIL) {
     return setError('Email is invalid')
    }
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    return setError('Account is already in use')
  }
  return setError(error.code)
  }
  
export const login = async (email, password,setLoading,setError) => {
    setLoading(true)
    try{
  
       await signInWithEmailAndPassword(auth, email, password).then((user) => {
          localStorage.setItem('username', [user.user.displayName])
         setLoading(false)
          window.history.back();
      })
    } catch (error) {
      setLoading(false)
      showError(error,setError)
    }
  }
 export const signup = async (name,email,password,confirm,setLoading,setError) => {
    if (name && email && password && confirm) {
      if (password == confirm) {
        setLoading(true)
    try{
          await createUserWithEmailAndPassword(auth, email, password).then(() => {
            updateProfile(auth.currentUser, {
            displayName:name ,
            }).then(() => {
              localStorage.setItem('username',[auth.currentUser?.displayName])
                // console.log(user)
              setLoading(false)
                window.location.replace(window.location.origin); 
            })
            
          });
    } catch (error) {
      setLoading(false)
      showError(error,setError)
    }
  }
  }
  }
   
    

 export const uploadImage = (setOpenLogout,setLoading) => {
         let inputFile = document.getElementById('input-img-file');
        let profileName = document.getElementById('image_profileName');
        let imgContainer = document.getElementById('image_contanier');
        
        setLoading(true)
        inputFile.onchange = () => {
            const fileUrl = inputFile.files[0]; 
            const imageRef = ref(storage, `customerImages/${auth.currentUser.uid}`);
            uploadBytes(imageRef, fileUrl).then((snap) => {
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
                  localStorage.setItem('userImg', url);
                  updateProfile(auth.currentUser, {
                  photoURL:url ,
                  })
                  setLoading(false);
                })
            })
            
        }
    }