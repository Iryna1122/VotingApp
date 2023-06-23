import React, { useState } from "react";
import { router } from '@inertiajs/react';

export default function RoleComponent() {
    const [values, setValues] = useState({
        nameOfRole: "",

    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await router.post("/posts/saveRole", values);
        setValues({
            nameOfRole: "",
        });
    }

    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className='mt-6 text-xl font-semibold text-gray-900 dark:text-white'>Потрібно заповнити форму для створення користувача</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="nameOfRole" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="nameOfRole" name="nameOfRole" value={values.nameOfRole} onChange={handleChange} />
                </div>

                <div>
                    <button type="submit" className="btn btn-info">Додати користувача</button>
                </div>
            </form>

            <br/>
            <a href="/dashboard" className="btn btn-success">Back</a>

        </div>
    );

}
