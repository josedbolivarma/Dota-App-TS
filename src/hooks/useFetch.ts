import { useState, useEffect } from "react"
import { URL } from "../helpers/getUrl";

import axios from "axios";
import { HeroesResponse } from '../interfaces/heroes.interface';

const ResponseType = {
    id:                0,
    name:              '',
    localized_name:    '',
    objective:         '',
    desc:              '',
    primary_attr:      '',
    attack_type:       '',
    poster:            '',
    animation:         '',
    image:             '',
    avatar:            '',
    roles:             [],
    img:               '',
    icon:              '',
    base_health:       0,
    base_health_regen: 0,
    base_mana:         0,
    base_mana_regen:   0,
    base_armor:        0,
    base_mr:           0,
    base_attack_min:   0,
    base_attack_max:   0,
    base_str:          0,
    base_agi:          0,
    base_int:          0,
    str_gain:          0,
    agi_gain:          0,
    int_gain:          0,
    attack_range:      0,
    projectile_speed:  0,
    attack_rate:       0,
    move_speed:        0,
    turn_rate:         null,
    cm_enabled:        false,
    legs:              0
};

export const useFetch = () => {
    const [ data, setData ] = useState<HeroesResponse[]>([]);
    const [ oneData, setOneData ] = useState<HeroesResponse>( ResponseType );
    
    const [ previousHero, setPreviousHero ] = useState<HeroesResponse>( ResponseType );
    const [ nextHero, setNextHero ] = useState<HeroesResponse>( ResponseType );

    const [ isLoading, setIsLoading ] = useState(true);

    const getData = async ( id = '' ) => {
        setIsLoading( true );

        if( !id ) {
            const { data } = await axios.get( URL );
            setData( data );
        } else {
            const { data: newData } = await axios.get( URL + id );
            
            const newId = parseInt(id);
            
            const nextHeroId = newId + 1;
            const previousHeroId = newId - 1;

            if ( previousHeroId > 0 ) {
            const { data: newPreviousHero } = await axios.get(URL + previousHeroId);
            setPreviousHero( newPreviousHero );
            }

            if ( nextHeroId < 123 ) {
                const { data: newNextHero } = await axios.get(URL + nextHeroId);
                setNextHero( newNextHero );
            }

            if ( newId === 123 ) {
                const { data: newNextHero } = await axios.get(URL + 1);
                setNextHero( newNextHero );
            }

            if ( newId === 1 ) {
                const { data: newPreviousHero } = await axios.get(URL + 123 );
                setPreviousHero( newPreviousHero );
            }

            setOneData( newData );

        }

        setIsLoading( false );

    }   

    useEffect(() => {
        getData();
    }, [])

    return {
        // PROPERTIES
        data,
        oneData,
        isLoading,
        previousHero,
        nextHero,
        // METHODS
        getData
    }
    
}