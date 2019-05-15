import React, { Component } from "react";
import { connect } from "react-redux";
import { get, pickBy, startsWith, keysIn } from "lodash";
import ColorChart from "./ColorChart";

function mapStateToProps(state: any) {
  return {
    data: state.data
  };
}

class Blend extends Component<any> {
  render() {
    const blend = get(this.props, "data.your_blend");
    var bottles = keysIn(pickBy(blend, function(value, key) {
      return startsWith(key, 'bottle_');
    }));
    return (
      <div className='blendContainer'>
      <h2 className='upper'>Your individual blend</h2>
       {bottles.map((bottle:any)=>{
         return <ColorChart bottleData={blend[bottle]} key={bottle.name}/>
       })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Blend);
