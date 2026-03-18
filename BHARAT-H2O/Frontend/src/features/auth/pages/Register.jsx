import React from 'react'
import "../styling/form.scss"

const Register = () => {
  return (
    <main>
      <div className="form-controller">
        <h1>Register</h1>
        <form >
          <input type="text" name='username' placeholder='Enter Your name' />
          <input type="email" name='email' placeholder='Enter Your email' />
          <input type="password" name='password' placeholder='Enter Your password' />
          <button type='submit'>Submit</button>
        </form>
      </div>

    </main>
  )
}

export default Register