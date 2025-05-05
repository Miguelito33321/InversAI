# Deploying InversAI to Render.com

This guide provides a quick reference for deploying the InversAI project to Render.com directly from GitHub.

## Quick Start

1. **Create a Render account** at [render.com](https://render.com) and connect it to your GitHub account

2. **Use the Blueprint approach** (recommended):
   - Ensure your repository contains the `render.yaml` file (already included in this project)
   - In Render dashboard, click "New" → "Blueprint"
   - Select your InversAI repository
   - Render will automatically configure all services defined in the YAML file

3. **Manual deployment** (alternative):
   - Follow the detailed instructions in [docs/deployment-guide.md](./docs/deployment-guide.md)

## What Gets Deployed

- **Backend API**: Node.js Express server
- **Frontend**: React Native web build as a static site
- **Database**: MongoDB instance (optional)

## Environment Variables

You'll need to configure these in the Render dashboard or through the `render.yaml` file:

```
NODE_ENV=production
PORT=10000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REACT_APP_API_URL=https://your-backend-service.onrender.com
```

## Troubleshooting

If you encounter issues during deployment:

1. Check the build and runtime logs in the Render dashboard
2. Verify all environment variables are correctly set
3. Ensure your MongoDB connection string is correct and accessible

## Additional Resources

- For detailed deployment instructions, see [docs/deployment-guide.md](./docs/deployment-guide.md)
- Render.com documentation: [https://render.com/docs](https://render.com/docs)