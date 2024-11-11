return {
  "nvim-neo-tree/neo-tree.nvim",
  opts = {
    window = {
      position = "right",
      width = 30,
      mappings = {
        ["Y"] = "none",
      },
    },
    filesystem = {
      filtered_items = {
        visiable = true,
        hide_hidden = false,
        hide_dotfiles = false,
        hide_gitignored = true,
        hide_by_name = {
          ".git",
          "node_modules",
        },
        never_show = {
          ".DS_Store",
        },
        always_show = {
          ".gitignored",
          ".env",
        },
      },
    },
  },
}
