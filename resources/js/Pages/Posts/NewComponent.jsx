import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/delete`);
            location.reload();//
        } catch (error) {
            console.error(error);
        }
    };

}
export default function NewComponent({data}) {
    return (
        <div>
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
                       <MyComponent petition={item}/>
                   )
                })
                }
               </tbody>
            </table>
        </div>
    )
};


const MyComponent = ({petition}) => {
    console.log(petition.nameOfPetition);
    return (
        <tr>
            <td>{petition.id}</td>
            <td>{petition.numberOfPetition}</td>
            <td>{petition.nameOfPetition}</td>
            <td>{petition.textOfPetition}</td>
            <td>{petition.userId}</td>
            <td>{petition.created_at}</td>
            <td>{petition.updated_at}</td>
            {/*<td><button className='btn btn-danger' type="button" onClick={() => handleDelete(petition.id)}>Delete</button></td>*/}
            <td><InertiaLink href={`/delete/${petition.id}`} method="get" as="button" className='btn btn-danger' type="button">Delete</InertiaLink></td>
            <td> <InertiaLink href={`/update/${petition.id}`} method="get" as="button" className='btn btn-danger' type="button">Update</InertiaLink></td>
            {/*<td><button className='btn btn-success'><a href='Posts/UpdateComponent'></a>   Edit</button></td>*/}
            <td><button  className='btn btn-outline-info'>Details</button></td>
        </tr>

    )
};


// const InertiaNewComponent = () => {
//     const { petitions } = usePage().props;
//
//     return (
//         <Inertia>
//             <NewComponent petitions={petitions} />
//         </Inertia>
//     );
// };

//export default InertiaNewComponent;


//export default NewComponent;

// import React,{Component} from 'react';
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
