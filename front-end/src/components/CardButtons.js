// want this to render upvote, remove vote, delete card if type="poi", want to render save as point of interest if cart type= 'place'

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changePoiVote, removePoi, savePoi} from '../actions/actions'

class CardButtons extends Component {
    buttons = () => {
        switch(this.props.type){
            case 'poi':
                return <form>
                    <button name={'DOWNVOTE_POI'} onClick={this.handleClickChange}>DownVote</button>
                    <button name={'UPVOTE_POI'} onClick={this.handleClickChange}>UpVote</button>
                    <button name={'removePoi'} onClick={this.handleClickDelete}>Delete Point Of Interest</button>
                </form>
            case 'place':
                return <form><button name={'savePoi'} onClick={this.handleClickSave}>Save Point Of Interest</button> </form>
            default:
                return null
        }
    }

    votes = btnName => {
        let num = this.props.item.votes
        switch(btnName){
            case 'UPVOTE_POI':
                return num+1
            case 'DOWNVOTE_POI':
                return num-1
            default:
                return num
        }
    }
    
    handleClickChange = event => {
       let btnName = event.target.name
       let newVote = this.votes(btnName)
       this.props.changePoiVote(newVote, this.props.item.attributes.location_id, this.props.item.id, btnName)   
       }
    
    handleClickDelete = () => {
        this.props.removePoi(this.props.item.attributes.location_id, this.props.item.id)
    }

    handleClickSave = event => {
        const{
            // type,
            // item: {id},
            item: {attributes: {icon_url, name, street, city, state, country, zip, location_id},}
         } = this.props
        //  can the ...rest grab all the attributes so i don't have to type them?
        //  would be nice if i coult make this destructure item available to all handlers but i think i would have to use hooks


         this.props.savePoi(icon_url, name, street, city, state, country, zip, location_id)

        // action: this.props.savePoi(icon, poiName, category, votes, notes, street, city, state, zip, location) * need to add icon to database if able to fetch
    }

    render(){
        return(<div>{this.buttons()}</div>)
    }
}

// savePoi Action needs these parameters:
// icon, poiName, category, votes, notes, street, city, state, zip, locationId


export default connect(null, {changePoiVote, removePoi, savePoi})(CardButtons)