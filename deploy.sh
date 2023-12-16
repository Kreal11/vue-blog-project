# Navigate into the build output directory
cd dist

# Initialize a new Git repository in the dist directory
git init

# Add all files to the repository
git add -A./deploy.sh

# Commit the changes
git commit -m 'Deploy to gh-pages'

# Force push to the gh-pages branch on GitHub
git push -f git@github.com:Kreal11/vue-test-project.git gh-pages
