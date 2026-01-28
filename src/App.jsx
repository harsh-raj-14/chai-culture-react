import { useEffect, useState } from "react";

export default function App() {
  const launchDate = new Date("2026-02-15T12:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You'll be notified when we launch ☕");
  };

  return (
    <div className="page">
      <div className="card">

        <img src="/logo.png" alt="Chai Culture Logo" className="logo" />

        <h1>Chai Culture</h1>
        <p className="tagline">Brew the Royal Tradition</p>

        <p className="description">
          Chai Culture brings you a premium instant chai tea premix inspired by royal Indian households — rich in aroma, bold in flavor, and crafted for those who cherish tradition in every sip.
        </p>

        <div className="badge">☕ Launching Soon</div>

        <div className="countdown">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="time-box">
              <h2>{String(value).padStart(2, "0")}</h2>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input required type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
        </form>

        <div className="socials">
          <a href="#">IG</a>
          <a href="#">X</a>
          <a href="#">F</a>
        </div>

        <footer>© 2026 Chai Culture</footer>
      </div>
    </div>
  );
}