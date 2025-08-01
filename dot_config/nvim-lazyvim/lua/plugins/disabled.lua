return {
  -- disable trouble
  -- { "folke/trouble.nvim", enabled = false },
  -- { "nvim-treesitter/nvim-treesitter", enabled = false },
  -- disable nvim-cmp --------------------------
    -- { "hrsh7th/nvim-cmp", enabled = false },
  {
    "hrsh7th/nvim-cmp",
    opts = function()
      require("cmp").setup({
        completion = { autocomplete = false }
      })
    end,
  },
  ---------------
}
