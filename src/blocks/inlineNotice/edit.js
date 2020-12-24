//==================================================
// The edit functionality of the Inline Notice block.
//==================================================

import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const InspectorControls = wp.blockEditor.InspectorControls;
const PanelColorSettings = wp.blockEditor.PanelColorSettings;
const RichText = wp.blockEditor.RichText;
const withColors = wp.blockEditor.withColors;
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

/**
 * The edit class.
 */
class Edit extends Component {
  /**
   * Change the headline text.
   *
   * @param {object} headline
   *   The new headline.
   */
  onChangeHeadline = headline => {
    this.props.setAttributes({ headline });
  };

  /**
   * Change the content text.
   *
   * @param {object} content
   *   The new content.
   */
  onChangeContent = content => {
    this.props.setAttributes({ content });
  };

  /**
   * The the border state.
   */
  toggleBorder = () => {
    this.props.setAttributes({ border: !this.props.attributes.border });
  };

  /**
   * The render method.
   */
  render() {
    const {
      attributes,
      headlineBackgroundColor,
      setHeadlineBackgroundColor,
      headlineTextColor,
      setHeadlineTextColor,
      contentBackgroundColor,
      setContentBackgroundColor,
      contentTextColor,
      setContentTextColor,
    } = this.props;
    const { headline, content, border } = attributes;

    // The class list for the wrapper div. Depends on the border state.
    const wrapperClassList = `w-full rounded ${
      border ? 'border border-gray-700' : ''
    }`;
    ('');

    // The class list applied to the header. Depends on state of background-color.
    const headerClassList = `w-full border-gray-500 px-1 mt-0 mb-0 ${
      headlineBackgroundColor.color ? '' : 'border-b'
    }`;

    // The inline styles for the header. They concern background and text color.
    const headerInlineStyles = {
      backgroundColor: headlineBackgroundColor.color,
      color: headlineTextColor.color,
    };

    // The inline styles for the content. They concern background and text color.
    const contentInlineStyles = {
      backgroundColor: contentBackgroundColor.color,
      color: contentTextColor.color,
    };
    // ==================================
    // Return statement.
    // ==================================
    return (
      <>
        {/* Edit some functionality in the sidebar. */}
        <InspectorControls>
          <PanelColorSettings
            title={__('Colors', 'majestic-gutenberg')}
            colorSettings={[
              {
                value: headlineBackgroundColor.color,
                onChange: setHeadlineBackgroundColor,
                label: __('Headline Background Color', 'majestic-gutenberg'),
              },
              {
                value: headlineTextColor.color,
                onChange: setHeadlineTextColor,
                label: __('Headline Text Color', 'majestic-gutenberg'),
              },
              {
                value: contentBackgroundColor.color,
                onChange: setContentBackgroundColor,
                label: __('Content Background Color', 'majestic-gutenberg'),
              },
              {
                value: contentTextColor.color,
                onChange: setContentTextColor,
                label: __('Content Text Color', 'majestic-gutenberg'),
              },
            ]}
          />
          <PanelBody title="Border">
            <PanelRow>
              <ToggleControl
                label={__('Show border?', 'majestic-gutenberg')}
                checked={border}
                onChange={this.toggleBorder}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        {/* Start the html output. */}
        <div className={wrapperClassList}>
          {/* Header Text */}
          <RichText
            tagName="h3"
            value={headline}
            className={headerClassList}
            onChange={headline => this.onChangeHeadline(headline)}
            style={headerInlineStyles}
          />

          {/* Content text */}
          <RichText
            tagName="p"
            value={content}
            className="w-full mt-1 px-1"
            onChange={content => this.onChangeContent(content)}
            style={contentInlineStyles}
          />
        </div>
      </>
    );
  }
}

export default withColors(
  'headlineBackgroundColor',
  'headlineTextColor',
  'contentBackgroundColor',
  'contentTextColor',
)(Edit);
