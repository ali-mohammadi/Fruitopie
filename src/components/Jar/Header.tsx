import React from "react";

const Header: React.FC = () => (
    <li className="grid grid-cols-6 border-t-2 border-b-2 border-black border-dashed text-lg mb-6">
        <div className="col-span-3">Title</div>
        <div className="col-span-3">Calories</div>
    </li>
);

export default Header;