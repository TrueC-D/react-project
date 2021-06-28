import React, {Component} from 'react'
import { connect } from 'react-redux'
import {myPois} from '../actions/actions'
import PoiCardDeck from './PoiCardDeck'
import PlacesSearch from './PlacesSearch'
import LocationDetails from '../components/LocationDetails'
import {BrowserRouter as Router} from 'react-router-dom'

// I want to render poi list, poi search bar, add poi to saved

class Location extends Component {

    componentDidMount(){
        this.props.myPois(this.props.location.id)
    }

    handleLoading = () => {
        if(this.props.loading) {
        return <div>Loading...</div>
        } else {
            <Router>
                <div>
                    
                    <button render={<PoiCardDeck pois={this.props.pois}/>} onClick={this.handleClick}>Saved Points of Interest</button>
                    <button render={<PlacesSearch locationId={this.props.location.id}/>} onClick={this.handleClick}>Search for Venues</button>
                    {/* <Switch>
                        <PoiCardDeck pois={this.props.pois}/>
                        <PlacesSearch locationId={this.props.location.id}/>
                    </Switch> */}
                </div>

            </Router>

        }
    }

    handleClick = (event) => {
        return  event.target.render
        //   will this work?
        // would like a toggle feature, going back & forth between components
    }


    render(){
        return(
            <div>
                <LocationDetails location={this.props.location}/>
                {this.handleLoading}
                
            </div>
        )
    
    }
}


export default connect(null, {myPois})(Location)