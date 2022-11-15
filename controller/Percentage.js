import { Op } from "sequelize"
import Prices from "../models/PriceModel.js"

export const percentage = async (req, res) => {
    let percent = 0
    try {
        const response = await Prices.findAll({
            attributes: ['min_price', 'max_price', 'percentage']
        })
        response.forEach((e) => {
            if(req.body.deal_price >= e.min_price && req.body.deal_price <= e.max_price){
                percent = e.percentage
            }
        })

        res.json(percent)

    } catch (error) {
        console.log(error);
    }
}