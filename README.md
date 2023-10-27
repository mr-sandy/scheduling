# scheduling

## to run in dev mode
In production use, the service and app are served from the same host using content negotation.

However, for dev, you can run the app and service on separate hosts to allow hot reloading.

1. Open two terminals
2. In one terminal, navigate to `./app` and run the command `npm run start`
3. In the other terminal, navigate to `./service` and run the command `npm run dev`

You should then have:
- the app running on http://localhost:3000
- the service running on http://localhost:8080

Visit http://localhost:3000 in your browser to see the app 

## to run in "production" mode
You can simulate production use by building the app and running the whole thing from the service endpoint.

1. Navigate to `./app` and run the command `npm run build`
2. Navigate to `./service` and run the commands
- `npm run build`
- `npm run start`

You should then have the service running on http://localhost:8080

Visit http://localhost:8080 in your browser to see the app (being served from the service)


## to do
- ~~validation~~
- ~~multistore~~
- ~~rename routes~~
- ~~delete old files~~
- ~~refresh on add~~
- ~~refactor results~~
- ~~readme~~
- product selection
- run now
- delete
- advanced properties