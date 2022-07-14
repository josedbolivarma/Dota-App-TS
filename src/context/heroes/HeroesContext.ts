import { createContext } from "react";

interface HeroesContextProps {
    search: string;
    attr: string;
    handleSearch: ( e: string ) => void;
    handleAttr: ( e: string ) => void;
}

export const HeroesContext = createContext({} as HeroesContextProps );