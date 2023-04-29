import { useRef } from "react";


import "./User.css";

const User = (props) => {
    let  {user,deleteUser, editUser, saveUser, checkOne} = props;

    const nameEl = useRef(null);
    const emailEl = useRef(null);
    const roleEl = useRef(null);


    return (
        <tr key={user.id} className={user.isChecked ? 'selected' : ''}>
            <td>
                <label>
                    <input 
                    type="checkbox"
                    id={`user -${user.id}`}
                    onChange={() => checkOne(user.id)}
                    checked={user.isChecked}
                    />
                </label>
            </td>
            <td>
                <input 
                className={user.edit === false ? 'readonly': ''}
                type="text"
                readOnly={!user.edit}
                name="name"
                ref={nameEl}
                defaultValue={user.name}
                />
            </td>
            <td>
                <input 
                className={user.edit === false ? 'readonly': ''}
                type="text"
                readOnly={!user.edit}
                name="email"
                ref={emailEl}
                defaultValue={user.email}
                />
            </td>
            <td>
                <input 
                className={user.edit === false ? 'readonly': ''}
                type="text"
                readOnly={!user.edit}
                name="role"
                ref={roleEl}
                defaultValue={user.role}
                />
            </td>
            <td className="action-icons">
                {user.edit ? (
                    <span onClick={() => saveUser(user.id, nameEl,emailEl, roleEl)} className="span-text" style={{color: "red", fontSize: "16px", fontStyle:"italic", marginLeft:"8px"}}>save</span>
                ) : (
                    <span onClick={() => editUser(user.id)} className="span-text" style={{color: "red", fontSize: "16px", fontStyle:"italic", marginLeft:"8px"}}>edit</span>
                )}
                <span onClick={() => {deleteUser(user.id)}} style={{color: "red", fontSize: "16px", fontStyle:"italic", marginLeft:"8px"}}>delete</span>
            </td>
        </tr>
    )
    

}

export default User;