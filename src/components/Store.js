import { create } from "zustand"
import { devtools, persist, createJSONStorage } from "zustand/middleware"
import axios from "axios";


const abortController = new AbortController();
const signal = abortController.signal;

const apiPostNewUser = import.meta.env.VITE_API_USER_URL;
const apiPostUserValidate = `${import.meta.env.VITE_API_USER_URL}/validate`;

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

            setTimeout(async () => {
                try {
                    const res = await axios.post(apiPostNewUser, postData, {
                        signal
                    });
                    if (res.data.httpStatusCode === 201) {
                        set(() => ({
                            userData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
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
            }, "1500")

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

            setTimeout(async () => {
                try {
                    const res = await axios.post(apiPostUserValidate, postData, {
                        signal
                    });
                    set(() => ({ userData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null }))
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
            }, "1500")
        },
    }),
))

export const useLocalSessionStore = create(set => ({
    userData: JSON.parse(sessionStorage.getItem("userData"))
}));

export const useCreatePost = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        postData: null,
        apiCall: async (postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(apiPostNewUser, postData, {
                    signal
                });
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        postData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
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
    })))
