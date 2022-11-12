import Prices from '../models/PriceModel.js';

export const addPrice = async (req, res) => {
	const { minPrice, maxPrice, percentage } = req.body;
	try {
		await Prices.create({
			min_price: minPrice,
			max_price: maxPrice,
			percentage: percentage,
		});
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
	}
};

export const getPrices = async (req, res) => {
	try {
		const prices = await Prices.findAll();
        res.status(200).json(prices)
	} catch (error) {
        console.log(error);
    }
};

export const getPriceById = async (req, res) => {
    try {
        const price = await Prices.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(price)
    } catch (error) {
        console.log(error);
    }
}

export const updatePrice = async(req, res) => {
    try {
        await Prices.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
    }
}

export const deletePrice = async(req, res) => {
    try {
        await Prices.destroy({
            where:{
                id: req.params.id
            }
        })
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}