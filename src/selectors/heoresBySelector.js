import { heroes } from "../data/data";


export const heoresBySelector = (publisher) => {

    return heroes.filter(hero => hero.publisher === publisher);
}
