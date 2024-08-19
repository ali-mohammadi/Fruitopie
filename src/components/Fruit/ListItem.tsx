import React from "react";
import { Fruit } from "../../models/Fruit";
import { formatNumber } from "../../utility/formatNumber";

interface FruitListItemProps {
    item: Fruit,
    addItemHandler: ( item: Fruit ) => void
}

const ListItem: React.FC<FruitListItemProps> = ( {item, addItemHandler} ) => {
    return (
        <div className="grid grid-cols-4 px-2 text-lg">
            <div className="col-span-2">{item.name}</div>
            <div>{formatNumber( item.calories )}</div>
            <button className="text-green-700 font-wide text-xs text-right" onClick={(e) => {addItemHandler( item ); e.stopPropagation();}}>+ Add</button>
        </div>
    );
}

export default ListItem;