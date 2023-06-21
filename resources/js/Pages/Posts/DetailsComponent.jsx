import React, {useState} from "react";
import {router} from "@inertiajs/react";
import axios from "axios";


export default function DetailsComponent({petition}) {
    const [values, setValues] = useState({
        numberOfPetition: petition.numberOfPetition || "",
        nameOfPetition: petition.nameOfPetition || "",
        textOfPetition: petition.textOfPetition || "",
        //--------------------------------------
        // numberOfPetition:  "",
        // nameOfPetition:  "",
        // textOfPetition:  "",

    });


    return (
        <div className="col-7 ml-auto mr-auto bg-gray-100">
            <h1 className="text-success h1 mt-10 mb-10 text-center">
                Детальний огляд Вашої петиції
            </h1>
            <div className="border border-success">
                <h3 className='h3 text-center'>{values.nameOfPetition}</h3>
                <h3 className='h3 text-center'>Number of petition: {values.numberOfPetition}</h3>
                <h3 className='h3 text-center'>Text: {values.textOfPetition}</h3>
            </div>
        </div>
    );

}
