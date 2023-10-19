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

## 01 setup and installation

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

## 03 Built-in Directives

- Introduction
  - Directives are use to change the behavior and appearance of DOM element
    - Reusable function which you can apply on any dom element which you have in your application/ appearence of dom
  - Directives can implement all lifecycle hooks
  - Directives can not have template
- Types of Directives
  - Structure Directives
  - Attribute Directives
- Built-in Directives
  - *ngIf
  - *ngFor
    - With * structure directive - can modify entire dom
  - *ngSwitch
  - ngClass
    - Without * attribute directive - can modify dom cannot add/remove element from the dom
  - ngStyle

## 04 Built-in Pipes

- Introduction
  - Pipes are used for data transformation
  - Pipes don't change actual object
- Built-in Pipes
  - DatePipe
  - UpperCasePipe
  - LowerCasePipe
  - Currency Pipe
  - DecimalPipe
  - PercentPipe
  - JsonPipe
  - SlicePipe
  - AsyncPipe

## 05 Bootrap

```
ng add ngx-bootstrap
```

# 10. Lifecycle

## 01 Lifecycle Hooks

- Introduction
  - Component instance has lifecycle hooks which can help you to hook into different events on Components
  - Lifecycle ends when component is destroyed
- Lifecycle hooks
  - ngOnChanges
    - immutability/ state/ new instance
    - Only can be put in component or directive
    - Waste not usually used, it is costly 
  - ngOnInit
    - after constructor finished, then call the ngOnInit 
      - constructor:
        - to inject some services
        - not any blocking code
      - ngOnInit:
        - write logic
        - Property declaration
        - Load data from api and display that data on the view
  - ngDoCheck
    - not use with onchange , it is the same effect, avoid use onchange, use docheck
  - ngAfterContentInit
    - Content should be provided by parent component
    - Like view can replace input and output, but better use input and output
  - ngAfterContentChecked
  - ngAfterViewInit
    - ViewChild three ways:
      - Access the component instance using view child: access header component and create a new instance using ts (static property)
      - View containter ref to dynamically load a component 
      - access a html element using template reference to assign some property
  - ngAfterViewChecked
  - ngOnDestroy
    - A component is get removed from dom - ondestroy will be called
    - memory consuming can be used here - unsubscribe

## 02 Component Communication

- Introduction
  - The scenario where two or more components needs to interact is known as component communication
  - There are multiple ways to achieve the component communication
    - Using @Input and @Output
      - smart component/ dump component; parent/child
    - Using @ViewChild and @ContentChild
    - Using services
- Ways for Component Communication

# 11. Dependency Injection (React Context)

- Introduction
  - Dependencies are service or objects needed by classes to perform some function
  - It's a design pattern
  - Angular has built-in Dependency Injection support (not like other frameworks)
- DI Providers
  - Class based providers
  - Value providers
  - Factory
  - Provider Types
    - root
      - only one instance created, single instance
      - if you don't want to create a single instance, register service inside that component
    - any
- Creating and consuming services
  - ng g s <service-name>
  - Injecting a service
  - Consuming a service
- Component Interaction using services
  - Sharing data between multiple components
  - Sharing data within App
- Dependency Resolution

<img src="/Users/liminghao/Library/Application Support/typora-user-images/image-20231008174142271.png" alt="image-20231008174142271" style="zoom:50%;" />

- Resolution Modifiers
  - Self
  - SkipSelf
  - Optional
  - Host

# 12. Angular Http and Observables

- Introduction
  - In enterpise apps, you need to interact with APIs
  - You may be familiar with Ajax, fetch
  - HttpClient is Service Provided by Angular to interact with APIs
  - HttpClient internally uses RxJs
- Setting Up HttpClient
  - We need to import HttpClientModule
  - Once module is imported we can inject HttpClient Service
- Using HttpClient Service
- Rxjs, Observables and streams
  - Rxjs good observables library
  - as dev, should subscribe to stream the data, continuous stream
  - push versus pull architecture
    - Pull based architecture
      - getData -> addData -> getData
    - Push based architecture
      - getData -> continuous stream of data -> addData
  - Rxjs and Observables
    - RxJs is an library for writing Reactive Programming
    - Observables are stream of data to which we can subscribe
    - Using RxJs itself not http
- http methods
  - API Interaction
    - Performing CRUD operation using HttpClient
    - Error Handling
  - http request
    - dummy api
- RxJs Operators
  - ShareReplay
    - catch the request so dont have to make the call again, 减少相同request的发送次数
      - We cant modify the stream after we subscribe to it, stream can be modified inside a function that function is known as pipe, pipe can do anything to manipulate with your data
      - we are going to repeat or replay the last one record which we have received
  - CatchError
  - Map operators
- Http Interceptors
- APP_INITIALIZERS
