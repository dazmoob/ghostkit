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

const { Component, Fragment } = wp.element;

const {
    InnerBlocks,
} = wp.editor;

const {
    withSelect,
} = wp.data;

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    render() {
        const {
            attributes,
            hasChildBlocks,
        } = this.props;

        let {
            className,
        } = attributes;

        className = classnames(
            className,
            'ghostkit-carousel-slide'
        );

        className = applyFilters( 'ghostkit.editor.className', className, this.props );

        return (
            <Fragment>
                <div className={ className }>
                    <InnerBlocks
                        templateLock={ false }
                        renderAppender={ (
                            hasChildBlocks ?
                                undefined :
                                () => <InnerBlocks.ButtonBlockAppender />
                        ) }
                    />
                </div>
            </Fragment>
        );
    }
}

export default withSelect( ( select, ownProps ) => {
    const { clientId } = ownProps;
    const blockEditor = select( 'core/block-editor' );

    return {
        hasChildBlocks: blockEditor ? blockEditor.getBlockOrder( clientId ).length > 0 : false,
    };
} )( BlockEdit );
