const { useState } = require("react");
const { useDispatch,useSelector } = require("react-redux");
const { changeName } = require("../../store/modules/user/action");


const UserCard = () => {
    const [ newName, setNewName] = useState("")
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.name)

    const handleClick = () => {
        dispatch(changeName(newName));
    }

    return(
        <div>
            <h2>User name: {user}</h2>
            <input type="text" onChange={(a)=>setNewName(a.target.value)}/>
            <button onClick={()=> handleClick()}>Change</button>
        </div>
    )
}
export default UserCard;