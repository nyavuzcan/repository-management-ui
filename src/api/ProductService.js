import axios from "axios"


const PRODUCTS_API_URL = "http://localhost:8080/product"

export const addProduct = (body) => {
    return axios.post(PRODUCTS_API_URL,body)
}

export const getProducts = () => {
    return axios.get(PRODUCTS_API_URL)
}

export const getProductById = (id) => {
    return axios.get(PRODUCTS_API_URL+"/"+id)
}

export const deleteProduct = (id) => {
    return axios.delete(PRODUCTS_API_URL+"/"+id)
}

export const putProduct = (id,body) => {
    return axios.put(PRODUCTS_API_URL+"/"+id,body)
}
