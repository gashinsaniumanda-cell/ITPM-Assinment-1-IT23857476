import { test, expect } from '@playwright/test';

// Before each test, navigate to the target website
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

// ==========================================
// 1. POSITIVE UI TEST (Pos_UI)
// ==========================================

test('Pos_UI_0001 - Real-time output update behavior', async ({ page }) => {
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputBox = page.locator('div.bg-slate-50').first();

  // Testing if the UI updates while typing
  await inputField.type('potha'); 
  await expect(outputBox).toContainText('පොත');
  
  await inputField.type(' balanna');
  await expect(outputBox).toHaveText('පොත බලන්න');
});

// ==========================================
// 2. NEGATIVE UI TEST (Neg_UI)
// ==========================================

test('Neg_UI_0001 - Chemical Formula Handling', async ({ page }) => {
  const input = 'CaCO3 + 2 HCl';
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  
  const outputBox = page.locator('div.bg-slate-50').first();
  await expect(outputBox).toBeVisible();

  // Negative test: should fail if the site transliterates formulas
  await expect(outputBox).toHaveText(input);
});

// ==========================================
// 3. POSITIVE FUNCTIONAL TESTS (Pos_Fun_0001 - 0030)
// ==========================================

test('Pos_Fun_0001 - Future Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('labana sathiyee api thissamahaaraamaya yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ලබන සතියේ අපි තිස්සමහාරාමය යනවා');
});

test('Pos_Fun_0002 - Compound Logic', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama roohalata yanavaa iitapasse beheth gannavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම රෝහලට යනවා ඊටපස්සෙ බෙහෙත් ගන්නවා');
});

test('Pos_Fun_0003 - Advice/Imperative', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaa kalin giya hindhaa inna epaeyi');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයා කලින් ගිය හින්දා ඉන්න එපැයි');
});

test('Pos_Fun_0004 - Mixed Question', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('adha api musical show ekak balanna yamudha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අද අපි musical show එකක් බලන්න යමුද?');
});

test('Pos_Fun_0005 - Command', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('igena ganna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඉගෙන ගන්න');
});

test('Pos_Fun_0006 - Routine', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama kaempas  yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම කැම්පස්  යනවා');
});

test('Pos_Fun_0007 - Dislike', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama kathaa karanna kaemathi naehae.');
  const output = page.locator('div.bg-slate-50').first();
  // Using toContainText to handle punctuation variances
  await expect(output).toContainText('මම කතා කරන්න කැමති නැහැ.');
});

test('Pos_Fun_0008 - Greeting', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('suba raathriyak veevaa!');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුබ රාත්‍රියක් වේවා!');
});

test('Pos_Fun_0009 - Request', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata vathura viidhuruvak dhenna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට වතුර වීදුරුවක් දෙන්න පුලුවන්ද?');
});

test('Pos_Fun_0010 - Conditional', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('ehenam api poth balannam');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එහෙනම් අපි පොත් බලන්නම්');
});

test('Pos_Fun_0011 - Apology', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('samaavenna, mata thaama enna baeri unaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සමාවෙන්න, මට තාම එන්න බැරි උනා');
});

test('Pos_Fun_0012 - Informal Call', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eeyi mee paeththa balapan');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඒයි මේ පැත්ත බලපන්');
});

test('Pos_Fun_0013 - Pain State', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee bella ridhenavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ බෙල්ල රිදෙනවා.');
});

test('Pos_Fun_0014 - Fruit Command', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('paLathuru kanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('පළතුරු කන්න');
});

test('Pos_Fun_0015 - Daily Act', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api adha pusthakaalayata yanavaa');
  // toContainText ensures reliability across browsers
  await expect(page.locator('div.bg-slate-50').first()).toContainText('අපි අද පුස්තකාලයට යනවා');
});

test('Pos_Fun_0016 - Joined Words', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mamasellamkarannayanavaa');
  const output = page.locator('div.bg-slate-50').first();
  // Matching tokens to ignore minor character variations
  await expect(output).toContainText('මම');
  await expect(output).toContainText('සෙල්ලම්');
  await expect(output).toContainText('කරන්න');
  await expect(output).toContainText('යනවා');

});

test('Pos_Fun_0017 - Repetition', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('baena baena');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('බැන බැන');
});

test('Pos_Fun_0018 - Past Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama pooyata pansal giyaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම පෝයට පන්සල් ගියා.');
});

test('Pos_Fun_0019 - Present Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama dhaen tiivi balanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම දැන් ටීවි බලනවා');
});

test('Pos_Fun_0020 - Future Exam', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama labana sathiyee viBhaagaya liyanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ලබන සතියේ විභාගය ලියනවා');
});

test('Pos_Fun_0021 - Negation State', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata mathaka hitinnee naee.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට මතක හිටින්නේ නෑ.');
});

test('Pos_Fun_0022 - Intent Calculation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama paadam karanna hadhanne');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම පාඩම් කරන්න හදන්නෙ');
});

test('Pos_Fun_0023 - Plural Forms', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaalaa sellam karanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයාලා සෙල්ලම් කරන්න');
});

test('Pos_Fun_0024 - Loan Request', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakara mata baeQQku Nayak dhenna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකර මට බැංකු ණයක් දෙන්න පුලුවන්ද?');
});

test('Pos_Fun_0025 - Mixed Technical Terms', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee LinkedIn ekee Email password eka update karanna');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('LinkedIn');
});

test('Pos_Fun_0026 - Long Input', async ({ page }) => {
  const longInput = 'Mama dhaen town Ekata aavaa eegamanma Bookshop Ekata yanavaa poth vagayak ganna...'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(longInput);
  await expect(page.locator('div.bg-slate-50').first()).toBeVisible();
});

test('Pos_Fun_0027 - Simple Need', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata koopi ekak bonna oonee');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට කෝපි එකක් බොන්න ඕනේ');
});

test('Pos_Fun_0028 - Double Statement', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata dhaen kammaeLi mama tiivi eka balanna yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට දැන් කම්මැළි මම ටීවි එක බලන්න යනවා');
});

test('Pos_Fun_0029 - Scientific Terminology', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('maanava shariiraya saha niyuroon (Neuron)');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('නියුරෝන්');
});

test('Pos_Fun_0030 - Slang Mixed Case', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('appatasiri, apita group PROJECT eka submit karanna amathaka unaane.');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('අප්පටසිරි');
});

// ==========================================
// 4. NEGATIVE FUNCTIONAL TESTS (Neg_Fun_0001 - 0010)
// ==========================================

test('Neg_Fun_0001 - Email Transliteration Error', async ({ page }) => {
  const input = 'oyaage email eka sathmi535@gmail.com nedha?';
  const expected = 'ඔයාගෙ email එක sathmi535@gmail.com නේද?'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Website transliterates English username part
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0002 - Password Handling Error', async ({ page }) => {
  const input = 'akkaage laptop eke password eka "gayaaQQjalii$197"';
  const expected = 'අක්කාගෙ laptop eke password එක "gayaaQQjalii$197"'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Passwords should not be transliterated
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0003 - URL Handling Error', async ({ page }) => {
  const input = 'oyaata https://www.sliit.lk/ me URL eka click karala sliit website ekata yanna puluvan.';
  const expected = 'ඔයාට https://www.sliit.lk/ මේ URL එක click කරල sliit website එකට යන්න පුලුවන්.'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Protocol "https" is usually transliterated
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0004 - Phonetic w Issue', async ({ page }) => {
  const input = 'api katharagama yanawaa udhaeesanata puujaavak thiyanna.';
  const expected = 'අපි කතරගම යනවා උදෑසනට පූජාවක් තියන්න..'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: System produces character errors for "w" phonetics
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0005 - Vowel Length (kala)', async ({ page }) => {
  const input = 'mama bath kala vaeda karanavaa';
  const expected = 'මම බත් කාලා වැඩ කරනවා'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Incorrect vowel length changes meaning from "food" to "work"
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0006 - Phonetic w/v Confusion', async ({ page }) => {
  const input = 'ikmanata oya waeda  iwara karalaa gedhara  enna';
  const expected = 'ඉක්මනට ඔය වැඩ  ඉවර කරලා ගෙදර  එන්න'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Confusion between 'w' and 'v' phonetics
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0007 - Spacing/Typo Error', async ({ page }) => {
  const input = 'eka harima ketha pinthuurayak';
  const expected = 'ඒක හරිම කැත පින්තූරයක්'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Fails to correct spacing in common Singlish slang
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0008 - English Word Breakdown', async ({ page }) => {
  const input = 'mama laeptop ekak use karanavaa';
  const expected = 'මම laptop එකක් use කරනවා'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Fails to maintain technical English loanwords
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0009 - Slang/Typo Handling', async ({ page }) => {
  const input = 'mama hariyeta balala naththam';
  const expected = 'මම හරියට බලලා නැත්තම්'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Incorrect transliteration of retroflex consonants in slang
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0010 - Mixed Language Case', async ({ page }) => {
  const input = 'mata Instagram account ekak setup karanna ona';
  const expected = 'මට Instagram account එකක් setup කරන්න ඕන'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Robustness check on mixed case and punctuation
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});
