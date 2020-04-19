import cx from "classnames";

const Heading = ({ level, children, className, ...props }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={cx("heading", className)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
