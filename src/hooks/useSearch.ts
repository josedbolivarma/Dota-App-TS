import { useContext, useState } from 'react';
import { HeroesContext } from '../context';

interface Props {
    search: string;
    attr: string;
}

export const useSearch = () => {

    const [ filter, setFilter] = useState<Props>({
        search: '',
        attr: ''
    });

    const { handleSearch, handleAttr } = useContext( HeroesContext );

    const handleSearchChange = ( e: any ) => {
        const value = e.target.value;
        setFilter( ( prev: Props ) => {
            return {
                ...prev,
                search: value
            }
        } );

        handleSearch( value );
    }; 

    const handleAttrChange = ( e: any ) => {
        const value = e.target.value;
        setFilter( ( prev: Props ) => {
            return {
                ...prev,
                attr: value
            }
        } );

        handleAttr( value );
    }; 

    return {
        // Properties
        filter,
        // Methods
        handleSearchChange,
        handleAttrChange
    }

}