---
title: "CPU-X - программа для просмотра информации о компьютере."
date: "2018-03-04"
---

В данной статье пойдёт речь о CPU-X, программе для просмотра информации об оборудовании компьютера и об используемой операционной системе. 

## Коротко о программе CPU-X для Ubuntu.

В Windows существуют отличные программы для просмотра информации о компьютере, такие как Aida64 (раньше Everest), CPU-Z. Так как CPU-Z существует только для Windows, то неудивительно, что в Linux стали появляться клоны по функционалу этой замечательной программы. И CPU-X - это альтернатива программы CPU-Z. Но, в отличие от многих других клонов, развивается и обновляется.

CPU-X используется для сбора информации об основных компонентов системы (устройств), таких как процессор(CPU), материнская плата, оперативная память, видеокарта, звук и т.д. Приложение позволяет через интерфейс с вкладками просмотреть информацию об аппаратном обеспечения компьютера и используемой операционной системе.

Вот так выглядит программа CPU-X в Ubuntu:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_203.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_203.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_204.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_204.png)

Если программа понравилась и хотите её опробовать, то приступим к установке.

## Установка CPU-X в Ubuntu.

Есть обычная версия программы CPU-X, которая устанавливается в систему, так и портативная версия. Выбирайте ту, что вам удобнее.

#### Установка CPU-X из репозитория.

На официальной страничке приложения на github: [https://github.com/X0rg/CPU-X/wiki](https://github.com/X0rg/CPU-X/wiki) предлагают ставить из репозитория [software.opensuse.org](https://software.opensuse.org/download.html?project=home%3AX0rg&package=cpu-x). Я оптимизировал консольные команды, чтобы версия Ubuntu подставлялась автоматически (_с помощью команды $(lsb\_release -rs)_).

Для установки CPU-X в Ubuntu выполните поочередно следующие команды в терминале:

1). Добавляем ключ репозитория CPU-X в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

wget -q -O- "https://download.opensuse.org/repositories/home:X0rg/xUbuntu\_$(lsb\_release -rs)/Release.key" | sudo apt-key add -

2). Добавляем репозиторий CPU-X в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/X0rg/xUbuntu\_$(lsb\_release -rs)/ /' > /etc/apt/sources.list.d/cpu-x.list"

3). Обновляем сведения о пакетах в репозиториях системы:

sudo apt update

4). Устанавливаем программу CPU-X:

sudo apt install cpu-x

Если не нравится по одной команде копировать и вставлять, то вот все эти 4 команды установки, объединенные в одну (_скопируйте полностью и выполните в терминале_):

wget -q -O- "https://download.opensuse.org/repositories/home:X0rg/xUbuntu\_$(lsb\_release -rs)/Release.key" | sudo apt-key add - && sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/X0rg/xUbuntu\_$(lsb\_release -rs)/ /' > /etc/apt/sources.list.d/cpu-x.list" && sudo apt update && sudo apt install cpu-x

В результате, будет установлена программа CPU-X, и она будет обновляться вместе с системой.

#### Установка CPU-X с помощью deb пакетов.

Этот способ хуже предыдущего, потому что репозиторий программы CPU-X не будет установлен в систему. Следовательно, обновляться она не будет вместе с обновлением системы.

На страничке релизов программы CPU-X по ссылке: [https://github.com/X0rg/CPU-X/releases](https://github.com/X0rg/CPU-X/releases) можно загрузить архив с deb пакетами приложения:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_205-512x364.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_205.png)

В архиве будут каталоги с deb пакетами, соответствующими версиям Ubuntu:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_206.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_206.png)

Разархивируйте в соответствии с версией вашей системы, затем перейдите в терминале в данный каталог. К примеру, это удобно сделать через файловый менеджер Nautilus:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_207.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_207.png)

После чего, выполните в терминале команду установки всех deb пакетов:

sudo dpkg -i \*.deb

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_208-512x340.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_208.png)

## Портативная версия CPU-X.

Кроме того, есть две портативной версии CPU-X - консольной и графической. Они также доступны для скачивания на странице релизов: [https://github.com/X0rg/CPU-X/releases](https://github.com/X0rg/CPU-X/releases).

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_209-512x444.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_209.png)

Все зависимости уже включены в архивы, просто разархивируйте куда-нибудь. Вам нужен только один файл из архива, либо .linux64, либо .linux32, то есть, в соответствии с архитектурой системы.

Запускаем через терминал:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_211.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_211.png)

Вот так выглядит консольная портативная версия CPU-X:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_212.png)](http://www.linuxrussia.com/wp-content/uploads/2018/03/linuxrussia_212.png)

Чтобы не запускать постоянно из терминала, можете сделать ярлык для запуска: [Как создать ярлык в Ubuntu.](http://www.linuxrussia.com/create-launcher-ubuntu.html) Графическая портативная программа выглядит аналогично той, что устанавливается в систему.

Вот и всё.

## Удаление программы CPU-X из Ubuntu.

Для удаления cpu-x из Ubuntu выполните следующую команду в терминале:

sudo apt remove cpu-x

Если добавляли репозиторий, то удалите его тоже:

sudo rm /etc/apt/sources.list.d/cpu-x.list

## P.S.

Есть задумка написать несколько статей о программах для просмотра информации о компьютере и системе. Пишите в комментариях, какие вы знаете и используете. 

