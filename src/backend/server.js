const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Дефолтные тексты (при первой загрузке)
let data = {
  ru: {
    headerTitle: "Профессиональная юридическая защита",
    headerSubtitle: "25 лет успешной практики в Израиле",
    servicesTitle: "Наши услуги",
    aboutTitle: "О нас",
    aboutText: "Адвокат... (текст)",
    contactTitle: "Контакты",
    contactAddress: "г. Хайфа, ул. Ха-ацмаут 43, 2 этаж",
  },
  he: {
    headerTitle: "הגנה משפטית מקצועית",
    headerSubtitle: "25 שנות ניסיון...",
    servicesTitle: "השירותים שלנו",
    aboutTitle: "עלינו",
    aboutText: "עורך דין...(текст)",
    contactTitle: "יצירת קשר",
    contactAddress: "חיפה, רח' העצמאות 43...",
  },
  en: {
    headerTitle: "Professional Legal Protection",
    headerSubtitle: "25 years...",
    servicesTitle: "Our Services",
    aboutTitle: "About Us",
    aboutText: "Attorney...(text)",
    contactTitle: "Contact",
    contactAddress: "Haifa, Ha'atzmaut 43...",
  },
};

// Если хотите хранить данные в файле, раскомментируйте код ниже и добавьте сохранение
// Пример: хранение в texts.json
// Попытка загрузить данные из файла при старте
if (fs.existsSync("texts.json")) {
  const fileData = fs.readFileSync("texts.json", "utf8");
  if (fileData) {
    data = JSON.parse(fileData);
  }
}

// Функция для сохранения в файл
function saveToFile() {
  fs.writeFileSync("texts.json", JSON.stringify(data, null, 2), "utf8");
}

// Маршрут GET /api/texts - возвращает все тексты
app.get("/api/texts", (req, res) => {
  res.json(data);
});

// Маршрут POST /api/texts - обновляет тексты для выбранного языка
// Ожидаем в body: { lang: "ru"|"he"|"en", texts: {...} }
app.post("/api/texts", (req, res) => {
  const { lang, texts } = req.body;
  if (!lang || !texts || !data[lang]) {
    return res.status(400).json({ error: "Неверные данные" });
  }

  data[lang] = { ...data[lang], ...texts };
  // Сохраняем в файл
  saveToFile();
  res.json(data);
});

const PORT = 5000; // Можно выбрать любой порт
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
