import axios from 'axios';
export const login = (email, password)=>{
    return axios
    .post(api_url,{
        email,
        password,
    })
    .then((res)=>{
        const name = res.data.data.name;
        const fsurname = res.data.data.first_surname;
        const sndsurname = res.data.data.second_surname;
        const fullname = `${name} ${fsurname} ${sndsurname}`;
        const type = res.data.data.type;
        console.log(res.data);
        if(res.data.token){
            localStorage.setItem('token',JSON.stringify(res.data.token));
            localStorage.setItem('name',JSON.stringify(fullname));
            localStorage.setItem('user', JSON.stringify(dataUser));
        }
        return res.data;
    });
};


export const logout =() =>{
    localStorage.removeItem('token');
}
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
  };