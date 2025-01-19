const Navbar = () => {
    return (
        // main div
        <div className="flex justify-between">
            {/* Routes */}
            <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
            {/* Logo */}
            <div>
                <img src="/src/assets/Screenshot from 2025-01-19 18-05-47.png" alt="" />
            </div>
            {/* Account */}
            <div className="flex">
                <div>
                    <img src="/src/assets/icons8-cart-64.png" alt="" />
                </div>
                <div>
                    <img src="/src/assets/icons8-profile-picture-60.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;