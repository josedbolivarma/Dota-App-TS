export type HeroesAction = 
  { type: 'searchByName' , payload: string }
| { type: 'heroesByAttr', payload: string };