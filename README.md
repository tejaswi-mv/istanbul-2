npx babel src_org --out-dir instrumented --source-maps inline

npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-plugin-istanbul