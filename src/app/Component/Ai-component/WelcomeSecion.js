import LikelyQuestions from "./LikelyQuestions";

function WelcomeSection(props) {
  const handleClick = (e) => {
    props.onclick(e.target.id);
    console.log(e.target);
  };

  return (
    <article
      style={{
        borderRadius: "20px",
        background: "var(--darkest-background)",
        border: "1px solid var(--border)",
        padding: "1.5rem",
      }}
    >
      <h2
        style={{
          textTransform: "capitalize",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        your AI learning assistant
      </h2>
      <p>
        Ask me anything about trading,market analysis, portfolio management or
        investment stragies.i'm here to provise data-driven insights and help
        you make informed decisions
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <LikelyQuestions
          heading="trading analysis"
          text="Technical patterns, indicators, and entry/exit points"
          onclick={handleClick}
          id={1}
        />
        <LikelyQuestions
          heading="Market Insights"
          text="Trends, news impact, and sector analysis"
          onclick={handleClick}
          id={2}
        />
        <LikelyQuestions
          heading="Portfolio Recommendations"
          text="Allocation advice, diversification, and risk assessment"
          onclick={handleClick}
          id={3}
        />
        <LikelyQuestions
          heading="Educational Support"
          text="Learning resources, terminology, and strategy explanations"
          onclick={handleClick}
          id={4}
        />
      </div>
    </article>
  );
}

export default WelcomeSection;
