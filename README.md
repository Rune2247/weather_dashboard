Assignment: https://coding.betterdevelopers.dk/

Requirements for running app:

- Docker requirements for building and running locally:
- Node v18.18 or later (I use 20.9.0)
- Yarn (npm install -g yarn)

How to start the app for production:

```sh
# Build the Docker image
docker build -t weather_dashboard .

# Run the Docker container
docker run -p 3000:3000 weather_dashboard
```

How to run tests

- Make sure you have installed all packages with yarn
- Execute `yarn test` in your terminal
