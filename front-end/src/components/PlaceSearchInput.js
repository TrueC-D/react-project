import React, {Component} from 'react'
import {fetchPlaces} from '../actions/actions'
import {connect} from 'react-redux'

class PoiSearchInput extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchPlaces(this.state.searchTerm, this.props.locationId)
        this.setState({searchTerm: ''})
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type={'text'} onChange={this.handleChange}/>
                    <input type={'submit'} />
                </form>

            </div>
           
        )
    }
}

export default connect(null, {fetchPlaces})(PoiSearchInput)