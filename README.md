# REST-Noise-Reduction-API
A REST API for denoising audio.

## Installation
1. Clone the repository with git.
    ```
    git clone https://github.com/Team-Sudo-Code/REST-Noise-Reduction-API
    ```
2. Install required packages with npm.
    ```
    npm install
    ```
3. Start the server.
    ```
    npm start
    ```
> Alternatively, you can visit [the Heroku app](https://audio-denoiser-api.herokuapp.com/).

## API Demo
You can try the API demo [here](https://audio-denoiser-api.herokuapp.com/client)!

## Request Playground
You can use the [request playground](https://audio-denoiser-api.herokuapp.com/) to try requests!

## Endpoints
| Name | Type | Description |
|------|------|-------------|
| [/demo/get](https://audio-denoiser-api.herokuapp.com/demo/get) | GET | A test endpoint for GET. |
| [/demo/post](https://audio-denoiser-api.herokuapp.com/demo/post) | POST | A test endpoint for POST. |
| [/api/{API KEY HERE}](https://audio-denoiser-api.herokuapp.com/api/apikey) | POST | The endpoint for the API. You should send your audio data here. |
