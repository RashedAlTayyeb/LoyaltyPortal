const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Collect console messages
    const consoleMessages = [];
    const consoleErrors = [];
    
    page.on('console', msg => {
        consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });
    
    page.on('pageerror', error => {
        consoleErrors.push(`Page Error: ${error.message}`);
    });
    
    try {
        // Load the HTML file
        const filePath = path.join(__dirname, 'index.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
        
        // Check if page loaded
        const title = await page.title();
        console.log(`✅ Page Title: ${title}`);
        
        // Check for hero section
        const heroExists = await page.$('.hero');
        console.log(`✅ Hero Section: ${heroExists ? 'FOUND' : 'NOT FOUND'}`);
        
        // Check for images
        const images = await page.$$('img');
        console.log(`✅ Total Images Found: ${images.length}`);
        
        // Check specific images
        const imgSources = await page.$$eval('img', imgs => imgs.map(img => img.src));
        console.log('\n📸 Image Sources:');
        imgSources.forEach((src, i) => {
            console.log(`   ${i + 1}. ${src.split('/').pop()}`);
        });
        
        // Report console messages
        if (consoleMessages.length > 0) {
            console.log('\n📋 Console Messages:');
            consoleMessages.forEach(msg => console.log(`   ${msg}`));
        }
        
        // Report errors
        if (consoleErrors.length > 0) {
            console.log('\n❌ Console Errors:');
            consoleErrors.forEach(err => console.log(`   ${err}`));
        } else {
            console.log('\n✅ No Console Errors!');
        }
        
        console.log('\n🎉 Website test completed successfully!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
})();
