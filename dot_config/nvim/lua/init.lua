

local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

--require("lazy").setup(plugins, opts)

require("lazy").setup({
  "folke/which-key.nvim",
  { "folke/neoconf.nvim", cmd = "Neoconf" },
  "folke/neodev.nvim",
  "edluffy/hologram.nvim",
  "vimwiki/vimwiki",
--    {
--    'mikesmithgh/kitty-scrollback.nvim',
--    enabled = true,
--    lazy = true,
--    cmd = { 'KittyScrollbackGenerateKittens', 'KittyScrollbackCheckHealth' },
--    event = { 'User KittyScrollbackLaunch' },
--    -- version = '*', -- latest stable version, may have breaking changes if major version changed
--    -- version = '^4.0.0', -- pin major version, include fixes and features that do not have breaking changes
--    config = function()
--        require('kitty-scrollback').setup()
--    end,
--    },
})
require('hologram').setup{
    auto_display = true -- WIP automatic markdown image display, may be prone to breaking
}
