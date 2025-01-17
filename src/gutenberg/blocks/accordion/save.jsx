/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
const {
    applyFilters,
} = wp.hooks;

const { Component } = wp.element;

const {
    InnerBlocks,
} = wp.editor;

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name } = metadata;

/**
 * Block Save Class.
 */
class BlockSave extends Component {
    render() {
        const {
            itemsCount,
            collapseOne,
        } = this.props.attributes;

        let className = classnames(
            'ghostkit-accordion',
            `ghostkit-accordion-${ itemsCount }`,
            collapseOne ? 'ghostkit-accordion-collapse-one' : ''
        );

        className = applyFilters( 'ghostkit.blocks.className', className, {
            ...{
                name,
            },
            ...this.props,
        } );

        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    }
}

export default BlockSave;
