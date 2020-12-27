import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

class PanelTabButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`w-full flex flex-col justify-center items-center m-0 p-2 bg-white text-black focus:outline-none ${
          this.props.active ? 'bg-gray-100' : ''
        }`}
      >
        <span className="mx-auto inline-block mb-1">{this.props.icon}</span>
        <span className="inline-block mx-auto">
          {__(this.props.title, 'majestic-gutenberg')}
        </span>
      </button>
    );
  }
}

export default PanelTabButton;
