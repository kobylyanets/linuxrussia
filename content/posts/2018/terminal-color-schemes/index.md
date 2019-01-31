---
title: "Как изменить цветовую схему терминала в Ubuntu"
date: "2018-02-25"
---

Для многих, которые часто используют терминал, важно, какой фон и цвет текста используются. В данной статье я хочу поделиться, как изменить цветовую схему терминала посредством установки готовых тем для Gnome Terminal, таких как Monokai или Dracula, а также множества других. 

## В чём суть изменения цветовой схемы терминала в Ubuntu?

В Ubuntu стандартная цветовая схема терминала выглядит следующим образом:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_194.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_194.png)

Мне нравится менять цветовую схему, чтобы терминал выглядел более читаемым. К примеру, я использую цветовую схему Monokai (которая используется по умолчанию в текстовом редакторе Sublime Text). В результате, терминал начинает выглядеть следующим образом:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_195.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_195.png)

Конечно же, если вас всё устраивает с цветами терминале, то менять ничего не нужно и дальше данную статью читать необязательно.

На многих сайтах в инструкциях предлагают менять в ручную цвета профилей, это слишком долго и лениво. В данной статье хочу продемонстрировать более простой способ изменения цветовых схем в терминале Ubuntu.

## Как изменить цветовую схему терминала.

Данная инструкция применимо только к тем дистрибутивам (Ubuntu, Linux Mint, Elementary OS), которые используют терминалы Gnome или Pantheon Terminal. 

На github есть замечательный репозиторий Gogh, где автор сделал удобные скрипты, чтобы легко и быстро загрузить новую цветовую схему одной строкой в терминале. 

Перед тем, как воспользоваться инструкцией ниже, нужно, чтобы в системе были установлены dconf инструменты (скрипты используют dconf-cli, который входит в этот пакет), если у вас они не установлены, то выполните следующую команду в терминале:

sudo apt install dconf-tools

Список всех цветовых тем-схем для терминала находится по ссылке:

[https://github.com/Mayccoll/Gogh/blob/master/content/themes.md](https://github.com/Mayccoll/Gogh/blob/master/content/themes.md)

На этой странице есть скрины цветовых схем, можно выбрать понравившуюся и скопировать её команду загрузки и установки, а затем выполнить в терминале:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_196-512x463.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_196.png)

После чего в терминал будет добавлен новый профиль с именем выбранной темы - цветовой схемы.

Для немедленного применения нового профиля нажимаем правой кнопкой в терминале и в контекстном меню выбираем новый профиль:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_197.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_197.png)

Для того, чтобы новое окно терминала открывалось "в новом цвете", нужно зайти через меню (если панель меню не отображается, нужно через контекстное меню выбрать "показывать панель меню") - Правка - Параметры. Затем перейти на вкладку Профили и в пункте "Профиль, используемые при запуске нового терминала" выбрать нужный вам профиль:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_198.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_198.png)

## Обзор популярных цветовых схем для терминала из репозитория Gogh.

Хочу продемонстрировать наиболее приятные для чтения и набора текста цветовые схемы для терминала. _Это всё моё субъективное мнение, может не совпадать с вашим._

#### Monokai Dark

Это моя наиболее любимая цветовая схема. Выглядит так:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_199.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_199.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/monokai.dark_.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/monokai.dark_.png)

Для того, чтобы добавить её в систему, выполните следующую команду в терминале:

wget -O xt https://git.io/v5mPp && chmod +x xt && ./xt && rm xt

#### Elementary

Выглядит так:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_200.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_200.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/elementary.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/elementary.png)

Команда установки:

wget -O xt http://git.io/v3D8R && chmod +x xt && ./xt && rm xt

#### Dracula

Выглядит так:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_201.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_201.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/dracula.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/dracula.png)

Команда установки:

wget -O xt http://git.io/v3D8e && chmod +x xt && ./xt && rm xt

#### Srcery

Выглядит так:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_202.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_202.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/srcery.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/srcery.png)

Команда установки:

wget -O xt https://git.io/vbLa5 && chmod +x xt && ./xt && rm xt

Вот и всё!

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
