import React from "react";
import { FruitList } from "../../models/Fruit";
import ListItem from "./ListItem";

interface JarItemsListProps {
    selectedItems: FruitList,
    deleteItemHandler: Function
}

const List: React.FC<JarItemsListProps> = ( {selectedItems, deleteItemHandler} ) => (
    <>
        {selectedItems.map( ( item ) => <ListItem key={item.id} item={item} deleteItemHandler={deleteItemHandler}/> )}
    </>
);

export default List;