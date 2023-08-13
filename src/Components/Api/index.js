import axios from "axios"

// const email = localStorage.getItem("email")
const token = localStorage.getItem("token")
const config = { headers: { "x-auth-token": token } }

const url = "http://localhost:9000"


export const singUpApi = async (payload) => {
    const response = await axios.post(`${url}/user/signup`, payload)
    return response
}

export const loginApi = async (payload) => {
    const response = await axios.post(`${url}/user/login`, payload)
    return response
}

export const emailVerifyApi = async (payload) => {
    const response = await axios.post(`${url}/user/mailverify`, payload)
    return response
}

export const forgotPasswordApi = async (payload) => {
    const response = await axios.post(`${url}/user/forgotpassword`, payload)
    return response
}

export const passwordresetVerifyApi = async (rtoken, email, payload) => {
    const response = await axios.post(`${url}/user/passwordreset/${rtoken}/${email}`, payload)
    return response
}

export const longURLApi = async (payload) => {
    const response = await axios.post(`${url}/url/add`, payload, config)
    return response
}

export const findPerDayCountApi = async () => {
    const response = await axios.get(`${url}/url/today/count`, config)
    return response
}

export const findAllDataApi = async () => {
    const response = await axios.get(`${url}/url/get/alldata`, config)
    return response
}