```json
{
    "$schema": "https://json.schemastore.org/prettierrc",
    "semi": true,
    "tabWidth": 4,
    "singleQuote": false,
    "printWidth": 100,
    "trailingComma": "none",
    "bracketSameLine": true,
    "endOfLine": "lf",
    "vueIndentScriptAndStyle": true
}

```

endOfLine: 'lf' will add a new line after end of a code line.


`eslint.config.js`

```json
rules:{
    "react/destructuring-assignment": ["error", "always", { ignoreClassFields: true }]
}
```
this rule will force destructuring state in render of a component.


# vscode settings for eslint and prettier
```json
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": "always",
        "source.fixAll.eslint": "always"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"]
}

```

- use of `this` in a class component
    ./src/components/Clock.jsx

```jsx
// convert it to arrow function to use this in this.setSate()
handleClick() {
    console.log("the button click");

    this.setState({
        locale: "en-US"
    });
}
```

# React conditional rendering, list and keys