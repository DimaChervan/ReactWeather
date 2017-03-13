import React from 'react';
import ReacDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component {
  componentDidMount() {
    const modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReacDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

ErrorModal.defaultProps = {
  title: 'Error'
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}

export default ErrorModal;
