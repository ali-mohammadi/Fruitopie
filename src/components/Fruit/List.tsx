import React from "react";
import { Fruit, FruitList } from "../../models/Fruit";
import FruitGroups from "../../models/FruitGroups";
import ListGroup from "./ListGroup";
import ListItem from "./ListItem";


interface FruitListProp {
    groups: FruitGroups,
    loading: boolean,
    addItemHandler: ( item: Fruit ) => void,
    addAllItemsHandler: ( items: FruitList ) => void
}

const List: React.FC<FruitListProp> = ( {groups, loading, addItemHandler, addAllItemsHandler } ) => {
    return (
        <div>
            <label className="text-lg">Fruit List</label>
            <div id="fruit-list" className="border border-slate-500 max-h-60 overflow-y-scroll no-scrollbar">
            {loading && <div className="px-2 animate-pulse">Loading...</div>}
            {Object.keys(groups).length > 1 ? (
                Object.entries(groups).map(([key, items]: [string, FruitList]) => (
                    <ListGroup
                        key={key.toLowerCase()}
                        group={key}
                        items={items}
                        addItemHandler={addItemHandler}
                        addAllItemsHandler={addAllItemsHandler}
                    />
                ))
            ) : (
                Object.entries(groups).map(([key, items]: [string, FruitList]) =>
                    items.map((item: Fruit) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            addItemHandler={addItemHandler}
                        />
                    ))
                )
            )}
            </div>
        </div>

    )
}

export default List;