import React, { Component } from 'react';
import ToolbarDropdownListItem from '../shared/ToolbarDropdownListItem';
import blockSelectDecorator from '../shared/BlockSelectDecorator';
import { blockTitles } from './HeadingDropdown';
import { BLOCKS } from '@contentful/rich-text-types';

export default function newHeadingDropdownItem(nodeType) {
  const title = nodeType !== BLOCKS.PARAGRAPH? blockTitles[nodeType] : 'Extra Large(24)';

  class Heading extends Component {
    static displayName = title.replace(/\s/g, '');
    render() {
      return (
        <ToolbarDropdownListItem {...this.props} data-test-id={nodeType}>
          {title}
        </ToolbarDropdownListItem>
      );
    }
  }

  return blockSelectDecorator({
    type: nodeType,
    title,
  })(Heading);
}
