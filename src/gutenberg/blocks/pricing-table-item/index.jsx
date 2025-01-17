/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';
import metadata from './block.json';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Pricing Table Item' ),
    description: __( 'A single item within a pricing table block.' ),
    icon: getIcon( 'block-pricing-table', true ),
    ghostkit: {
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
