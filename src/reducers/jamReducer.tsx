import { Fruit, FruitList } from "../models/Fruit";

type Action =
    | {type: "DELETE_ITEM", id: number}
    | {type: "ADD_ITEM", item: Fruit}
    | {type: "ADD_ITEMS", items: FruitList};

const jamReducer = (state: Array<Fruit>, action: Action): Array<Fruit> => {
    switch (action.type) {
        case "DELETE_ITEM":
            if (state.some((item: Fruit) => item.id === action.id && (item.count ?? 1) > 1)) {
                return state.map((item: Fruit) => (item.id === action.id) ? {...item, count: (item.count ?? 1) - 1} : item)
            }
            return state.filter((item: Fruit) => item.id !== action.id);
        case "ADD_ITEM":
            if (state.some((item: Fruit) => item.id === action.item.id)) {
                return state.map((item: Fruit) => (item.id === action.item.id) ? {...item, count: (item.count ?? 1) + 1} : item)
            }
            return [...state, action.item];
        case "ADD_ITEMS":
            return action.items.reduce((acc: Array<Fruit>, item: Fruit) => {
                return jamReducer(acc, { type: "ADD_ITEM", item });
            }, state);
        default:
            throw new Error(`Undefined action type`); // Not really necessary in TS
    }
}

export default jamReducer;