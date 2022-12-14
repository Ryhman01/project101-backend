import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
	try {
		const refreshToken = req.body.refreshToken;
		if (refreshToken == null) {
			return res.sendStatus(401);
		}

		const user = await Users.findAll({
			where: {
				refresh_token: refreshToken,
			},
		});

		if (!user[0]) {
			return res.sendStatus(403);
		}

		jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
			if (err) {
				return res.sendStatus(403);
			}

			const userId = user[0].id;
			const name = user[0].name;
			const email = user[0].email;
			const username = user[0].username;
			const role = user[0].role;
			const address = user[0].address;
			const accessToken = jwt.sign({ userId, name, email, username, role, address }, process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: "10m",
			});

			res.json({
				accessToken,
			});
		});
	} catch (error) {
		console.error(error);
	}
};
