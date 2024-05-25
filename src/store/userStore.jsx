import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const userStore = create (
    persist(
        (set,get)=>({
            isLogInUser: false,
            userData: [],
            token:"",
            orgKey:"",
            setIsLogInUser:(loginUser)=> set({isLogInUser: loginUser}),
            setUserData:(userData)=> set({userData: userData}),
            setToken:(token)=>set({token:token}),
            setOrgKey:(key)=>set({orgKey:key})
        })
    )
)
