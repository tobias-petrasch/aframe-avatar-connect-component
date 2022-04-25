# aframe-avatar-connect-component

![AvatarConnect](images/AvatarConnect.gif)

## About the project

A simple component to integrate [AvatarConnect](https://avatarconnect.org) into your [A-Frame](https://aframe.io) project. AvatarConnect is an open-source bridge between metaverse experiences and avatar providers.

## Getting started

### Prerequisites

- npm

  Install npm as the service is based on React and uses npm as a package manager. _NOTE:_ This installation command requires [brew](https://brew.sh/) and only runs on Mac.

  ```sh
  $ brew install node
  ```

### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/TBD/aframe-avatar-connect-component.git
   ```
2. Install NPM packages
   ```sh
   $ npm install
   ```

## Usage

### Integrate in your existing A-Frame project

To integrate the AvatarConnect A-Frame component into your existing project, add the following dependencies in your `<head>` tag underneath your A-Frame import.

```html
<script src="https://cdn.jsdelivr.net/npm/@avatarconnect/sdk/dist/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@avatarconnect/aframe-avatar-connect-component/dist/aframe-avatar-connect-component.min.js"></script>
```

Next, you have to add the AvatarConnect component to an entity like the following:

```html
<a-entity avatar-connect></a-entity>
```

You can add custom properties as stated in [properties](#properties).

```html
<a-entity avatar-connect="showModal: false"></a-entity>
```

You can add event listeners to events emitted by AvatarConnect as stated in [events](#events).

```html
<script>
  document.addEventListener("avatar-connect:avatar-created", (event) => {
    console.log("Avatar created with AvatarConnect");
    console.log(event);
  });
</script>
```

### Directly use this project

#### Development

For development, the AvatarConnect A-Frame component can be seen in an example by starting a local webserver:

```bash
# Start development webserver in watch mode (automatically reload if files change)
$ npm run start
```

Navigate to `http://localhost:9000` to choose one of the exmaples.

#### Production

For production, the AvatarConnect A-Frame component can be built and minified with the following command:

```bash
# Build component in production
$ npm run dist
```

It builds the app for production to the `dist` folder. It contains a minified and non-minified version.

### Properties

| Property      | Default value                                         | Description                                                                                                                                   |
| ------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| maxHeight     | 610                                                   | maxHeight defines the maximum height of the modal from AvatarConnect                                                                          |
| showModal     | true                                                  | showModal determines if the modal should be shown on initialization                                                                           |
| options (TBD) | [["ready-player-me", { gateway: "mona" }], "meebits"] | options is the configuration object for AvatarConnect. A custom parser is currently missing, hence only the default configuration can be used |

### Events

| Event                          | Description                                                                              | Example payload                                                                                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| avatar-connect:show-modal      | Emitted when the modal opened up                                                         | `null`                                                                                                                                                                                              |
| avatar-connect:close-modal     | Emitted when the modal is closed                                                         | `null`                                                                                                                                                                                              |
| avatar-connect:avatar-received | Emitted when the AvatarConnect bridge has responded with an avatar                       | `{ avatar: { format: 'glb', type: 'humanoid', uri: 'https://d1a370nemizbjq.cloudfront.net/64144f87-52ad-4eb7-be05-c2d05078fe91.glb', metadata: null, provider: 'readyplayerme', version: '1.0.0' }` |
| avatar-connect:avatar-created  | Emitted when the avatar component is placed in the scene and displays the current avatar | `{ avatar: { format: 'glb', type: 'humanoid', uri: 'https://d1a370nemizbjq.cloudfront.net/64144f87-52ad-4eb7-be05-c2d05078fe91.glb', metadata: null, provider: 'readyplayerme', version: '1.0.0' }` |

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'add some amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Related projects

- [AvatarConnect](https://github.com/AvatarConnect)

## Contact

Benedikt Wölk - [@web3woelk](https://twitter.com/web3woelk) - benedikt.woelk@protocol.ai

Tobias Petrasch - [@TPetrasch](https://twitter.com/TPetrasch) - tobias.petrasch@protocol.ai

## Acknowledgments

- [Protocol Labs](https://www.protocol.ai)
