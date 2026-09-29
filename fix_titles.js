const fs = require('fs');
const dir = 'src/components/site/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const path = dir + file;
  let content = fs.readFileSync(path, 'utf8');
  let original = content;
  
  // Reverte o erro anterior "<-medium"
  content = content.replace(/<-medium/g, '<h2 className="text-3xl font-medium');
  // Ajuste especifico pro Hero que era h1
  if (file === 'Hero.tsx') {
    content = content.replace(/<h2 className="text-3xl font-medium/g, '<h1 className="mt-6 text-4xl leading-[1.05] font-medium');
  }
  // Ajuste pra Tecnologia
  if (file === 'Tecnologia.tsx') {
    content = content.replace(/<h2 className="text-3xl font-medium/g, '<h2 className="mt-5 text-3xl leading-tight font-medium');
  }

  // Remove extrabold dos normais que não quebraram
  content = content.replace(/font-extrabold/g, 'font-medium');
  content = content.replace(/font-bold/g, 'font-medium');

  if (original !== content) {
    fs.writeFileSync(path, content);
  }
}
