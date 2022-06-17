# Setting up the Path
set -e fish_user_paths

# Custom sourcing of colors, exports, grc, multi-function fish files
source ~/.config/fish/conf.d/__exports.fish



## ADD to PATH ##
# Homebrew generated by `brew shellenv`
set -gx HOMEBREW_PREFIX "/opt/homebrew";
set -gx HOMEBREW_CELLAR "/opt/homebrew/Cellar";
set -gx HOMEBREW_REPOSITORY "/opt/homebrew";
set -q PATH; or set PATH ''; set -gx PATH "/opt/homebrew/bin" "/opt/homebrew/sbin" $PATH;
set -q MANPATH; or set MANPATH ''; set -gx MANPATH "/opt/homebrew/share/man" $MANPATH;
set -q INFOPATH; or set INFOPATH ''; set -gx INFOPATH "/opt/homebrew/share/info" $INFOPATH;

#set -U fish_user_paths "/usr/local/sbin" $fish_user_paths #homebrew - Intel
set -g fish_user_paths "/opt/homebrew/bin" $fish_user_paths # homebrew ARM

# openssl to path
set -g fish_user_paths "/opt/homebrew/opt/openssl@1.1/bin" $fish_user_paths

# Homebrew Ruby - rbenv
status --is-interactive; and source (rbenv init -|psub)
set -g fish_user_paths $HOME/.gem/ruby/3.0.2/bin $fish_user_paths

# Homebrew make - gmake - MacOS ships with v3.81
set -g fish_user_paths "/opt/homebrew/opt/make/libexec/gnubin" $fish_user_paths

# GOLANG configurations
set -x GOPATH $HOME/.go
# add the go bin path to be able to execute our programs
set -x PATH $PATH $GOPATH/bin

# Rust
set -g fish_user_paths $HOME/.cargo/bin $fish_user_paths

# NodeJS - PNPM
set -gx PNPM_HOME "/Users/ed/Library/pnpm"
set -gx PATH "$PNPM_HOME" $PATH

# FZF and FD helpers for NeoVim
set -x FZF_DEFAULT_COMMAND "fd --type f"
set -x FZF_CTRL_T_COMMAND "$FZF_DEFAULT_COMMAND"

# The next line updates PATH for Netlify's Git Credential Helper.
test -f '/Users/ed/Library/Preferences/netlify/helper/path.fish.inc' && source '/Users/ed/Library/Preferences/netlify/helper/path.fish.inc'

# Start Starship Prompt
starship init fish | source

# set Visual Studio Code as default editor use code, code-insiders, subl or vim
set -x --global EDITOR code

#set primary volume for workstation
set -x --global VOL xxx
