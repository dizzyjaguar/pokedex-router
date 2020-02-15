import React, { Component } from 'react'
import PokeItem from './PokeItem.js'


export default class PokeList extends Component {
    
    render() {

        const pokeNodes = this.props.pokedex.map(poke => <PokeItem pokeItem={poke} />)

        return (
            <div>

                <ul id='poke-list'>
                
                    {pokeNodes}
                            
                </ul>
            </div>
        )
    }
}
