const admin = require('../config/firebase-config')

class Middleware {
	async decodeToken(req, res, next) {
		// Check if the authorization header exists
		if (!req.headers.authorization) {
			console.log('Authorization header is missing');
			return res.status(401).json({ message: 'Authorization header is missing' });
		}

		try {
			const token = req.headers.authorization.split(' ')[1];
			console.log('Received token:', token);

			const decodeValue = await admin.auth().verifyIdToken(token);
			console.log('Decoded token:', decodeValue);

			if (decodeValue) {
				req.user = decodeValue;
				console.log('User:', req.user);
				return next();
			}

			console.log('Unauthorized');
			return res.status(401).json({ message: 'Unauthorized' });
		} catch (error) {
			console.error('Error decoding token:', error);
			return res.status(500).json({ message: 'Internal Server Error' });
		}
	}
}

module.exports = new Middleware();
