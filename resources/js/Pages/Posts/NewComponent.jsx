import React from "react";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, useForm} from "@inertiajs/inertia-react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import {router} from "@inertiajs/react";


const Edit = () => {
    const {post} = usePage().props;
    const {data, setData, put, errors} = useForm({
        numberOfPetition: post.numberOfPetition || "",
        nameOfPetition: post.nameOfPetition || "",
        textOfPetition: post.textOfPetition || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }


}
export default function NewComponent({data, auth}) {

    return (
        <div>
            <AuthenticatedLayout user={auth.user}>

                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Number of Petition</th>
                        <th>Name of Petition</th>
                        <th>Text of Petition</th>
                        <th>User ID</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*<MyComponent petition={item}/>*/}
                    {data.petitions.map((item) => {
                        return (
                            <MyComponent key={item.id} petition={item}/>
                        )
                    })
                    }
                    </tbody>
                </table>
                <br/>
                {/*<a href="/dashboard" className="btn btn-success">Back</a>*/}
            </AuthenticatedLayout>
        </div>
    )
};


const MyComponent = ({petition}) => {
    console.log(petition.nameOfPetition);

    //  function handleDelete(id) {
    //     console.log(123);
    //      {
    //         axios.delete(`/posts/destroy/${id}`).then(response => {
    //             window.location.href = '/posts/info'
    //         }).catch(error => console.log(error));
    //
    //     }
    // }

    return (

        <tr>
            <td>{petition.id}</td>
            <td>{petition.numberOfPetition}</td>
            <td>{petition.nameOfPetition}</td>
            <td>{petition.textOfPetition}</td>
            <td>{petition.userId}</td>
            <td>{petition.created_at}</td>
            <td>{petition.updated_at}</td>

            <td>

                <InertiaLink href={`/posts/destroy/${petition.id}`} method="delete" as="button" className='btn btn-warning' type="button">Delete</InertiaLink>
            </td>

            <td><InertiaLink href={`/posts/edit/${petition.id}`} method="get" as="button" className='btn btn-info'
                             type="button">Update</InertiaLink></td>
            {/*<td><button className='btn btn-success'><a href='Posts/UpdateComponent'></a>   Edit</button></td>*/}
            <td><InertiaLink href={`/posts/details/${petition.id}`} method="get" as="button" className='btn btn-info'
                             type="button">Details</InertiaLink></td>
        </tr>

    )
};

