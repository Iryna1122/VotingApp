import React, {useState} from "react";
import axios from "axios";
import {router} from "@inertiajs/react";


export default function DetailsComponent({petition}) {
    const [values, setValues] = useState({
        numberOfPetition: petition.numberOfPetition || "",
        nameOfPetition: petition.nameOfPetition || "",
        textOfPetition: petition.textOfPetition || "",
    });

    return (
        <div className="col-7 ml-auto mr-auto">
            <h1 className="text-success h1 mt-10 mb-10">
                Детальний огляд Вашої петиції
            </h1>
            <h3 className='h3 text-center'>{values.nameOfPetition}</h3>
        </div>
    );
}
