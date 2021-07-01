import React, {Component} from 'react'
import {fetchPlaces} from '../actions/actions'
import {connect} from 'react-redux'

class PoiSearchInput extends Component {
    state = {
        searchTerm: ''
    }

    today = () => {
        const now = new Date()
        const date = [now.getFullYear(), ("0"+(now.getMonth()+1)).slice(-2), ("0" + (now.getDate())).slice(-2)].join('')
        return(date)
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault()
        this.props.fetchPlaces(this.props.locationName, this.props.locationId, this.state.searchTerm, this.today())
        this.setState({searchTerm: ''})
    }


    render(){
        return(
            <div>
                <form>
                    <input type={'text'} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Search</button>
                </form>

            </div>
           
        )
    }
}

export default connect(null, {fetchPlaces})(PoiSearchInput)