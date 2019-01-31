---
title: "Терминал Linux. Создание alias (псевдонима) в Ubuntu."
date: "2018-02-11"
---

Команда alias - это очень удобный инструмент для тех, кто часто работает в командной строке. В данной статье подробно и на примерах рассмотрим использование команды alias в операционной системе Linux.

_Комментирование приветствуется._

\[content\_block id=3642 title=yes title\_tag=h4\]

Команда alias используется для создания псевдонима команды или списку команд, то есть присваиваем им новые названия. Это нужно для того, чтобы избежать необходимости запоминать длинные и сложные команды. Таким образом, мы можем повысить скорость работы в терминале.

Если ввести команду alias в терминале, то получим список всех определенных псевдонимов в системе:

alias

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_154-e1518353077640.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_154.png)

## Создание алиаса (alias, псевдонима).

В общем виде создание alias выглядит следующим образом:

alias name=value
alias name='command'
alias name='command arg1 arg2'
alias name='/path/to/script'
alias name='/path/to/script.pl arg1'

То есть, пишем название псевдонима, ставим знак "=", затем указываем команду или список команд в кавычках с аргументами. Можем вместо консольных команд указать путь к скрипту с аргументами или без. Давайте рассмотрим на примерах.

Для того, чтобы полностью обновить систему, нам нужно ввести команды:

sudo apt update && sudo apt full-upgrade

Каждый раз писать это долго, можем создать псевдоним:

alias upd='sudo apt update && sudo apt full-upgrade'

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_156.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_156.png)

У данных алиасов (aliases) работает автодополнение по клавише TAB, как и у обычных команд.

Давайте переопределим команду ping, задав параметр, чтобы при её использовании была отправка только 4 пакетов:

alias ping='ping -c 4'

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_155.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_155.png)

## Как вызвать команду, которая была переопределена алисом (alias).

А что, если мы хотим использовать старую команду ping? Это тоже можно сделать, нужно ввести обратный слеш ''\\" перед командой:

\\ping ya.ru

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_157.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_157.png)

Кроме того, помимо обратного слеша есть и другие способы вызвать исходную команду: 

"ping"
'ping'
command ping

То есть, заключив в кавычки или указав перед командой ключевое слово "command".

## Удаление алиаса (alias) из системы.

Для удаления используется команда unalias и имя алиаса. В общем виде это выглядит:

unalias name

К примеру, я по ошибке добавил alias:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_158.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_158.png)

Исправим это:

unalias fupgrade

Получаем:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_159.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_159.png)

Кроме того, можно удалить все алиасы (aliases), для этого используется команда:

unalias -a

То есть, с параметром -a.

Получаем:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_160.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_160.png)

А теперь важно замечание. 

После закрытия терминала, все наши алиасы (aliases, псевдонимы) удаляются, кроме системных. То есть, данные алиасы существуют только в рамках текущей терминальной сессии.

Если добавили alias в одной вкладке (окна) терминала:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_162.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_162.png)

На другой вкладке (в другой сессии терминала) система ничего не знает об этом алиасе:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_163.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_163.png)

Но это можно решить созданием постоянных алиасов.

## Создание постоянных алиасов (aliases, псевдонимов) в Ubuntu.

Зайду издалека, в домашнем каталоге пользователя есть файл ~/.bashrc. Этот файл применяется в системе, когда происходит авторизация данного пользователя. То есть, наш вход в систему. В данном файле есть строчки:

\# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash\_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if \[ -f ~/.bash\_aliases \]; then
    . ~/.bash\_aliases
fi

Это значит, что если файл ~/.bash\_aliases существует, то он применяется в системе. Мы создадим этот файл и будем записывать в него список наших алиасов, чтобы они были доступны постоянно. Но в отличии от Ubuntu, к примеру, в Linux Mint данная запись может отсутствовать, поэтому добавьте эти строчки в свой ~/.bashrc в конце файла.

Для того, чтобы систему не перезапускать и изменения этого файла применились, то выполняем команду:

. ~/.bashrc

С этим разобрались. Давайте создадим файл ~/bash\_aliases . Его можно создать в файловом менеджере, права суперпользователя не требуются. Либо вводим в терминале:

gedit  ~/.bash\_aliases

В этот файл вставляем список алиасов, которые считаем нужными:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_166.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_166.png)

Чтобы этот файл со списком применился в систему, выполняем:

. ~/.bashrc

Если всё сделали правильно, то теперь данные алиасы будут доступны в любом окне  терминала текущего пользователя. А также после перезагрузки будут доступны.

P.S.

В данной статье было подробно создание alias в Ubuntu. Если пользуетесь этим удобным инструментом, можете поделиться в комментариях своим набором алиасов.  

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
