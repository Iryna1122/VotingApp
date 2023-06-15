import React, {useState} from "react";
import axios from "axios";
// import LS from 'localStorage';
import Super from 'superagent';
import {router} from "@inertiajs/react";
import NewComponent from './NewComponent';

export default function PostComponent() {

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
