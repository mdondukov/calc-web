# calc-web

Frontend for "Жашыл климат", a climate-vulnerability self-assessment for local
communities in Kyrgyzstan, deployed at [radar.biom.kg](https://radar.biom.kg).
It talks to the [`radar-api`](https://github.com/mdondukov/radar-api) backend
and is distinguished from its sibling frontend `radar-women` only by
`REACT_APP_PROJECT_CODE` (`zhashyl-climate` here).

The working branch is `refact`, not `main`.

## CI/CD

`.github/workflows/ci.yml` runs on every push to `refact` and every PR:
`npm ci`, `tsc --noEmit`, `npm run build`. `deploy.yml` is manual
(`workflow_dispatch`) — it builds a `linux/arm64` image, pushes it to
`ghcr.io/<owner>/calc-web` as `:dev` and `:sha-<short>`, then over SSH runs
`docker compose pull/up -d/restart proxy` on the server and checks the site
answers 200. Both run on `ubuntu-24.04-arm`, matching the aarch64 host.

Secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`. Rollback = deploy an
older `:sha-…` tag.

CRA bakes `REACT_APP_*` in at build time, so the image is environment
specific: the committed `.env` (prod URL) is what CI bakes in.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
