import { useReducer } from "react";
import { HeroesContext, heroesReducer } from "../"

export interface FilterState {
  search?: '',
  attr?: '';
}

const INITIAL_STATE = {
  search: '',
  attr: ''
}

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export const HeroesProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer( heroesReducer, INITIAL_STATE);

  const handleSearch = ( e: string ) => {
    dispatch({
      type: 'searchByName',
      payload: e
    })
  }

  const handleAttr = ( e: string ) => {
    dispatch({
      type: 'heroesByAttr',
      payload: e
    })
  }
  
  return (
    <HeroesContext.Provider value={{
      ...state,
      handleSearch,
      handleAttr
    }}>
      {
        children
      }
    </HeroesContext.Provider>
  )
}