# 4thSemExam_Web
This project includes two independent Android applications, [one](https://github.com/mngdnmw/4thSemExam_Android_Robot)  serving as the client in the robot client-server relationship between the phone and the EV3 [robot](https://github.com/mngdnmw/4thSemExam_AA); the other being a [mobile application](https://github.com/mngdnmw/4thSemExam_Android) that displays images from pictures taken by the client. Although together the applications provide a richer experience of the team's intended vision, all applications can be run independently of each other (with the exception of the client and server). There is also a [web application](https://github.com/mngdnmw/4thSemExam_Web), with uses similar to the mobile application to view the images.

The initial vision of the team was to create an autonomous robot that can roam and identify items of interest - for example, birds - take a photo of that item, upload it to the database (Firebase) and then make available to view for others using the mobile application or web application. This repository pertains to the Web application and includes futures such as display of images, location, user login and authenication using Firebase. This repository also contains the Firebase Cloud Function commands.

## Dependencies
### Firebase
* How to set up: https://firebase.google.com/docs/admin/setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
