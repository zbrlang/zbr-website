import fs from 'fs';
import path from 'path';

const FUNCTIONS_PATH = './context/functions.json';
const TRIGGERS_PATH = './context/triggers.json';
const CATEGORY_FILE_PATH = './context/categories.txt';
const PAGES_DOCS_PATH = './pages/docs';

async function generateDocs() {
  const functions = JSON.parse(fs.readFileSync(FUNCTIONS_PATH, 'utf8'));
  const triggers = JSON.parse(fs.readFileSync(TRIGGERS_PATH, 'utf8'));
  const categoryLines = fs.readFileSync(CATEGORY_FILE_PATH, 'utf8').split('\n');

  const functionToCategory = {};
  categoryLines.forEach(line => {
    if (line.includes(' - ')) {
      const [fnName, category] = line.split(' - ').map(s => s.trim());
      functionToCategory[fnName] = category;
    }
  });

  // Clean and prepare functions directory
  const functionsDir = path.join(PAGES_DOCS_PATH, 'functions');
  if (fs.existsSync(functionsDir)) fs.rmSync(functionsDir, { recursive: true });
  fs.mkdirSync(functionsDir, { recursive: true });

  const categories = {};
  const categoryMetas = {};

  // Generate individual function files
  functions.forEach(fn => {
    const categoryName = functionToCategory[fn.name] || fn.category || 'General';
    const categoryDirName = categoryName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    const categoryDir = path.join(functionsDir, categoryDirName);
    
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    if (!categories[categoryDirName]) {
      categories[categoryDirName] = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    }

    if (!categoryMetas[categoryDirName]) {
      categoryMetas[categoryDirName] = {};
    }
    categoryMetas[categoryDirName][fn.name] = fn.name;

    const content = `# ${fn.name}

${fn.description}

## Syntax

\`\`\`zbr
${fn.syntax}
\`\`\`

${fn.arguments && fn.arguments.length > 0 ? `
## Arguments

| Name | Type | Required | Default |
| :--- | :--- | :--- | :--- |
${fn.arguments.map(arg => `| ${arg.name} | ${arg.type} | ${arg.required ? 'Yes' : 'No'} | ${arg.default || '-'} |`).join('\n')}
` : ''}

${fn.example ? `
## Example

\`\`\`zbr
${fn.example}
\`\`\`
` : ''}
`;

    fs.writeFileSync(path.join(categoryDir, `${fn.name}.mdx`), content);
  });

  // Create functions meta
  fs.writeFileSync(path.join(functionsDir, '_meta.tsx'), `const meta = ${JSON.stringify(categories, null, 2)};\n\nexport default meta;`);

  // Create meta files for each category
  Object.entries(categoryMetas).forEach(([dirName, meta]) => {
    fs.writeFileSync(path.join(functionsDir, dirName, '_meta.tsx'), `const meta = ${JSON.stringify(meta, null, 2)};\n\nexport default meta;`);
  });

  // Generate triggers
  const triggersDir = path.join(PAGES_DOCS_PATH, 'triggers');
  if (fs.existsSync(triggersDir)) fs.rmSync(triggersDir, { recursive: true });
  
  const eventsDir = path.join(triggersDir, 'events');
  const interactionDir = path.join(triggersDir, 'interactions');
  fs.mkdirSync(eventsDir, { recursive: true });
  fs.mkdirSync(interactionDir, { recursive: true });

  const eventsMeta = {};
  [...triggers]
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(trigger => {
      eventsMeta[trigger.name] = trigger.name;
      const content = `# ${trigger.name}

${trigger.description}

## When it fires

${trigger.when}

${trigger.context && Object.keys(trigger.context).length > 0 ? `
## Available Context Variables

| Variable | Description |
| :--- | :--- |
${Object.entries(trigger.context).map(([key, val]) => `| ${key} | ${val} |`).join('\n')}
` : ''}
`;
      fs.writeFileSync(path.join(eventsDir, `${trigger.name}.mdx`), content);
    });

  // Add the specific onInteraction trigger
  const interactionContent = `# onInteraction

Fires every time a user interacts with a component (buttons, select menus, modals).

## When it fires

Triggered on any component interaction.

## Available Context Variables

| Variable | Description |
| :--- | :--- |
| author_id | User ID who interacted |
| username | User username |
| custom_id | The custom ID of the component |
| component_type | The type of component (button, select, etc) |
| values | Selected values (for select menus) |
| channel_id | Channel ID |
| guild_id | Guild ID |
`;
  fs.writeFileSync(path.join(interactionDir, 'onInteraction.mdx'), interactionContent);

  // Create triggers meta
  fs.writeFileSync(path.join(eventsDir, '_meta.tsx'), `const meta = ${JSON.stringify(eventsMeta, null, 2)};\n\nexport default meta;`);
  fs.writeFileSync(path.join(interactionDir, '_meta.tsx'), `const meta = { "onInteraction": "onInteraction" };\n\nexport default meta;`);
  fs.writeFileSync(path.join(triggersDir, '_meta.tsx'), `const meta = {
  "events": "Events",
  "interactions": "Interactions"
};\n\nexport default meta;`);

  console.log('✅ Documentation generated successfully!');
}

generateDocs().catch(console.error);
