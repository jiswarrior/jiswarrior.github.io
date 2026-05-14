// 基准：Wordle官方 美国东部时间 EDT(UTC‑4) 2026‑05‑14 = #1790
const BASE_DATE = new Date("2026-05-14T00:00:00-04:00");
const BASE_NUM = 1790;

// 获取美国东部时间（Wordle官方时区）
function getEasternToday() {
  return new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}));
}

// 计算编号
function getWordleNumber(targetDate) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.floor((targetDate - BASE_DATE) / oneDay);
  return BASE_NUM + diffDays;
}

// 生成7天
const todayET = getEasternToday();
const sevenDaysData = [];
for (let i = 6; i >= 0; i--) {
  const d = new Date(todayET);
  d.setDate(todayET.getDate() - i);
  const num = getWordleNumber(d);
  const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  sevenDaysData.push({ dateStr, num, isToday: i === 0 });
}

// 渲染
const calendarWrap = document.getElementById('calendarWrap');
const quickWrap = document.getElementById('quickWrap');
sevenDaysData.forEach(item => {
  const cls = item.isToday ? 'day-box today' : 'day-box past';
  calendarWrap.innerHTML += `<div class="${cls}"><a href="wordle-${item.num}.html">${item.dateStr}<br>#${item.num}</a></div>`;
  const label = item.isToday ? `Today: ${item.dateStr} #${item.num}` : `${item.dateStr} #${item.num}`;
  quickWrap.innerHTML += `<a href="wordle-${item.num}.html">${label}</a>`;
});

// 统计
const todayNum = getWordleNumber(todayET);
let userStats = JSON.parse(localStorage.getItem('wordleUserStats')) || {
  total: todayNum, gamesPlayed: 0, wins: 0, currentStreak: 0, guessSum: 0
};
userStats.total = todayNum;

document.getElementById('totalPuzzles').textContent = userStats.total;
document.getElementById('winRate').textContent = userStats.gamesPlayed ? Math.round((userStats.wins / userStats.gamesPlayed) * 100) + '%' : '0%';
document.getElementById('streak').textContent = userStats.currentStreak;
document.getElementById('avgGuess').textContent = userStats.gamesPlayed ? (userStats.guessSum / userStats.gamesPlayed).toFixed(1) : '0.0';
