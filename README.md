# Ecommerce-demo-store Playwright Tests

Automated end-to-end tests for Ecommerce Demo Store using [Playwright](https://playwright.dev/) and TypeScript.

---

## Project Structure

- `pages/` — Page Object Models (TypeScript)
- `tests/` — Test specifications (TypeScript)
- `playwright.config.ts` — Playwright configuration (TypeScript)
- `playwright-report/` — HTML test reports
- `.github/workflows/test.yml` — CI/CD pipeline

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)

---

## Installation

```sh
npm install
```

---

## Local Test Execution

Run all tests:
```sh
npx playwright test
```

View the HTML report:
```sh
npx playwright show-report
```

---

## Cloud Reporting Integration

You can use [Testdino](https://testdino.com/) for cloud-based Playwright reporting.

> **Important:**  
> Ensure your `playwright.config.ts` includes both the HTML and JSON reporters.  
> The HTML and JSON reports must be available for Testdino to process your test results.

Example configuration:
```ts
reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['json', { outputFile: './playwright-report/report.json' }],
]
```

### Local Execution

After your tests complete and the report is generated in `playwright-report`, upload it to Testdino:

```sh
npx --yes tdpw ./playwright-report --token="YOUR_TESTDINO_API_KEY" --upload-html
```

Replace the token above with your own Testdino API key.

See all available commands:
```sh
npx tdpw --help
```

---

## CI/CD Pipeline Integration

### GitHub Actions

Add the following step to your workflow after tests and report generation:

```yaml
- name: Send Testdino report
  run: |
    npx --yes tdpw ./playwright-report --token="YOUR_TESTDINO_API_KEY" --upload-html
```

Ensure your API key is correctly placed in the command.

---

## Continuous Integration

Automated test runs and report merging are configured in `.github/workflows/test.yml`.

---

## Contributing

Pull requests and issues are welcome!

---

## License

MIT