import React, {Component} from 'react'
import LocationCreate from '../components/LocationCreate'
import LocationDetails from '../components/LocationDetails'
import { removeLocation } from '../actions/actions'
import { connect } from 'react-redux'

class Locations extends Component {
    state= {
        increaseBy: '',
        // increaseBy: ''
        likes: 0
    }

    handleLoading = (locationData) => {
        if(!this.props.loading) {
            console.log('Locations handleLoading props:', this.props)
            return(
                <div>
                    {locationData}
                </div>
            )
        }
    }

    // handleChange = event => {
    //     this.setState({
    //         increaseBy: event.target.value
    //     })
    // }

    handleClick = (event) => {
        this.props.removeLocation(event.target.id)
    }

    // handeClickLike = (event) =>{
    //     event.preventDefault()
    //     this.setState(previousState => {
    //         return{likes: previousState.likes + parseInt(previousState.increaseBy)}

    //     })

    //     // should increase likes by state
    // }

    render(){
        console.log('Locations props', this.props)
        const locationData = this.props.locations.map((location, key) => {
            return(
            <div className={'loc-list-item'} key={key}>
                {/* <input type={'text'} onChange={this.handleChange}/> */}
                {/* <p>Likes: {this.state.likes}</p> */}
                <LocationDetails thisLocation={location.attributes}/>
                <button id={location.id} onClick={this.handleClick}>Delete</button>
                {/* <button onClick={this.handeClickLike}>Like</button> */}
            </div>)
        })
        return(<div><LocationCreate />{this.handleLoading(locationData)}</div>)

    
    }
}

const mapStateToProps = state => ({
    locations: state.locations,
    loading: state.loading
})


// new action -> location like, to dispatch, update reducer
export default connect(mapStateToProps, {removeLocation})(Locations)