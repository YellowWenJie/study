import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'

const Register = () => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </>
  )
}

export default Register
