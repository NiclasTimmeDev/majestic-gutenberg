import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

class ResponsiveDisplay extends Component {
  render() {
    return (
      <>
        <PanelBody
          title={__('Responsive Display', 'majestic-gutenberg')}
          icon={'desktop'}
          initialOpen={false}
        >
          <PanelRow>
            <ToggleControl
              label={__('Hide on desktop', 'majestic-gutenberg')}
              checked={this.props.hideOnDesktop}
              onChange={this.props.toggleDesktop}
            />
          </PanelRow>

          <PanelRow>
            <ToggleControl
              label={__('Hide on tablet', 'majestic-gutenberg')}
              checked={this.props.hideOnTablet}
              onChange={this.props.toggleTablet}
            />
          </PanelRow>

          <PanelRow>
            <ToggleControl
              label={__('Hide on mobile', 'majestic-gutenberg')}
              checked={this.props.hideOnMobile}
              onChange={this.props.toggleMobile}
            />
          </PanelRow>
        </PanelBody>
      </>
    );
  }
}

export default ResponsiveDisplay;
