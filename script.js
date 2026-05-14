// ======================
// 终极配置 全年无错版
// 太平洋时间 2026-05-14 = #1790
// 自动适配 夏令时PDT / 冬令时PST
// ======================
const BASE_DATE = new Date("2026-05-14T00:00:00").toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
const BASE_NUM = 1790;

// 获取【真正的洛杉矶/太平洋时间】
function getNowPT() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
}

// 计算天数差（绝对正确）
function daysDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  const diffTime = d2 - d1;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// 生成 7 天数据
const todayPT = getNowPT();
const diff = daysDifference(BASE_DATE, todayPT);
const todayNumber = BASE_NUM + diff;
const sevenDaysData = [];

for (let i = 6; i >= 0; i--) {
  const d = new Date(todayPT);
  d.setDate(todayPT.getDate() - i);
  const num = todayNumber - i;
  const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  sevenDaysData.push({ dateStr, num, isToday: i === 0 });
}

// 渲染页面
const calendarWrap = document.getElementById('calendarWrap');
const quickWrap = document.getElementById('quickWrap');

sevenDaysData.forEach(item => {
  const cls = item.isToday ? 'day-box today' : 'day-box past';
  calendarWrap.innerHTML += `<div class="${cls}"><a href="wordle-${item.num}.html">${item.dateStr}<br>#${item.num}</a></div>`;
  const label = item.isToday ? `Today: ${item.dateStr} #${item.num}` : `${item.dateStr} #${item.num}`;
  quickWrap.innerHTML += `<a href="wordle-${item.num}.html">${label}</a>`;
});

// 统计数据
let userStats = JSON.parse(localStorage.getItem('wordleUserStats')) || {
  total: todayNumber, gamesPlayed: 0, wins: 0, currentStreak: 0, guessSum: 0
};
userStats.total = todayNumber;

document.getElementById('totalPuzzles').textContent = userStats.total;
document.getElementById('winRate').textContent = userStats.gamesPlayed ? Math.round((userStats.wins / userStats.gamesPlayed) * 100) + '%' : '0%';
document.getElementById('streak').textContent = userStats.currentStreak;
document.getElementById('avgGuess').textContent = userStats.gamesPlayed ? (userStats.guessSum / userStats.gamesPlayed).toFixed(1) : '0.0';
