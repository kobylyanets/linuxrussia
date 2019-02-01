---
title: "Обновление установочных сборок Ubuntu 17.10.1"
date: "2018-02-03"
---

Компания Canonical перевыпустила Ubuntu 17.10, которая не повреждает прошивки ноутбуков. А также в этой статье будет описано решение, которое предлагают разработчики Canonical.

Компания Canonical опубликовала обновлённый набор iso-образов Ubuntu 17.10.1, который заменил собой изначально предлагаемые сборки Ubuntu 17.10, которые были отозваны из-за проблем в пакете с ядром Linux, приводящих к повреждению прошивки некоторых моделей ноутбуков Lenovo, Acer, Dell, HP и Toshiba. Обновления подготовлены для Ubuntu Desktop, Ubuntu Server, Lubuntu, Ubuntu Budgie, Kubuntu, Ubuntu Kylin, Ubuntu MATE и Xubuntu.

Теперь ссылка на скачивание снова добавлена на офф. сайте:

[https://www.ubuntu.com/download/desktop](https://www.ubuntu.com/download/desktop)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_142-512x361.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_142.png)

Если у вас уже установлена Ubuntu 17.10. То скачивать новый iso и переставлять систему не нужно. Обновление происходит штатным образом через графический интерфейс или с помощью команд в терминале:

sudo apt update && sudo apt full-upgrade

В предыдущей статье-новости я описывал подробно об этой проблеме: [Ubuntu 17.10 повреждает BIOS на некоторых ноутбуках Lenovo, Acer, Dell и Toshiba.](http://www.linuxrussia.com/ubuntu-17-10-corrupt-bios.html "Ubuntu 17.10 повреждает BIOS на некоторых ноутбуках Lenovo, Acer, Dell и Toshiba.")

Если кратко, то недавно произошел неприятный инцидент с Ubuntu 17.10. Обновление ядра linux на Ubuntu 17.10, которое включило драйверы intel-spi -\*, сделало INSYDE BIOS непригодным для использования. В результате, настройки BIOS не сохраняются, загрузка с USB накопителя невозможна, а EFI загрузочные записи только читаются и не перезаписываются.

Новый релиз Ubuntu 17.10.1 теперь не ломает прошивки ноутбуков.

Кроме того, самая актуальная информация о данном баге находится по следующему адресу:

[https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1734147](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1734147)

Там же и предлагается решение для тех ноутбуков, которые пострадали. Я его продублирую в данной статье. 

**Список ноутбуков, у которых возникла данная проблема:**

Lenovo B40-70  
Lenovo B50-70  
Lenovo B50-80  
Lenovo Flex-3  
Lenovo Flex-10  
Lenovo G40-30  
Lenovo G50-30  
Lenovo G50-70  
Lenovo G50-80  
Lenovo S20-30  
Lenovo U31-70  
Lenovo Y50-70  
Lenovo Y70-70  
Lenovo Yoga Thinkpad (20C0)  
Lenovo Yoga 2 11" - 20332  
Lenovo Yoga 3 11"  
Lenovo Z50-70  
Lenovo Z51-70  
Lenovo ideapad 100-15IBY

Acer Aspire E5-771G  
Acer Aspire ES1-111M-C1LE (fixed following your new instruction (thank you))  
Acer TravelMate B113  
Acer Swift SF314-52 (Fixed by 4.14.9)  
Toshiba Satellite S55T-B5233  
Toshiba Satellite L50-B-1R7  
Toshiba Satellite S50-B-13G  
Toshiba Satellite L70-A-13M  
Dell Inspiron 15-3531  
Mediacom Smartbook 14 Ultra M-SB14UC (fixed with official fix)  
Acer Aspire E3-111-C0UM  
HP 14-r012la

Список прошивок:

/\* ESMT \*/  
f25l32pa, 0x8c2016  
f25l32qa, 0x8c4116  
f25l64qa, 0x8c4117  
/\* GigaDevice \*/  
gd25q16, 0xc84015  
gd25q32, 0xc84016  
gd25lq32, 0xc86016  
gd25q64, 0xc84017  
gd25lq64c, 0xc86017  
gd25q128, 0xc84018  
gd25q256, 0xc84019  
/\* Winbond \*/  
w25q16dw, 0xef6015  
w25q32dw, 0xef6016  
w25q64dw, 0xef6017  
w25q128fw, 0xef6018

## Решение проблемы.

Это решение предлагается разработчиками Ubuntu.

1\. Загрузиться в Ubuntu.

2\. Загрузить и установите следующую версию ядра Linux:  
[http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+20170103+1\_amd64.deb  
](http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic_4.15.0-041500rc6.201712312330+20170103+1_amd64.deb)Это можно сделать следующей командой в терминале:

cd /tmp/ && wget http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+20170103+1\_amd64.deb && sudo dpkg -i linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+20170103+1\_amd64.deb

3\. Убедитесь, что ядро установилось без ошибок. После того, как установка прошла перегружайтесь. 

4. Нужно с помощью Grub меню выбрать "Дополнительны параметры для Ubuntu" ("Advanced options") и выбрать новое установленное ядро Linux. Дождаться пока система загрузится полностью.  
  
_Если на компьютере установлена только одна ОС, то Grub меню не показывается, а нам потребуется загрузиться с новой версии ядра. Доступ к нему можно получить путём нажатия "Esc" при старте системы._ 

5\. Перегружаемся и идем в BIOS настройки,  проверяем, что теперь настройки сохраняются.

6\. Если BIOS не восстановился, то перегружаемся в новое ядро, затем опять перегружаемся в новое ядро без захода в BIOS. И после двойного захода в систему с новым ядром Linux, заходим в BIOS и проверяем, что всё починилось. Я не шучу, они реально так пишут: _"In case your BIOS is not recovered, reboot to the new kernel, then reboot \*once again\* to the new kernel, do not enter BIOS settings before the reboot. After the second reboot, check BIOS."_

7.  Если BIOS ошибка осталась, то пробуем установку следующего ядра Linux:  
[http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+clear+debug\_amd64.deb](http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic_4.15.0-041500rc6.201712312330+clear+debug_amd64.deb)  
Это можно сделать следующей командой в терминале:

cd /tmp/ && wget http://people.canonical.com/~ypwong/lp1734147/linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+clear+debug\_amd64.deb && sudo dpkg -i linux-image-4.15.0-041500rc6-generic\_4.15.0-041500rc6.201712312330+clear+debug\_amd64.deb

И повторяем шаги с 3 по 5.

После того, как BIOS был исправлен, это ядро вам больше не требуется, следовательно, его можно удалить, выполнив следующую команду в терминале:

sudo dpkg -r linux-image-4.15.0-041500rc6-generic

## Заключение.

Советовал бы я ставить Ubuntu 17.10.1? Однозначно нет, хоть там и появился очень симпатичный "подправленный" Gnome, который мне очень понравился. Лучше подождать LTS (с долгосрочной поддержкой) релиз Ubuntu 18.04, выход которого будет в апреле 2018 года. Ждать не так уж и долго.

