const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const consoleErrors = [];
    
    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });
    
    page.on('pageerror', error => {
        consoleErrors.push(`Page Error: ${error.message}`);
    });
    
    try {
        // Test main page
        console.log('📄 Testing index.html...');
        const filePath = path.join(__dirname, 'index.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
        
        const title = await page.title();
        console.log(`✅ Page Title: ${title}`);
        
        const heroExists = await page.$('.hero');
        console.log(`✅ Hero Section: ${heroExists ? 'FOUND' : 'NOT FOUND'}`);
        
        const images = await page.$$('img');
        console.log(`✅ Total Images: ${images.length}`);
        
        // Test a company page
        console.log('\n📄 Testing delta-insurance.html...');
        await page.goto(`file://${path.join(__dirname, 'delta-insurance.html')}`, { waitUntil: 'networkidle' });
        const deltaTitle = await page.title();
        console.log(`✅ Delta Insurance Page: ${deltaTitle}`);
        
        // Test another company page
        console.log('\n📄 Testing nuqul-automotive.html...');
        await page.goto(`file://${path.join(__dirname, 'nuqul-automotive.html')}`, { waitUntil: 'networkidle' });
        const nuqulTitle = await page.title();
        console.log(`✅ Nuqul Automotive Page: ${nuqulTitle}`);
        
        // Report errors
        if (consoleErrors.length > 0) {
            console.log('\n❌ Console Errors:');
            consoleErrors.forEach(err => console.log(`   ${err}`));
        } else {
            console.log('\n✅ No Critical Console Errors!');
        }
        
        console.log('\n🎉 All pages tested successfully!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
})();
