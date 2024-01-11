
const renderLicenseBadge = license => {
  if (license !== 'none') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  } else {
    return 'This project is not licensed'
  }
}

const renderLicenseLink = license => {
  if (license !== 'none') {
    return `https://opensource.org/license/${license}/`
  } else {
    return ''
  }
  
}
const renderlicenseSection = (license, name,) => {
  const capName = name.toUpperCase()
  const currentYear = new Date().getFullYear();
  if (license === 'MIT') {
    return ` 
    Copyright ${currentYear} ${capName}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  } else if (license === 'ISC') {
    return `
    Copyright ${currentYear} ${capName}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    `
  } else if (license === 'apache-2.0') {
    return `
    Copyright ${currentYear} ${capName}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `
  } else if (license === 'gpl-3.0') {
    return `
    <title> : <description>
     
    Copyright (C) ${currentYear} ${capName}
    
    This program is free software: 
    you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.
    `
  } else {
    return ''
  }

}

const generateMarkdown = data => {
  console.log(data)

  const { title,
    motivation,
  buildReason,
  problemSolved,
  lessonsLearned,
  installation,
  usage,
  credits,
  features,
  contribute,
  tests,
  email,
  github,
  linkedin,
 } = data

  return `
# ${title}

## Description

${motivation}. ${buildReason}. ${problemSolved}. ${lessonsLearned}.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](tests)
- [Questions](questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

  ${renderlicenseSection(data.license, data.name)}

## Badges

## Features

${features}

## Contribute

${contribute}

This project adheres to [the contributor covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

    "Our Pledge

    We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.

    We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
    Our Standards

    Examples of behavior that contributes to a positive environment for our community include:

        Demonstrating empathy and kindness toward other people
        Being respectful of differing opinions, viewpoints, and experiences
        Giving and gracefully accepting constructive feedback
        Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
        Focusing on what is best not just for us as individuals, but for the overall community

    Examples of unacceptable behavior include:

        The use of sexualized language or imagery, and sexual attention or advances of any kind
        Trolling, insulting or derogatory comments, and personal or political attacks
        Public or private harassment
        Publishing others’ private information, such as a physical or email address, without their explicit permission
        Other conduct which could reasonably be considered inappropriate in a professional setting

    Enforcement Responsibilities

    Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

    Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
    Scope

    This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
    Enforcement

    Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at [INSERT CONTACT METHOD]. All complaints will be reviewed and investigated promptly and fairly.

    All community leaders are obligated to respect the privacy and security of the reporter of any incident.
    Enforcement Guidelines

    Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
    1. Correction

    Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

    Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
    2. Warning

    Community Impact: A violation through a single incident or series of actions.

    Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
    3. Temporary Ban

    Community Impact: A serious violation of community standards, including sustained inappropriate behavior.

    Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
    4. Permanent Ban

    Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.

    Consequence: A permanent ban from any sort of public interaction within the community."

## Tests

${tests}

## Questions

Contact me through [e-mail](mailto:${email})

Connect with me through [GitHub.](https://www.github.com/${github})

Find me on [LinkedIn](https://www.linkedin.com/in/${linkedin})
`;
}

export default generateMarkdown;
