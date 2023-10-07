# 1. Angular Overview

## 1. What is Angular?

- A UI framework built by Google
- A component-based framework for building scalable app
- Provided collection of libraries to cover features like Routing, Forms

## 2. Framework vs. Libraries

### 1. Framework

- Framework generally contains set of libraries
- You can extent the framework
- Some example are Angular, .net, Ionic, ExpressJS

### 2. Libraries

- Libraries generally perform specific operation
- You can combine multiple libs to build apps
- Some examples are React, MomentJS, Lodash

## 3. Features of Angular

- Template
- Data Binding
- Forms
- Routing
- Observables
- PWA

# 2. Typescript

## 1. Introduction to Typescript

- A strong typed Programming Language
- Created and maintained by Microsoft
- Superset of Javascript

## 2. Why Typescript

- Complies to JavaScript
- Keeps your code evergreen
- Supported by all major libraries and frameworks

## 3. Type Safety

- Keeps your application free from Type Errors
- Languages like C#, Java are example of Type Safe Language
- Keep your JS code free from undefined and null values
- In Typescript Types are stripped when your code is converted to JS

## 4. Installing and Creating First Typescript Program

- Install Node
- Use latest version of Nodejs
- `npm init` to create a package.json
- Install Typescript `npm i typescript`
- Initialize Typescript
- `tsc --init`

# 3. Single Page Application

## 1. What is SPA

- SPA stands for Single Page Applications
- You can use modern frameworks like Angular, React or Vue to create SPA
- SPA does not make requests to server for every URL requests

## 2. How Angular Helps

- Angular has Routing Functionality to create SPA
- Angular also offers SSR(Server Side Rendering) which supports SPA

# 4. Data Types

## 1. Data Types

- string
- number
- boolean
- array
- enum
- tuple
- any
- void 
- never

## 2. Functions 

- Different ways to write functions
- Generic Function
- Optional Parameters
- Required Parameters
- Rest Parameters 

# 5. Classes

- Introduction to Classes
- Creating Classes
- Class Properties and constructor
- Class methods
- Creating Instance of Class
- Member Visibility
- Static Members

# 6. Interfaces

- Creating Interfaces
- Using Interfaces as Types
- Implementing Interfaces
- Extending Interfaces
- Optional Properties
- Object destructuring
- Array destructuring

Interface is not in js, cannot be build. So in backend should use classes

# 7. Decorators 

- Introduction to decorators
- Class Decorators
- Method Decorators

# 8. ESModule

- Introduction to ESModules
- Import/Export
- Compiling Typescript to different JS version

outDir: './dist', generate dist dir
 "sourceMap": true,  generate the file to find the compile file where from
noEmit:true

typescript cannot stop the compliing only give you the warning

# 9. Angular

## 01. setup and installation

- Installing Angular CLI

  - npm i @angular/cli -g OR 
    Use npc to avoid having global version

- Create new empty workspace using CLI 

  - ng new hotelinventoryapp --create-application=false OR

    ng new hotelinventoryapp

- Create a workspace with default app

  - ng new appname

- Workspace walkthrough

  - src/
  - node_modules
  - package.json
  - package.lock.json
    - CI env
  - tsconfig.app.json
    - Application
  - tsconfig.json
    - ts configuration file
  - tsconfig.spec.json
    - Unit test 
  - angular.json
    - workspace information
  - karma.conf.json
    - Karma test
  - .editconfig
    - Set up env local editor

- Introduction to mono-repo

  - Create and maintain multiple apps in same repo
  - Use libraries within the project
  - Deploy multiple apps/libs from same repo
  - Easy to share code within the project

```
ng serve -o  
```

Any components, directives and pipes need to be registered by declarations array

## 02 Template Syntax

```
// create ng component
ng g c componentname
```

- Component Introduction
- Creating for your first component
  - Components are building block on Angular Applications.
  - Component consists a HTML template, Typescript class and CSS styles.
- Binding syntax
  - Interpolation
  - Property Binding
  - Event Binding

command+P -> move to any file
