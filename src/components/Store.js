import { create } from "zustand"
import { devtools, persist, createJSONStorage } from "zustand/middleware"
import axios from "axios";


const abortController = new AbortController();
const signal = abortController.signal;

const apiPostNewUser = `${import.meta.env.VITE_API_URL}/users`;
const apiPostUserValidate = `${import.meta.env.VITE_API_URL}/users/validate`;

// API_NewUserRegister
export const useUserStorage = create(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        userData: null,
        success: false,
        apiCall: async (postData) => {
            set({ isLoading: true });

            try {
                const res = await axios.post(apiPostNewUser, postData, {
                    signal
                });
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        userData: res.data, success: true, isLoading: false
                    }))
                }
            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                // abortController.abort();
                set({ isLoading: false })
            }

        },
    })
);


// API_UserLogin
export const useUserStoreLogIn = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        userData: null,
        success: false,
        apiCall: async (postData) => {
            set({ isLoading: true });

            try {
                const res = await axios.post(apiPostUserValidate, postData, {
                    signal
                });
                set(() => ({ userData: res.data, success: true, isLoading: false }))
                sessionStorage.setItem('userData', JSON.stringify(res.data));
                console.log(res.data);

            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                // abortController.abort();
                set({ isLoading: false })

            }
        },
    }),
))


