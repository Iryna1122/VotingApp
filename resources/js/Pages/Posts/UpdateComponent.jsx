import React, { useState } from "react";
import axios from "axios";
import { router } from "@inertiajs/react";
import NewComponent from "./NewComponent";

export default function UpdateComponent({petition}) {
    const [values, setValues] = useState({
         numberOfPetition: petition.numberOfPetition || "",
         nameOfPetition: petition.nameOfPetition || "",
        textOfPetition: petition.textOfPetition || "",
       //--------------------------------------
        // numberOfPetition:  "",
        // nameOfPetition:  "",
        // textOfPetition:  "",

    });
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     router.put("/posts/edit", values);
    //     setValues({
    //         numberOfPetition: "",
    //         nameOfPetition: "",
    //         textOfPetition: "",
    //     });
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(petition.id);
        router.get('/posts/update/'+petition.id);

        setValues({
                    numberOfPetition: "",
                    nameOfPetition: "",
                    textOfPetition: "",
                });
    }

    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Потрібно заповнити форму для редагування Вашої петиції
            </h1>

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Number Petition:
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        id="numberOfPetition"
                        name="numberOfPetition"
                        value={values.numberOfPetition}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameOfPetition"
                        name="nameOfPetition"
                        value={values.nameOfPetition}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Text:
                    </label>
                    <textarea
                        className="form-control"
                        id="textOfPetition"
                        name="textOfPetition"
                        rows="4"
                        value={values.textOfPetition}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-info">
                        Редагувати петицію
                    </button>
                </div>
            </form>

            <br />
            <a href="/dashboard" className="btn btn-success">
                Back
            </a>
        </div>
    );
}
