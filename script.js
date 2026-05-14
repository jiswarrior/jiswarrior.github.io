// ———— 核心配置：【美国太平洋时间】May 14, 2026 00:00 = #1790 ————
const BASE_DATE = new Date("2026-05-14T00:00:00-07:00"); // 必须加 -07:00 太平洋时区
const BASE_NUM = 1790;

// 获取 美国太平洋时间 UTC‑7
function getPacificToday() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc - 7 * 3600000);
}

// 计算指定日期的 Wordle 编号
function getWordleNumber(targetDate) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.floor((targetDate - BASE_DATE) / oneDay);
  return BASE_NUM + diffDays;
}

// 生成近 7 天数据
const todayPT = getPacificToday();
const sevenDaysData = [];

for (let i = 6; i >= 0; i--) {
  const d = new Date(todayPT);
  d.setDate(todayPT.getDate() - i);
  const num = getWordleNumber(d);
  const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  sevenDaysData.push({ dateStr, num, isToday: i === 0 });
}

// 渲染日历
const calendarWrap = document.getElementById('calendarWrap');
const quickWrap = document.getElementById('quickWrap');
sevenDaysData.forEach(item => {
  const cls = item.isToday ? 'day-box today' : 'day-box past';
  calendarWrap.innerHTML += `<div class="${cls}"><a href="wordle-${item.num}.html">${item.dateStr}<br>#${item.num}</a></div>`;
  const label = item.isToday ? `Today: ${item.dateStr} #${item.num}` : `${item.dateStr} #${item.num}`;
  quickWrap.innerHTML += `<a href="wordle-${item.num}.html">${label}</a>`;
});

// 统计数据
const todayNum = getWordleNumber(todayPT);
let userStats = JSON.parse(localStorage.getItem('wordleUserStats')) || {
  total: todayNum, gamesPlayed: 0, wins: 0, currentStreak: 0, guessSum: 0
};
userStats.total = todayNum;

document.getElementById('totalPuzzles').textContent = userStats.total;
document.getElementById('winRate').textContent = userStats.gamesPlayed ? Math.round((userStats.wins / userStats.gamesPlayed) * 100) + '%' : '0%';
document.getElementById('streak').textContent = userStats.currentStreak;
document.getElementById('avgGuess').textContent = userStats.gamesPlayed ? (userStats.guessSum / userStats.gamesPlayed).toFixed(1) : '0.0';
