const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    args: ['--headless','--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox'],
  });

// Test Case 1: Check if the container background color is rgb(99, 182, 245)
  const page1 = await browser.newPage();
  try{
    await page1.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
    await page1.setViewport({
        width: 1200,
        height: 800,
      });
    const containerBgColor = await page1.$eval('.container', (container) => getComputedStyle(container).backgroundColor);
    if (containerBgColor === 'rgb(99, 182, 245)') {
      console.log('TESTCASE:container_background_color_is_correct:success');
    } else {
      console.log('TESTCASE:container_background_color_is_correct:failure');
    }
}catch(e){
    console.log('TESTCASE:container_background_color_is_correct:failure');
}

    // Test Case 2: Check if the Like button has the correct class
    const page2 = await browser.newPage();
    try{
        await page2.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page2.setViewport({
            width: 1200,
            height: 800,
          });
    const likeButtonClass = await page2.$eval('#like', (button) => button.getAttribute('class'));
    if (likeButtonClass.includes('button')) {
      console.log('TESTCASE:like_button_class_is_correct:success');
    } else {
      console.log('TESTCASE:like_button_class_is_correct:failure');
    }
    }catch(e){
        console.log('TESTCASE:like_button_class_is_correct:failure');
    }
    // Test Case 3: Check if the Dislike button has the correct class
    const page3 = await browser.newPage();
    try{
        await page3.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page3.setViewport({
            width: 1200,
            height: 800,
          });
    const dislikeButtonClass = await page3.$eval('#dislike', (button) => button.getAttribute('class'));
    if (dislikeButtonClass.includes('button')) {
      console.log('TESTCASE:dislike_button_class_is_correct:success');
    } else {
      console.log('TESTCASE:dislike_button_class_is_correct:failure');
    }
}catch(e){
    console.log('TESTCASE:dislike_button_class_is_correct:failure');
}

    // Test Case 4: Check if the image has the correct width and height
    const page4 = await browser.newPage();
    try{
        await page4.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page4.setViewport({
            width: 1200,
            height: 800,
          });
    const image = await page4.$('.image');
    const imageWidth = await image.evaluate((el) => el.width);
    const imageHeight = await image.evaluate((el) => el.height);
    if (imageWidth === 100 && imageHeight === 100) {
      console.log('TESTCASE:image_width_and_height_are_correct:success');
    } else {
      console.log('TESTCASE:image_width_and_height_are_correct:failure');
    }
    }catch(e){
        console.log('TESTCASE:image_width_and_height_are_correct:failure');
    }
    // Test Case 5: Check if the main container has the correct margin-left
    const page5 = await browser.newPage();
    try{
        await page5.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page5.setViewport({
            width: 1200,
            height: 800,
          });
    const mainContainerMarginLeft = await page5.$eval('.main', (container) => getComputedStyle(container).marginLeft);

    if (mainContainerMarginLeft === '59.1875px') {
      console.log('TESTCASE:main_container_margin_left_is_correct:success');
    } else {
      console.log('TESTCASE:main_container_margin_left_is_correct:failure');
    }
    }catch(e){
        console.log('TESTCASE:main_container_margin_left_is_correct:failure');
    }
    // Test Case 6: Check if the card container has the correct margin-left
    const page6 = await browser.newPage();
    try{
        await page6.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page6.setViewport({
            width: 1200,
            height: 800,
          });
    const cardContainerMarginLeft = await page6.$eval('.card', (container) => getComputedStyle(container).marginLeft);
    if (cardContainerMarginLeft === '134.969px') {
      console.log('TESTCASE:card_container_margin_left_is_correct:success');
    } else {
      console.log('TESTCASE:card_container_margin_left_is_correct:failure');
    }
}catch(e){
    console.log('TESTCASE:card_container_margin_left_is_correct:failure');
}

    // Test Case 7: Check if the input fields have the correct font-size
    const page7 = await browser.newPage();
    try{
        await page7.goto('https://8081-ddcfabbbcbdbcbf305804353ebdeafaebbafcfdfdthree.premiumproject.examly.io/'); // Replace with your actual test page URL.
        await page7.setViewport({
            width: 1200,
            height: 800,
          });
    const inputFontSize = await page7.$eval('.textbox', (input) => getComputedStyle(input).fontSize);
    if (inputFontSize === '17px') {
      console.log('TESTCASE:input_field_font_size_is_correct:success');
    } else {
      console.log('TESTCASE:input_field_font_size_is_correct:failure');
    }
}catch(e){
    console.log('TESTCASE:input_field_font_size_is_correct:failure');
}

finally {
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page7.close();
    await browser.close();
  }
})();
