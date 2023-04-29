import axios from "axios";
import User from "../components/User";


const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"

const fetchData = (setUserData) => {
    axios
    .get(url)
    .then((res) => {
        let users = res.data
        //console.log(users);
        setUserData((users).map(user => {
            user.show = true;
            user.isChecked = false;
            user.edit = false;
            
            console.log(User)
            return user;
        }))
    })
    .catch((err) => console.log(err));

}

export { fetchData };