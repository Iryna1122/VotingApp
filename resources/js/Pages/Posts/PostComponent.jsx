import React,{useState} from "react";


export default function PostComponent ()
{
    // const [formData, setFormData] = useState({
    //     number: "",
    //     title: "",
    //     text: ""
    // });

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // Відправка даних на сервер
    //     fetch("/save-petition", {
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
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             // Обробка помилки під час збереження даних
    //         });
    // };

    // const handleChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     });
    // };

    handleChangeState=()=>{
        this.useState({
            number:"",
            title:"",
            text:"",

        });
    }
    handleChange=(e)=>{
        this.useState({
            [e.target.name]:e.target.value
        });
    }




    return (
        <div>
            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Потрібно заповнити форму для створення Вашої петиції</h2>

            <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number Petition:</label>
                    <input className="form-control" type="number" id="number" name="number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea className="form-control" id="text" name="text" rows="4"></textarea>
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
