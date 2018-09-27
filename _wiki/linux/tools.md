---
category: linux
keywords: bash, tools
---
### Shellcheck
<https://github.com/koalaman/shellcheck>


Static linter for shell scripts
* install (Linter for Atom)[https://github.com/AtomLinter/linter-shellcheck] (search for `Base Linter` in Atom Package Manager)
* install shellcheck `brew install shellcheck`


### Screen

Commands  

| screen -S {name} [cmd]| создать именованную сессию [ и запустить команду в нем ]|
| screen -ls | список сессий  |
| screen -x {name} | подключиться к сессии |

Ctrl-A +  

| d | отключиться от сессии |
| k | уничтожить сессию |
| с | создать новых экран |
| A | дать имя новому экрану |
| " | открыть список экранов |
| w | показать список экранов |
| S | разделить экран терминала пополам |
| Tab | перейти на другую часть экрана |
| n/p | перейти на следующий/предыдущий экран |
| X | закрыть текущую часть экрана |

### Tmux

Commands

| tmux new -s {session name} | создать именованую сессию |
| tmux attach -t {session name} | подключиться к сессии (если без имени, то к последней) |
| tmux ls | список сессий |
| tmux kill-session -t {session name} | kills the specified session |
| tmux kill-server | kills all sessions |

Ctrl+B +

| c | new window |
|  direction key | switch window to the selected direction |
| w | windows list |
| x | close window |
| % / " | split vertically / horizontally |
| PgUp / q | scrolling mode on / off |  


