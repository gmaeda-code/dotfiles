-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

-- Disable built-in spellchecking for Markdown
vim.api.nvim_del_augroup_by_name("lazyvim_wrap_spell")
vim.api.nvim_create_autocmd("FileType", {
  group = vim.api.nvim_create_augroup("lazyvim_user_markdown", { clear = true }),
  pattern = { "gitcommit", "markdown" },
  callback = function()
    vim.opt_local.wrap = true
  end,
})

-- save clipboard image | https://github.com/img-paste-devs/img-paste.vim
vim.cmd(
'autocmd FileType markdown nmap <buffer><silent> <leader>i :call mdip#MarkdownClipboardImage()<CR>'
-- there are some defaults for image directory and image name, you can change them
-- let g:mdip_imgdir = 'img'
-- let g:mdip_imgname = 'image'
)
-- change image file path / 
--'let g:mdip_imgdir_absolute = "/home/mg/hugo/kamaya-documentation/static/img"'
-- let g:mdip_imgdir_intext = /relative/path/to/imgdir
--vim.g.mdip_imgdir_absolute = '/home/mg/hugo/kamaya-documentation/static/img'
--vim.g.mdip_imgdir_intext = '/img'
-- ---------------

-- disabling mini-pair -----------------------
-- specific character
-- vim.api.nvim_create_autocmd('FileType', {
--   pattern = { 'gitcommit', 'markdown' },
--   callback = function(event) vim.keymap.set('i', '(', '(', { buffer = event.buf }) end,
-- })
-- generally
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "gitcommit", "markdown" },
  callback = function()
    vim.b.minipairs_disable = true
  end,
})
-----------------------------------------------

