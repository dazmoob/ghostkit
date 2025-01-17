/**
 * Import CSS
 */
import './style.scss';
import './editor.scss';

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
    RichText,
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
            caption,
            height,
            percent,
            striped,
            showCount,
            countPrefix,
            countSuffix,
            animateInViewport,
        } = this.props.attributes;

        let className = 'ghostkit-progress';

        className = applyFilters( 'ghostkit.blocks.className', className, {
            ...{
                name,
            },
            ...this.props,
        } );

        return (
            <div className={ className }>
                { ! RichText.isEmpty( caption ) ? (
                    <div className="ghostkit-progress-caption">
                        <RichText.Content value={ caption } />
                    </div>
                ) : '' }
                { showCount ? (
                    <div className="ghostkit-progress-bar-count" style={ { width: `${ percent }%` } }>
                        <div>
                            <span>{ countPrefix }</span>
                            <span>{ percent }</span>
                            <span>{ countSuffix }</span>
                        </div>
                    </div>
                ) : '' }
                <div className={ classnames( 'ghostkit-progress-wrap', striped ? 'ghostkit-progress-bar-striped' : '' ) }>
                    <div className={ classnames( 'ghostkit-progress-bar', animateInViewport ? 'ghostkit-count-up' : '' ) } role="progressbar" style={ { width: `${ percent }%`, height: `${ height }px` } } aria-valuenow={ percent } aria-valuemin="0" aria-valuemax="100" />
                </div>
            </div>
        );
    }
}

export default BlockSave;
