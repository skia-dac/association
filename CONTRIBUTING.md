# Contributing to Charity Website

First off, thank you for considering contributing to our charity website project! It's people like you that make this project such a great tool for non-profit organizations.

## Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include your environment details** (OS, Browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List some examples of how it would be used**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints
5. Issue that pull request!

## Development Process

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd charity-website
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   # Test thoroughly in the browser
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add some feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

7. **Submit a Pull Request**

## Coding Standards

### JavaScript/React
- Use functional components with hooks
- Follow ES6+ standards
- Use meaningful variable and function names
- Keep functions small and focused
- Add PropTypes or TypeScript types

### CSS/Tailwind
- Use Tailwind utility classes
- Keep custom CSS minimal
- Follow mobile-first responsive design
- Maintain consistent spacing

### Commit Messages
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests

## Project Structure

```
charity-website/
├── client/          # Frontend React application
├── server/          # Backend Express API
├── docs/           # Documentation
└── tests/          # Test files
```

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
