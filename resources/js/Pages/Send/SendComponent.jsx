import {reactive} from 'vue'
import {router} from '@inertiajs/vue3'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function SendComponent() {



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
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );

}
