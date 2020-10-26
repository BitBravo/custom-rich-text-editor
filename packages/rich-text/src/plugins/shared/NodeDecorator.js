import * as React from 'react';
import { NodePropTypes } from './PropTypes';
import { css } from 'emotion';
import camelCase from 'lodash/camelCase';
import tokens from '@contentful/forma-36-tokens';

const headingCss = {
  lineHeight: tokens.lineHeightDefault,
  marginBottom: '0.5em',
  fontWeight: tokens.fontWeightNormal
};

const styles = {
  paragraph: css({
    lineHeight: tokens.lineHeightDefault,
    marginBottom: '0.5em',
    fontSize: '1.25rem'
  }),
  bold: css({
    color: 'inherit',
    fontWeight: tokens.fontWeightDemiBold
  }),
  blockquote: css({
    margin: '0 0 1.3125rem',
    borderLeft: `6px solid ${tokens.colorElementLight}`,
    paddingLeft: '0.875rem',
    fontStyle: 'normal',
    '& a': {
      color: 'inherit'
    }
  }),
  code: css({
    background: tokens.colorElementLight,
    padding: '0px',
    color: tokens.colorTextMid,
    borderRadius: '2px'
  }),
  textLink: css({
    fontSize: 'inherit'
  }),
  orderedList: css({
    margin: '0 0 1.25rem 1.25rem',
    listStyleType: 'decimal',
    '[data-test-id="ordered-list"]': {
      listStyleType: 'upper-alpha',
      '[data-test-id="ordered-list"]': {
        listStyleType: 'lower-roman',
        '[data-test-id="ordered-list"]': {
          listStyleType: 'lower-alpha'
        }
      }
    },
    '[data-test-id="paragraph"]': {
      margin: 0,
      lineHeight: tokens.lineHeightDefault
    }
  }),
  unorderedList: css({
    margin: '0 0 1.25rem 1.25rem',
    listStyleType: 'disc',
    '[data-test-id="unordered-list"]': {
      listStyleType: 'circle',
      '[data-test-id="unordered-list"]': {
        listStyleType: 'square'
      }
    },
    '[data-test-id="paragraph"]': {
      margin: 0,
      lineHeight: tokens.lineHeightDefault
    }
  }),
  listItem: css({
    listStyle: 'inherit',
    margin: 0,
    '[data-test-id="ordered-list"], [data-test-id="unordered-list"]': {
      margin: `0 0 0 ${tokens.spacingL}`
    }
  }),
  heading1: css({
    ...headingCss,
    fontSize: '1.875rem'
  }),
  heading2: css({
    ...headingCss,
    fontSize: '1.5625rem'
  }),
  heading3: css({
    ...headingCss,
    fontSize: '1.375rem'
  }),
  heading4: css({
    ...headingCss,
    fontSize: '1.125rem'
  }),
  heading5: css({
    ...headingCss,
    fontSize: '1.075rem'
  }),
  heading6: css({
    ...headingCss,
    fontSize: '1rem'
  })
};

export default function(Tag, tagProps = {}) {
  const CommonNode = ({ attributes, children, node }) => {
    return (
      <Tag
        className={styles[camelCase(node.type)]}
        data-test-id={node.type}
        {...tagProps}
        {...attributes}>
        {children}
      </Tag>
    );
  };

  CommonNode.displayName = `${Tag}-node`;
  CommonNode.propTypes = NodePropTypes;

  return CommonNode;
}
