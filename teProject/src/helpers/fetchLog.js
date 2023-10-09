import axios from 'axios';
// const url = 'http://localhost:3000/usuarios';

// export const fetchLog = async () => {
//     try {
//         const response = await axios.get(url);
//         return {
//             data: response.data
//         }
//     } catch (error) {
//         console.error('Error al hacer la solicitud GET:', error.message);
//     }
// }

export const fetchLog = async ( log ) => {
    try {
        const response = await axios.post('http://localhost:3000/saveLog', log)
        console.log(response.data)
    } catch (error) {
        console.error('Error al enviar la solicitud: ', error.message);
    }
}