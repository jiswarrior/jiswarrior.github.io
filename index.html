<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wordle 7‑Day Calendar | Daily Answers & Statistics</title>
  <meta name="description" content="Check latest 7‑day Wordle answers, hints, stats and history. Daily Wordle puzzle archive with calendar.">
  <meta name="keywords" content="Wordle 7 day calendar, latest Wordle answers, Wordle stats, daily Wordle history">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://dailywordlehub.com">
  <style>
    *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif}
    body{background:#f6f7f9;padding:15px;max-width:900px;margin:0 auto;line-height:1.5}
    header{text-align:center;margin-bottom:20px}
    h1{color:#538d4e;margin-bottom:8px;font-size:1.5rem}
    .desc{color:#666;margin-bottom:20px}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px}
    .stat-card{background:white;padding:16px;border-radius:10px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
    .stat-num{font-size:22px;font-weight:bold;color:#538d4e;margin-bottom:4px}
    .stat-txt{font-size:0.85rem;color:#555}
    .section{background:white;padding:18px;border-radius:10px;margin-bottom:20px}
    h2{color:#538d4e;margin-bottom:14px;font-size:1.2rem;border-left:4px solid #538d4e;padding-left:10px}
    .calendar-7d{display:grid;grid-template-columns:repeat(7,1fr);gap:8px}
    .day-box{padding:12px 6px;border-radius:8px;text-align:center;background:#f1f1f1}
    .day-box a{text-decoration:none;color:#222;font-weight:500;font-size:0.9rem}
    .day-box.today{background:#538d4e}
    .day-box.today a{color:white}
    .day-box.past{background:#e7f5e6}
    .quick-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
    .quick-list a{background:#f1f1f1;padding:10px;border-radius:6px;text-decoration:none;color:#333;font-size:0.9rem}
    footer{text-align:center;margin-top:30px;color:#777;font-size:0.85rem}
    @media (max-width:700px){.stats{grid-template-columns:repeat(2,1fr)}.calendar-7d{grid-template-columns:repeat(4,1fr)}}
  </style>
</head>
<body>
  <header>
    <h1>Wordle 7‑Day Calendar</h1>
    <p class="desc">Latest 7 Days Answers | Statistics | Puzzle History</p>
  </header>

  <div class="stats">
    <div class="stat-card"><div class="stat-num" id="totalPuzzles">0</div><div class="stat-txt">Total Puzzles</div></div>
    <div class="stat-card"><div class="stat-num" id="winRate">0%</div><div class="stat-txt">Win Rate</div></div>
    <div class="stat-card"><div class="stat-num" id="streak">0</div><div class="stat-txt">Current Streak</div></div>
    <div class="stat-card"><div class="stat-num" id="avgGuess">0.0</div><div class="stat-txt">Avg Guesses</div></div>
  </div>

  <div class="section">
    <h2>Latest 7 Days Puzzle Calendar</h2>
    <div class="calendar-7d" id="calendarWrap"></div>
  </div>

  <div class="section">
    <h2>Quick Access (Latest 7 Days)</h2>
    <div class="quick-list" id="quickWrap"></div>
  </div>

  <footer>Wordle Helper | 7‑Day Daily Answer Archive</footer>

  <script>
    const startDate = new Date("2021-06-20");
    const today = new Date();
    function getWordleNumber(date) {
      const diffDays = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    const sevenDaysData = [];
    for (let i = 6; i >= 0; i--) {
      const dayDate = new Date(today);
      dayDate.setDate(today.getDate() - i);
      const num = getWordleNumber(dayDate);
      const dateStr = dayDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      sevenDaysData.push({dateStr,num,isToday:i===0});
    }
    const calendarWrap = document.getElementById('calendarWrap');
    const quickWrap = document.getElementById('quickWrap');
    sevenDaysData.forEach(d => {
      const cls = d.isToday ? 'day-box today' : 'day-box past';
      calendarWrap.innerHTML += `<div class="${cls}"><a href="wordle-${d.num}.html">${d.dateStr}<br>#${d.num}</a></div>`;
      const label = d.isToday ? `Today: ${d.dateStr} #${d.num}` : `${d.dateStr} #${d.num}`;
      quickWrap.innerHTML += `<a href="wordle-${d.num}.html">${label}</a>`;
    });
    const todayNum = getWordleNumber(today);
    let userStats = JSON.parse(localStorage.getItem('wordleUserStats')) || {total:todayNum,gamesPlayed:0,wins:0,currentStreak:0,guessSum:0};
    userStats.total = todayNum;
    document.getElementById('totalPuzzles').textContent = userStats.total;
    document.getElementById('winRate').textContent = userStats.gamesPlayed?Math.round((userStats.wins/userStats.gamesPlayed)*100)+'%':'0%';
    document.getElementById('streak').textContent = userStats.currentStreak;
    document.getElementById('avgGuess').textContent = userStats.gamesPlayed?(userStats.guessSum/userStats.gamesPlayed).toFixed(1):'0.0';
  </script>
</body>
</html>
