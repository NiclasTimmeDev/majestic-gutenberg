import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * An additional tab in the Inspector Panel that
 * allows for more granular and clear control over
 * the rendered content.
 */
class PanelTab extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3 gap-0">
          <button
            onClick={this.props.onClickDesign}
            className={`w-full flex flex-col justify-center items-center m-0 p-2 bg-white text-black ${
              this.props.showContent.design ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mx-auto inline-block mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </span>
            <span className="inline-block mx-auto">
              {__('Design', 'majestic-gutenberg')}
            </span>
          </button>

          <button
            onClick={this.props.onClickStyle}
            className={`w-full flex flex-col justify-center items-center m-0 p-2 bg-white text-black ${
              this.props.showContent.style ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mx-auto  mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </span>
            <span className="mx-auto">{__('Style', 'majestic-gutenberg')}</span>
          </button>

          <button
            onClick={this.props.onClickAdvanced}
            className={`w-full flex flex-col justify-center items-center m-0 p-2 bg-white text-black ${
              this.props.showContent.advanced ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mx-auto inline-block mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className="mx-auto">
              {__('Advanced', 'majestic-gutenberg')}
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default PanelTab;
