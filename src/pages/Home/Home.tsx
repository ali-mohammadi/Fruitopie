import React, { useReducer, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jar from "../../components/Jar/Jar";
import { Fruit, FruitList } from "../../models/Fruit";
import JamReducer from "../../reducers/jamReducer";
import PageTitle from "../../hocs/PageTitle";

const Home: React.FC = () => {
    const [jamItems, jamDispatch] = useReducer( JamReducer, [] )
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const deleteItemHandler = ( id: number ): void => {
        jamDispatch( {type: "DELETE_ITEM", id: id} )
    }

    const addItemHandler = ( item: Fruit ): void => {
        jamDispatch( {type: "ADD_ITEM", item: item} );
    }

    const addAllItemsHandler = ( items: FruitList ): void => {
        jamDispatch( {type: "ADD_ITEMS", items: items} );
    }

    return (
        <div className="flex min-h-screen">
            <PageTitle>Home</PageTitle>
            <aside className={`${isExpanded ? "" : "-translate-x-80"} w-96 lg:-translate-x-0 lg:w-64 xl:w-96 h-full lg:h-auto text-slate-500 bg-slate-100 p-6 px-3 lg:px-6 absolute lg:static transition-all duration-300`}>
                <Sidebar isExpanded={isExpanded} addItemHandler={addItemHandler} addAllItemsHandler={addAllItemsHandler}/>
            </aside>
            <main className="flex-1 bg-white p-6 lg:max-w-5xl ml-16 lg:ml-0" onClick={() => setIsExpanded(false)}>
                <Jar selectedItems={jamItems} deleteItemHandler={deleteItemHandler}/>
            </main>
            <button
                className="fixed lg:hidden w-10 h-10 flex items-center font-wide text-xl justify-center bottom-4 right-4 bg-slate-500 text-slate-100 rounded-full p-4 shadow-lg"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? '-' : '+'}
            </button>
        </div>
    );
}

export default Home;