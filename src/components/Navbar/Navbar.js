import React, { useEffect, useState } from 'react'
import Search from './Search';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImMenu3 } from 'react-icons/im';
import logo from '../../assests/logo (1).png'
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../lib/context';
import { FaUserAlt } from 'react-icons/fa';
import { auth,uploadImage,logOut, storage } from '../../lib/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';


const Navbar = () => {
    // const classes = useStyles();
    // const {uploadImage}= useGlobalContext()
    // const navigate = useNavigate();
    const [openLogout, setOpenLogout] = useState(false)
    const [openNavMenu, setOpenNavMenu] = useState(false)
    const [userImage, setUserImage] = useState(null);
    const nameInitialsArr = async () => await auth.currentUser?.displayName.slice(' ');

    console.log(nameInitialsArr());
    // const userImage = auth.currentUser?.photoURL || localStorage.getItem('userImg') ;
    // if (nameInitialsArr?.length > 1 ) {
//         onAuthStateChanged(auth, user=> {
//                 if (user) {
//          
//       //  setUsername(user.displayName);
//       //  setUserImg(user.photoURL);
//     } else {
      
//     }
//    })
// useEffect(() => {
//   setNameInitialsArr(auth.currentUser?.displayName?.split(' '));
// })
     // }
    // console.log(firstInitials)
    //   const folderImgRef = ref(storage, 'customerImages/');
    //      listAll(folderImgRef).then((response) => {
    //          getDownloadURL(response.items?.find(item => item.name === auth.currentUser?.uid) || {})?.then((item) => {
    //              setUserImage(item)
    //          })
    //             // console.log(response.items[0].name,response.items[0].fullPath)
    //     }) 
        console.log(userImage)
    const signOut = () => {
        logOut()
        setUserImage(null)
        setOpenLogout(false)
    }


    return (
     <>
          <div className="flex justify-between items-center bg-yellow-300 px-[5vw] md_1:px-[3vw] py-5 fixed z-20 w-screen">
          <div className='font-bold text-3xl md_1:text-xl sm:text-[15px] text-yellow-500 flex items-center'><img src={logo} alt='logo-pic' className='w-8 h-10 mr-2 sm:w-6 sm:h-8 sm:mr-1' />Freedom<span className='text-orange-600'>MR</span></div>
              <div className="flex">
                  <Search />
                  <ul className='flex justify-between items-center text-lg sm:text-[12px] text-orange-900 font-medium'>
                      <li className='px-3 hover:text-orange-400 md:hidden block'><Link to="/">Home</Link></li>
                      <li className='px-3 hover:text-orange-400 md:hidden block'><Link to="/products">Products</Link></li>
                      <li className='px-3 text-3xl sm:text-2xl relative'><Link to="/" className='hover:text-orange-400'><AiOutlineShoppingCart /></Link><div className='bg-orange-500 grid place-items-center rounded-full text-sm w-5 h-5 text-justify  absolute -top-2 right-1'>1</div></li>
                        <li className='px-3 relative block sm:px-2'>
                        <div className='w-[40px] h-[40px] bg-orange-500 grid place-items-center cursor-pointer rounded-full' id='image_contanier' onClick={() => setOpenLogout((prev) => !prev)}>
                                <div className={userImage ? 'hidden':'text-xl font-bold uppercase'} id='image_profileName'>{nameInitialsArr?.length > 1 ? nameInitialsArr?.[0]?.charAt(0).concat(nameInitialsArr?.[1]?.charAt(0)) : nameInitialsArr?.[0]?.slice(0, 2)}{!nameInitialsArr?.[0] && <FaUserAlt />}</div>
                                <img src={userImage} alt='userImg' className={userImage ? 'w-full h-full rounded-full img': 'hidden'} />
                        </div>
                        {openLogout && <div className='absolute -bottom-[7rem] w-[8rem] bg-white left-[50%] -translate-x-1/2 grid place-items-center gap-4 py-4 shadow-md text-white text-sm  rounded-sm'>
                        {
                            auth.currentUser ?
                            <>
                            <input type="file" accept='image/jpeg,image/jpg,image/png' id="input-img-file" className='hidden' />
                            <label htmlFor="input-img-file" className='text-yellow-700 cursor-pointer' onClick={() => {
                                uploadImage(setOpenLogout,setUserImage)
                            }}>Upload Image</label>
                            <button className='bg-[#f57c0a] rounded-sm px-2 py-1' onClick={signOut}>LOG OUT</button>
                            </>
                                        :
                                    <>
                                    <Link className='text-yellow-700 cursor-pointer' to='/signin'>Sign In</Link>
                                    <Link className='text-yellow-700 cursor-pointer' to='/signup'>Sign Up</Link>
                                    </>
                                    
                                }
                        </div>}
                        {
                            openNavMenu && <div className = 'absolute -bottom-[7rem] w-[8rem] bg-white right-1/4 text-lg grid place-items-center py-5 shadow-md' >
                            <p className='hover:text-yellow-400' onClick={()=>setOpenNavMenu(false)}><Link to="/">Home</Link></p>
                            <p className='hover:text-yellow-400' onClick={()=>setOpenNavMenu(false)}><Link to="/products">Products</Link></p>
                            </div>
                        }
                      </li>
                      <li className='px-3 text-3xl sm:text-2xl hover:text-yellow-400 relative md:block hidden' onClick={()=>setOpenNavMenu((prev)=>!prev)}><ImMenu3 />
                      </li>
                  </ul>
              </div>
              </div>
              </>
              )
}


export default Navbar
//   {
    //     location.pathname == '/' && <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
            //           <Badge badgeContent={total} color='secondary' overlap="rectangular">
            //               <ShoppingCart />
            //           </Badge>
            //       </IconButton>
            //   }

            // <div className='absolute -bottom-[4rem] w-[8rem] bg-white left-[50%] -translate-x-1/2 grid place-items-center py-4 shadow-md'><button className='text-white px-2 py-1 text-sm bg-[#f57c0a] rounded-sm'>LOG OUT</button></div>
            //   <li className='px-3 hover:text-yellow-400 relative block sm:px-2'><Link to="/signin">Sign in</Link></li>
            
    // <div className = 'absolute -bottom-[7rem] w-[8rem] bg-white right-1/4 text-lg grid place-items-center py-5 shadow-md' >
    //           <p className='hover:text-yellow-400'><Link to="/">Home</Link></p>
    //         <p className='hover:text-yellow-400'><Link to="/products">Products</Link></p>
    //               </div>