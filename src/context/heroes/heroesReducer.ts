import { HeroesAction } from './typesHeroes';

export const heroesReducer = ( state: any , action: HeroesAction )  => {
    switch ( action.type ) {
        case 'searchByName':
            return {
                ...state,
                search: action.payload.toLocaleLowerCase()
            };
        case 'heroesByAttr':
            return {
                ...state,
                attr: action.payload
            };
        default:
            return state;
    }
}