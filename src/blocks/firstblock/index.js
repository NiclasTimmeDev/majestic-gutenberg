import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const RichText = wp.blockEditor.RichText;
import Edit from './edit';
//import { PanelBody } from '@wordpress/components';

registerBlockType('majestic-gutenberg/firstblock', {
  title: __('First block', 'majestic-gutenberg'),
  description: __('My First block', 'majestic-gutenberg'),
  category: 'layout',
  keywords: '',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
    backgroundColor: {
      type: 'string',
    },
    customBackgroundColor: {
      type: 'string',
    },
  },
  edit: Edit,
  save({ attributes }) {
    const { content } = attributes;
    return (
      // Content of Richt text component.
      <RichText.Content
        tagName="p"
        value={content}
        className="w-full bg-red-700"
      />
    );
  },
});
