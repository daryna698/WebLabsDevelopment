# frontend-lab-1

Навчальний статичний проєкт для лабораторної роботи №1 «Налаштування
середовища розробки для HTML, CSS, JavaScript/TypeScript».

## Опис

Проста статична сторінка (HTML + CSS + JS без збірки), яка демонструє:

- підключення `styles.css` та `script.js` до `index.html`;
- перемикач теми (light/dark) зі збереженням вибору в `localStorage`;
- інтерактивний лічильник (кнопки `+` / `−`);
- responsive layout для desktop і mobile.

## Локальний запуск

Проєкт не потребує збірки чи залежностей. Достатньо відкрити `index.html`
у браузері або підняти локальний сервер:

- **VS Code**: розширення *Live Preview* → правий клік на `index.html` →
  Show Preview.
- **Будь-яка ОС з Node.js**:

  ```bash
  npx serve .
  ```

## Якість коду

- Форматування: Prettier (`.prettierrc.json`).
- Лінтинг: ESLint (`eslint.config.js`, якщо додано).
- Рекомендовані розширення VS Code — див. `.vscode/extensions.json`.

## AI-агент

Правила для AI-агента знаходяться в [`AGENTS.md`](./AGENTS.md).
Skill для передрелізного рев'ю — у
[`.agents/skills/frontend-review/SKILL.md`](./.agents/skills/frontend-review/SKILL.md).


