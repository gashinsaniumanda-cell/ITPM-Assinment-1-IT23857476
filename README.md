# Singlish to Sinhala Translator - Playwright Automation Tests

## Project Overview
This project contains automated test cases for the Swift Translator (https://www.swifttranslator.com/), which converts Singlish (phonetic Sinhala) input into Sinhala output.

**Test Suite Summary:**
- **Positive Functional Tests (Pos_Fun):** 30 test cases
- **Negative Functional Tests (Neg_Fun):** 10 test cases
- **Positive UI Tests (Pos_UI):** 1 test case
- **Negative UI Tests (Neg_UI):** 1 test case
- **Total:** 42 test cases

## Test Coverage
The test suite covers the following areas as per assignment requirements:

### Sentence Structures
- Simple sentences (e.g., "mama skole yanavaa")
- Compound sentences (e.g., "mama baeQQkuvata yanavaa iitapasse salli dhaanavaa")
- Complex sentences with conditions and imperatives

### Functional Coverage
- **Tense Variations:** Past, Present, and Future tenses
- **Sentence Types:** Interrogative (questions), Imperative (commands), Positive/Negative forms
- **Grammatical Forms:** Pronoun variations, Singular/Plural usage, Negation patterns
- **Daily Language:** Greetings, requests, responses, common expressions
- **Word Patterns:** Multi-word expressions, joined vs segmented words, repetitions
- **Input Length:** Short (≤30 chars), Medium (31-299 chars), Long (≥300 chars)
- **Mixed Content:** Singlish + English terms, brand names, technical terms
- **Formatting:** Punctuation, numbers, currencies, dates, spacing variations
- **Robustness:** Slang, informal language, edge cases

### UI Testing
- Real-time output update behavior while typing
- Input field and output display interaction
- Chemical formula and special character handling

## Prerequisites
Before running the tests, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation

### Step 1: Install Dependencies
```bash
npm install
```

This will install Playwright and all required dependencies specified in `package.json`.

### Step 2: Install Playwright Browsers
```bash
npx playwright install
```

This downloads the browser binaries needed for testing (Chromium, Firefox, WebKit).

## Running the Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:headed
```

### Run Tests with UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Tests in Debug Mode
```bash
npm run test:debug
```

### Run Specific Test
```bash
npx playwright test tests/singlish-to-sinhala.spec.ts -g "Pos_Fun_0001"
```

### Run Tests by Category
```bash
# Run only positive functional tests
npx playwright test tests/singlish-to-sinhala.spec.ts -g "Pos_Fun"

# Run only negative functional tests
npx playwright test tests/singlish-to-sinhala.spec.ts -g "Neg_Fun"

# Run only UI tests
npx playwright test tests/singlish-to-sinhala.spec.ts -g "UI"
```

## Project Structure
```
playwright-tests/
├── tests/
│   └── singlish-to-sinhala.spec.ts    # Main test file with 42 test cases
├── playwright.config.ts                # Playwright configuration
├── package.json                        # Project dependencies
└── README.md                           # This file
```

## Test Execution Details

### Test Naming Convention
- **Pos_Fun_XXXX:** Positive Functional test cases
- **Neg_Fun_XXXX:** Negative Functional test cases
- **Pos_UI_XXXX:** Positive UI test cases
- **Neg_UI_XXXX:** Negative UI test cases

### Test Execution Flow
1. Browser navigates to https://www.swifttranslator.com/
2. Test locates the Singlish input field with placeholder "Input Your Singlish Text Here."
3. Test enters Singlish text
4. Test verifies Sinhala output in the output div (class: bg-slate-50)
5. Test assertions check for expected Sinhala conversion

### Test Results
After test execution, results are generated in multiple formats:
- **HTML Report:** `playwright-report/index.html`
- **JSON Report:** `test-results.json`
- **Console Output:** Standard test summary

View the HTML report:
```bash
npx playwright show-report
```

## Known Issues & Notes

### Expected Failures
The following negative test cases are designed to demonstrate system limitations:
- Email addresses with numbers are partially transliterated
- Passwords and special characters handling
- URL protocols (https, http) may be transliterated
- Phonetic ambiguities (w/v confusion)
- Vowel length variations affecting meaning
- Slang and informal abbreviations handling

### Browser Compatibility
Tests run on three browsers by default:
- **Chromium** (Chrome/Edge)

To run on a specific browser:
```bash
npx playwright test --project=chromium
```

## Environment Variables
Optional configuration:
```bash
CI=true npm test        # Run in CI mode (non-interactive)
DEBUG=pw:api npm test   # Enable Playwright debug logging
```

## Troubleshooting

### Tests Fail with "Element Not Found"
- Verify the website URL is accessible
- Check if the placeholder text for input field matches exactly
- Ensure the output div selector (div.bg-slate-50) is correct

### Slow Test Execution
- Run tests in parallel (default): `npm test`
- Reduce retries in config for faster feedback during development

### Browser Won't Start
```bash
npx playwright install --with-deps
```

## Test Case Documentation
For detailed information about each test case, refer to the accompanying Excel file:
- **File:** Test_Cases_Documentation.xlsx
- **Sheets:** 
  - Positive Functional Tests (24 cases)
  - Negative Functional Tests (10 cases)
  - UI Tests (2 cases)
  - Summary & Coverage Analysis

## Assignment Information
**Course:** IT3040 - ITPM (Information Technology Project Management)
**Institution:** BSc (Hons) in Information Technology, Year 3, Semester 1
**Assignment:** Option 1 - Singlish to Sinhala Translation Testing
**Submission Deadline:** February 1st

## Repository Setup
This project is set up for version control with Git:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial Playwright test suite for ITPM Assignment 1"

# Create a remote repository on GitHub/GitLab and push
git remote add origin <your-repo-url>
git push -u origin main
```

## Support & Resources
- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Swift Translator Website](https://www.swifttranslator.com/)

---
