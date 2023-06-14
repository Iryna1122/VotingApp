import {reactive} from 'vue'
import {router} from '@inertiajs/vue3'


export default function SendComponent () {
    const form = reactive({
        numberOfPetition: "",
        nameOfPetition: "",
        textOfPetition: "",
    })

    function submit() {
        router.post('/posts/save', form)
    }

    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className='mt-6 text-xl font-semibold text-gray-900 dark:text-white'>Потрібно заповнити форму для
                створення Вашої петиції</h1>

            <form submit.prevent="submit">
                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number Petition:</label>
                    <input className="form-control" type="number" id="numberOfPetition" name="numberOfPetition"
                           value={formData.numberOfPetition} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="nameOfPetition" name="nameOfPetition"
                           value={formData.nameOfPetition} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea className="form-control" id="textOfPetition" name="textOfPetition" rows="4"
                              value={formData.textOfPetition} onChange={handleChange}></textarea>
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
