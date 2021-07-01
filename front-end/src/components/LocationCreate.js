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
        debugger
        this.props.saveLocation(this.state)
        this.setState({ locName: '',
        startDatetime: '',
        endDatetime: ''})
    }


    render(){
        
        return(
            <div>
                <br/>
            <label>Add New Location:</label>
            <form onSubmit={this.handleSubmit}>
                <label >Location Name:</label>
                <input onChange={this.handleChange} id={'locName'} type={'text'}/>
                <br/>
                <label >Visit Start Date:</label>
                <input onChange={this.handleChange} id={'startDatetime'} type={'datetime-local'}/>
                <br/>
                <label  >Visit End Date:</label>
                <input onChange={this.handleChange}id={'endDatetime'} type={'datetime-local'}/>
                <br/>
                <input type={'submit'} />
            </form>
            </div>
        )
    }
}

export default connect(null, {saveLocation})(LocationCreate)