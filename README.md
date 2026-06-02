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

### Google Analytics

Google Analytics support is optional and enabled only when a measurement ID is provided at build time.

For local development, create a local environment file such as `.env.local` and add:

```
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

After restarting the dev server or rebuilding, the site will send Google Analytics page views and track key clicks for the resume, email, WhatsApp, GitHub, LinkedIn, and blog links.

For GitHub Pages deployment through GitHub Actions, add a repository secret named `REACT_APP_GA_MEASUREMENT_ID` with your GA4 measurement ID.

When analytics is configured, the site shows a simple Accept/Reject consent banner and only loads Google Analytics after consent is accepted.

The site already uses the custom domain `rasmivan.com`, which is configured through `public/CNAME` and the `homepage` value in `package.json`.

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
