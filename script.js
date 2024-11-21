// تعريف العدّاد
let count = 0;

// ربط الزر بالعنصر في الصفحة
const prayerBtn = document.getElementById("prayerBtn");
const counterDisplay = document.getElementById("counter");

// إضافة حدث عند الضغط على الزر
prayerBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `عدد الصلوات: ${count}`;
});