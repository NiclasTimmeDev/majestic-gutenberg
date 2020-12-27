//==================================================
// The main functionality of the Team Members block.
//==================================================

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const RichText = wp.blockEditor.RichText;
import Edit from './edit';

/**
 * Register a new blocktype.
 */
registerBlockType('majestic-gutenberg/testimonials', {
  // Meta info.
  title: __('Testimonials', 'majestic-gutenberg'),
  description: __(
    __('Show of some great reviews of your users.'),
    'majestic-gutenberg',
  ),
  category: 'majestic-gutenberg-category',
  keywords: [
    __('info', 'majestic-gutenberg'),
    __('grid', 'majestic-gutenberg'),
    __('testimonial', 'majestic-gutenberg'),
    __('review', 'majestic-gutenberg'),
  ],
  // The main variables that define the content and layout of the block.
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'div',
    },
    quote: {
      type: 'string',
      source: 'html',
      selector: 'p',
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
    //const {} = attributes;

    // ==================================
    // Return statement.
    // ==================================
    return (
      <>
        <div>Hello World</div>
      </>
    );
  },
});
