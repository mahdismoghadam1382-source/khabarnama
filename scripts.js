// اطلاعات خبرهای سایت خبرنما

let allNews = [
    {
        title: "تحولات سیاسی ایران و جهان",
        text: "بررسی تازه‌ترین رویدادهای سیاسی، روابط بین‌الملل و تصمیمات مهم دولت‌ها",
        category: "سیاسی",
        link: "pages/politics.html"
    },
    {
        title: "روابط دیپلماتیک کشورها",
        text: "بررسی مذاکرات، توافق‌نامه‌ها و همکاری‌های سیاسی میان کشورها",
        category: "سیاسی",
        link: "pages/politics.html"
    },
    {
        title: "وضعیت بازار و اقتصاد کشور",
        text: "بررسی تغییرات بازار، قیمت‌ها، تورم و شرایط اقتصادی",
        category: "اقتصادی",
        link: "pages/economy.html"
    },
    {
        title: "تحولات بازار بورس",
        text: "آخرین تغییرات شاخص بورس و سرمایه‌گذاری",
        category: "اقتصادی",
        link: "pages/economy.html"
    },
    {
        title: "هوش مصنوعی و آینده جهان",
        text: "پیشرفت هوش مصنوعی در پزشکی، آموزش و صنعت",
        category: "فناوری",
        link: "pages/technology.html"
    },
    {
        title: "پیشرفت ربات‌های هوشمند",
        text: "کاربرد ربات‌های هوشمند در زندگی روزمره و صنایع",
        category: "فناوری",
        link: "pages/technology.html"
    },
    {
        title: "آخرین رویدادهای فوتبال ایران",
        text: "مسابقات لیگ برتر، نتایج بازی‌ها و عملکرد تیم‌ها",
        category: "ورزشی",
        link: "pages/sports.html"
    },
    {
        title: "مسابقات ورزشی جهان",
        text: "مسابقات بین‌المللی و رقابت ورزشکاران جهان",
        category: "ورزشی",
        link: "pages/sports.html"
    }
];

function searchNews() {

    let input = document.getElementById("searchInput").value.trim();

    let results = allNews.filter(function(news) {

        return news.title.includes(input) ||
               news.text.includes(input);

    });

    let resultBox = document.getElementById("searchResults");

    resultBox.innerHTML = "";

    if (input === "" || results.length === 0) {
        resultBox.innerHTML = "<p>خبری پیدا نشد!</p>";
        return;
    }

    results.forEach(function(news) {

        resultBox.innerHTML += `
            <article class="news-card">
                <h3>${news.title}</h3>
                <p>${news.text}</p>
                <span>${news.category}</span>
                <br>
                <a href="${news.link}">مشاهده خبر</a>
            </article>
        `;

    });

}function updateClock() {
    let now = new Date();

    let time = now.toLocaleTimeString("fa-IR");
    let date = now.toLocaleDateString("fa-IR");

    document.getElementById("liveClock").innerHTML =
        "تاریخ: " + date + " | ساعت: " + time;
}

updateClock();
setInterval(updateClock, 1000);