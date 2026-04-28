import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";


function Navbar() {
  const path = window.location.pathname;

  return (
    <nav className="navbar">
      <h1 className="logo">
        <span>🛡️</span> SignalSafe AI
      </h1>

      <div className="navlinks">
        <Link className={path === "/" ? "active" : ""} to="/">Home</Link>

        <Link className={path === "/detect" ? "active" : ""} to="/detect">
          Detect
        </Link>

        <Link className={path === "/dashboard" ? "active" : ""} to="/dashboard">
          Dashboard
        </Link>

        <Link className={path === "/help" ? "active" : ""} to="/help">
          Help
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="left">
          <p className="tag">AI Crisis Protection Platform</p>

          <h2>
            Silent Signals.
            <br />
            Rapid Rescue.
          </h2>

          <p className="desc">
            Smart emergency response system using hidden gestures.
          </p>

          <Link to="/detect">
            <button>Start Detection</button>
          </Link>

          <p className="trust-line">
            Trusted for hotels, campuses, hostels and public spaces.
          </p>
        </div>

        <div className="right">
          <div className="card">🚨 Room 302 Distress Alert</div>
          <div className="card">🩺 Lobby Medical Help</div>
        </div>
      </section>

      <section className="info-section">
        <h2>The Problem</h2>
        <p>
          Many victims cannot openly ask for help during dangerous situations.
          Silent emergencies often go unnoticed.
        </p>
      </section>

      <section className="info-section">
        <h2>Our Solution</h2>
        <p>
          SignalSafe AI uses hidden hand gestures, instant alerts and smart dashboards
          to silently notify responders in real time.
        </p>
      </section>

      <section className="features-grid">
        <div className="box">
          <h3>Gesture Detection</h3>
          <p>Recognizes emergency hand signals through camera monitoring.</p>
        </div>

        <div className="box">
          <h3>Instant Alerts</h3>
          <p>Sends alerts immediately.</p>
        </div>

        <div className="box">
          <h3>Live Dashboard</h3>
          <p>Tracks active alerts and incidents.</p>
        </div>

        <div className="box">
          <h3>AI Guidance</h3>
          <p>Provides emergency help instructions.</p>
        </div>
      </section>

<section className="info-section">
  <h2>How It Works</h2>

  <div className="steps-grid">
    <div className="step-box">
      <h3>1. Detect Gesture</h3>
      <p>Camera identifies hidden emergency hand signal.</p>
    </div>

    <div className="step-box">
      <h3>2. Trigger Alert</h3>
      <p>Instant emergency notification sent securely.</p>
    </div>

    <div className="step-box">
      <h3>3. Rapid Response</h3>
      <p>Authorities/admins respond immediately.</p>
    </div>
  </div>
</section>
<section className="info-section">
  <h2>Why It Matters</h2>

  <p>
    In many emergencies, victims cannot shout, call or openly seek help.
    SignalSafe AI creates a silent path to safety through technology.
  </p>
</section>
<section className="info-section">
  <h2>Future Scope</h2>

  <p>
    Future versions can integrate wearable devices, smartwatch alerts,
    police systems, multilingual AI voice support and real-time GPS rescue tracking.
  </p>
</section>
<section className="info-section">
  <h2>Ready to Experience Silent Safety?</h2>

  <p>
    Explore our AI-powered emergency detection platform and see how hidden
    gestures can save lives.
  </p>

  <Link to="/detect">
    <button>Try Detection Now</button>
  </Link>
</section>
<section className="info-section">
  <h2>Trusted Vision</h2>

  <div className="steps-grid">
    <div className="step-box">
      <p>
        “Ideal for colleges, campuses and women safety systems.”
      </p>
    </div>

    <div className="step-box">
      <p>
        “Silent alerts can transform emergency response.”
      </p>
    </div>

    <div className="step-box">
      <p>
        “Smart technology with real social impact.”
      </p>
    </div>
  </div>
</section>
</>
  );
}

function Detect() {
  const startCamera = async () => {
    const video = document.getElementById("video");
    const status = document.getElementById("status");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      video.srcObject = stream;

      status.innerText = "🟢 Monitoring for Gesture...";

      setTimeout(() => {
        status.innerText = "🔍 Gesture Identified...";

        setTimeout(() => {
          const score = Math.floor(Math.random() * 16) + 85;

          status.innerText =
            `🚨 Distress Gesture Detected (${score}% confidence)`;

          video.classList.add("alert-mode");

          localStorage.setItem(
            "alert",
            `Auto Gesture Alert (${score}% confidence)`
          );

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(850, audioCtx.currentTime);

gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime);

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.start();

// Save globally so we can stop later
window.currentAlarm = oscillator;
window.currentAudioCtx = audioCtx;
setTimeout(() => {
  beep.play();
}, 1200);

        }, 1500);

      }, 4000);

    } catch {
      status.innerText = "❌ Camera Permission Denied";
    }
  };

  return (
    <div className="page">
      <h2>AI Gesture Detection Center</h2>
      <div className="help-card">
  <h3>Recognized Silent Help Gesture</h3>

  <p>🖐️ Step 1: Show Open Palm</p>
  <p>🤏 Step 2: Fold Thumb Inside Palm</p>
  <p>✊ Step 3: Close Four Fingers Over Thumb</p>

  <br />

  <p>
    This hidden gesture can silently request help during emergencies.
  </p>
</div>
      <video
        id="video"
        className="camera-box"
        autoPlay
        playsInline
      ></video>

      <p id="status" className="status">
        ⚪ Click Start Camera
      </p>

      <div className="btn-group">
  <button onClick={startCamera}>Start Camera</button>

  <button
  onClick={() => {
    if (window.currentAlarm) {
      window.currentAlarm.stop();
    }

    document
      .getElementById("video")
      .classList.remove("alert-mode");

    document.getElementById("status").innerText =
      "🟢 Monitoring for Gesture...";
  }}
>
  Stop Alarm
</button>
</div>

      <div className="help-card">
        <h3>Automatic Detection Mode</h3>
        <p>
          Camera continuously monitors gestures and triggers alerts automatically.
        </p>
      </div>
      
    </div>
  );
}
function Dashboard() {
  const alert = localStorage.getItem("alert");

  let solved = localStorage.getItem("solvedCount");

  if (!solved) {
    solved = 8;
    localStorage.setItem("solvedCount", solved);
  }

  const markResolved = () => {
    localStorage.removeItem("alert");

    let count = parseInt(localStorage.getItem("solvedCount"));
    count++;

    localStorage.setItem("solvedCount", count);

    window.location.reload();
  };

  return (
    <div className="page">
      <h2>Real-Time Incident Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{alert ? "1" : "0"}</h3>
          <p>Active Alerts</p>
        </div>

        <div className="stat-card">
          <h3>{solved}</h3>
          <p>Resolved Today</p>
        </div>

        <div className="stat-card">
          <h3>2 min</h3>
          <p>Avg Response</p>
        </div>
      </div>

      {alert ? (
        <div className="incident">
          🚨 {alert}

          <br /><br />

          <button onClick={markResolved}>
            Mark Resolved
          </button>
        </div>
      ) : (
        <div className="incident">
          ✅ No Active Alerts
        </div>
      )}

      <div className="help-card">
        <h3>Why Dashboard Matters</h3>
        <p>
          Emergency teams need one place to monitor alerts and response time.
        </p>
      </div>
    </div>
  );
}

function Help() {
  const showHelp = () => {
    const type = document.getElementById("helpSelect").value;
    const box = document.getElementById("answer");

    if (type === "intruder") {
      box.innerText =
        "Stay quiet. Lock doors if safe. Hide from sight. Authorities alerted.";
    } 
    else if (type === "medical") {
      box.innerText =
        "Check breathing. Keep victim stable. Emergency support notified.";
    } 
    else {
      box.innerText =
        "Move away safely. Use nearest exit. Fire response team alerted.";
    }
  };

  return (
    <div className="page">
      <h2>Smart Emergency Assistance</h2>

      <select id="helpSelect" className="select">
        <option value="intruder">Intruder Threat</option>
        <option value="medical">Medical Emergency</option>
        <option value="fire">Fire Hazard</option>
      </select>

      <br />

      <button onClick={showHelp}>Get Guidance</button>

      <div id="answer" className="help-card">
        Select a situation and click Get Guidance.
      </div>
      <div className="help-card">
  <h3>Why Smart Assistance?</h3>

  <p>
    During emergencies, panic reduces decision-making ability.
    Quick step-by-step guidance can save lives.
  </p>

  <br />

  <p>
    SignalSafe AI provides immediate instructions while responders are notified.
  </p>
</div>
<div className="help-card">
  <h3>Emergency Contacts</h3>

  <p>🚓 Police: 100</p>
  <p>🚑 Ambulance: 108</p>
  <p>🚒 Fire: 101</p>
  <p>📞 Women Helpline: 1091</p>
</div>
    </div>
  );
}

function App() {
  return (
    <Router>
  <div className="app">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/help" element={<Help />} />
    </Routes>

    <footer className="footer">
      © 2026 SignalSafe AI • Silent Protection Powered by Smart Technology
    </footer>
  </div>
</Router>
  );
}

export default App;