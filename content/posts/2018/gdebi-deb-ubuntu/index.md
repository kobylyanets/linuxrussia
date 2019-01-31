---
title: "Gdebi — программа для установки deb пакетов в Ubuntu."
date: "2018-03-04"
---

В этой статье пойдёт речь об установке Gdebi в Ubuntu и как сделать Gdebi программой по умолчанию для установки deb пакетов в Ubuntu.  

В Ubuntu по умолчанию для установки deb пакетов используется Центр приложений Ubuntu. Двойной клик по deb пакету и откроется Центр приложений:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_214-512x444.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_214.png)

Но иногда, вместо открытия окна установки программы, в Центре приложений Ubuntu можно увидеть окно ожидания:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_213-512x453.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_213.png)

В терминале используется пакетный менеджер dpkg (_debian пакетный менеджер_). В общем виде команда установки приложения из deb пакета выглядит следующим образом:

sudo dpkg -i package.deb

**В Ubuntu есть и альтернатива для установки deb пакетов. **

## Обзор программы Gdebi в Ubuntu.

**Gdebi** — программа для установки deb пакетов. Преимущество её в том, что она может устанавливать deb пакеты, используя автоматическое разрешение зависимостей (автоматически загружает и устанавливает необходимые пакеты). И ещё не нужно запускать Центр приложений Ubuntu для установки загруженного deb пакета в графическом режиме, а для этой цели используется легковесный конкретный инструмент.

В графическом режиме в файловом менеджере через контекстное меню открываем выбранный deb пакет с помощью Gdebi:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_215.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_215.png)

Откроется окно программы Gdebi, вот так оно выглядит:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_216.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_216.png)

Можно открыть deb пакет и через меню программы Gdebi "Файл - Открыть":

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_218.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_218.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_217.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_217.png)

Программу gdebi можно использовать в режиме командной строки:

sudo gdebi package.deb

## Установка программы Gdebi в Ubuntu.

Для установки программы Gdebi в Ubuntu откройте терминал и выполните следующую команду:

sudo apt install gdebi

Есть версия Gdebi для KDE окружения (Kubuntu), для её установки выполните следующую команду в терминале:

sudo apt install gdebi-kde

## Решение проблем с программой Gdebi.

Установив Gdebi, у меня она отсутствовала в списке рекомендуемых приложений:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_219.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_219.png)

Если у вас такая же проблема, то нужно отредактировать ярлык приложения, для этого выполните в терминале следующую команду:

sudo gedit /usr/share/applications/gdebi.desktop

_Если текстовый редактор gedit у вас отсутствует в системе, используйте любой другой, к примеру, консольный nano._

В открывшемся файле в строке Exec нужно в конце добавить %f (_параметр открытия файлов_), должно получиться так:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_220.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_220.png)

Сохраняем файл. В результате, Gdebi появилась в списке рекомендуемых приложений:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_221.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_221.png)

## Сделать Gdebi программой по умолчанию для установки deb пакетов в Ubuntu.

Чтобы при двойном клике на deb пакете в файловом менеджере автоматически открывалась программа Gdebi, выполните следующие действия.

Кликните правой кнопкой мыши по любому deb пакету в системе и выберите из контекстного меню "Свойства":

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_222.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_222.png)

Перейдите на вкладку "Открыть с помощью", выберите Gdebi из списка приложений, затем нажмите "Установить по умолчанию":

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_223.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_223.png)

Всё, теперь программа Gdebi установлена по умолчанию для установки deb пакетов в Ubuntu.

## Удаление программы Gdebi в Ubuntu.

Для удаления программы Gdebi из Ubuntu откройте терминал и выполните следующую команду:

sudo apt remove gdebi

Если ставили KDE версию, то для её удаления выполните следующую команду в терминале:

sudo apt remove gdebi-kde

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
