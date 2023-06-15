import React from 'react';
import { Inertia } from '@inertiajs/inertia-react'; // Розкоментуйте цей рядок
import { usePage } from '@inertiajs/inertia-react';

//export const NewComponent = () => {
  //  const { petitions } = usePage().props;
    export  const NewComponent = ({ petitions }) => {
    return (
        <div>
            <table>
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
                {petitions.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.numberOfPetition}</td>
                        <td>{item.nameOfPetition}</td>
                        <td>{item.textOfPetition}</td>
                        {/*<td>{item.userId}</td>*/}
                        {/*<td>{item.created_at}</td>*/}
                        {/*<td>{item.updated_at}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
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
