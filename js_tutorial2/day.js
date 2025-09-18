// 指定の日付の曜日を日本語で返す関数
function dayName(date) {
    const daysOfTheWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    return daysOfTheWeek[date.getDay()];
}

// 挨拶文を返す関数
function greeting(date) {
    return `Hello, world! 素敵な${dayName(date)}になりますように！`;
}