import React, { Component } from 'react'
import request from 'superagent'
import SearchBar from './SearchBar.js'
import PokeItem from './PokeItem.js'
import Paging from './Paging.js'
import { Link } from 'react-router-dom'


const getPokemonList = (page, perPage, search) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?page=${page}&perPage=${perPage}&pokemon=${search}`)

export default class PokeList extends Component {
    
    componentWillMount() {
        console.log('pokelist mounted')
    }
    
    state = {
        pokedex: [],
        page: 1,
        perPage: 5,
        searchQuery: this.props.match.params.name
    }
    
    async componentDidMount() {
        if (isNaN(this.state.page)) {
            this.setState({ page: 1 })
        }

        console.log(this.props.match.params)
        if (this.props.match.params) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.name}`)
            // console.log(data)
            this.setState({ pokedex: data.body.results })
        }
    }

    handlePageChange = async (increment) => {
        const currentPage = Number(this.state.page);
        const newPage = currentPage + increment;

        this.setState({ page: newPage })

        


        
    }


    
    handleSearch = async (e) => {
        e.preventDefault();
        
        const data = await getPokemonList(this.state.page, this.state.perPage,this.state.searchQuery)
        
        this.setState({
            pokedex: data.body.results })
            
        this.props.history.push(this.state.searchQuery)
        }
        
        handleChange = (e) => this.setState({ searchQuery: e.target.value })


    render() {
        console.log(this.state.pokedex)
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
                        <Link to={`pokemon/${pokemon.pokemon}`}>
                            <PokeItem pokemon={pokemon} />
                        </Link>)
                    }                                                
                </ul>
                <div id='bottom'>
                    <Paging
                    handlePageChange={this.handlePageChange}
                    page={this.state.page}
                    perPage={this.state.perPage}>
                    </Paging>
                </div>
            </div>
        )
    }
}
