import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const InspectorControls = wp.blockEditor.InspectorControls;
const PanelColorSettings = wp.blockEditor.PanelColorSettings;
const RichText = wp.blockEditor.RichText;
const withColors = wp.blockEditor.withColors;

/**
 * The class for editing the block in the gutenberg editor.
 */
class Edit extends Component {
  /**
   *
   * @param {object} content
   *   The content.
   */
  onChangeContent = content => {
    this.props.setAttributes({ content });
  };

  /**
   *
   * @param {object} backgroundColor
   *   The new background color.
   */
  onChangeBackgroundColor = backgroundColor => {
    this.props.setAttributes({ backgroundColor });
  };
  render() {
    const { attributes, backgroundColor, setBackgroundColor } = this.props;
    const { content } = attributes;
    return (
      <>
        {/* Edit functionality in the sidebar. */}
        <InspectorControls>
          <PanelColorSettings
            title={__('Colors', 'majestic-gutenberg')}
            colorSettings={[
              {
                value: backgroundColor.colo,
                onChange: setBackgroundColor,
                label: __('Background Color', 'majestic-gutenberg'),
              },
            ]}
          />
        </InspectorControls>
        {/* Rich text. */}
        <RichText
          tagName="p"
          className="w-full"
          onChange={value => {
            this.onChangeContent(value);
          }}
          style={{ backgroundColor: backgroundColor.color }}
          value={content}
        />
      </>
    );
  }
}

export default withColors('backgroundColor')(Edit);
