import React, { Component } from 'react'

export default class PokeItem extends Component {
    componentDidMount() {
        console.log('pokeitem mounted')
    }

    render() {
        const { pokemon } = this.props; 

        return (
        <li className='poke-item'>
            <h2 className='poke-name' >{pokemon.pokemon}</h2>
            <img alt='' src={pokemon.url_image}></img>
            <p> HP: {pokemon.hp} </p>
            <p> Element: {pokemon.type_1} </p>     
        </li>  
        )
    }
}
