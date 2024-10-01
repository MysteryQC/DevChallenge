# Pre-conditions
Before you begin, ensure that you have the following tools installed:

1. An operating system (preferably *Windows*) on the machine being used
2. Any code editor (e.g., *Visual Studio Code*) - https://code.visualstudio.com/download
3. **Node.js** version 14 or newer - https://nodejs.org/en/download/prebuilt-installer
4. **git** - https://git-scm.com/downloads
5. The project is downloaded and located on your computer
### OR
1. You can clone the project from the GitHub repository (https://github.com/MysteryQC/DevChallenge.git)
2. Open the terminal
3. Navigate to the folder using `cd your_folder_path` command
4. Execute the command `git clone https://github.com/MysteryQC/DevChallenge.git`

# Running Tests
1. Open your code editor
2. Open the project folder [*File -> Open Folder -> Open project folder*]
3. Open the terminal and run the command `npm install`
5. Execute the commend `npx playwright install` to install browsers for playwright
6. Execute the command `npx playwright test` to run the tests
7. Execute the command `npx playwright test --headed` to run the tests with the opened browser
8. Execute the command `npx playwright show-report` to view the test results

# Checking GitHub Actions
1. Make changes to the code
2. Run `git add .`
3. Run `git commit -m "Your commit"`
4. Run `git push -u origin master`
5. Go to GitHub -> "*Actions*" tab
6. Wait until the workflow completes