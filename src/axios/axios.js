import axios from 'axios';
const url = 'http://localhost:3000';

const getProducts = async (state) => {
	const endPoint = '/gallery';
	const { data } = await axios.get(
		url + endPoint /* {
		headers: { Authorization: 'Bearer ' + token },
	} */
	);
	state(data);
};

const getUserData = async (state, token) => {
	const endPoint = '/profile';
	console.log('El valor del token: ' + token);
	try {
		const { data } = await axios.get(url + endPoint, {
			headers: { Authorization: 'Bearer ' + token },
		});
		state(data);
	} catch (error) {
		console.error('Error en la solicitud a /profile:', error);
	}
};

const postRegister = async (user) => {
	const endPoint = '/register';
	try {
		const [{ data }] = await axios.post(url + endPoint, user);
		return data;
	} catch ({ response: { data: message } }) {
		alert(message.message);
		console.log(message);
	}
};

const postLogin = async (usuario) => {
	const endPoint = '/login';
	try {
		const {  data: token } = await axios.post(url + endPoint, usuario);
		alert('Usuario identificado con éxito 😀');
		/* console.log('Usuario identificado'); */
		window.localStorage.setItem('token', token);
	} catch ({ response: { data: message } }) {
		alert(message.message + ' 🙁');
		console.log(message);
		/* alert(message.message);
		console.log(message); */
	}
};

export { getProducts, getUserData, postLogin };
