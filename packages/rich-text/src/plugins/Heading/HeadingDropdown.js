import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BLOCKS } from '@contentful/rich-text-types';
import { Dropdown, DropdownList, Button } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from 'emotion';

const styles = {
  root: css({
    width: '110px',

    [`@media (min-width: ${tokens.contentWidthDefault})`]: {
      width: '145px'
    },

    svg: {
      marginLeft: 'auto'
    },

    '> span': {
      padding: '0 2px!important'
    }
  })
};

export const blockTitles = {
  [BLOCKS.PARAGRAPH]: 'Normal (24)',
  [BLOCKS.HEADING_1]: 'Big Extra (48)',
  [BLOCKS.HEADING_2]: 'Extra (36)',
  [BLOCKS.HEADING_3]: 'Large (24)',
  [BLOCKS.HEADING_4]: 'Medium (20)',
  [BLOCKS.HEADING_5]: 'Small (16)',
  [BLOCKS.HEADING_6]: 'Heading 6',
  [BLOCKS.EMBEDDED_ENTRY]: 'Embedded Entry',
  [BLOCKS.EMBEDDED_ASSET]: 'Embedded Asset'
};

class HeadingDropdown extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    onClose: PropTypes.func,
    onToggle: PropTypes.func,
    currentBlockType: PropTypes.string
  };
  getStyleNameForChange = () => {
    return blockTitles[this.props.currentBlockType] || blockTitles[BLOCKS.PARAGRAPH];
  };

  render() {
    const { onToggle, isOpen, onClose, children } = this.props;
    return (
      <Dropdown
        toggleElement={
          <Button
            onMouseDown={onToggle}
            data-test-id="toolbar-heading-toggle"
            className={styles.root}
            indicateDropdown
            buttonType="naked"
            size="small"
            disabled={this.props.disabled}>
            {this.getStyleNameForChange()}
          </Button>
        }
        isOpen={isOpen}
        onClose={onClose}>
        <DropdownList className="toolbar-heading-dropdown-list">{children}</DropdownList>
      </Dropdown>
    );
  }
}

export default HeadingDropdown;
