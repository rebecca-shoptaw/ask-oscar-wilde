import { PORTFOLIO_LINK } from "../data/Links";

const ReturnHome = () => {
  return (
    <a href={PORTFOLIO_LINK}>
      <i className="bi bi-x back-btn" />
    </a>
  );
};

export default ReturnHome;
