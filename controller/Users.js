import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
	try {
		const users = await Users.findAll({
			attributes: ["id", "name", "email", "username", "role", "address"],
		});
		res.json(users);
	} catch (error) {
		console.error(error);
	}
};

export const Register = async (req, res) => {
	const { name, email, username, password, confPassword, role, address } = req.body;
	if (password !== confPassword)
		return res.status(400).json({
			message: "Password and Confirm Password not match.",
		});

	const salt = await bcrypt.genSalt();
	const hashPassword = await bcrypt.hash(password, salt);
	try {
		await Users.create({
			name: name,
			email: email,
			username: username,
			password: hashPassword,
			role: role,
			address: address,
		});
		res.json({
			message: "Register success.",
		});
	} catch (error) {
		console.error(error);
	}
};

export const Login = async (req, res) => {
	try {
		const user = await Users.findAll({
			where: {
				username: req.body.username,
			},
		});

		const match = await bcrypt.compare(req.body.password, user[0].password);
		if (!match)
			return res.status(400).json({
				message: "Wrong password.",
			});

		const userId = user[0].id;
		const name = user[0].name;
		const email = user[0].email;
		const username = user[0].username;
		const role = user[0].role;
		const address = user[0].address;
		const accessToken = jwt.sign({ userId, name, email, username, role, address }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: "60s",
		});
		const refreshToken = jwt.sign({ userId, name, email, username, role, address }, process.env.REFRESH_TOKEN_SECRET, {
			expiresIn: "1h",
		});

		await Users.update(
			{
				refresh_token: refreshToken,
			},
			{
				where: {
					id: userId,
				},
			}
		);

		// res.cookie("refreshToken", refreshToken, {
		// 	httpOnly: true,
		// 	maxAge: 24 * 60 * 60 * 1000,
		// });

		res.json({
			accessToken,
			refreshToken
		});
	} catch (error) {
		res.status(404).json({
			message: "Username not found.",
		});
	}
};

export const Logout = async (req, res) => {
	const refreshToken = req.body.refreshToken;
	if (!refreshToken) return res.sendStatus(204);
	const user = await Users.findAll({
		where: {
			refresh_token: refreshToken,
		},
	});
	if (!user[0]) return res.sendStatus(204);
	const userId = user[0].id;
	await Users.update(
		{
			refresh_token: null,
		},
		{
			where: {
				id: userId,
			},
		}
	);

	return res.sendStatus(200);
};
