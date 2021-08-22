import { heroes } from "../data/data";


export const heroById = (id) => {

    return heroes.find(hero => hero.id === id);
}
