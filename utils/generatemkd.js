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
  liscence,
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
  - ${motivation}
  - ${buildReason}
  - ${problemSolved}
  - ${lessonsLearned}

  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#Badges)
  - [Features](#Features)
  - [How to Contribute](#How to Contribute)
  - [Tests](Tests)
  - [Questions](Questions)
  
  ## Installation
    ${installation}
  
  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ## License

  ${liscence}

  ## Badges
 
  ## Features

  ${features}

  ## How to Contribute

  ${contribute}

  ## Tests
  
  ${tests}

  ## Questions

  Contact me through [e-mail](mailto:${email})

  Connect with me through [GitHub.](https://www.github.com/${github})

  Find me on [LinkedIn](https://www.linkedin.com/in/${linkedin})


`;
}

export default generateMarkdown;
