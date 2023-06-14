import React, {useState} from "react";
import axios from "axios";
// import LS from 'localStorage';
import Super from 'superagent';
import {router} from "@inertiajs/react";

export default function PostComponent() {
    // const [formData, setFormData] = useState({
    //     numberOfPetition: "",
    //     nameOfPetition: "",
    //     textOfPetition: "",
    //
    // });
    //
    //
    //
    // const handleChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     });
    // };
    //
    //
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(12334);
    //     console.log(event);
    //
    //     try {
    //         // Отримати CSRF-токен з сервера
    //         const { data: { csrf_token: csrfToken } } = await axios.get("/sanctum/csrf-cookie");
    //         console.log(111);
    //         console.log(formData);
    //         // Встановити CSRF-токен у заголовки запиту
    //         //  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    //          axios.defaults.headers.common['Authorization'] = `Bearer ${csrfToken}`;
    //          console.log("ToKEn"+csrfToken);
    //         console.log(222);
    //
    //         // Відправити дані на сервер
    //
    //         const response = await axios.post("/posts/save", formData, {
    //             headers: {
    //                 "Content-Type": "application/x-www-form-urlencoded"
    //             }
    //         });
    //         console.log(3331);
    //
    //
    //         console.log(response.data);
    //
    //         // console.log(response.data);
    //         // Очистити форму або виконати інші дії після успішного збереження даних
    //     } catch (error) {
    //         console.error("Error:", error);
    //         // Обробка помилки під час збереження даних
    //     }
    // };


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(12334);
    //     console.log(event);
    //
    //     try {
    //         JSON.stringify(formData)
    //        Super.post('/posts/save').withCredentials().send(formData).then(response=>{console.log(response)}).catch(error=>console.log("Error:", error));
    //
    //
    //     } catch (error) {
    //         console.error("Error:", error);
    //         // Обробка помилки під час збереження даних
    //     }
    // };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     // Відправка даних на сервер
    //     fetch("/posts/save", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             // Очистка форми або виконання інших дій після успішного збереження даних
    //         })
    //          .catch((error) => {
    //             console.error("Error:", error);
    //             // Обробка помилки під час збереження даних
    //         });
    // };


    const [values, setValues] = useState({
        numberOfPetition: "",
        nameOfPetition: "",
        textOfPetition: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/posts/save', values)
    }


    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className='mt-6 text-xl font-semibold text-gray-900 dark:text-white'>Потрібно заповнити форму для
                створення Вашої петиції</h1>

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number Petition:</label>
                    <input className="form-control" type="number" id="numberOfPetition" name="numberOfPetition"
                           value={values.numberOfPetition} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="nameOfPetition" name="nameOfPetition"
                           value={values.nameOfPetition} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea className="form-control" id="textOfPetition" name="textOfPetition" rows="4"
                              value={values.textOfPetition} onChange={handleChange}></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-info">Відправити петицію</button>
                </div>
            </form>

            <br/>
            <a href="/dashboard" className="btn btn-success">Back</a>

        </div>
    );
}
