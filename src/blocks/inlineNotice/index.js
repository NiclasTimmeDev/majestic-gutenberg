//==================================================
// The main functionality of the Inline Notice block.
//==================================================

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const RichText = wp.blockEditor.RichText;
import Edit from './edit';

/**
 * Register a new blocktype.
 */
registerBlockType('majestic-gutenberg/inline-notice', {
  // Meta info.
  title: __('Inline Notice', 'majestic-gutenberg'),
  description: __(
    __('An Inline Notice Box where important information can be highlighted'),
    'majestic-gutenberg',
  ),
  category: 'majestic-gutenberg-category',
  keywords: 'information, text, info, notice, inline,',
  // The main variables that define the content and layout of the block.
  attributes: {
    headline: {
      type: 'string',
      source: 'html',
      selector: 'h3',
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
    headlineBackgroundColor: {
      type: 'string',
    },
    customHeadlineBackgroundColor: {
      type: 'string',
    },
    headlineTextColor: {
      type: 'string',
    },
    customHeadlineTextColor: {
      type: 'string',
    },
    contentBackgroundColor: {
      type: 'string',
    },
    customContentBackgroundColor: {
      type: 'string',
    },
    contentTextColor: {
      type: 'string',
    },
    customContentTextColor: {
      type: 'string',
    },
    border: {
      type: 'boolean',
    },
  },
  /**
   * Define the edit output of the block.
   */
  edit: Edit,
  /**
   * Define the frontend output of the block.
   *
   * @param {object} attributes
   *   The attributes for the component.
   */
  save({ attributes }) {
    const {
      headline,
      content,
      headlineBackgroundColor,
      customHeadlineBackgroundColor,
      headlineTextColor,
      customHeadlineTextColor,
      contentBackgroundColor,
      customContentBackgroundColor,
      contentTextColor,
      customContentTextColor,
      border,
    } = attributes;

    // Classes for wrapper div. Depends on the border.
    const wrapperClassList = border
      ? 'w-full border border-gray-700 rounded'
      : 'w-full';

    // Classes for the headline div. Depends on border and background color.
    const headerClassList = `w-full border-gray-500 m-0 py-1 px-2
    ${border ? '' : 'rounded-sm'}
    ${
      headlineBackgroundColor || customHeadlineBackgroundColor ? '' : 'border-b'
    }
    `;

    // The inline styles for the header. They concern background and text color.
    const headerInlineStyles = {
      backgroundColor: headlineBackgroundColor || customHeadlineBackgroundColor,
      color: headlineTextColor || customHeadlineTextColor,
    };

    // The inline styles for the content. They concern background and text color.
    const contentInlineStyles = {
      backgroundColor: contentBackgroundColor || customContentBackgroundColor,
      color: contentTextColor || customContentTextColor,
    };

    // ==================================
    // Return statement.
    // ==================================
    return (
      <>
        <div className={wrapperClassList}>
          {/* Header text. */}
          <RichText.Content
            tagName="h3"
            value={headline}
            className={headerClassList}
            style={headerInlineStyles}
          />
          {/* Content text. */}
          <RichText.Content
            tagName="p"
            value={content}
            className="w-full py-1 px-2"
            style={contentInlineStyles}
          />
        </div>
      </>
    );
  },
});
