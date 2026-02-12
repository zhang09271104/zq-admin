module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        './.eslintrc-auto-import.json' // 自动导入的配置
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // Vue 规则
        // 关闭基础的未使用变量规则
        "no-unused-vars": "off",

        // 关闭 TypeScript 特有的未使用变量规则
        "@typescript-eslint/no-unused-vars": "off",
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always'
                }
            }
        ],

        // TypeScript 规则
        '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-unused-vars': [
        //     'error',
        //     {
        //         argsIgnorePattern: '^_',
        //         varsIgnorePattern: '^_'
        //     }
        // ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',

        // 其他规则
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': 'off',
        'prefer-const': 'error'
    }
}
