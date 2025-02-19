## Чтобы запустить проект, нужно:
1. Чтобы запутсить frontend, нужно:
   - `cd frontend`
   - `npm i`
   - `npm start`

## Структура проекта:
```
frontend/
└── src/
    ├── assets/                # Глобальные стили, изображения и другие статические файлы
    │   ├── css/               # Глобальные CSS-файлы
    │   │   ├── main.css
    │   │   └── variables.css
    │   └── images/            # Изображения
    │       └──
    ├── components/            # Переиспользуемые компоненты
    │   ├── Header
    │   ├──
    │   ├──
    │   └──
    ├── pages/                 # Страницы сайта
    │   ├── Registration.jsx
    │   ├──
    │   └──
```








src/
├── assets/                # Стили, изображения и другие статические файлы
│   ├── css/               # Глобальные CSS-файлы
│   │   └── main.css
│   ├── images/            # Изображения
│   │   └── logo.png
│   └── fonts/             # Шрифты
│       └── custom-font.woff2
├── components/            # Переиспользуемые компоненты
│   ├── Button.js
│   ├── Header.js
│   ├── Footer.js
│   └── Navbar.js
├── pages/                 # Страницы сайта
│   ├── HomePage.js
│   ├── AboutPage.js
│   └── ContactPage.js
├── routes/                # Маршруты (React Router)
│   └── AppRoutes.js
├── hooks/                 # Кастомные хуки
│   └── useFetch.js
├── context/               # Контекст приложения (React Context API)
│   └── AuthContext.js
├── services/              # API-запросы и сервисы
│   └── api.js
├── utils/                 # Утилиты и вспомогательные функции
│   └── formatDate.js
├── App.js                 # Корневой компонент приложения
├── index.js               # Точка входа в приложение
└── config.js              # Конфигурационные файлы (например, переменные окружения)
