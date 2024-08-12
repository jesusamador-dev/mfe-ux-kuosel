import React from 'react';

const svgIcons = (name: string) => import(`!!raw-loader!../../../assets/icons/${name.toLowerCase()}.svg`);

interface KSLIconProps {
  name: string;
  size?: string;
  color?: string | null;
  className?: string;
}

const KSLIcon: React.FC<KSLIconProps> = ({ name, size = '1rem', color = 'currentColor', className = '' }) => {
  const [IconContent, setIconContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    const applyAttributesToSVG = (content: string, size: string, color: string | null) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'image/svg+xml');
      const svgElement = doc.querySelector('svg');

      if (svgElement) {
        svgElement.setAttribute('width', size);
        svgElement.setAttribute('height', size);

        // Iterar sobre cada path, rect, circle, etc., para aplicar el color
        svgElement.querySelectorAll('[fill]').forEach(element => {
          const currentFill = element.getAttribute('fill');
          if (currentFill && currentFill !== 'none' && color) {
            element.setAttribute('fill', color);
          }
        });

        svgElement.querySelectorAll('[stroke]').forEach(element => {
          const currentStroke = element.getAttribute('stroke');
          if (currentStroke && color) {
            element.setAttribute('stroke', color);
          }
        });

        content = new XMLSerializer().serializeToString(svgElement);
      }

      return content;
    };

    svgIcons(name)
      .then((module) => {
        let content = module.default;
        content = applyAttributesToSVG(content, size, color);
        setIconContent(content);
      })
      .catch(() => console.warn(`El ícono con el nombre "${name}" no existe.`));
  }, [name, size, color]);

  return (
    <span
      className={`ksl-icon ${className}`}
      style={{ display: 'inline-block' }}
      dangerouslySetInnerHTML={{ __html: IconContent || '' }}
    />
  );
};

export default KSLIcon;
