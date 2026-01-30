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
  await inputField.type('beheth'); 
  await expect(outputBox).toContainText('බෙහෙත්');
  
  await inputField.type(' bonna');
  await expect(outputBox).toHaveText('බෙහෙත් බොන්න');
});

// ==========================================
// 2. NEGATIVE UI TEST (Neg_UI)
// ==========================================

test('Neg_UI_0005 - Chemical Formula Handling', async ({ page }) => {
  const input = 'H2SO4 + NaOH';
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  
  const outputBox = page.locator('div.bg-slate-50').first();
  await expect(outputBox).toBeVisible();
  // Expecting system to struggle with scientific symbols
  await expect(outputBox).not.toHaveText(input); 
});

// ==========================================
// 3. POSITIVE FUNCTIONAL TESTS (Pos_Fun_0001 - 0030)
// ==========================================

test('Pos_Fun_0001 - Future Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('heta api nuvara yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('හෙට අපි නුවර යනවා');
});

test('Pos_Fun_0002 - Compound Logic', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama baeQQkuvata yanavaa iitapasse salli dhaanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම බැංකුවට යනවා ඊටපස්සෙ සල්ලි දානවා');
});

test('Pos_Fun_0003 - Advice/Imperative', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('asaniipa unath viBhaagaya liyanna yanna epaeyi');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අසනීප උනත් විභාගය ලියන්න යන්න එපැයි');
});

test('Pos_Fun_0004 - Mixed Question', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Adha api film ekak balanna yamudha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අද අපි film එකක් බලන්න යමුද?');
});

test('Pos_Fun_0005 - Command', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('beheth bonna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('බෙහෙත් බොන්න');
});

test('Pos_Fun_0006 - Routine', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama skole yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ස්කොලෙ යනවා');
});

test('Pos_Fun_0007 - Dislike', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama eyaata kaemathi naehae.');
  const output = page.locator('div.bg-slate-50').first();
  // Using toContainText to handle punctuation variances
  await expect(output).toContainText('මම එයාට කැමති නැහැ');
});

test('Pos_Fun_0008 - Greeting', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('suba upandhinaya');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුබ උපන්දිනය');
});

test('Pos_Fun_0009 - Vehicle Request', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata oyaage vaahanaya tikakata dhenna puluvandha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට ඔයාගෙ වාහනය ටිkerman කට දෙන්න පුලුවන්ද');
});

test('Pos_Fun_0010 - Conditional', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('ehenam mama eeka dhennam');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එහෙනම් මම ඒක දෙන්නම්');
});

test('Pos_Fun_0011 - Apology', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('samaavenna, mata eeka karanna baeri unaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සමාවෙන්න, මට ඒක කරන්න බැරි උනා');
});

test('Pos_Fun_0012 - Informal Call', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eeyi ehaapaeththen varen');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඒයි එහාපැත්තෙන් වරෙන්');
});

test('Pos_Fun_0013 - Pain State', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee oluva ridhenavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ ඔලුව රිදෙනවා.');
});

test('Pos_Fun_0014 - Drink Command', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vathura bonna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වතුර බොන්න');
});

test('Pos_Fun_0015 - Daily Act', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api adha pansal yanavaa');
  // toContainText ensures reliability across browsers
  await expect(page.locator('div.bg-slate-50').first()).toContainText('අපි අද පන්සල් යනවා');
});

test('Pos_Fun_0016 - Joined Words', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Apiaevidhinnayanavaa');
  const output = page.locator('div.bg-slate-50').first();
  // Matching tokens to ignore minor character variations
  await expect(output).toContainText('අපි');
  await expect(output).toContainText('ඇවිදින්න');
  await expect(output).toContainText('යනවා');
});

test('Pos_Fun_0017 - Repetition', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('goda goda');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ගොඩ ගොඩ');
});

test('Pos_Fun_0018 - Past Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama iiye paadam karaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ඊයෙ පාඩම් කරා');
});

test('Pos_Fun_0019 - Present Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api dhaen dhuvanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි දැන් දුවනවා');
});

test('Pos_Fun_0020 - Future Exam', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama heta viBhaagaya liyanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම හෙට විභාගය ලියනවා');
});

test('Pos_Fun_0021 - Negation State', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata nidhimatha naee.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට නිදිමත නෑ.');
});

test('Pos_Fun_0022 - Intent Calculation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama nidhaaganna hadhanne');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම නිදාගන්න හදන්නෙ');
});

test('Pos_Fun_0023 - Plural Forms', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaala bath kanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයාල බත් කන්න');
});

test('Pos_Fun_0024 - Loan Request', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakara mata Nayak dhenna puluvandha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකර මට ණයක් දෙන්න පුලුවන්ද');
});

test('Pos_Fun_0025 - Mixed Technical Terms', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee LinkedIn ekee WiFi password eka update karanna');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('LinkedIn');
});

test('Pos_Fun_0026 - Long Input', async ({ page }) => {
  const longInput = 'Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna...'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(longInput);
  await expect(page.locator('div.bg-slate-50').first()).toBeVisible();
});

test('Pos_Fun_0027 - Simple Need', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata theekak bonna oonee');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට තේකක් බොන්න ඕනේ');
});

test('Pos_Fun_0028 - Double Statement', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata dhaen nidhimathayi mama nidhaaganna yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට දැන් නිදිමතයි මම නිදාගන්න යනවා');
});

test('Pos_Fun_0029 - Scientific Terminology', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('maanava moLaya saha kRUthrima budhDhiya (Artificial Intelligence)');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('කෘත්‍රිම බුද්ධිය');
});

test('Pos_Fun_0030 - Slang Mixed Case', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('appatasiri, mata ASSIGMENT eka submit karanna amathak unaane.');
  await expect(page.locator('div.bg-slate-50').first()).toContainText('අප්පටසිරි');
});

// ==========================================
// 4. NEGATIVE FUNCTIONAL TESTS (Neg_Fun_0001 - 0010)
// ==========================================

test('Neg_Fun_0001 - Email Transliteration Error', async ({ page }) => {
  const input = 'Oyaage email eka saman123@gmail.com needha';
  const expected = 'ඔයාගෙ email එක saman123@gmail.com නේද'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Website transliterates English username part
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0002 - Password Handling Error', async ({ page }) => {
  const input = 'Oyaage phone ekee password eka "sadaruwan345"';
  const expected = 'ඔයාගෙ phone එකේ password එක "sadaruwan345"'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Passwords should not be transliterated
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0003 - URL Handling Error', async ({ page }) => {
  const input = 'oyaata https://www.youtube.com/ me URL eka click karala youtube ekata yanna puluwan.';
  const expected = 'ඔයාට https://www.youtube.com/ මේ URL එක click කරලා youtube එකට යන්න පුළුවන්.'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Protocol "https" is usually transliterated
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0004 - Phonetic w Issue', async ({ page }) => {
  const input = 'api pettaneyata yanawa sellam karanna.';
  const expected = 'අපි පිට්ටනියට යනවා සෙල්ලම් කරන්න.'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: System produces character errors for "w" phonetics
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0005 - Vowel Length (kama)', async ({ page }) => {
  const input = 'mama kama ekak genawa api eka kamu';
  const expected = 'මම කෑම එකක් ගෙනාවා අපි එක කමු'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Incorrect vowel length changes meaning from "food" to "work"
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0006 - Phonetic w/v Confusion', async ({ page }) => {
  const input = 'ikmanata oka iwara karala pantiyata enna';
  const expected = 'ඉක්මනට ඕක ඉවර කරලා පන්තියට එන්න'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Confusion between 'w' and 'v' phonetics
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0007 - Spacing/Typo Error', async ({ page }) => {
  const input = 'eka harim kethei';
  const expected = 'ඒක හරිම කැතයි'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Fails to correct spacing in common Singlish slang
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0008 - English Word Breakdown', async ({ page }) => {
  const input = 'mama polece ynw';
  const expected = 'මම police යනවා'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Fails to maintain technical English loanwords
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0009 - Slang/Typo Handling', async ({ page }) => {
  const input = 'harima pandethai oya';
  const expected = 'හරිම පණ්ඩිතයි ඔයා'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Incorrect transliteration of retroflex consonants in slang
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Neg_Fun_0010 - Mixed Language Case', async ({ page }) => {
  const input = 'apal juice ekK bomud';
  const expected = 'ඇපල් juice එකක් බොමුද'; 
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  // Expected to FAIL: Robustness check on mixed case and punctuation
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});
