import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Panel } from '@wordpress/components';
import PanelTabButton from './PanelTabButton';

/**
 * An additional tab in the Inspector Panel that
 * allows for more granular and clear control over
 * the rendered content.
 */
class PanelTab extends Component {
  /**
   * The constructor function where the state is initialized.
   *
   * @param {object} props
   *   The props
   */
  constructor(props) {
    super(props);
    this.state = {
      showPanelTabContent: {
        design: true,
        style: false,
        advanced: false,
      },
    };
  }

  /**
   * Set a new active tab.
   *
   * @param {string} tab
   *   The name of the tab.
   */
  onUpdatePanelTab = tab => {
    // Mimic the state.
    const showPanelTabContent = {
      design: false,
      style: false,
      advanced: false,
    };

    // Update the key-value pair of interest.
    showPanelTabContent[tab] = true;

    // Set state.
    this.setState({ showPanelTabContent });
  };

  /**
   * The render function. It renders the markup.
   */
  render() {
    return (
      <>
        <Panel>
          <div className="grid grid-cols-3 gap-0">
            {/* Design */}
            <PanelTabButton
              title="Design"
              active={this.state.showPanelTabContent.design}
              icon="Icon"
              onClick={() => {
                this.onUpdatePanelTab('design');
              }}
            />
            {/* Styles */}
            <PanelTabButton
              title="Style"
              active={this.state.showPanelTabContent.style}
              icon="Icon"
              onClick={() => {
                this.onUpdatePanelTab('style');
              }}
            />
            {/* Advanced */}
            <PanelTabButton
              title="Advanced"
              active={this.state.showPanelTabContent.advanced}
              icon="Icon"
              onClick={() => {
                this.onUpdatePanelTab('advanced');
              }}
            />
          </div>

          {/* Render Panels etc. depending on the active PanelTab. */}
          {this.state.showPanelTabContent.design && this.props.design}
          {this.state.showPanelTabContent.style && this.props.style}
          {this.state.showPanelTabContent.advanced && this.props.advanced}
        </Panel>
      </>
    );
  }
}

export default PanelTab;
