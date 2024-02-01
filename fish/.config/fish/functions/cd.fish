function cd --description 'Utility for expanding abbreviations'
    if count $argv >/dev/null
        # prevents recurse infinitely by using built-in cd
        builtin cd "$argv"; and eza -lagh --sort name --git --icons --group-directories-first
    else
        builtin cd ~; and eza -lagh --sort name --git --icons --group-directories-first
    end
end