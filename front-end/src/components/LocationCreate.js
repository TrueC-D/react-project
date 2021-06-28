import { saveLocation } from '../actions/actions'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class LocationCreate extends Component {
    state = {
        locName: '',
        startDatetime: '',
        endDatetime: ''


    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.saveLocation(this.state.text)
        // check if i passed in correct parameters
        this.setState({ locName: '',
        startDatetime: '',
        endDatetime: ''})
        event.target.clear('display')
    }


    render(){
        
        return(
            <div>
            <label>Add New Location:</label>
            <form onSubmit={this.handleSubmit}>
                <label >Location Name:</label>
                <input onChange={this.handleChange} id={'loc-name'} type={'text'}/>
                <label >Visit Start Date:</label>
                <input onChange={this.handleChange} id={'startDatetime'} type={'datetime-local'}/>
                <label  >Visit End Date:</label>
                <input onChange={this.handleChange}id={'endDatetime'} type={'datetime-local'}/>
                <input type={'submit'} />
            </form>
            </div>
        )
    }
}

export default connect(null, {saveLocation})(LocationCreate)