import React from "react";
import { Fruit, FruitList } from "../../models/Fruit";
import { formatNumber } from "../../utility/formatNumber";

interface JarItemsTotalProps {
    selectedItems: FruitList
}

const Total: React.FC<JarItemsTotalProps> = ( {selectedItems} ) => (
    <li className="grid grid-cols-6 font-wide font-bold text-lg mt-40 border-t-2 border-dashed border-black py-3">
        <div className="col-span-3 uppercase">Total</div>
        <div className="col-span-3">
            {formatNumber(selectedItems.reduce((acc: number, item: Fruit) => acc + item.calories * (item.count ?? 1), 0))}
        </div>
    </li>
);

export default Total;