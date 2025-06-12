import LikelyQuestions from "./LikelyQuestions";

function WelcomeSection() {
  return (
    <article
      style={{
        borderRadius: "10px",
        background: "var(--semi-main-background)",
        border: "1px solid var(--border)",
      }}
    >
      <h2>you AI learning assistant</h2>
      <p>
        Ask me anything about trading,market analysis, portfolio management or
        investment stragies.i'm here to provise data-driven insights and help
        you make informed decisions
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LikelyQuestions
          heading="trading analysis"
          text="Technical patterns, indicators, and entry/exit points"
        />
        <LikelyQuestions
          heading="Market Insights"
          text="Trends, news impact, and sector analysis"
        />
        <LikelyQuestions
          heading="Portfolio Recommendations"
          text="Allocation advice, diversification, and risk assessment"
        />
        <LikelyQuestions
          heading="Educational Support"
          text="Learning resources, terminology, and strategy explanations"
        />
      </div>
    </article>
  );
}

export default WelcomeSection;
