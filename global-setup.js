const fs = require('fs');
const path = require('path');

async function globalSetup() {
    console.log('Running global setup...');

    // Skip auth setup in CI if no auth is needed
    if (process.env.CI && process.env.SKIP_AUTH_SETUP) {
        console.log('Skipping auth setup in CI');
        return;
    }

    // Check if auth.json exists, if not create a basic one
    const authFile = path.join(__dirname, 'auth.json');
    if (!fs.existsSync(authFile)) {
        console.log('Creating empty auth.json file');
        fs.writeFileSync(authFile, JSON.stringify({}, null, 2));
    }

    console.log('Global setup completed');
}

module.exports = globalSetup;
