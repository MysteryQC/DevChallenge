class JudgeVerification {
    constructor(page, expectedCount) {
        this.page = page;
        this.expectedCount = 5; 
    }

    async verifyJudges() {
        const judgesLocator = this.page.locator('#w-node-_597214b8-429f-2ff9-cf7f-12bda9973c66-647fae1d');
        const judgesCount = await judgesLocator.count();

        
        if (judgesCount !== this.expectedCount) {
            throw new Error(`Expected ${this.expectedCount} judges, but found ${judgesCount}.`);
        }

        
        for (let i = 0; i < judgesCount; i++) {
            const isVisible = await judgesLocator.nth(i).isVisible();
            if (!isVisible) {
                throw new Error(`Judge at index ${i} is not visible.`);
            }
        }

        console.log(`${judgesCount} judges verified and are all visible.`);
    }
};

const galaxyS21 = {
    name: 'Galaxy S21',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36',
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2,
    hasTouch: true,
    isMobile: true,
};



module.exports = { JudgeVerification, galaxyS21 };
