import React, { useState } from 'react'
import Head from 'next/head'

const ForgetPasswordPage = () => {
    const [msg, setMsg] = useState({ message: '', isError: false })

    async function handleSubmit(e) {
        e.preventDefault(e);

        const body = {
            email: e.currentTarget.email.value,
        }

        const res = await fetch('/api/user/password/reset', {
            method: 'POST',
            header
        })
    }
}

export default ForgetPasswordPage