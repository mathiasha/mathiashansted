import cx from "classnames";

const Section = ({ className, children, center, ...props }) => (
  <section
    className={cx("section", center ? "section--center" : "", className)}
    {...props}
  >
    {children}
  </section>
);

export default Section;
