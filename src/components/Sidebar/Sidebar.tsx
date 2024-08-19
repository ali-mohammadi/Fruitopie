import React from 'react';
import Logo from '../Logo/Logo'
import Fruit from "../Fruit/Fruit";
import { Fruit as FruitType, FruitList } from "../../models/Fruit";

interface SidebarProps {
    isExpanded: boolean,
    addItemHandler: (item: FruitType) => void,
    addAllItemsHandler: (items: FruitList) => void
}
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {

    return (
        <>
            <Logo isExpanded={props.isExpanded}/>
            <Fruit {...props} />
        </>
    );
}

export default Sidebar;