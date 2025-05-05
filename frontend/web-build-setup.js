/**
 * This script helps prepare the React Native project for web deployment on Render.com
 * Run this before deploying to ensure the web build process works correctly
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if package.json exists
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found!');
  process.exit(1);
}

// Read package.json
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch (error) {
  console.error('Error reading package.json:', error);
  process.exit(1);
}

// Add web build script if it doesn't exist
if (!packageJson.scripts.build) {
  console.log('Adding web build script to package.json...');
  packageJson.scripts.build = 'expo build:web';
  
  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Added build script to package.json');
}

// Check if web dependencies are installed
console.log('Checking for required web dependencies...');
try {
  // Install expo-cli if needed
  execSync('npm list -g expo-cli || npm install -g expo-cli');
  console.log('✅ expo-cli is installed');
  
  // Check for web dependencies
  console.log('\nYour project is now ready for web deployment on Render.com!');
  console.log('To build for web locally, run: npm run build');
  console.log('The web build will be created in the "web-build" directory');
} catch (error) {
  console.error('Error checking dependencies:', error.message);
}