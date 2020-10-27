# Ionic Todo

Built with Ionic [UI Components](https://ionicframework.com/docs/components) using [React](https://reactjs.org/) .

## Lifecycle Methods

Not used [lifecycle methods](https://ionicframework.com/docs/react/lifecycle).

## Native Features

Not used [native api](https://ionicframework.com/docs/native).

## Routing

Used [IonReactRouter](https://ionicframework.com/docs/react/navigation), which is built on top of [react-router](https://github.com/ReactTraining/react-router).

## Build and Test Issues

### Web Build

- Generated build files for web.
- No issues in web build.

To generate build files for web, run:
```
$ ionic build
```

And to serve, run:
```
$ ionic serve
```

### Android Build

- Generated build files for [Android](https://ionicframework.com/docs/developing/android) using [Capacitor](https://capacitorjs.com/) and built with [Android Studio](https://developer.android.com/studio). 
- Cannot close the app using android back navigation.

To generate build files for android, run:
```
$ ionic cap add android
```

Add path to Android Studio in [```capacitor.config.json```](capacitor.config.json):
```
...
"linuxAndroidStudioPath": "/opt/android-studio/bin/studio.sh",
...
```

To open project in Android Studio, run:
```
$ ionic cap open android
```

For next web builds, copy web build to native build, run:
```
$ ionic cap copy android
```
