import React from 'react'
import Radium from 'radium'
import color from 'color'

class Button extends React.Component {
    static propTypes = {
      kind: PropTypes.oneOf(['primary', 'warning']).isRequired
    };
  
    render() {
      return (
        <button style={[styles.base, styles[this.props.kind]]}>
          {this.props.children}
        </button>
      );
    }
  }
  
  Button = Radium(Button);
  
  var styles = {
    base: {
      color: '#fff',
      ':hover': {
        background: color('#0074d9')
          .lighten(0.2)
          .hexString()
      }
    },
  
    primary: {
      background: '#0074D9'
    },
  
    warning: {
      background: '#FF4136'
    }
  };

  export default Radium(Button)