import { HiOutlineMenu } from "react-icons/hi";
import "../styles/admin.css";


export default function Navbar({toggle}){

    return(

        <header className="admin-navbar">

            <button
                className="btn btn-outline-dark d-lg-none"
                onClick={toggle}
            >
                <HiOutlineMenu size={22}/>
            </button>

            <h5 className="m-0">
                Richie Arts Admin
            </h5>

            <button className="btn btn-danger">

                Logout

            </button>

        </header>

    );

}