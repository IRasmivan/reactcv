# ![React Rasmi CV](React.png)

## CV

This is a CV of myself built in React.

### Install Dependencies

```
npm install
```

### Starting the Server

Run the next command to launch the development server.

```
npm start
```

### Building for Production

To build an optimized bundle, run

```
npm run build
```

### Deploying in AWS EC2

Clone into EC2 instance

```
docker build . -t reactcv
docker images
docker run -p 80:80 reactcv
```
