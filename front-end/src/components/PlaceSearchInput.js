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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchPlaces(this.state.searchTerm, this.props.locationId)
        // check if i passed in correct parameters
        this.setState({searchTerm: ''})
        event.target.clear('display')
    }


    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} onChange={this.handleChange}/>
                <input type={'submit'} />
            </form>
        )
    }
}
// do i need to add mapStateToProps? -> there is a location prop value in handle submit, is this inherited?
export default connect(null, {fetchPlaces})(PoiSearchInput)