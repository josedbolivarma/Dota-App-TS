import { useState, useEffect } from "react"
import { URL } from "../helpers/getUrl";

import axios from "axios";
import { HeroesResponse } from '../interfaces/heroes.interface';

const ResponseType = {
    id:                0,
    name:              '',
    localized_name:    '',
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

    const [ isLoading, setIsLoading ] = useState(true);

    const getData = async ( id = '' ) => {
        setIsLoading( true );

        if( !id ) {
            const { data } = await axios.get( URL );
            setData( data );
        } else {
            const { data } = await axios.get( URL + id );
            setOneData( data );
        }

        setIsLoading( false );
    }   

    useEffect(() => {
        getData();
    }, [])

    return {
        data,
        oneData,
        isLoading,
        getData
    }
    
}