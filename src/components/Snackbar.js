import React from 'react'

const Snackbar = (error,errorText) => {
  return (
    <article className={`fixed w-[12rem] text-center h-auto bg-white left-[50%] border-t-4 px-3 py-1 text-sm font-medium border-t-red-500 -translate-x-1/2 -bottom-[4rem]  ${error ? 'slide_up_down' : ''}`}>{error && errorText}</article>
  )
}

export default Snackbar