# Projeto Spotify Clone em React-Native - Com Navigation (Routes, Reactotron, Redux)

#Tela Inicial do Player
![Lista de Repositórios](/images/SpotifyClone-List.png)

#Tela Lista de Álbuns
![Lista de Repositórios](/images/SpotifyClone-List-1.png)

#Tela Lista de Álbuns
![Lista de Repositórios](/images/SpotifyClone-List-2.png)

#Tela com a pesquisa por músicas
![Lista de Repositórios](/images/SpotifyClone-Search.png)

# Criando um projeto em React-native

```sh
$ react-native init PlayerRN
```

# Executando o projeto no iOS

```sh
$ react-native run-ios
```

# Executando o projeto no Android

```sh
$ react-native run-android
```

# Em caso de problemas, executar o comando para resetar o cache

```sh
$ react-native start --reset-cache
```

```sh
$ yarn add axios color prop-types react-navigation react-navigation-redux-helpers react-redux  reactotron-react-native reactotron-redux reactotron-redux-saga redux redux-saga
```

#Developer Dependence

```sh
$ yarn add babel-eslint babel-plugin-module-resolver  babel-preset-react-native  eslint eslint-config-airbnb eslint-import-resolver-babel-module  eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native  -Dev
```

# 1 - Criar/Ajustar o arquivo ESLint

.eslintrc.json

```js
{
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react-native/all"],
  "plugins": ["react-native", "jsx-a11y", "import"],
  "env": {
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extesion": [
      "error",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off"
  },
  "globals": {
    "__DEV__": true
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
}

```

# 2 - Configurar o editorconfig (existe um plugin do VSCode)

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

# 3 - Configurar o arquivo .babelrc (Root import)

```js
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "src"
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "babel-plugin-root-import",
        {
          "rootPathSuffix": "src"
        }
      ]
    }
  }
}

```

# 3 - Configurar o Reactotron

3.1 - Criar o arquivo: ReactotronConfig.js, dentro da pasta /src/config

# Adicional: Settings do Visual code

```js
{
  //Define o tema do VSCode
  "workbench.colorTheme": "Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize": 14,
  "editor.lineHeight": 20,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,

  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 1,

  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true,

  "emmet.includeLanguages": {
    "nunjucks": "html"
  },
  "git.path": "/usr/bin/git",
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.format.enable": false,
  "git.autofetch": true,
  "colorize.ignore_search_variables_info": true
}

```

### Error:

Failed to load bundle(http://localhost:8081/index.bundle?
platform=ios&dev=true&minify=false)
with error:(albums/index.js:
Cannot read property 'bindings' of null(null))

# Solução: yarn add babel-preset-react-native@5.0.0 --dev

# Instalando o Redux e o React-Redux

```sh
$ yarn add redux react-redux
```

### 1 - Criar uma pasta store, dentro do src>store

### 2 - Criar o arquivo index.js

# Instalar o babel-plugin-module-resolver

```sh
$ yarn add babel-plugin-module-resolver
```

### Quando acontecer o erro de No Bundle URL

```sh
$ rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios --simulator "iPhone XS Max"
```

# Instalar o babel-plugin-module-resolver

```sh
$ yarn add prop-types
```

# Instalar o plugin do Reactotron para o Redux

```sh
$ yarn add reactotron-redux
```

## Instalando as Rotas do React-Native:

```sh
$ yarn add react-navigation
```

```sh
$ yarn add react-native-gesture-handler
```

## Instalando as Rotas do React-Native:

```sh
$ yarn add react-navigation
```

```sh
$ yarn add react-native-gesture-handler
```

```sh
$ react-native link react-native-gesture-handler
```

# Plugin que trabalha com cores

```sh
$ yarn add color
```

# Plugin para trabalhar com a Barra (antigo Botão Home do iPhone)

```sh
$ yarn add react-native-iphone-x-helper
```

# Testar a API, rodar o JSON-Server (Global)

```sh
$ yarn add json-server --global
```

# Instalando a dependência para o Estado do Redux imutável

## Ou seja, para alterar um objeto, eu preciso fazer uma cópia dele (...state)

### Se por exemplo, eu definir assim, o error, ele ficará nulo.

#### (Não pode fazer a alterações no state)

#### Se utilizar o 'use strict' - vai mostrar o erro de TypeError: Attempted to assign to readonly property.

```js
    case Types.GET_REQUEST:
      state.error = 'ERROR';  // O resultado será null e não o que foi atribuido.
      return { ...state, loading: true };
```

```sh
$ yarn add seamless-immutable
```

---

# Instalando a Biblioteca lodash - Serve para que o ele não busque a cada letra digitada e sim, quando o usuário parar de digitar por alguns milisegundos.

```sh
$ yarn add lodash
```

# Instalar Biblioteca para reproduzir Som

```sh
$ yarn add diego3g/react-native-sound
```

```sh
$ react-native link react-native-sound
```
