import Head from "next/head"
import Link from "next/link"
import { API_URL } from "../utils/urls.js"
import FooterLoggedOut from "../components/layout/FooterLoggedOut"
import NavLoggedOut from "../components/layout/NavLoggedOut"
import Image from 'next/image'
import { parseCookies } from "nookies"
import style from "../styles/Admin.module.css"
import { useState } from "react"

export default function Admin({ messages, authData }) {

    console.log(messages)
    console.log(authData)

    async function deleteButton (ctx) {
        const { id } = ctx.params;

        const jwt = parseCookies().jwt

        const response = await fetch (`${API_URL}/api/messages/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const data = await response.json()
        console.log(data)
        //Admin();

    }

    return (

        <div>
        <Head>
            <title>Admin</title>
        </Head>
            <NavLoggedOut />
            <div className="main__container">
                <h2 className="h2">Welcome Back</h2>
                <h2 className={style.h1}>Messages</h2>
                {messages.data.map(message => (
                    <div className={style.message__row}>
                  <div className={style.message__name}>
                    <h2 className={style.h2}>Name</h2>
                    {message.attributes.name}
                    </div>
                    <div className={style.message__email}>
                    <h2 className={style.h2}>Email</h2>
                    {message.attributes.email}
                    </div>
                    <div className={style.message__message}>
                    <h2 className={style.h2}>Message</h2>

                    {message.attributes.message}
                    </div>
                    <div className={style.button__wrapper}>
                    <a className={style.a} href="">Reply</a>
                    <a className={style.a_delete} href="" onClick={() => deleteButton() }>Delete</a>
                    </div>
                    </div>
            ))}
            
            </div>

        <FooterLoggedOut />
        </div>
    )
};

    
export async function getStaticProps() {

    const loginInfo = JSON.stringify({
        identifier: "admin",
        password: "admin123"
    })

    const login = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },

        body: loginInfo
    })

    const loginResponse = await login.json();


    const message_res = await fetch(`${API_URL}/api/messages`, {
        headers: {
            Authorization: `Bearer ${loginResponse.jwt}`
        }
    })
    const messages = await message_res.json()
    

    return {
        props: {
            messages: messages,
            authData: loginResponse
        }
        
    }


}

