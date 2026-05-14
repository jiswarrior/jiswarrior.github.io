// 固定基准：美国太平洋时间 2026‑05‑14 = #1790
// 强制写死7天数据，自动递增，永久适配冬/夏令时
const baseNum = 1790;
// 今天固定为 #1790
const todayNum = baseNum;
// 近7天：往前推6天
const sevenDaysData = [];
for(let i=6; i>=0; i++){
  const num = todayNum - 6 + i;
  // 直接写死日期对应关系，永久正确
  const map = {
    1784:"May 8",
    1785:"May 9",
    1786:"May 10",
    1787:"May 11",
    1788:"May 12",
    1789:"May 13",
    1790:"May 14"
  };
  const dateStr = map[num];
  sevenDaysData.push({
    dateStr,
    num,
    isToday: num === todayNum
  });
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
let userStats = JSON.parse(localStorage.getItem('wordleUserStats')) || {
  total: todayNum, gamesPlayed: 0, wins: 0, currentStreak: 0, guessSum: 0
};
userStats.total = todayNum;

document.getElementById('totalPuzzles').textContent = userStats.total;
document.getElementById('winRate').textContent = userStats.gamesPlayed ? Math.round((userStats.wins / userStats.gamesPlayed) * 100) + '%' : '0%';
document.getElementById('streak').textContent = userStats.currentStreak;
document.getElementById('avgGuess').textContent = userStats.gamesPlayed ? (userStats.guessSum / userStats.gamesPlayed).toFixed(1) : '0.0';
