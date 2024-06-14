const jwt = require('jsonwebtoken');

// Секретный ключ для подписи токена
const secretKey = 'your_secret_key';

// Данные пользователя
const userData = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com'
};
console.log(userData)

// Создание JWT
const token = jwt.sign(userData, secretKey, { expiresIn: '1h' });
console.log('JWT:', token);
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error('Token is not valid:', err.message);
    } else {
        console.log('Decoded data:', decoded);
    }
});