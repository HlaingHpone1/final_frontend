import { create } from "zustand"
import { devtools, persist, createJSONStorage } from "zustand/middleware"
import axios from "axios";

// const abortController = new AbortController();
// const signal = abortController.signal;

const apiPostNewUser = import.meta.env.VITE_API_USER_URL;
const apiGetUser = import.meta.env.VITE_API_USER_URL;
const apiPostUserValidate = `${import.meta.env.VITE_API_USER_URL}/validate`;
const apiGetAllUsers = `${import.meta.env.VITE_API_USER_URL}/get-all-users`;

const apiPostNewPost = `${import.meta.env.VITE_API_POST_URL}`;
const apiGetPost = `${import.meta.env.VITE_API_POST_URL}/posts`;

const apiGetEducationByUser = `${import.meta.env.VITE_API_EDUCATION_URL}/all`;
const apiPostEducation = `${import.meta.env.VITE_API_EDUCATION_URL}`;

const apiGetWorkExpByUser = `${import.meta.env.VITE_API_WORK_EXP_URL}/all`;
const apiPostWorkExp = `${import.meta.env.VITE_API_WORK_EXP_URL}`;

const apiGetSkillByUser = `${import.meta.env.VITE_API_SKILL_URL}/all`;
const apiPostSkill = `${import.meta.env.VITE_API_SKILL_URL}`;

const apiMessage = `${import.meta.env.VITE_API_MESSAGE_URL}`;

const apiComment = `${import.meta.env.VITE_API_COMMENT_URL}`;
const apiJob = `${import.meta.env.VITE_API_JOB_URL}`;

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
                    const res = await axios.post(apiPostNewUser, postData);
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
                    const res = await axios.post(apiPostUserValidate, postData);
                    set(() => ({ userData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null }))
                    sessionStorage.setItem('userData', JSON.stringify(res.data));


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

// Store for local session when call it back on profile page and Home page
export const useLocalSessionStore = create(set => ({
    userData: JSON.parse(sessionStorage.getItem("userData"))
}));


// API_CREATE_POST
export const useCreatePost = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        postsData: null,
        apiCall: async (postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(apiPostNewPost, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        postsData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
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

// API_GET_POST
export const useGetPostPagination = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        totalPages: 0,
        postsAllData: null,
        apiCall: async (page, signal) => {
            set({ isLoading: true });
            try {

                const res = await axios.get(`${apiGetPost}?page=${page}`, {
                    signal
                });

                set(() => ({
                    postsAllData: res.data, success: true, totalPages: res.data.totalPages, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;

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
));

// API_GET_ALL_USERS
export const useGetAllUsers = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        allUsersData: null,
        apiCall: async (page, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetAllUsers}?page=${page}`, {
                    signal
                });
                set(() => ({
                    allUsersData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;

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
        abort: () => {
            get().controller.abort();
            set({ controller: new AbortController() });
        },
    })
))

// API_GET_USER
export const useGetUser = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        userData: null,
        apiCall: async (userId, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetUser}?id=${userId}`, {
                    signal
                });
                set(() => ({
                    userData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;
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
));

// API_GET_POST_BY_USER
export const useGetPostByUser = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        totalPages: 0,
        postsData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetPost}/${id}`, {
                    signal
                });
                set(() => ({
                    postsData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;
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
));

// API_GET_EDUCATION_BY_USER
export const useGetEducationByUser = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        educationData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetEducationByUser}/${id}`, {
                    signal
                });
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        educationData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
        }
    })
))

// API_GET_WORK_EXP_BY_USER
export const useGetWorkExpByUser = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        workExpData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetWorkExpByUser}/${id}`, {
                    signal
                });
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        workExpData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
        }
    })
))

// API_GET_SKILL_BY_USER
export const useGetSkillByUser = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        skillData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiGetSkillByUser}/${id}`, {
                    signal
                });
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        skillData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))

                    return res.data;

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
        }
    })
))

// API_CREATE_EDUCATION
export const useCreateEducation = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        educationData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(`${apiPostEducation}/${id}`, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        educationData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_CREATE_WORK_EXP
export const useCreateWorkExp = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        workExpData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(`${apiPostWorkExp}/${id}`, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        workExpData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_CREATE_SKILL
export const useCreateSkill = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        skillData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(`${apiPostSkill}/${id}`, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        skillData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_DELETE_POST
export const useDeletePost = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        apiCall: async (userId, postId) => {
            set({ isLoading: true });
            try {
                const res = await axios.delete(`${apiPostNewPost}?userId=${userId}&postId=${postId}`);
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))
                return res.data;
                // }

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
))

// API_DELETE_EDUCATION
export const useDeleteEducation = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        apiCall: async (id) => {
            set({ isLoading: true });
            try {
                const res = await axios.delete(`${apiPostEducation}/${id}`);
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))
                // return res.data;
                // }

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
))

// API_DELETE_WORK_EXP
export const useDeleteWorkExp = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        apiCall: async (id) => {
            set({ isLoading: true });
            try {
                const res = await axios.delete(`${apiPostWorkExp}/${id}`);
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))
                // return res.data;
                // }

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
))

// API_DELETE_SKILL
export const useDeleteSkill = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        apiCall: async (id) => {
            set({ isLoading: true });
            try {
                const res = await axios.delete(`${apiPostSkill}/${id}`);
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))
                // return res.data;
                // }

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
))
// API_GET_EDUCATION_BY_ID
export const useGetEducationById = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        educationData: null,
        apiCall: async (id) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiPostEducation}/${id}`);
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        educationData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
        }
    })
))

// API_UPDATE_EDUCATION
export const useUpdateEducation = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        educationData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.put(`${apiPostEducation}/${id}`, postData);
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        educationData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))



// API_GET_WORK_EXP_BY_ID
export const useGetWorkExpById = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        workExpData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiPostWorkExp}/${id}`, {
                    signal
                });
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        workExpData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
        }
    })
))

// API_UPDATE_WORK_EXP
export const useUpdateWorkExp = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        workExpData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.put(`${apiPostWorkExp}/${id}`, postData);
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        workExpData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_GET_SKILL_BY_ID
export const useGetSkillById = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        skillData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiPostSkill}/${id}`, {
                    signal
                });
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        skillData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
        }
    })
))

// API_UPDATE_SKILL
export const useUpdateSkill = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        skillData: null,
        apiCall: async (id, postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.put(`${apiPostSkill}/${id}`, postData);
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        skillData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))


// API_MESSAGE
export const useMessage = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        messageData: null,
        apiCall: async (postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(apiMessage, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        messageData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_POST_MESSAGE
export const usePostMessage = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        commentData: null,
        apiCall: async (userID, postID, postData) => {
            set({ isLoading: true });

            try {
                const res = await axios.post(`${apiComment}?user_id=${userID}&post_id=${postID}`, postData);

                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        commentData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
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
))

// API_UPDATE_POST
export const useUpdatePost = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        postsData: null,
        apiCall: async (postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.put(`${apiPostNewPost}`, postData);
                if (res.data.httpStatusCode === 200) {
                    set(() => ({
                        postsData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
                }

            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                set({ isLoading: false })
            }
        },
    })
))

// API_CREATE_JOB
export const useCreateJob = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        jobData: null,
        apiCall: async (postData) => {
            set({ isLoading: true });
            try {
                const res = await axios.post(apiJob, postData);
                if (res.data.httpStatusCode === 201) {
                    set(() => ({
                        jobData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                    }))
                    return res.data;
                }

            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                set({ isLoading: false })
            }
        },
    })
))

// API_GET_JOBPOSTS
export const useGetJobPosts = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        jobPostsData: null,
        apiCall: async (page, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiJob}/jobposts?page=${page}`, {
                    signal
                });
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    jobPostsData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;
                // }

            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                set({ isLoading: false })
            }
        },
    })
))

// API_GET_JOBPOST_BY_ID
export const useGetJobPostById = create(devtools(
    (set, get) => ({
        isLoading: false,
        error: false,
        errorMessage: null,
        errorCode: null,
        success: false,
        jobPostData: null,
        apiCall: async (id, signal) => {
            set({ isLoading: true });
            try {
                const res = await axios.get(`${apiJob}/${id}`, {
                    signal
                });
                // if (res.data.httpStatusCode === 200) {
                set(() => ({
                    jobPostData: res.data, success: true, isLoading: false, error: false, errorMessage: null, errorCode: null
                }))

                return res.data;
                // }

            } catch (err) {
                if (err.response) {
                    set({ error: true, errorMessage: err.response.data, errorCode: err.response.status, isLoading: false });
                } else {
                    set({ error: true })
                }
            } finally {
                set({ isLoading: false })
            }
        },
    })
))