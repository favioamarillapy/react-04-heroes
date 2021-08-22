import { heroes } from "../data/data";


export const heoresById = (id) => {

    return heroes.find(hero => hero.id === id);
}
