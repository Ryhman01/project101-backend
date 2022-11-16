import Prices from "../models/PriceModel.js"

export const percentage = async (req, res) => {
    let percent = 0
    const tax = 11;
    try {
        const response = await Prices.findAll({
            attributes: ['min_price', 'max_price', 'percentage']
        })
        response.forEach((e) => {
            if(req.body.deal_price >= e.min_price && req.body.deal_price <= e.max_price){
                percent = e.percentage
            }
        });


        res.json({
            deal_price: req.body.deal_price,
            tax: Math.floor(req.body.deal_price * tax/100),
            fee: Math.floor(req.body.deal_price * percent/100),
            net_profit: Math.floor(req.body.deal_price - req.body.deal_price * tax/100 - req.body.deal_price * percent/100),
            cost_per_month: Math.floor(Math.floor(req.body.deal_price - req.body.deal_price * tax/100 - req.body.deal_price * percent/100) / req.body.duration),
            cost_per_worker: Math.floor(Math.floor(Math.floor(req.body.deal_price - req.body.deal_price * tax/100 - req.body.deal_price * percent/100) / req.body.duration) / req.body.worker)
        })

    } catch (error) {
        console.log(error);
    }
}