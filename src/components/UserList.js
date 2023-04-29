import { useEffect } from "react";
import User from "./User";
import "./UserList.css";


const UserList = (props) => {
    let {
       users,
       deleteUser,
       editUser,
       saveUser,
       selectAllCheckbox,
       checkOne,
       selectAllRef,
       setCurrentPage,
       currentPage,
       
    } = props;


    useEffect(() => {
        if(users?.length === 0 && currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
        console.log(users?.length);
    } , [currentPage, setCurrentPage, users?.length]);

    if(users?.length === 0 && currentPage === 1){
        return <p>No User Found</p>;
    }

    else{
        return(
            <table className="table">
                <thead>
                <tr>
                    <th>
                        <input type="checkbox"
                        ref={selectAllRef} 
                        onChange={(event) => {
                            selectAllCheckbox(event);
                        }}
                        name="selectAllCheckbox"
                        />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return user.show ? (
                            <User
                            checkOne={checkOne}
                            saveUser={saveUser}
                            editUser={editUser}
                            deleteUser={deleteUser}
                            key={user.id}
                            user = {user} 
                            />
                        ) : (
                            ""
                        )
                    })}
                </tbody>
            </table>
        )
    }
}



export default UserList;