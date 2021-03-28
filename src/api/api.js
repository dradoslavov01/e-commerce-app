export const settings = {
    host: ''
}


async function request(url, options) {
    console.log(url);
    try {
        const response = await fetch(url, options);
        
        if(response.ok == false) {
            const error = response.json();
            throw new Error(error);
        }
        try {
            const data = await response.json();
            return data.d;
        } catch (err) {
            return response;
        }
    } catch(err) {
        throw err
    }

}


// function getOptions(method = 'get', body) {
//     const options = {
//         method,
//         headers: {}
//     };
//     const token = sessionStorage.getItem('authToken');
//     if(token != null) {
//         options.headers['X-Authorization'] = token;
//     }

//     if(body) {
//         options.headers['Content-Type'] = 'application/json';
//         options.body = JSON.stringify(body);
//     }

//     return options;
// }


export async function get(url, options) {
    return await request(url, options);
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}


export async function login(email, password) {
   const user = await post(settings.host + '/users/login', {email, password});

    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('authToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);

    return user;
}

export async function register(email, password) {
    const user = await post(settings.host + '/users/register', {email, password});
 
     sessionStorage.setItem('email', user.email);
     sessionStorage.setItem('authToken', user.accessToken);
     sessionStorage.setItem('userId', user._id);
 
     return user;
 }

 export async function logout() {
    const user = await get(settings.host + '/users/logout');
 
     sessionStorage.removeItem('email', user.email);
     sessionStorage.removeItem('authToken', user.accessToken);
     sessionStorage.removeItem('userId', user._id);
 
     return user;
 }
