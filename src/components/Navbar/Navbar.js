import React from 'react'
import Search from './Search';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImMenu3 } from 'react-icons/im';
import logo from '../../assests/logo (1).png'
import { Link,useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../lib/context';
const Navbar = ({total}) => {
    // const classes = useStyles();
    const {uploadImage}= useGlobalContext()
    // const location = useLocation();

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
                        <div className='w-[40px] h-[40px] bg-orange-500 grid place-items-center rounded-full' id='image_contanier'>
                        <div className='text-xl font-bold' id='image_profileName'>CN</div>
                        </div>
                        <div className='absolute -bottom-[7rem] w-[8rem] bg-white left-[50%] -translate-x-1/2 grid place-items-center gap-4 py-4 shadow-md text-white text-sm  rounded-sm'>
                        <input type="file" accept='image/jpeg,image/jpg,image/png' id="input-img-file" className='hidden' />
                        <label htmlFor="input-img-file" className='text-yellow-700 cursor-pointer' onClick={uploadImage}>Upload Image</label>
                        <button className='bg-[#f57c0a] rounded-sm px-2 py-1'>LOG OUT</button>
                        </div>
                      </li>
                      <li className='px-3 text-3xl sm:text-2xl hover:text-yellow-400 relative md:block hidden'><ImMenu3 />
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
            
    // <div div className = 'absolute -bottom-[7rem] w-[8rem] bg-white right-1/4 text-lg grid place-items-center py-5 shadow-md' >
    //           <p className='hover:text-yellow-400'><Link to="/">Home</Link></p>
    //         <p className='hover:text-yellow-400'><Link to="/products">Products</Link></p>
    //               </div>