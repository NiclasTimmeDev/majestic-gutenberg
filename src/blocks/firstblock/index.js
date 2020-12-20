import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('majestic-gutenberg/firstblock', {
  title: __('First block', 'majestic-gutenberg'),
  description: __('My First block', 'majestic-gutenberg'),
  category: 'layout',
  edit() {
    return <p>Editor</p>;
  },
  save() {
    return <p>Saved</p>;
  },
});
