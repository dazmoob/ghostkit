/**
 * Import CSS
 */
import './style.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
    Component,
    Fragment,
} = wp.element;

const {
    RichTextToolbarButton,
    RichTextShortcut,
} = wp.editor;

const {
    toggleFormat,
} = wp.richText;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';

export const name = 'ghostkit/uppercase';

export const settings = {
    title: __( 'Uppercase' ),
    tagName: 'span',
    className: 'ghostkit-text-uppercase',
    edit: class BadgeFormat extends Component {
        constructor() {
            super( ...arguments );

            this.toggleUppercase = this.toggleUppercase.bind( this );
        }

        toggleUppercase() {
            const {
                value,
                onChange,
            } = this.props;

            onChange( toggleFormat(
                value,
                {
                    type: name,
                }
            ) );
        }

        render() {
            const {
                isActive,
            } = this.props;

            return (
                <Fragment>
                    <RichTextShortcut
                        type="access"
                        character="u"
                        onUse={ this.toggleUppercase }
                    />
                    <RichTextToolbarButton
                        shortcutCharacter="u"
                        shortcutType="access"
                        title={ __( 'Uppercase' ) }
                        icon={ getIcon( 'icon-text-uppercase' ) }
                        onClick={ this.toggleUppercase }
                        isActive={ isActive }
                    />
                </Fragment>
            );
        }
    },
};
