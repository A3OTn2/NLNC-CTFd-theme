# NLNCzag — CTFd theme

Тема CTFd в стилистике сайта [nologs-nocrime](https://n0logsn0crime.ru/)

## Установка

Скопируйте папку `ctfdNLNCtheme` в `CTFd/CTFd/themes/`:

Перезапустите CTFd и выберите тему `NLNCzag` в админ-панели: **Admin Panel → Config → Theme**.

Затем пересоздайте контейнер CTFd. Тема не содержит внешних шрифтов, изображений или CDN-зависимостей.

## Что переопределено

- общий layout и navbar;
- главная страница;
- challenge board и challenge modal;
- scoreboard;
- login/register/reset;
- team/profile;
- user settings;
- 404;
- responsive CSS и небольшие UI-скрипты.

Логика CTFd остаётся стандартной: Alpine.js, `challenge.js`, `scoreboard.js`, CSRF и API загружаются через штатный `Assets` helper.

## Палитра

```text
background  #17110D
surface     #241913
orange      #D96B27
amber       #F09A3E
cream       #F3D7B3
muted       #9C7658
border      #4B3020
```

Тему лучше хранить под отдельным именем, не заменяя `core`, чтобы обновления CTFd не перетирали файлы.
