import React from "react";
import { Fruit } from "../../models/Fruit";
import { formatNumber } from "../../utility/formatNumber";

interface JarProp {
    item: Fruit,
    deleteItemHandler: Function
}

const ListItem: React.FC<JarProp> = ( {item, deleteItemHandler} ) => {
    return (
        <li className="grid grid-cols-6 text-lg py-1">
            <div className="col-span-3">{item.count && item.count > 1 && `${item.count} x `}{item.name}</div>
            <div className="col-span-2">
                {formatNumber( item.calories * ( item.count ?? 1 ) )}
                {item.count && item.count > 1 && (
                    <span className="text-sm block lg:inline lg:ml-2">
                        ({formatNumber( item.calories )} each)
                    </span>
                )}
            </div>
            <div className="flex items-center text-red-700 text-xs font-wide text-xs">
                <button onClick={() => deleteItemHandler( item.id )}>- delete</button>
            </div>
        </li>
    )
}

export default ListItem;