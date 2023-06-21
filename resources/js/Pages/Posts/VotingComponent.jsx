import React, { useState } from "react";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {router} from "@inertiajs/react";
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

    const [selectedOption, setSelectedOption] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (selectedOption) {
            console.log(123)
                await router.post(`/posts/votingCount`, {
                    petitionId: petition.id,
                    option: selectedOption,
                });
                // Виконати додаткові дії після успішного відправлення даних
            }
        } catch (error) {
            console.error(error);
        }
    }
    const handleChangeOption = (e) => {
        setSelectedOption(e.target.value);
    };

    return (

        <div className= 'border border-success text-center col-7 ml-auto mr-auto bg-gray-100'>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="petitionId" value={petition.id} />
                <h2 className='h2'>{petition.numberOfPetition}</h2>
                <h2 className='h2'>{petition.nameOfPetition}</h2>
                <p>{petition.textOfPetition}</p>
                <div>
                    <input
                        type="radio"
                        id="option1"
                        name="vote"
                        value="option1"
                        onChange={handleChangeOption}
                    />
                    <label htmlFor="option1" className='ml-10'>Віддaти свій голос</label>
                </div>
                <button type="submit" className="btn btn-outline-success ml-10 mb-1">
                    Голосувати
                </button>
            </form>
        </div>

    )
};
