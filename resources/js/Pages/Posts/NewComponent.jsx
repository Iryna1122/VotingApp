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
