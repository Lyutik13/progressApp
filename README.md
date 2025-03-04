# Progress Bar

## Установка
* git clone 
* npm install
* npm run dev

### ProgressBlock

Компонент `ProgressBlock` позволяет отображать прогресс в виде кольца. Он включает в себя следующие элементы управления:

- Поле ввода для значения прогресса (от 0 до 100)
- Переключатель для включения/выключения анимации
- Переключатель для скрытия/показа прогресс-бара

### Пример использования

```javascript
import { createProgressBlock } from "./ProgressBlock/ProgressBlock.js";

const progress = createProgressBlock(document.getElementById("progressBlock"));

document.getElementById("valueInput").addEventListener("input", (e) => {
  let value = e.target.value;
  value = value.replace(/^0+/, "");
  if (value !== "" && parseInt(value, 10) > 100) {
    e.target.value = "100";
  } else {
    e.target.value = value;
  }
  progress.setValue(parseInt(e.target.value, 10) || 0);
});

document.getElementById("animateToggle").addEventListener("change", (e) => {
  progress.setAnimate(e.target.checked);
});

document.getElementById("hideToggle").addEventListener("change", (e) => {
  progress.setVisible(!e.target.checked);
});
