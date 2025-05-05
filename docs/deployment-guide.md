# Deploying InversAI on Render.com from GitHub

This guide will walk you through the process of deploying the InversAI application on Render.com directly from your GitHub repository.

## Prerequisites

1. A GitHub account with your InversAI project repository
2. A Render.com account (sign up at https://render.com if you don't have one)
3. Your project code pushed to GitHub

## Step 1: Connect Render to GitHub

1. Log in to your Render account
2. Click on the "New +" button in the dashboard
3. Select "GitHub" to connect your GitHub account
4. Authorize Render to access your repositories
5. Select the InversAI repository

## Step 2: Deploy the Backend Service

1. From the Render dashboard, click "New +" and select "Web Service"
2. Connect to your GitHub repository
3. Configure the service with the following settings:

   - **Name**: inversai-backend (or your preferred name)
   - **Environment**: Node
   - **Region**: Choose the region closest to your users
   - **Branch**: main (or your default branch)
   - **Root Directory**: backend
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose an appropriate plan (Free tier works for testing)

4. Under "Environment Variables", add the following:

   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Replace the placeholder values with your actual configuration.

5. Click "Create Web Service"

## Step 3: Deploy the AI Core (Optional)

If your AI core is a separate service that needs to be deployed:

1. From the Render dashboard, click "New +" and select "Web Service"
2. Connect to your GitHub repository
3. Configure the service with the following settings:

   - **Name**: inversai-ai-core
   - **Environment**: Node
   - **Region**: Choose the region closest to your users
   - **Branch**: main (or your default branch)
   - **Root Directory**: ai-core
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose an appropriate plan

4. Add any necessary environment variables
5. Click "Create Web Service"

## Step 4: Deploy the Frontend

For the React Native Expo frontend, you'll need to create a static site:

1. First, ensure your frontend package.json has the correct configuration:

   ```json
   {
     "main": "./src/App.js",
     "scripts": {
       "start": "expo start --no-dev --minify",
       "build": "expo build:web",
       "test": "jest --passWithNoTests"
     }
   }
   ```

2. From the Render dashboard, click "New +" and select "Static Site"
3. Connect to your GitHub repository
4. Configure the service with the following settings:

   - **Name**: inversai-frontend
   - **Branch**: main (or your default branch)
   - **Root Directory**: frontend
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `web-build`
   
   > **Note**: Make sure the `main` field in package.json points to your app entry file (e.g., `./src/App.js`). This is critical for successful deployment.

5. Under "Environment Variables", add:

   ```
   REACT_APP_API_URL=https://your-backend-service-name.onrender.com
   ```

   Replace with your actual backend URL from Step 2.

6. Click "Create Static Site"

## Step 5: Configure Environment Variables

Ensure all services have the correct environment variables:

1. For the backend:
   - Database connection strings
   - JWT secrets
   - API keys for external services
   - CORS settings to allow your frontend domain

2. For the frontend:
   - Backend API URL
   - Any third-party service keys (analytics, etc.)

## Step 6: Set Up a Database

If you're using MongoDB:

1. Create a MongoDB Atlas account or use another MongoDB provider
2. Set up a new cluster
3. Create a database user and get your connection string
4. Add the connection string to your backend environment variables

## Step 7: Continuous Deployment

Render automatically deploys when you push to your connected GitHub branch. To manually deploy:

1. Go to your service in the Render dashboard
2. Click the "Manual Deploy" button
3. Select "Deploy latest commit"

## Troubleshooting

### Common Issues with Expo React Native on Render

- **Entry File Resolution Error**: If you see `Error: Cannot resolve entry file`, ensure your `main` field in `package.json` points to the correct entry file (e.g., `./src/App.js`).

- **Jest Warnings**: If you see warnings about Jest not being installed, add `--passWithNoTests` to your test script in `package.json`.

- **Interactive CLI Issues**: Render runs in a non-interactive environment. Use `expo start --no-dev --minify` for your start script instead of just `expo start`.

- **Web Build Failures**: Ensure you have the correct `build` script in your `package.json` and that all web-specific dependencies are installed.

### General Troubleshooting

- **Build Failures**: Check the build logs in Render dashboard
- **Runtime Errors**: Check the service logs
- **Connection Issues**: Verify environment variables and network settings

## Monitoring

Render provides basic monitoring for all services. For more advanced monitoring:

1. Set up logging with Winston (already in your dependencies)
2. Consider adding a monitoring service like Sentry

## Security Considerations

1. Never commit sensitive information (API keys, passwords) to your repository
2. Use environment variables for all secrets
3. Set up proper CORS configuration in your backend
4. Consider adding rate limiting for API endpoints

## Next Steps

- Set up a custom domain for your services
- Configure SSL certificates (automatically handled by Render)
- Set up CI/CD pipelines for testing before deployment