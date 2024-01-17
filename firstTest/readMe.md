<!-- How always to start your test project -->

#Jest project

## 1. Create folder for the project

## 2. Create package.json

```shell
npm init -y
```

or

```shell
npm init
```

and answer the questions

## 3. Install jest as devDependencies

```shell
npm install jest --save-dev
```

## 4. Modify package.json test-script

```json
 "scripts": {
    "test": "jest"
  }
```

## 5. Create a test folder named `__tests__`

<!-- double undersore -->

## 6. Write tests into `__tests__` folder

test filename should have test or spec in the name

fileNameToBeTested.test.js

fileNameToBeTested.spec.js

for example, to test file abc.js ---> to test it you would use abc.test.js

## 7. Run the test

```shell
npm test
```

<!-- npm test OR npm npm run test -->

## 7b. To run only one test file

````shell
npm test --testFile fileNameToBeTested.test.js
```
````
