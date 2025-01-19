import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        // main div
        <div className="flex justify-between items-center">
            {/* Routes */}
            <div>
                <ul className="flex gap-4">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>Shop</NavLink>
                    <NavLink to={"/"}>About</NavLink>
                    <NavLink to={"/"}>Contacts</NavLink>
                </ul>
            </div>
            {/* Logo */}
            <div>
                <img className="h-16 pe-[150px]" src="/src/assets/Screenshot from 2025-01-19 18-05-47.png" alt="" />
            </div>
            {/* Account */}
            <div className="flex gap-2">
                <div>
                    <img className="h-10" src="/src/assets/icons8-cart-64.png" alt="" />
                </div>
                <div>
                    <img className="h-10" src="/src/assets/icons8-profile-picture-60.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;