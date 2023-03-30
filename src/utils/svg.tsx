import React from 'react';
import { JSDOM } from 'jsdom'
import { Text, Svg, Rect, G, ClipPath, Defs, Path, Tspan, Line, Circle, View } from '@react-pdf/renderer';
import { renderToStaticMarkup } from 'react-dom/server';

type ComponentType = React.ElementType

const formatStringToCamelCase = (str: string) => {
  const splitted = str.split("-");

  if (splitted.length === 1) return splitted[0];

  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

const getStyleObjectFromString = (str: string | null) => {
  const style: any = {};

  if (!str) return {};
  
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":");

    if (!property) return;

    const formattedProperty = formatStringToCamelCase(property.trim());
    style[formattedProperty] = value.trim();
  });

  return style;
};

function parseIntAttributes(attr: string | null) {
  if (!attr) return null;
  if (attr.includes('px')) return attr;

  return Number(attr);
}


export function SVGToComponent(html: string) {  
  if (!html || html === "") return null;

  const jsDom = new JSDOM(html)

  function renderNode(node: Element) {
    console.log(node.tagName, node.className);
    
    let Component: ComponentType;
    let componentProps = {};
    
    switch(node.tagName.toUpperCase()) {
      case "SVG": 
        Component = Svg;
        componentProps = {
          height: parseIntAttributes(node.getAttribute('height')),
          width: parseIntAttributes(node.getAttribute('width')),
          viewBox: node.getAttribute('viewBox'),
          style: {
            fontSize: '12px'
          }
        };
        break;

      case "RECT": 
        Component = Rect;
        componentProps = {
          x: parseIntAttributes(node.getAttribute('x')),
          y: parseIntAttributes(node.getAttribute('y')),
          fill: node.getAttribute('fill'),
          width: parseIntAttributes(node.getAttribute('width')),
          height: parseIntAttributes(node.getAttribute('height')),
          rx: parseIntAttributes(node.getAttribute('rx')),
          ry: parseIntAttributes(node.getAttribute('ry'))
        };
        break;

      case "CLIPPATH": 
        Component = ClipPath;
        break;

      case "DEFS":
        Component = Defs;
        break;

      case "G":
        Component = G;
        componentProps = {
          // 'data-z-index': node.getAttribute('data-z-index'),
          opacity: node.getAttribute('opacity'),
          transform: node.getAttribute('transform'),
          // 'clip-path': node.getAttribute('clip-path'),
          visibility: node.getAttribute('visibility')
        };
        break;

      case "TEXT":
        Component = Text;
        componentProps = {
          x: parseIntAttributes(node.getAttribute('x')),
          textAnchor: node.getAttribute('text-anchor'),
          // 'data-z-index': node.getAttribute('data-z-index'),
          style: getStyleObjectFromString(node.getAttribute('style')),
          y: parseIntAttributes(node.getAttribute('y'))
        };
        break;

      case "PATH":
        Component = Path;
        componentProps = {
          // 'data-z-index': node.getAttribute('data-z-index'),
          d: node.getAttribute('d'),
          fill: node.getAttribute('fill'),
          opacity: node.getAttribute('opacity')
        };
        break;

      case "TSPAN":
        Component = Tspan;
        componentProps = {
          x: parseIntAttributes(node.getAttribute("x")),
          y: parseIntAttributes(node.getAttribute("y")),
          fill: node.getAttribute("fill"),
          stroke: node.getAttribute("stroke"),
          strokeWidth: node.getAttribute("stroke-width"),
          // "stroke-linejoin": node.getAttribute("stroke-linejoin"),
          opacity: parseIntAttributes(node.getAttribute('opacity')),
          visibility: node.getAttribute('visibility'),
          fontWeight: node.getAttribute('fontWeight')
        };
        break;

      case "LINE":
        Component = Line;
        componentProps = {
          x1: parseIntAttributes(node.getAttribute("x1")),
          x2: parseIntAttributes(node.getAttribute("x2")),
          y1: parseIntAttributes(node.getAttribute("y1")),
          y2: parseIntAttributes(node.getAttribute("y2")),
          fill: node.getAttribute("fill"),
          stroke: node.getAttribute("stroke"),
          // strokeDasharray: node.getAttribute("stroke-dasharray")
        };
        break;

      case "CIRCLE":
        Component = Circle;
        componentProps = {
          r: parseIntAttributes(node.getAttribute("r")),
          cx: parseIntAttributes(node.getAttribute("cx")),
          cy: parseIntAttributes(node.getAttribute("cy")),
          fill: node.getAttribute("fill"),
          stroke: node.getAttribute("stroke"),
          strokeWidth: node.getAttribute("stroke-width")
        };
        return null;

      case "DESC":
        return null;

      case "TITLE":
        return null;

      case "DIV":
        Component = View;
        break;

      default:
        throw new Error(`unsupported type ${node.tagName}`)
    }

    if(node.children) {
      return (
        <Component {...componentProps}>
          {Array.from(node.children).map(renderNode)}
        </Component>
      )
    } 
    return (
      <Component {...componentProps} />
    )
  }

  return renderNode(jsDom.window.document.body.children[0])
}