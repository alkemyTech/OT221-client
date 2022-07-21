import React from 'react'
import { LoginForm } from '../../components/login/LoginForm'
import teamWorkImage from '../../img/Login/team-work.jpg'
import { motion } from 'framer-motion'

export const LoginPage = () => {

  const imgStyles = {
    objectFit:'cover',
    objectPosition:'centered',
    overflow:'hidden',
    height:`100%`
  }



  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
        >
    <main className='d-flex flex-column flex-lg-row justify-content-center align-items-center ' style={{height:'fit-content'}}>
        <section className="d-flex flex-column  align-items-center justify-content-center   w-100" style={{height:'70vh'}} >
                    <div className="w-75 m-auto " >
                        <p className='fs-4'>Bienvenido</p>
                        <h2 className='fs-1'>Inicia sesión en tu cuenta!</h2>
                        <LoginForm />
                    </div>
                    <div className='d-flex flex-row justify-content-center gap-2 w-75'>
                        <p className='fs-3'>¿No tienes una cuenta?</p>
                        <a href="/registrarse" className="fs-3 ">Registrate</a>
                    </div>
        </section>
        <section className='w-100' style={{height:'70vh'}}>
            <img className='img-fluid' style={imgStyles} src={teamWorkImage}  alt="team-work" />
        </section>
    </main>
    </motion.div>
  )
}