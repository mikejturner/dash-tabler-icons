const templateFile = require('template-file');
const { render, renderFile } = templateFile;
const fs = require('fs');
const tabler = require('@tabler/icons');

const icons = Object.keys(tabler)

async function generate_icon_tsx() {
    for (const icon of icons) {
        const output = await renderFile('scripts/icon.tsx.template', {"iconName": icon})
        const filename = `src/ts/components/${icon}.tsx`
        fs.writeFileSync(filename, output)
    }
}

async function generate_index_ts() {
    const output = await renderFile('scripts/index.ts.template', {"icons": icons})
    const filename = `src/ts/index.ts`
    fs.writeFileSync(filename, output)
}

generate_icon_tsx();
generate_index_ts();

