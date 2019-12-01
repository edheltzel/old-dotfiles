# Setting up the Path
set -e fish_user_paths
set -U fish_user_paths "/usr/local/sbin" $fish_user_paths #homebrew
status --is-interactive; and source (rbenv init -|psub) #rbenv init fish

source ~/.config/fish/_importSources.fish

# Start Starship
eval (starship init fish)

# Vim mode
#fish_vi_key_bindings
