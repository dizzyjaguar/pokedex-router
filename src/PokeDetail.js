import React, { Component } from 'react'
import PokeItem from './PokeItem'
import request from 'superagent';

const getPokemon = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?=${pokeId}`)

export default class PokeDetail extends Component {
    state = { pokemon: {} }
    
    
    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokeId);

        if (data.body.results) {
            
            this.setState({ pokemon: data.body.results[0] })
        }
    }
    
    
    
    render() {
        const { pokemon } = this.state;
        
        return (
            <div className='PokeDetail-div'>
                <PokeItem pokemon={ pokemon } />
            </div>
        )
    }
}
