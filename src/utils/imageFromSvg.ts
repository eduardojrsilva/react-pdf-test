import { createElement } from 'react';
import ReactDom from 'react-dom/server';
import reactHtmlParser from 'react-html-parser';

export const htmlSvgToPdfSvg = (children) => {
  const svgString = ReactDom
    .renderToStaticMarkup(children)
    .replace('px', 'pt');

    const [component] = reactHtmlParser(svgString, { transform: convertToPdfSvg });

  return component;
};

function convertToPdfSvg(node, index) {
  if (node.type == 'text') {
    return node.data;
  }

  node.props = { key: index };

  Object.entries(node.attribs).forEach(([key, value]) => {
    const [first, ...rest] = key.split('-');

    const newKey = [first, ...rest.map(word => `${word[0].toUpperCase()}${word.slice(1)}`)].join('');
    node.props[newKey] = value;
  });

  node.name = node.name?.toUpperCase();
  if (node.name == 'CLIPPATH') node.name = 'CLIP_PATH';

  if (node.name == 'DEFS' && node.parent.name != 'SVG') return null;

  if (node.children) node.children = node.children.map(convertToPdfSvg);
  return createElement(node.name, node.props, node.children);
}

export default htmlSvgToPdfSvg;