const React = require('react');

const styles = {
  position: 'fixed',
  left: '50%',
  top: '20px',
  transform: 'translate(-50%)'
};

class CodeSlideTitle extends React.Component {
  render() {
    return (
      <div style={styles}>{this.props.children}</div>
    );
  }
}

module.exports = CodeSlideTitle;
