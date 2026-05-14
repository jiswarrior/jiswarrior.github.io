// 基准：美国太平洋时间 2025‑05‑14  = #1790
const START_DATE = new Date("2025‑05‑14T00:00:00‑07:00");
const START_NUM = 1790;

// 获取美国太平洋时间 UTC‑7
function getPT() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc - 7 * 3600000);
}

// 计算今天编号
function getTodayNum() {
  const diff = Math.floor((getPT() - START_DATE) / (1000*60*60*24));
  return START_NUM + diff;
}

// 获取近7天
function get7Days() {
  const today = getPT();
  const todayNum = getTodayNum();
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const list = [];
  for(let i=6;i>=0;i--){
    const d = new Date(today.getTime() - i*86400000);
    list.push({
      date: `${month[d.getMonth()]} ${d.getDate()}`,
      num: todayNum - i
    })
  }
  return list;
}

// 渲染（完全沿用你原有布局）
function render() {
  const days = get7Days();
  // 总谜题
  document.querySelector(".total‑num").innerText = getTodayNum();
  // 日历
  document.querySelectorAll(".cal‑day").forEach((el,i)=>{
    el.innerHTML = `${days[i].date}<br>#${days[i].num}`;
    if(i===6) {
      el.style.background = "#2e7d32";
      el.style.color = "#fff";
    }else{
      el.style.background = "#e8f5e9";
      el.style.color = "#000";
    }
  })
  // 快速访问
  document.querySelectorAll(".quick‑item").forEach((el,i)=>{
    if(i<6) el.innerText = `${days[i].date} #${days[i].num}`;
    else el.innerText = `Today: ${days[i].date} #${days[i].num}`;
  })
}

window.addEventListener("DOMContentLoaded", render);
