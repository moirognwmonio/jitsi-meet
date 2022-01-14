# Changelog

## [3.6.0-2] (14/02/2022)

### Features

- Swap places of toggle camera button with chat button in toolbar of videocall.
- Add translation in chat button for when in bottom sheet.

## [3.6.0-1] (12/02/2022)

### Fixed

- Show toggle camera in bottom sheet menu if it doesn't fit in main actions.

## [3.6.0] (07/01/2022)

### Features

- Customize waiting dialog.
- Hide more options button and it's contents.
- Build for apps using react-native v0.64.2
- Disable delta updates to prevent crashes in android build.
- Modified Podfile, in jitsi-meet project, to prevent application crash.
- Package changes from official tag 'android-sdk-3.6.0', 'ios-sdk-3.6.0' (same commit):
```shell
"react-native": "0.64.2",
"@react-native-community/netinfo": "5.0.0",
"hermes-engine": "0.7.2", // Currently not using hermes in our project
```
- If you use hermes, you should have installed the same version in your project.
- Check your node-modules before you proceed.
