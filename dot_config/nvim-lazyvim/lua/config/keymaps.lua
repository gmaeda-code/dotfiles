-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
-----------------------------------

vim.keymap.set("n", "yl", "^y$", { desc = "copy one line" })
vim.keymap.set("n", "dl", "^d$", { desc = "cut one line" })
vim.keymap.set("n", "ya", "gg<S-v>G\"+y", { desc = "copy all line" })
vim.keymap.set("n", "<leader>oo", ":!st okular %:p & <CR>", { desc = "open current md in okular" })
-- -- goyo setting
-- lvim.keys.normal_mode["<leader>ug"] = ":Goyo<CR>"
-- lvim.keys.normal_mode["<leader>ul"] = ":Limelight!!<CR>"
vim.keymap.set("v", "<C-c>", "g<C-g>", { desc = "count selected characters" })
vim.keymap.set("n", ">", ">>", { desc = "make indend more easily" })
vim.keymap.set("n", "<", "<<", { desc = "make indend more easily" })
vim.keymap.set("v", ">", ">><ESC>", { desc = "make indend more easily" })
vim.keymap.set("v", "<", "<<<ESC>", { desc = "make indend more easily" })
vim.keymap.set("v", "gc", "c<!--<c-r>\"--><ESC>", { desc = "comment out selected area(markdown)" })
-- previous/next buffer 
-- lvim.keys.normal_mode["<S-k>"] = ":bn<CR>"
-- lvim.keys.normal_mode["<S-j>"] = ":bN<CR>"
-- -- lvim.keys.normal_mode["<S-l>"] = ":bn<CR>"
-- -- lvim.keys.normal_mode["<S-h>"] = ":bN<CR>"
