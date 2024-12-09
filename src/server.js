// backend/server.js
// Простой бэкенд на Node.js + Express

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Путь к файлу с данными
const dataFilePath = path.join(__dirname, "data.json");

// Функция загрузки данных
function loadData() {
  const raw = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(raw);
}

// Функция сохранения данных
function saveData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
}

// Эндпоинт для получения данных
app.get("/data", (req, res) => {
  const data = loadData();
  res.json(data);
});

// Эндпоинт для обновления данных (например, текстов или изображений)
// Ожидает JSON вида { texts: {...}, images: {...} }
app.post("/data", (req, res) => {
  const currentData = loadData();
  const newData = req.body;

  // Обновляем только то, что пришло
  if (newData.texts) {
    currentData.texts = { ...currentData.texts, ...newData.texts };
  }
  if (newData.images) {
    currentData.images = { ...currentData.images, ...newData.images };
  }

  saveData(currentData);
  res.json({ status: "ok", data: currentData });
});

// Запуск сервера
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
