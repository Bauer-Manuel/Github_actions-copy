
# github actions

- Choose a programming language/platform
- Provide a sample project
  - With _at least_ 1 automated test
- Configure github actions
  - So that it verifies _at least_ the test mentioned above
- For bonus points pack more features into your _github actions_

## Notes





### Test the given action

Add someFile.txt and someFile2.txt
commit them
On Github, in the actions tab, everything
works as expected.

### Vite-React Project

#### Project setup

I created a new Vite-React project using the ``$ npm create vite@latest
`` command. Then I proceeded to install all dependencies
that this project will require. The following exhibit of the
package.json file shows the installed dependencies:

./github_actions/package.json
```json
{
  "name": "github_actions",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage",
    "lint": "eslint \"**/*.{tsx,ts}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^18.11.9",
    "@types/react": "^18.0.25",
    "@types/react-dom": "^18.0.7",
    "@typescript-eslint/eslint-plugin": "^5.42.0",
    "@typescript-eslint/parser": "^5.42.0",
    "@vitejs/plugin-react": "^2.2.0",
    "eslint": "8.22.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-react": "^1.1.7",
    "eslint-config-standard-with-typescript": "^23.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.31.10",
    "eslint-plugin-unused-imports": "^2.0.0",
    "lint-staged": "^13.0.3",
    "prettier": "^2.7.1",
    "typescript": "^4.8.4",
    "vite": "^3.2.0",
    "vitest": "^0.24.5"
  }
}
```
The two most important dependencies are ``vitest`` and `eslint`
 vitest is the testing framework and eslint
a linter, that enforces coding style with a little help
from prettier.

#### Creating tests and the configurations

For the scope of this exercise, it is enough
to create two tests that only check for basic
functionality:

./src/tests/basic.test.ts
```ts
test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world'
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
```

As you can see, these tests are solely concerned
with testing build-in functionality.

Next up is configuring Eslint, which can be done
by editing the .eslintrc.json file, which came with
initializing eslint. The following exhibit shows
the eslint configuration I commonly use for react
projects:

.eslintrc.json
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "unused-imports",
        "prettier",
        "eslint-plugin-import"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "files": [
                "*.js",
                "*.jsx",
                "*.ts",
                "*.tsx"
            ]
        }
    ],
    "root": true,
    "rules": {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                "prefer": "no-type-imports"
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/method-signature-style": [
            "error",
            "method"
        ],
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-restricted-imports": [
            "error",
            {
                "patterns": [
                    "react-icons/all"
                ]
            }
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-style": [
            "error",
            "expression"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "no-console": "warn",
        "no-fallthrough": "off",
        "no-use-before-define": "off",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "next": [
                    "return",
                    "throw",
                    "case",
                    "default",
                    "while",
                    "for",
                    "class",
                    "break",
                    "continue",
                    "do",
                    "function",
                    "try"
                ],
                "prev": "*"
            },
            {
                "blankLine": "always",
                "next": "*",
                "prev": "if"
            }
        ],
        "prefer-destructuring": "error",
        "prettier/prettier": "error",
        "quotes": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                "args": "after-used",
                "argsIgnorePattern": "^_",
                "vars": "all",
                "varsIgnorePattern": "^_"
            }
        ],
        "react-hooks/exhaustive-deps": "off",
        "react/destructuring-assignment": [
            "error",
            "always"
        ],
        "react/display-name": "off",
        "react/jsx-curly-brace-presence": [
            "error",
            "never"
        ],
        "react/jsx-sort-props": [
            "error",
            {
                "callbacksLast": true,
                "ignoreCase": true,
                "noSortAlphabetically": false,
                "reservedFirst": [
                    "key",
                    "ref"
                ],
                "shorthandFirst": true
            }
        ],
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "warn",
        "react/self-closing-comp": "error"
    }
}
```

and the prettier configuration looks as follows:

.prettierrc
```json
{
  "semi": false,
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80
}
```

Even though this is quite a lot of configuration, testing
it is simple, since the rules are very strict.
Take for example the html inside of App.tsx, simply
adding some blank lines will trigger eslint.

./src/App.tsx before:
```html
<div>
  <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
    <img alt='Vite logo' className='logo' src='/vite.svg' />
  </a>
  <a href='https://reactjs.org' rel='noreferrer' target='_blank'>
    <img alt='React logo' className='logo react' src={reactLogo} />
  </a>
</div>
```

./src/App.tsx after:
```html
<div>
  <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
    <img alt='Vite logo' className='logo' src='/vite.svg' />
  </a>
  
  
  
  <a href='https://reactjs.org' rel='noreferrer' target='_blank'>
    <img alt='React logo' className='logo react' src={reactLogo} />
  </a>
</div>
```

This concludes to the IDE drawing some red squiggly lines
under the blank lines and showing the error message: ``ESLint: Delete `⏎⏎`(prettier/prettier)``
which is exactly what was expected.

#### Creating git actions

The workflow looks like this:

./github/workflows/node.yml
```yml
name: Build Project

on:
  push:
    branches: [ "**" ]
  pull_request:
    branches: [ "**" ]

jobs:
  build:

    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: github_actions

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
          cache-dependency-path: github_actions/package-lock.json
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
      - run: npm run lint
```

The `on` object contains the events that trigger this workflow, in our
case a push to any branch or a pull request to any branch.

The `jobs` object describes what jobs should be run. Jobs are
sequence of commands, grouped by a name. `build` is the only
job in this workflow.

`runs on` defines the environment in which the built version
will run.

The directory in which the job will run is specified
in the `defaults` object under `working-directory`.

The  `matrix` specifies variables, the action is executed
once for every value inside of the specified array.

The `steps` object specifies every command that will
be executed by this job.

`uses` calls a GitHub action while `run` executes a command.


`cache-dependency-path` simply defines the location of
the dependencies to use. It should only be required
when the dependencies are not in the root directory.

`run: npm ci` installs all dependencies 
`run: npm run bild --if-present` starts the build process provided by vite
`run: npm test` starts all tests
`run: npm run lint` executes ESLint for every file

#### Results

As you can see in the 'Actions' Tab in this Repo, I
pushed on commit `build: update package.json`, which worked just fine, since the tests
worked and everything was formatted the way ESLint specified it.

However, I also pushed a commit `this commit failed` that had too many blank lines
in the App.tsx file, which showed up as an ESLint error, furthermore
I changed one of the tests in such a way, that it fails.

./src/tests/basic.test.ts
```
test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(4)
})
```

Everything worked as expected, since the commit with working
tests and proper formatting passed while the other one failed.

