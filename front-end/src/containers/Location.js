import React, {Component} from 'react'
import { connect } from 'react-redux'
import {myPois} from '../actions/actions'
// I want to render poi list, poi search bar, add poi to saved

class Location extends Component {

    componentDidMount(){
        this.props.myPois(locationId)
    }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      // insert compenent that renders places
    }
  }


    render(){
        return(
            <div>
                <PoiSearch/>
                <PoiCards/>
            </div>
        )
    
    }
}


export default connect(null, {myPois})(Location)