import React from "react";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import {router} from "@inertiajs/react";


export default function VotingComponent({data, auth}) {

    return (
        <div>
            <AuthenticatedLayout user={auth.user}>

                {data.petitions.map((item) => {
                    return (
                        <MyComponent key={item.id} petition={item}/>
                    )
                })
                }
                <br/>
                {/*<a href="/dashboard" className="btn btn-success">Back</a>*/}
            </AuthenticatedLayout>
        </div>
    )
};

const MyComponent = ({petition}) => {
    console.log(petition.nameOfPetition);

    return (

        <div className= 'border border-success text-center col-7 ml-auto mr-auto bg-gray-100'>

            <h2 className='h2'>{petition.numberOfPetition}</h2>
            <h2 className='h2'>{petition.nameOfPetition}</h2>
            <p>{petition.textOfPetition}</p>

            <div>
                <input
                    type="radio"
                    id="option1"
                    name="vote"
                    value="option1"
                />
                <label htmlFor="option1" className='ml-10'>Віддіти свій голос</label>
            </div>

        </div>

    )
};
