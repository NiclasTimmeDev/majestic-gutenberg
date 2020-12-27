import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  RangeControl,
  Panel,
  PanelRow,
} from '@wordpress/components';
const InnerBlocks = wp.blockEditor.InnerBlocks;
const InspectorControls = wp.blockEditor.InspectorControls;
import { composeClasses } from './../../services/services';

class EditAdvancedGrid extends Component {
  onChangeColsPerRow = cols => {
    this.props.setAttributes({
      colsPerRow: cols,
    });
  };
  onChangeColGap = gap => {
    this.props.setAttributes({
      gap,
    });
  };

  render() {
    const { attributes } = this.props;
    const { colsPerRow, gap } = attributes;
    const containerClasses = composeClasses(
      ['grid'],
      [
        `grid-cols-${this.props.attributes.colsPerRow}`,
        `gap-${this.props.attributes.gap}`,
      ],
    );
    const innerBlocks = [];
    for (let i = 1; i <= colsPerRow; i++) {
      innerBlocks.push();
    }
    return (
      <>
        <InspectorControls>
          <Panel>
            <PanelBody title={__('Columns', 'majestic-gutenberg')}>
              <PanelRow>
                <RangeControl
                  label={__('Number of columns', 'majestic-gutenberg')}
                  value={colsPerRow}
                  onChange={columns => this.onChangeColsPerRow(columns)}
                  min={1}
                  max={12}
                />
              </PanelRow>
            </PanelBody>
            <PanelBody>
              <RangeControl
                label={__('Column gaps', 'majestic-gutenberg')}
                value={gap}
                onChange={gap => this.props(gap)}
                min={1}
                max={4}
              />
            </PanelBody>
          </Panel>
        </InspectorControls>
        <div className={`advanced-grid cols-per-row-${colsPerRow}`}>
          <InnerBlocks
            renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
          />
        </div>
      </>
    );
  }
}

export default EditAdvancedGrid;
