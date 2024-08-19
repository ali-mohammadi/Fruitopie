export interface Fruit {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    calories: number;
    count?: number;
}

export type FruitList = Array<Fruit>