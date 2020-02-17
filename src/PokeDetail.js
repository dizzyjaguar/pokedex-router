import React, { Component } from 'react'
import PokeItem from './PokeItem'
import request from 'superagent';

const getPokemon = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${pokeId}`)

export default class PokeDetail extends Component {
    state = { pokemon: {} }
    
    

    
    async componentDidMount() {
        const data = await getPokemon(this.props.match.params._id);
        console.log(this.props.match.params._id)
        if (data.body.results) {
            
            this.setState({ pokemon: data.body.results[0] })
        }
    }
    
    
    
    render() {
        const { pokemon } = this.state;
        console.log(pokemon)
        return (
            <div className='PokeDetail-div'>
                <PokeItem pokemon={ pokemon } />
            </div>
        )
    }
}
