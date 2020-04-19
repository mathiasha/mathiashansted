import cx from "classnames";

const Section = ({ className, children, ...props }) => (
  <section className={cx("section", className)} {...props}>
    {children}
  </section>
);

export default Section;
