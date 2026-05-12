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

### Syncing LinkedIn Articles

The blog section now reads from `src/data/blogPosts.json` instead of hardcoded JSX.

If you do not have a feed source yet, you can add a new LinkedIn article without editing JSX:

```
npm run add:linkedin -- --title "Your article title" --url "https://www.linkedin.com/pulse/..." --description "Short summary"
```

If you want to stay entirely inside GitHub Pages and avoid local commands, use the `Add LinkedIn Article` workflow in the GitHub Actions tab. Enter the title, URL, and description there. The workflow commits `src/data/blogPosts.json`, and your normal Pages deploy runs from that push.

### Deploying in AWS EC2

Clone into EC2 instance

```
docker build . -t reactcv
docker images
docker run -p 80:80 reactcv
```
