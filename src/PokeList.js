import React, { Component } from 'react'
import request from 'superagent'
import SearchBar from './SearchBar.js'
import PokeItem from './PokeItem.js'
import { Link } from 'react-router-dom'


export default class PokeList extends Component {
    
    componentWillMount() {
        console.log('pokelist mounted')
    }
    
    state = {
        pokedex: [],
        searchQuery: this.props.match.params.name
    }
    
    async componentDidMount() {
        console.log(this.props.match.params)
        if (this.props.match.params) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.name}`)
            console.log(data)
            this.setState({ pokedex: data.body.results })
        }
    }
    
    handleSearch = async (e) => {
        e.preventDefault();
        
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)
        
        this.setState({
            pokedex: data.body.results })
            
        this.props.history.push(this.state.searchQuery)
        }
        
        handleChange = (e) => this.setState({ searchQuery: e.target.value })


    render() {
        return (
            <div className='SearchBar'>            
                <SearchBar
                    searchQuery={this.state.searchQuery}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                />
                <ul id='poke-list'>
                    {
                        this.state.pokedex.map(pokemon =>
                        <Link to={`pokemon/${pokemon.name}`}>
                            <PokeItem pokemon={pokemon} />
                        </Link>)
                    }                                                
                </ul>
            </div>
        )
    }
}
