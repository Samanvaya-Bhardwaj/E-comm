import productModel from "../models/productModel.js"
import fs from 'fs'

export const createProductController = async(req, res) =>{
    try{

        const {name, slug, description, price, category, quantity, shipping} = req.fields
        const {photo} = req.files

        //validation
        switch(true){
            case !name:
                return res.status(404).send({error: "Name is required"})
            case !description:
                return res.status(404).send({error: "Description is required"})
            case !price:
                return res.status(404).send({error: "Prices is required"})
            case !category:
                return res.status(404).send({error: "Category is required"})
            case !quantity:
                return res.status(404).send({error: "Quantity is required"})
            case !shipping:
                return res.status(404).send({error: "Shipping is required"})
            case !photo:
                return res.status(404).send({error: "Photo is required"})
        }

        const products = await productModel

    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error creating product'
        })
    }
}