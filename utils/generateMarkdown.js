const renderLicenseBadge = (license) =>
  license !== 'None' ? `[![License badge](https://img.shields.io/badge/liscense-${license.split(' ').join('%20')}-blue)](./LICENSE)` : '';

const renderLicenseSection = (license) => 
  license !== 'None' ? `This project is licensed under the [${license} license](LICENSE).` : 'None';

const generateMarkdown = (data) => 
`# ${data.title}  

${renderLicenseBadge(data.license)}  

## Description  

${data.description}  

## Table of Contents  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)  

## Installation  

${data.installation}  

## Usage  

${data.usage}  

## License  

${renderLicenseSection(data.license)}  

## Contribute  

${data.contribute}  

## Tests  

${data.test}  

## Questions  

If you have any questions about the repository, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.name}](https://github.com/${data.name}).
`

module.exports = generateMarkdown;
