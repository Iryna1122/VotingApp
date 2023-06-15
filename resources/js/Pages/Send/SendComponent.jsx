// import {reactive} from 'vue';
// import {router} from '@inertiajs/vue3';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
//
// export default function SendComponent() {
//
// //     const [products, setProducts] = useState([]);
// //     // Call this function to get products data
// //     const getProducts = () => {
// //         /* fetch API in action */
// //         fetch('/api/data')
// //             .then(response => {
// //                 return response.json();
// //             })
// //             .then(users => {
// //                 //Fetched product is stored in the state
// //                 setProducts(users);
// //             });
// //     };
// //     /*useEffect is a lifecycle hook
// // * that gets called after the component is rendered
// // */
// //     useEffect(() => {
// //         getProducts();
// //     }, []);
// //     // Render the products
// //     const renderProducts = () => {
// //         return data.map(product => {
// //             return (
// //                 /* When using list you need to specify a key
// // * attribute that is unique for each list item
// // */
// //                 <li key={product.id} >
// //                     { product.name }
// //                 </li>
// //             );
// //         })
// //     };
// //     return(
// //         <div>
// //             <ul>
// //                 { renderProducts() }
// //             </ul>
// //         </div>
// //     )
//
//
// // const  [data,setData]=useState([]);
// // useEffect(async ()=>{
// // let result=await fetch("/data");
// // result =await  result.json();
// // setData(result);
// // },[]);
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetchData();
//     }, []);
//      $data2 = JSON.parse(jsonString); // jsonString - це рядок JSON, який ви отримали
//
//     console.log($data2);
//     async function fetchData() {
//         try {
//             const response = await axios.get('/api/data');
//             setData(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//
//     console.warn("result",data);
//     return (
//         <div>
//             <h1>Таблиця користувачів</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Ім'я</th>
//                     <th>Email</th>
//                     <th>Дата створення</th>
//                     <th>Дата оновлення</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((item) => (
//                     <tr key={item.id}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
//
// }


import {Head} from "@inertiajs/react";

const SendComponent = ({ data }) => {
        console.log(data);
    return (
        <div>

            {data.users.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>

                    </tr>
                ))}

        </div>
    );
};
export default SendComponent;
