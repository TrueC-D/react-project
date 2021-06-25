import React, {Component} from 'react'
import { connect } from 'react-redux'
import {myPois} from '../actions/actions'
import PlacesSearch from './PlacesSearch'

// I want to render poi list, poi search bar, add poi to saved

class Location extends Component {

    componentDidMount(){
        this.props.myPois(locationId)
    }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
        <Router>
            <div>
                
                <button component={PoiCards} onClick={this.handleClick}>Saved Points of Interest</button>
                <button component={PlacesSearch} onClick={this.handleClick}>Search for Venues</button>
                {/* <Switch>
                    <PoiCards/>
                    <PlacesSearch place/>
                </Switch> */}
            </div>

        </Router>

    }
  }

  handleClick = (event) => {
      return <event.target.component />
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