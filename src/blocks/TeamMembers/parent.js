import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const InnerBlocks = wp.blockEditor.InnerBlocks;
const InspectorControls = wp.blockEditor.InspectorControls;
import TeamMembersEdit from './edit';
import {
  PanelBody,
  RangeControl,
  Panel,
  PanelRow,
} from '@wordpress/components';

registerBlockType('majestic-gutenberg/parent', {
  title: __('Team members', 'majestic-gutenberg'),
  description: __('Team Members', 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: '',
  icon: 'grid-view',
  attributes: {
    columns: {
      type: 'number',
      default: 2,
    },
    gap: {
      type: 'number',
      default: 1,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { columns, gap } = attributes;

    const onChangeColumns = columns => {
      setAttributes({ columns });
    };
    const onChangeColumnsGap = gap => {
      setAttributes({ gap });
    };

    const containerClasses = `grid grid-cols-${columns} gap-${gap}`;

    return (
      <>
        <InspectorControls>
          <Panel>
            <button>Hello</button>
            <PanelBody title={__('Columns', 'majestic-gutenberg')}>
              <PanelRow>
                <RangeControl
                  label={__('Number of columns', 'majestic-gutenberg')}
                  value={columns}
                  onChange={columns => onChangeColumns(columns)}
                  min={1}
                  max={12}
                />
              </PanelRow>
            </PanelBody>
            <PanelBody>
              <RangeControl
                label={__('Column gaps', 'majestic-gutenberg')}
                value={gap}
                onChange={gap => onChangeColumnsGap(gap)}
                min={1}
                max={4}
              />
            </PanelBody>
          </Panel>
        </InspectorControls>
        <div className={containerClasses}>
          <InnerBlocks allowedBlocks={['majestic-gutenberg/team-members']} />
        </div>
      </>
    );
  },
  save: ({ attributes }) => {
    const { columns, gap } = attributes;

    const containerClasses = `grid grid-cols-${columns} gap-${gap}`;
    return (
      <>
        <div className={containerClasses}>
          <InnerBlocks.Content />
        </div>
      </>
    );
  },
});
