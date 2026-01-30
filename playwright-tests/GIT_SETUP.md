# Git Repository Setup Instructions

## Overview
This project is ready to be pushed to a Git repository (GitHub, GitLab, Bitbucket, etc.)

## Steps to Create Public Repository

### Option 1: Using GitHub (Recommended)

1. **Create a GitHub Account** (if you don't have one)
   - Visit https://github.com/signup
   - Complete the registration

2. **Create a New Repository**
   - Go to https://github.com/new
   - Repository name: `ITPM-Assignment-1-Singlish-Tests` (or your choice)
   - Description: `Playwright automation tests for Swift Translator Singlish to Sinhala conversion`
   - Select: **Public** (must be public for marking)
   - Check "Add a README file" - NO (we already have one)
   - Check "Add .gitignore" - YES, select Node
   - Click "Create repository"

3. **Initialize Git Locally**
   ```bash
   cd playwright-tests
   git init
   git config user.email "your.email@example.com"
   git config user.name "Your Name"
   ```

4. **Add Files**
   ```bash
   git add .
   git status  # Review files to be committed
   ```

5. **Create Initial Commit**
   ```bash
   git commit -m "Initial commit: Playwright test suite for ITPM Assignment 1 - Option 1 Singlish to Sinhala translation testing"
   ```

6. **Connect to Remote Repository**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ITPM-Assignment-1-Singlish-Tests.git
   git branch -M main
   git push -u origin main
   ```

7. **Verify Repository is Public**
   - Visit your repository URL
   - You should be able to view it without logging in
   - Other users should be able to view and clone it

### Option 2: Using GitLab

1. **Create GitLab Account** (if needed)
   - Visit https://gitlab.com/users/sign_up

2. **Create New Project**
   - Go to https://gitlab.com/projects/new
   - Fill in project name and ensure it's Public
   - Click "Create project"

3. **Follow steps 3-7 from GitHub above**
   - Replace the GitHub URL with your GitLab URL

### Option 3: Using Bitbucket

1. **Create Bitbucket Account** (if needed)
   - Visit https://bitbucket.org/account/signup/

2. **Create New Repository**
   - Click "Create repository"
   - Select "Public" access
   - Choose Git as version control system

3. **Follow steps 3-7 from GitHub above**
   - Replace the URL with your Bitbucket URL

## Important: Must Keep Repository Public

**⚠️ CRITICAL:** The repository MUST remain public during marking. 
- Examiners will attempt to clone and access your repository
- If access is denied or repository is private, marking will not proceed

## Verify Setup

```bash
# Test that the URL is accessible (replace with your URL)
git remote -v
# Should show your repository URL

# Push changes
git push origin main
```

## Create a File with Repository Link

Create a file named `REPOSITORY_LINK.txt` in the assignment submission folder:

```
Repository Link: https://github.com/YOUR_USERNAME/ITPM-Assignment-1-Singlish-Tests

Instructions:
1. Clone the repository using: git clone [REPOSITORY_URL]
2. Navigate to the project: cd playwright-tests
3. Install dependencies: npm install
4. Install browsers: npx playwright install
5. Run tests: npm test

Test Results:
- Total Test Cases: 42
- Positive Tests: 31 (30 Functional + 1 UI)
- Negative Tests: 11 (10 Functional + 1 UI)

Coverage:
- Sentence structures, tenses, interrogative/imperative forms
- Grammatical variations, daily language, word patterns
- Input length variations, mixed content, formatting
- Robustness testing, edge cases
```

## .gitignore Setup

The `npm install` command will create a `.gitignore` file. Ensure it includes:

```
node_modules/
playwright-report/
test-results/
.env
.DS_Store
*.log
```

## Future Updates

If you need to update the tests:

```bash
# Make changes to test files
git add .
git commit -m "Update test cases: [description of changes]"
git push origin main
```

## Troubleshooting

### Repository Not Accessible
```bash
# Verify remote URL
git remote -v

# Change if needed
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### Cannot Push to Repository
```bash
# Check authentication
git config --list | grep url

# Update credentials if needed (GitHub requires personal access token)
# Generate at: https://github.com/settings/tokens
```

## Support
- GitHub Help: https://docs.github.com/
- GitLab Help: https://docs.gitlab.com/
- Bitbucket Help: https://support.atlassian.com/bitbucket-cloud/
