import React, { Component } from 'react'

export default class Paging extends Component {
    
    render() {



        return (
            <div className="paging-div">
                {/* handlePageChange is a callback function, calling back to pokelist */}
                <button onClick={e => this.props.handlePageChange(-1)} 
                disabled={this.props.page === 1}>Previous</button>

                <button onClick={e => this.props.handlePageChange(1)} disabled={this.props.page === this.props.maxPage}>Next</button>

                <h4>Page: {this.props.page} </h4>
                
            </div>
        )
    }
}
