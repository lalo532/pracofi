import axios from 'axios';

export const getBookings = () => {
    const response = axios.get("http://localhost:4200/mostrar_citas", config);
    return response;
}

export const RegisterBooking = (nombre, email, password) => {
  // const history = useHistory();
  return axios
    .post("http://localhost:4200/registro_cita", {
      nombre,
      email,
      password,
    })
    .then((res) => {
      //   console.log(res);
      // const name = res.data.usuario.name;
      // const role = res.data.usuario.role;
      // const name = res.data.usuario.name;
      // const role = res.data.usuario.role;
      // console.log(res.data.token);
      //   if (res.status === 200) {
      //     history.push("/login");
      //   }
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};