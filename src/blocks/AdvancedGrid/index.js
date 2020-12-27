import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const InnerBlocks = wp.blockEditor.InnerBlocks;
const InspectorControls = wp.blockEditor.InspectorControls;
import EditAdvancedGrid from './edit';

registerBlockType('majestic-gutenberg/advanced-grid', {
  title: __('Advanced Grid', 'majestic-gutenberg'),
  description: __(
    'An advanced Grid system that allows you to order and re-order your content in rows and columns.',
    'majestic-gutenberg',
  ),
  category: 'majestic-gutenberg-category',
  keywords: '',
  icon: 'grid-view',
  attributes: {
    colsPerRow: {
      type: 'number',
      default: 3,
    },
    gap: {
      type: 'number',
      default: 1,
    },
  },
  edit: EditAdvancedGrid,
  save({ attributes }) {
    const { colsPerRow, gap } = attributes;

    return null;
  },
});
