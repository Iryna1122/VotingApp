import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Edit() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
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
        router.post('/users', values)
    }

    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className='mt-6 text-xl font-semibold text-gray-900 dark:text-white'>Потрібно заповнити форму для створення Вашої петиції</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number Petition:</label>
                    <input className="form-control" type="number" id="number" name="numberOfPetition" value={formData.numberOfPetition} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" name="nameOfPetition" value={formData.nameOfPetition} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea className="form-control" id="text" name="textOfPetition" rows="4" value={formData.textOfPetition} onChange={handleChange}></textarea>
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
