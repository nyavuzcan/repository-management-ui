import axios from "axios"


const PRODUCTS_API_URL = "http://localhost:8080/product"

export const addProduct = (body) => {
    return axios.post(PRODUCTS_API_URL+"/add",body)
}

export const getProducts = () => {
    return axios.get(PRODUCTS_API_URL+"/products")
}

export const getProductById = (id) => {
    return axios.get(PRODUCTS_API_URL+"/"+id)
}

export const deleteProduct = (id) => {
    return axios.post(PRODUCTS_API_URL+"/delete",id)
}

export const updateProduct = (id,body) => {
    return axios.put(PRODUCTS_API_URL+"/"+id,body)
}
