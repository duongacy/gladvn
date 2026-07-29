const fs = require('fs');

async function translate(text) {
  const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=${encodeURIComponent(text)}`);
  const data = await res.json();
  return data[0][0][0];
}

async function main() {
  const missing = JSON.parse(fs.readFileSync('missing_strings.json', 'utf8'));
  const isVietnamese = (str) => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);
  
  const toTranslate = missing.filter(isVietnamese);
  console.log(`Need to translate ${toTranslate.length} strings`);
  
  const dict = {};
  try {
      const existing = JSON.parse(fs.readFileSync('auto_translated.json', 'utf8'));
      Object.assign(dict, existing);
  } catch(e) {}
  
  let translatedCount = 0;
  for (let i = 0; i < toTranslate.length; i++) {
    const text = toTranslate[i];
    if (dict[text]) continue;
    
    try {
        const eng = await translate(text);
        dict[text] = eng;
        translatedCount++;
        console.log(`Translated [${i+1}/${toTranslate.length}]: ${text} -> ${eng}`);
        await new Promise(r => setTimeout(r, 200)); // sleep to avoid rate limits
    } catch (e) {
        console.error(`Failed to translate: ${text}`, e.message);
    }
    
    if (translatedCount % 10 === 0) {
        fs.writeFileSync('auto_translated.json', JSON.stringify(dict, null, 2));
    }
  }
  
  fs.writeFileSync('auto_translated.json', JSON.stringify(dict, null, 2));
  console.log("Done!");
}

main();
