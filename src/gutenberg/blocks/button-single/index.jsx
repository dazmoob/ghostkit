/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';
import deprecated from './deprecated';
import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Button' ),
    description: __( 'A single button within a buttons wrapper block.' ),
    icon: getIcon( 'block-button', true ),
    ghostkit: {
        customStylesCallback( attributes ) {
            const result = {
                backgroundColor: attributes.color,
                color: attributes.textColor,
                borderRadius: attributes.borderRadius,
                border: attributes.borderWeight && attributes.borderColor ? `${ attributes.borderWeight }px solid ${ attributes.borderColor }` : false,
                '&:hover, &:focus': {
                    backgroundColor: attributes.hoverColor,
                    color: attributes.hoverTextColor,
                    borderColor: attributes.borderWeight && attributes.borderColor && attributes.hoverBorderColor ? attributes.hoverBorderColor : false,
                },
            };

            if ( attributes.focusOutlineWeight && attributes.focusOutlineColor ) {
                result[ '&:focus' ] = result[ '&:focus' ] || {};
                result[ '&:focus' ][ 'box-shadow' ] = `0 0 0 ${ attributes.focusOutlineWeight }px ${ attributes.focusOutlineColor }`;
            }

            return result;
        },
        supports: {
            styles: true,
            spacings: true,
            display: true,
            scrollReveal: true,
        },
    },
    edit,
    save,
    deprecated,
};
