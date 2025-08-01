-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here
-- ----------------------------------
--
--

-- folding settings-----------
-- vim.cmd(
-- -- default fold closed
-- 'autocmd BufReadPost,FileReadPost * normal zR'
-- )
--vim.opt.foldmethod = "expr"
--vim.opt.foldenable = false                    -- Disable folding at startup.
-- vim.opt.fillchars = "fold: "
-- vim.opt.foldnestmax = 3
-- vim.opt.foldminlines = 1
-- vim.opt.foldlevel = 1
-- vim.opt.foldtext = [[substitute(getline(v:foldstart),'\\t',repeat('\ ',&tabstop),'g').'...'.trim(getline(v:foldend)) . ' (' . (v:foldend - v:foldstart + 1) . ' lines)']]
--
-- others -----------------------
--vim.opt.relativenumber = true -- relative line numbers
vim.opt.autoindent = true -- indent
vim.opt.smartindent = true 
vim.opt.shiftround = true            -- indents to next multiple of 'shiftwidth'.

-- tab indentation --------
vim.o.tabstop = 4 -- A TAB character looks like 4 spaces
vim.o.expandtab = true -- Pressing the TAB key will insert spaces instead of a TAB character
vim.o.softtabstop = 4 -- Number of spaces inserted instead of a TAB character
vim.o.shiftwidth = 4 -- Number of spaces inserted when indenting
---------------------
---
vim.opt.wrap = false --wrap
