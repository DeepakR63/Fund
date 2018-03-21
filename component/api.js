
import axios from 'axios';

const BASE_URL = 'http://52.41.54.41:3001/';



export function getCall(url,params=null)
{
	return axios.get(BASE_URL+url,{params : params});
}

export function putCall(url,body)
{
	return axios.put(BASE_URL+url,body);
}

export function postCall(url,body)
{
	return axios.post(BASE_URL+url,body);
}

export function setAuthorization()
{
	var _auth=JSON.parse(localStorage.getItem('Auth'));

	return (
		axios.interceptors.request.use((config) => {

		if( _auth ) 
		{
			config.headers['Auth'] = _auth;
			return config;
		}
		else 
		{
			return config;
		}
	}));
}


