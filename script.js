const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");
const cancelBtn = document.getElementById("cancelBtn");
const message = document.getElementById("message");
const progressBar = document.getElementById("progress-bar");
const percentText = document.getElementById("percent");

let progress = 0;
let finishCount = 0;

startBtn.addEventListener("click", () => {
  progress = 0;
  percentText.textContent = "0%";
  progressBar.style.width = "0%";
  message.textContent = "작업을 시작합니다. 거의 다 왔어요.";

  const loading = setInterval(() => {
    if (progress < 99) {
      progress += Math.floor(Math.random() * 15) + 1;

      if (progress > 99) {
        progress = 99;
      }

      progressBar.style.width = progress + "%";
      percentText.textContent = progress + "%";
    } else {
      clearInterval(loading);
      message.textContent = "마지막 1%는 사용자의 진심을 확인 중입니다.";
    }
  }, 300);
});

finishBtn.addEventListener("click", () => {
  finishCount++;

  if (finishCount === 1) {
    alert("정말 완료하시겠습니까?");
    message.textContent = "확인 절차가 필요합니다.";
  } else if (finishCount === 2) {
    alert("정말 정말 완료하시겠습니까?");
    message.textContent = "사용자의 의지를 분석 중입니다.";
  } else if (finishCount === 3) {
    alert("완료하려면 취소 버튼을 먼저 눌러주세요.");
    message.textContent = "완료를 위해 취소가 필요합니다.";
  } else {
    alert("수고하셨습니다. 아무것도 완료되지 않았지만 인내심은 성장했습니다.");
    progressBar.style.width = "0%";
    percentText.textContent = "0%";
    message.textContent = "처음부터 다시 시작해주세요.";
    finishCount = 0;
  }
});

cancelBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 150 - 75;

  cancelBtn.style.transform = `translate(${x}px, ${y}px)`;
});

cancelBtn.addEventListener("click", () => {
  alert("취소를 취소했습니다.");
  message.textContent = "취소 기능은 현재 취소되었습니다.";
});