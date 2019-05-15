import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from "lodash";

function mapStateToProps(state: any) {
  return {
    data: state.data
  };
}

class BottleContent extends Component<any> {
  render() {
    const blend = get(this.props, "data.your_blend");
    return (
      <React.Fragment>
        {blend && (
          <div className='bottleContentsContainer'>
            <h2 className='upper'>What's in your set</h2>
            <div>
              <div className='hilight'>
                {blend.num_of_bottles > 1 ? (
                  <span>{blend.num_of_bottles} bottles</span>
                ) : (
                  <span>{blend.num_of_bottles} bottle</span>
                )}
              </div>
              <ul>
                <li>The Kit:
                  <ul>
                    <li>Classic shampoo and conditioner</li>
                    <li>2 pairs of Non-latex Gloves</li>
                    <li>Stain guard</li>
                    <li>Stain Remover</li>
                    <li>Product Safety & Usage</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <div>Bonus</div>
              <div>We've included a <span className='hilight'>free</span> 2nd bottle for your ends in this order to ensure consistent overall color. you can purchase this again in future to refresh your ends periodically</div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(BottleContent);
