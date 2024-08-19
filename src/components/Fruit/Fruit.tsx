import React, { useEffect, useState } from "react";
import { Fruit as FruitType, FruitList } from "../../models/Fruit";
import FruitGroups from "../../models/FruitGroups";
import GroupBy from "./GroupBy";
import List from "./List";
import Toast from "../Toast/Toast";

interface FruitProps {
    isExpanded: boolean,
    addItemHandler: ( item: FruitType ) => void,
    addAllItemsHandler: ( items: FruitList ) => void
}

const Fruit: React.FC<FruitProps> = ( {isExpanded, addItemHandler, addAllItemsHandler} ) => {
    const [fruitItems, setFruitItems] = useState<FruitList>( [] )
    const [group, setGroup] = useState<string>( 'none' );
    const [groupedItems, setGroupedItems] = useState<FruitGroups>( {} );
    const [error, setError] = useState<string | null>( null );
    const [loading, setLoading] = useState<boolean>( true );

    const groupFruits = ( property: keyof FruitType ): FruitGroups => {
        const groupedFruits: FruitGroups = fruitItems.reduce( ( acc: FruitGroups, item: FruitType ) => {
            const key = item[property] as string;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push( item );
            return acc;
        }, {} as FruitGroups );

        // Return the groups sorted alphabetically by their group name
        return Object.entries( groupedFruits )
            .sort( ( [keyA], [keyB] ) => keyA.localeCompare( keyB ) )
            .reduce( ( sortedAcc, [key, value] ) => {
                sortedAcc[key] = value;
                return sortedAcc;
            }, {} as FruitGroups );
    }

    const changeGroupHandler = ( property: string ) => {
        setGroup( property );
    }

    useEffect( () => {
        if (group === 'none') {
            setGroupedItems( {none: fruitItems} );
        } else {
            setGroupedItems( groupFruits( group as keyof FruitType ) );
        }
    }, [group, fruitItems] );

    const fetchWithRetry = ( url: string, retries: number = 3 ): Promise<any> => {
        return fetch( url )
            .then( ( response: Response ) => {
                if (!response.ok) {
                    throw new Error( `HTTP error! status: ${response.status}` );
                }
                return response.json();
            } )
            .catch( ( error ) => {
                if (retries > 0) {
                    return fetchWithRetry( url, retries - 1 );
                } else {
                    throw error;
                }
            } );
    };

    useEffect( () => {
        fetchWithRetry( '/api/all', 2 )
            .then( ( data: any ) => {
                const fetchedFruitItems: FruitList = data.map( ( item: any ) => ( {
                    name: item.name,
                    id: item.id,
                    family: item.family,
                    order: item.order,
                    genus: item.genus,
                    calories: item?.nutritions?.calories ?? 0
                } ) );
                fetchedFruitItems.sort( ( itemA: FruitType, itemB: FruitType ) => itemA.name.localeCompare( itemB.name ) );
                setFruitItems( fetchedFruitItems );
                setLoading( false );
            } )
            .catch( ( error: Error ) => {
                setError( 'There was an issue fetching the fruit list. Please try again later!' );
            } );
    }, [] );

    return (
        <>
            <div className={!isExpanded ? 'hidden lg:block' : 'block'}>
                <GroupBy changeGroupHandler={changeGroupHandler}/>
                {!error && <List groups={groupedItems} loading={loading} addItemHandler={addItemHandler} addAllItemsHandler={addAllItemsHandler}/>}
            </div>
            {error && <Toast message={error} duration={3000}/>}
        </>
    )
}

export default Fruit;