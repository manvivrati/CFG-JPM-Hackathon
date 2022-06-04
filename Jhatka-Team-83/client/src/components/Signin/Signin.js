import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'

import './Signin.css'

const Signin = () => {
  
  const [isPassword, setIsPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (userData) => {

    console.log(userData)
    
    if(userData.password === userData.confirmpassword){
      setIsPassword(false)
      console.log('Success')
    }
    else{
      setIsPassword(true)
      console.log('Failure')
    }
  }

  return (
    <Container>
      <h3 className="text-center m-4">Sign In</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="signin-form-width bg-light mx-auto border border-dark rounded p-3"
      >

        {
          (isPassword) && 
          <div className="alert alert-danger text-center">
            Passwords do not match
          </div>
        }

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Username</div>
            </div>
          </label>

          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Enter your username</p>
          )}
        </div>

        <div className="mb-3">
        <label htmlFor="email" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Email</div>
            </div>
          </label>

          <input
            type="text"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*Enter your email</p>
          )}
        </div>

        <div className="mb-3">
        <label htmlFor="number" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Phone number</div>
            </div>
          </label>

          <input
            type="text"
            id="number"
            className="form-control"
            {...register("number", { required: true, minLength: 10 })}
          />
          {errors.number?.type === "required" && (
            <p className="text-danger">*Enter your phone number</p>
          )}
          {
            errors.number?.type === "minLength" && <p className="text-danger">*Phone number should be of 10 digits</p>
          }
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Password</div>
            </div>
          </label>

          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Enter your password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">*Password should be a minimum of 8 characters</p>
          )}
        </div>

        <div className="mb-3">
        <label htmlFor="password" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Re-enter Password</div>
            </div>
          </label>

          <input
            type="password"
            id="confirmpassword"
            className="form-control"
            {...register("confirmpassword", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Re-enter your password</p>
          )}

        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          SignIn
        </button>
      </form>
    
    </Container>
  )
}

export default Signin