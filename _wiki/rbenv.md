# Rbenv

```bash
brew install rbenv
rbenv init
# change terminal window
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash

#upgrade
brew upgrade rbenv ruby-build

#ruby versions list
rbenv install -l
```
https://github.com/rbenv/rbenv#how-rbenv-hooks-into-your-shell

`rbenv prefix VERSION` #отображает путь к версии руби
`rbenv versions` отображает все установленные версии
версии устанавливаются в папку `~/.rbenv/versions/`

## Установка версии среды
* локальная - `rbenv local VERSION`, помещает .ruby-version с именем версии в папку из которой (или из вложенных) будет запускаться руби 
* переменная RBENV_VERSION
* глобальная - `rbenv global 1.8.7-p352` (запишет в файл `~/.rbenv/version` )

приоритеты:
- RBENV_VERSION
- .ruby-version в папке и родителях папки, где лежит скрипт
- .ruby-version в папке и родителях папки, в которой запускается rbenv
- глобальная версия (если не установлена, то берется системная)

`system` - системная версия (берется из PATH)

`rbenv shell jruby-1.7.1` - запуск подоболочки с установленной в ней версией руби
`rbenv rehash` - обновляет доступный из шелла список стартовых скриптов руби и гемов, установленных в среде
`rbenv which <shim name>` - отображает путь к шиму
`rbenv whence rackup` - отображает версии руби, в которых доступна команда (в данном случае rackup)

## Uninstall
```
 rm -rf `rbenv root`
 brew uninstall rbenv
 ```