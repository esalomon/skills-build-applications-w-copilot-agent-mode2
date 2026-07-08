import { Link, Route, Routes } from 'react-router-dom';
import logo from '../../../docs/octofitapp-small.png';

function Home() {
  return (
    <main className="octofit-shell">
      <section className="octofit-hero container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="eyebrow mb-3">OctoFit Tracker</div>
            <h1 className="display-4 fw-bold text-white mb-3">
              Track activity, teams, and progress in one focused workspace.
            </h1>
            <p className="lead text-white-50 mb-4">
              A modern multi-tier application for workouts, leaderboards, and personalized training.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link className="btn btn-primary btn-lg" to="/dashboard">
                Open dashboard
              </Link>
              <a className="btn btn-outline-light btn-lg" href="http://localhost:8000/api/health">
                Check API health
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img className="octofit-logo shadow-lg" src={logo} alt="OctoFit Tracker logo" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="container py-5">
      <div className="card octofit-card border-0 shadow-lg">
        <div className="card-body p-4 p-md-5">
          <h2 className="h3 fw-bold mb-3">Dashboard scaffold</h2>
          <p className="text-body-secondary mb-0">
            Frontend routing is ready. Next up: activity logs, team management, and leaderboard views.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
