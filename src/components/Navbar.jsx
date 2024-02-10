import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const {currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try{
            await logout();
        }
        catch(error){
            console.log(error)

        }
    }

    return (
        <div  className=" navbar fixed z-10 bg-info text-neutral-content ">
            <div className="containerWrap flex justify-between">
            <a className=" text-xl bold">InstantChat</a>
            {currentUser ? <button onClick = {handleLogout} className="btn btn-info text-xl text-neutral-content ">Logout</button> : ""}
            
            </div>
        
        </div>
    )
}

export default Navbar