import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const InspectorControls = wp.blockEditor.InspectorControls;
const PanelColorSettings = wp.blockEditor.PanelColorSettings;
const RichText = wp.blockEditor.RichText;
const withColors = wp.blockEditor.withColors;
import PanelTab from './../../components/PanelTab/PanelTab';
import {
  PanelBody,
  RangeControl,
  Panel,
  PanelRow,
} from '@wordpress/components';
import ResponsiveDisplay from './../../components/ResponsiveDisplay/ResponsiveDisplay';

/**
 * The class for editing the block in the gutenberg editor.
 */
class TeamMembersEdit extends Component {
  onChangeTitle = title => {
    this.props.setAttributes({ title });
  };
  onChangeInfo = info => {
    this.props.setAttributes({ info });
  };

  designSettings = (
    <>
      <ResponsiveDisplay
        hideOnDesktop={false}
        hideOnTablet={false}
        hideOnMobile={false}
        toggleDesktop={() => {
          console.log('Toggle Desktop');
        }}
        toggleTablet={() => {
          console.log('Toggle Tablet');
        }}
        toggleMobile={() => {
          console.log('Toggle Mobile');
        }}
      />
    </>
  );

  render() {
    const { attributes } = this.props;
    const { title, info } = attributes;

    return (
      <>
        <InspectorControls>
          <Panel>
            <PanelTab
              design={this.designSettings}
              style={<div>Style</div>}
              advanced={<div>Advanced</div>}
            />
          </Panel>
        </InspectorControls>
        <div className="w-full p-3 bg-white rounded-md shadow-md">
          <RichText
            className="w-full"
            value={title}
            tagName="h4"
            onChange={this.onChangeTitle}
            placeholder={__(
              'The name of the team member',
              'majestic-gutenberg',
            )}
            formattingControls={[]}
          />
          <RichText
            className="w-full"
            value={info}
            tagName="p"
            onChange={this.onChangeInfo}
            placeholder={__(
              'Write something about the team member',
              'majestic-gutenberg',
            )}
            formattingControls={[]}
          />
        </div>
      </>
    );
  }
}

export default withColors('backgroundColor')(TeamMembersEdit);
