// 基准配置：美国太平洋时间 2025‑05‑14 = #1790
const START_DATE = new Date("2025‑05‑14T00:00:00‑07:00");
const START_PUZZLE_NUM = 1790;

// 获取【美国太平洋时间（UTC‑7）】
function getPacificDate() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pacificTime = utcTime - (7 * 3600000);
    return new Date(pacificTime);
}

// 计算今日谜题编号
function getTodayPuzzleNum() {
    const today = getPacificDate();
    const dayDiff = Math.floor((today - START_DATE) / (1000 * 60 * 60 * 24));
    return START_PUZZLE_NUM + dayDiff;
}

// 获取近7天（从6天前 → 今天）的日期+编号
function getLast7Days() {
    const todayPT = getPacificDate();
    const todayNum = getTodayPuzzleNum();
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const daysList = [];

    for (let i = 6; i >= 0; i--) {
        const day = new Date(todayPT.getTime() - i * 24 * 60 * 60 * 1000);
        const dateText = `${monthNames[day.getMonth()]} ${day.getDate()}`;
        const puzzleNum = todayNum - i;
        daysList.push({ dateText, puzzleNum });
    }
    return daysList;
}

// 渲染所有页面数据
function renderAll() {
    const days = getLast7Days();
    const todayNum = getTodayPuzzleNum();

    // 更新总谜题数
    document.querySelector(".total‑puzzles").textContent = todayNum;

    // 更新7天日历按钮
    const calendarBtns = document.querySelectorAll(".calendar‑day");
    days.forEach((day, idx) => {
        calendarBtns[idx].innerHTML = `${day.dateText}<br>#${day.puzzleNum}`;
        if (idx === 6) calendarBtns[idx].classList.add("today");
    });

    // 更新快速访问区域
    const quickItems = document.querySelectorAll(".quick‑item");
    days.forEach((day, idx) => {
        if (idx < 6) {
            quickItems[idx].textContent = `${day.dateText} #${day.puzzleNum}`;
        } else {
            quickItems[idx].textContent = `Today: ${day.dateText} #${day.puzzleNum}`;
        }
    });
}

// 页面加载自动执行
window.addEventListener("DOMContentLoaded", renderAll);
