// 1. 基础配置：起始日期、起始编号（你当前：5月15日 #1790）
const START_DATE = new Date("2025-05-15T00:00:00-07:00"); // 美国太平洋时间UTC‑7
const START_PUZZLE_NUM = 1790;

// 获取当前 美国太平洋时间（PT）
function getPacificDate() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const ptTime = utc - (7 * 3600000); // UTC‑7 太平洋时间
  return new Date(ptTime);
}

// 计算今天的谜题编号
function getTodayPuzzleNum() {
  const today = getPacificDate();
  const diffDays = Math.floor((today - START_DATE) / (1000 * 60 * 60 * 24));
  return START_PUZZLE_NUM + diffDays;
}

// 获取近7天日期+编号
function getLast7Days() {
  const today = getPacificDate();
  const todayNum = getTodayPuzzleNum();
  const days = [];
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  for(let i=6; i>=0; i--){
    const d = new Date(today.getTime() - i * 24*60*60*1000);
    const dateStr = `${monthNames[d.getMonth()]} ${d.getDate()}`;
    const num = todayNum - i;
    days.push({ dateStr, num });
  }
  return days;
}

// 渲染页面所有日历+数字
function renderCalendar() {
  const days = getLast7Days();
  const todayNum = getTodayPuzzleNum();

  // 1. 更新总谜题数
  document.querySelector(".total-puzzles").textContent = todayNum;

  // 2. 更新7天日历按钮
  const calendarBtns = document.querySelectorAll(".calendar-day");
  days.forEach((day,i)=>{
    const btn = calendarBtns[i];
    btn.innerHTML = `${day.dateStr}<br>#${day.num}`;
    // 今天高亮
    if(i===6) btn.classList.add("today");
    else btn.classList.remove("today");
  })

  // 3. 更新快速访问区域
  const quickAccessItems = document.querySelectorAll(".quick-item");
  days.forEach((day,i)=>{
    if(i<7){
      quickAccessItems[i].textContent = `${day.dateStr} #${day.num}`;
    }
  })
  // 最后一行 Today
  quickAccessItems[6].textContent = `Today: ${days[6].dateStr} #${days[6].num}`;
}

// 页面加载自动执行
window.onload = renderCalendar;
