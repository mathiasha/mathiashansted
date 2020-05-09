import cx from "classnames";

const Heading = ({ level, children, className, ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={cx("heading", `heading--as-${level}`, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
