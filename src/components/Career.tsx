import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>Publicis Resource · Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              May 2026 – Present. Leading developers across enterprise
              applications — driving delivery velocity, code quality and
              clean-architecture practices across the team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead, Developer, Scrum Master</h4>
                <h5>Globant Pvt. Ltd. · Pune</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Led a team of 4 developers across 3 enterprise applications.
              Enforced API-first and clean architecture; upgraded authentication
              to MFA/token-based SSO; built CI/CD with Jenkins; introduced
              microservices for critical modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MVC Developer, C# Developer</h4>
                <h5>Cognizant · Pune</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Built scalable services with C#, ASP.NET MVC and Web APIs.
              Database solutions on MSSQL Server and PostgreSQL; automated
              testing with Selenium and Groovy; robust exception handling and
              structured logging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web APIs Developer</h4>
                <h5>Tata Consultancy Services · Indore</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Developed secure RESTful Web APIs. Caching and parallel requests
              cut average latency to 120ms. Led Scrum ceremonies; implemented
              authentication, validation and telemetry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>InfoBeans &amp; Softude · Indore</h5>
              </div>
              <h3>2018–21</h3>
            </div>
            <p>
              Built web interfaces and APIs across medical-domain modules and
              user-centric web applications — database fixes, deployments and
              technical documentation.
            </p>
          </div></div>
      </div>
    </div>
  );
};

export default Career;
