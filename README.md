![awb-pw](https://repository-images.githubusercontent.com/215135694/ad660480-1c5a-11ea-8d77-cc2af6d21782)


## Description
This project is the source code of my personal website

## Table of contents
* [How to install](#howtoinstall)
* [Getting started](#gettingstarted)
* [Run linter](#runlinter)
* [Run tests](#runtests)
* [Setup pre-commit](#precommit)

<a name="howtoinstall"></a>
## How to install
You need to clone repository and go to the project folder.
```bash
git clone git@github.com:awibox/awb-pw.git ProjectName
cd ProjectName
```
Then to install required dependencies.
```bash
yarn install
```

<a name="gettingstarted"></a>
## Getting started
To launch project you need to execute following command:
```bash
yarn start
```
Open in browser: [http://localhost:8888](http://localhost:8888) <br/>
You can change the port in the [webpack.config.js](webpack.config.js#L141)

<a name="runlinter"></a>
## ESlint
For code checking we use ESLint with airbnb configuration.
To run linter you need to execute command:

```bash
yarn lint
```

If you need to launch automatic mistakes fixing you need to execute following command:

```bash
yarn fix
```

<a name="runtests"></a>
## Jest tests
Jest with Enzyme is used for testing.

```bash
yarn test
```
<a name="precommit"></a>
## Setup pre-commit
You can set up git hook (pre-commit). In this case linter will be launched for necessary files before commit.

```bash
yarn setup
```
