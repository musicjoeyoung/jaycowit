import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components = [
  'About',
  'Art',
  'Coaching',
  'Contact',
  'Editing',
  'Footer',
  'Press',
  'Radio',
  'ScrollArrow',
  'SoundDesign',
  'Voice',
  'AlbumSelectors/AlbumSelector1',
  'AlbumSelectors/AlbumSelector2',
  'AlbumSelectors/AlbumSelector3',
  'AlbumSelectors/AlbumSelector4',
];

components.forEach(component => {
  const componentPath = path.join(__dirname, 'src', 'components', `${component}.jsx`);
  
  try {
    if (fs.existsSync(componentPath)) {
      let content = fs.readFileSync(componentPath, 'utf8');
      
      // Check if the component uses darkMode prop
      if (content.includes('darkMode')) {
        // Import useTheme
        if (!content.includes('useTheme')) {
          content = content.replace(
            /^import\s+[^\n]+\n/m,
            match => match.replace('\n', '\nimport { useTheme } from \'../../contexts/ThemeContext\';\n')
          );
        }
        
        // Update component to use useTheme
        content = content.replace(
          /const\s+\w+\s*=\s*\(\s*\{\s*darkMode\s*\}\s*\)\s*=>\s*{/,
          match => {
            const componentName = match.match(/const\s+(\w+)\s*=/)[1];
            return `const ${componentName} = () => {\n  const { darkMode } = useTheme();`;
          }
        );
        
        fs.writeFileSync(componentPath, content, 'utf8');
        console.log(`Updated ${component}`);
      } else {
        console.log(`Skipped ${component} - no darkMode prop found`);
      }
    } else {
      console.log(`Skipped ${component} - file not found`);
    }
  } catch (error) {
    console.error(`Error processing ${component}:`, error.message);
  }
});

console.log('Theme context update complete!');
