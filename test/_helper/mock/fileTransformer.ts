const path = require('path');

export default {
    // @ts-ignore
    process(src: string, filename: string) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    },
};
