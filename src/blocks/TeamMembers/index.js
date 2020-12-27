import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const RichText = wp.blockEditor.RichText;
import TeamMembersEdit from './edit';
//import { PanelBody } from '@wordpress/components';

registerBlockType('majestic-gutenberg/team-members', {
  title: __('Team member', 'majestic-gutenberg'),
  description: __('Team Member', 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: '',
  icon: 'admin-users',
  parent: ['majestic-gutenberg/parent'],
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h4',
    },
    info: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  edit: TeamMembersEdit,
  save({ attributes }) {
    const { title, info } = attributes;

    return (
      <div className="w-full p-3 bg-white rounded-md shadow-md">
        {title && (
          <RichText.Content className="w-full" value={title} tagName="h4" />
        )}
        {info && (
          <RichText.Content className="w-full" value={info} tagName="p" />
        )}
      </div>
    );
  },
});
