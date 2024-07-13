#!/bin/bash

# Navigate to the Node.js project directory
cd bantu

# Create an Angular project inside the Node.js project
ng new newclient --skip-install

# Install Angular dependencies
npm install

Build the Angular application for production
ng build --configuration production

# Navigate back to the Node.js project directory
cd ..

# Create a .gitignore entry for Angular node_modules and dist
echo "newclient/node_modules/" >> .gitignore
echo "newclient/dist/" >> .gitignore

# # Update app.js to serve Angular static files
# cat <<EOL > app.js
# const express = require('express');
# const path = require('path');
# const connectDB = require('./config/db');
# const userRoutes = require('./routes/userRoutes');
# const dotenv = require('dotenv');

# dotenv.config();
# connectDB();

# const app = express();
# app.use(express.json());

# // Serve static files from the Angular app
# app.use(express.static(path.join(__dirname, 'client/dist/client')));

# app.use('/api', userRoutes);

# // All other routes should serve the Angular app
# app.get('*', (req, res) => {
#     res.sendFile(path.join(__dirname, 'client/dist/client/index.html'));
# });

# const PORT = process.env.PORT || 3000;

# app.listen(PORT, () => {
#     console.log(\`Server is running on port \${PORT}\`);
# });
# EOL

echo "Angular project added and configured successfully within the Node.js project."

