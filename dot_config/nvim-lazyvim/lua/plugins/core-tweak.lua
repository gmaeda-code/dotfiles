return{
    { "nvim-treesitter/nvim-treesitter", 
        opts = {
            indent = { enable = false }, 
            -- because treesitter indentation doesn't work at least in markdown file
        },
    },
    {
        --スニペットを無効化､markdownでは不要
        "garymjr/nvim-snippets",
        opts = {
            friendly_snippets = false,
        },
        dependencies = { "rafamadriz/friendly-snippets" },
    },
}
