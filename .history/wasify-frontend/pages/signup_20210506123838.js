import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { useUser } from '../lib/hooks'

const Signup = () => {

    const [user, { mutate }] = useUser()
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
      if (user) Router.replace('/');
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            email: e.currentTarget.email.value,
            name: e.currentTarget.name.value,
            password: e.currentTarget.password.value,
        }
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        if (res.status === 201) {
            const userObj = await res.json()

            mutate(userObj)
        } else {
            setErrorMsg(await res.text())
        }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        {/* login form */}
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Create Your Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
              {errorMsg ? <p style={{ color: 're'}}></p> : }
            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">
                I agree to the terms and privacy.
              </label>
            </div>
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup