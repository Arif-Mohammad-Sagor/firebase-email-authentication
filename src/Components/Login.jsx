import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { userContext } from './ContextProvider';


const Login = () => {
  const [error, setError] = useState('')

  const { signIn } = useContext(userContext);

  const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)

      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset();
      })

      .catch(error => {
        setError('user not found.plase register !')
        form.reset();

      })
   
  }
  return (
    <div>
      <div className="w-2/5 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center ">
              <h1 className="text-2xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label flex">
                    <p className="text-sm text-gray-400">
                     First time? please register  {" "}
                    </p>
                    <p className="text-blue-500 text-md ml-1">
                      <Link to="/register">Register</Link>
                    </p>
                  </label>
                </div>
                <div className=" mt-1">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                {error && <p className='text-danger'>{error }</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login