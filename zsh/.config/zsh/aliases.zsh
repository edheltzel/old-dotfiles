#!/bin/sh
# Workflow aliases
alias reload='exec zsh'

# Colorize grep output (good for log files)
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

# Confirm before overwriting
alias cp="cp -Ri"
alias mv='mv -i'
alias rm='rm -i'

alias mkd='mkdir && cd' #create a directory and move into it
alias md='mkdir -p'     #create parent directories as needed
alias rd='rmdir'        #remove empty directories

# ls aliases
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias l='eza --long --all --header --git --icons --no-permissions --no-time --no-user --no-filesize --group-directories-first $*'
alias ll='eeza -lagh --git --icons --group-directories-first $*'
alias la='eza -lagh --git --icons --group-directories-first --sort modified $*'
alias cll='clear; and eza --long --all --header --git --icons --no-permissions --no-time --no-user --no-filesize --group-directories-first $*'

# Tree view
alias tree='eza -Ta --icons --ignore-glob="node_modules|.git|.vscode|.DS_Store" $*'
alias ltd='eza -TaD --icons --ignore-glob="node_modules|.git|.vscode|.DS_Store" $*'

# Projects shortcuts/aliases and actions
alias projects='cd ~/Developer && l'
alias dev='cd ~/Developer && l'
alias work='cd ~/Developer/work && l'
alias sites='cd ~/Sites && l'
alias dots='cd ~/.dotfiles && l'
alias cuts='cd ~/.dotfiles && eval $EDITOR .'
alias o='open'
alias oo='open .'
alias oa='open -a /Applications/$*'
alias del='trash $*'
alias sdel='sudo rm -rf $*'

alias local='cd ~/.local && l'
alias config='cd ~/.config && l'

# Editors/Utitlities
alias upp='topgrade'
# alias code='code-insiders'
alias vim='nvim'
alias btm='btm --battery --fahrenheit'
alias top='btm'
alias bottom='btm'
alias serve='miniserve'
alias du='dua'
alias zip='ouch compress'
alias unzip='ouch decompress'
alias listzip='ouch list'
alias lzip='ouch list'
alias wget='wget -c'
alias mux='zellij'

# Network shortcuts/alises
alias ip="dig +short myip.opendns.com @resolver1.opendns.com" # dumps [YOUR PUBLIC IP] [URL IP]
alias ipl="ipconfig getifaddr en0"                            #internal network IP
alias ips="ifconfig -a | grep -o 'inet6\? \(\([0-9]\+\.[0-9]\+\.[0-9]\+\.[0-9]\+\)\|[a-fA-F0-9:]\+\)' | sed -e 's/inet6* //'"
alias sniff="sudo ngrep -d 'en1' -t '^(GET|POST) ' 'tcp and port 80'"
alias httpdump='sudo tcpdump -i en1 -n -s 0 -w - | grep -a -o -E \"Host\: .*|GET \/.*\"'
alias whois='grc whois'

# SSH and localhost
alias hostfile='eval sudo $EDITOR /etc/hosts'
alias editssh='eval $EDITOR ~/.ssh'
alias lssh='grep -w -i Host ~/.ssh/config | sed s/Host//'

# Docker aliases
alias dk='docker'
alias dc='docker-compose'

# function tldrf --description 'tldr search and preview with fzf'
alias tldrf='tldr --list | fzf --preview "tldr {1} --color=always" --preview-window=right,70% | xargs tldr'

#### Language Support ####
# Node - Pnpm
alias pn='pnpm'
alias px='pnpm dlx'

# PHP - Laravel
alias art='php artisan'
alias tinker='php artisan tinker'
alias mfs='php artisan migrate:fresh --seed'
alias phpunit='vendor/bin/phpunit'
alias pest='vendor/bin/pest'
alias vapor='vendor/bin/vapor'
