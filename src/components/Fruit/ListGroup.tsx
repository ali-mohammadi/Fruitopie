import React, { useState } from "react";
import { Fruit, FruitList } from "../../models/Fruit";
import ListItem from "./ListItem";

interface FruitGroupProps {
    group: string,
    items: FruitList;
    addItemHandler: ( item: Fruit ) => void,
    addAllItemsHandler: ( items: FruitList ) => void
}

const ListGroup: React.FC<FruitGroupProps> = ( {group, items, addItemHandler, addAllItemsHandler} ) => {
    const [expanded, setExpanded] = useState( false )

    return (
        <div className="grid grid-cols-5 hover:cursor-pointer px-2 py-2 border-b border-b-slate-500 last:border-b-0" onClick={() => setExpanded( !expanded )}>
            <div className="col-span-2 font-double text-xs">{group}</div>
            <button className="col-span-2 font-wide text-xs text-green-700 relative z-10 text-center" onClick={(e) => {addAllItemsHandler( items ); e.stopPropagation()} }>+ Add All
            </button>
            <div className="font-wide text-xs text-right"><span className={"inline-block" + (expanded ? " rotate-180" : "")}>V</span></div>
            {expanded && (
                <div className="col-span-full pt-2 -mx-2">
                    {items.map( ( item: Fruit ) => <ListItem item={item} addItemHandler={addItemHandler}/> )}
                </div>
            )
            }
        </div>
    )
}

export default ListGroup;