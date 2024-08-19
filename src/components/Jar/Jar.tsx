import React from "react";
import { FruitList } from "../../models/Fruit";
import Header from "./Header";
import List from "./List";
import Total from "./Total";

interface JarProps {
    selectedItems: FruitList,
    deleteItemHandler: (id: number) => void,
}

const Jar: React.FC<JarProps> = ( props: JarProps ) => {
    return (
        <>
            <h2 className="font-double uppercase text-xl mb-4">Jar</h2>
            <ul id="jar-list">
                {props.selectedItems.length > 0 ? (
                    <>
                        <Header/>
                        <List {...props}/>
                        <Total selectedItems={props.selectedItems}/>
                    </>
                ) : (
                    <li>You haven't added any fruits to your jar yet :(</li>
                )
                }
            </ul>
        </>
    );
}

export default Jar;