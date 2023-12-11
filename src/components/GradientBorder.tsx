import gradient from '~/gradient_main.png';
interface Props {
  children: React.ReactNode;
  paddingX?: number;
  paddingY?: number;
  borderWidth?: number;
  borderRadius?: string;
  className?: string;
}

const GradientBorder = ({
  children,
  paddingX = 0,
  paddingY = 0,
  borderWidth = 0,
  borderRadius,
  className = '',
}: Props) => {
  // const x = paddingX ? `px-${paddingX}` : '';
  // const y = paddingY ? `py-${paddingY}` : '';
  // const bw = borderWidth ? `border-${borderWidth}` : '';
  // const br = borderRadius ? `rounded-${borderRadius}` : '';
  return (
    <div
      //   style={{ backgroundImage: `url(${gradient.src})` }}
      //   className={`gradient-border-wrapper ${x} ${y} border-${borderWidth} rounded-${borderRadius} ${className}`}
      className={`gradient-border-wrapper ${
        borderRadius ? `rounded-${borderRadius}` : 'rounded-full'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientBorder;
