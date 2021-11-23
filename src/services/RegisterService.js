import axios from 'axios';

export const RegisterService = (nombre, email, password, ) =>{
    return axios
    .post("http://localhost:3000/register",{
        nombre,
        email,
        password
    })
    .then((res)=>{
        console.log(res);
        // const name = res.data.usuario.name;
        // const role = res.data.usuario.role;
        // const name = res.data.usuario.name;
        // const role = res.data.usuario.role;
        // console.log(res.data.token);
        // if(res.data.token){
        //     localStorage.setItem('token',JSON.stringify(res.data.token));
        //     localStorage.setItem('name',JSON.stringify(name));
        //     localStorage.setItem('role', JSON.stringify(role));
        // }
        // return res.data;
    })
    .catch((error) =>{
        console.log(error);
    })
};