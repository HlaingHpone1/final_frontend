import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalSessionStore } from "../Store";
const EmailResetForm = () => {

    const { userData } = useLocalSessionStore();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
    });

    const [email, setEmail] = useState("");



    const [errors, setErrors] = useState({});

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value.trim(),
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const apiUrl = 'http://localhost:8080/users/verify-mail';
        axios.post(apiUrl,{mail:data.email})
        .then(response => {
            // console.log(response.data)

            if (response.data.httpStatusCode === 200){
                const apiUrll = 'http://localhost:8080/auth/newOTP';
                axios.post(apiUrll,{mail:data.email})
                .then(resp => {
                    if(resp.data.httpStatusCode  === 200){
                        localStorage.setItem("email", data.email)
                     
                        navigate(`/reset/${userData.data.id}/changepsw`)
                    }
                    
                })
            }
        })
        }
    


    // const submitHandler = async (e) => {
    //     e.preventDefault();

    //     const newErrors = {};

    //     for (const email in data) {
    //         if (data[email] == "") {
    //             newErrors[email] = `${email} is required`;
    //         }
    //     }

    //     setErrors(newErrors);

    //     if (Object.keys(newErrors).length === 0) {
    //         try {
    //             const response = await axios.post("http://localhost:8080/users/verify-mail",
    //                 {
    //                     mail: data.email,
    //                 }
                  
    //             ); console.log('Email:', data.email);
    //             localStorage.setItem("email", data.email);
    //             if(response.data.status === "success"){
                   
    //                 const otpResponse = await axios.post("http://localhost:8080/auth/newOTP",{
    //                     mail: data.email,
    //                 });
    //                 console.log('OTP response data:', otpResponse.data);
                
    //             }
             

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     navigate('/changepsw')
    // };

    return (
        <section>
            <form className=" min-w-[350px]" action="" onSubmit={submitHandler}>
                <div className="input-box mb-5 ">
                    <input
                        className={` bg-transparent border-b-2 focus:outline-none  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 rounded-sm mt-2 `}
                        type="email"
                        name="email"
                        // id="email"

                        value={data.email}
                        placeholder="Enter your email"
                        onChange={inputHandler}
                        autoComplete="off"
                    />
                    {errors.email && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.email}
                        </p>
                    )}
                </div>

                <button
                    className="bg-slate-500 text-white px-5 py-2 rounded-md text-lg"
                    type="submit" onSubmit={submitHandler}
                >
                    Submit
                </button>
            </form>
        </section>
    );
                    };

export default EmailResetForm;
