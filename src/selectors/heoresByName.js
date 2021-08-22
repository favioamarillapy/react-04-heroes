import { heroes } from "../data/data";


export const heoresByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}
