# InversAI Frontend

Mobile frontend for InversAI - Intelligent Financial Advisory Application built with React Native and Expo.

## Deployment on Render.com

### Prerequisites

- Node.js 14+ installed
- Expo CLI installed globally: `npm install -g expo-cli`
- A Render.com account

### Important Configuration for Render Deployment

The following configurations have been made to ensure successful deployment on Render:

1. **Package.json Configuration**:
   - `main` field points to `./src/App.js` (the entry point of the application)
   - Non-interactive start script: `expo start --no-dev --minify`
   - Web build script: `expo build:web`
   - Jest test script with `--passWithNoTests` flag

2. **Build Process**:
   - Render uses the `npm run build` command to build the web version
   - The build output is placed in the `web-build` directory

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Build for web
npm run build
```

### Troubleshooting Render Deployment

1. **Entry File Resolution Error**:
   - Ensure the `main` field in package.json points to the correct entry file
   - Example: `"main": "./src/App.js"`

2. **Jest Warnings**:
   - If you see warnings about Jest, use `--passWithNoTests` flag in your test script
   - Example: `"test": "jest --passWithNoTests"`

3. **Interactive CLI Issues**:
   - Render runs in a non-interactive environment
   - Use `expo start --no-dev --minify` for your start script

4. **Web Build Directory**:
   - Ensure your Render configuration uses `web-build` as the publish directory
   - This is where Expo outputs the web build files

5. **Environment Variables**:
   - Set `REACT_APP_API_URL` to point to your backend service
   - Example: `https://inversai-backend.onrender.com`

## Project Structure

- `src/` - Application source code
  - `App.js` - Main application entry point
  - `components/` - Reusable UI components
  - `screens/` - Application screens
  - `navigation/` - Navigation configuration
  - `services/` - API and service integrations
  - `store/` - State management
  - `utils/` - Utility functions
  - `assets/` - Images, fonts, and other static assets