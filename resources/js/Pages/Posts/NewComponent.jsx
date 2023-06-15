import {reactive} from 'vue'
import {router} from '@inertiajs/vue3'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function NewComponent() {



    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('/api/data');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}


//export default NewComponent;

//export default NewComponent;

// export default class NewComponent extends Component
// {
// render(){
// return(
//     <div>
//        <h2>This is something from Petition</h2>
//         <p>Details</p>
// <br/>
//         <a href="/dashboard" className="btn btn-success">Back</a>
//
//     </div>
// )
// }
// }

