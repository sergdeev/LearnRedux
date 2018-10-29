import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import {changeFirstName, changeSecondName} from '../store/actions'

class MainComponent extends Component {
  render() {
      const dispatch = this.props.dispatch;
      const {firstName, secondName, changeFirstName, changeSecondName} = this.props;
      console.log(this.props);
    return (
      <div>
        <div>
            <input
                type = 'text'
                value = {firstName}
                onChange = {(event) => {changeFirstName(event.target.value)}}
                placeholder = 'First name' />
        </div>
        <div>
            <input
                type = 'text'
                value = {secondName}
                onChange = {(event) => {changeSecondName(event.target.value)}}
                placeholder = 'Second name' />
        </div>
        <div>{`${firstName} ${secondName}`}</div>
        <div/>
      </div>
    );
  }
}


//putActionsToProps
const mapDispatchToProps = (dispatch) => {
    return{
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

const mapStateToProps = (state) => {
    return{
        firstName: state.firstName,
        secondName: state.secondName
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
