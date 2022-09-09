// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import Router from 'next/router';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  // var c = '';
  // for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
  //   if (i % 7 === 0) {
  //     c += Object.keys(bin).sort()[i - 1] + '\n';
  //   } else {
  //     c += Object.keys(bin).sort()[i - 1] + ' * ';
  //   }
  // }
  return `Welcome! Here are all the available commands:
\n${commands}\n
Type 'neofetch' to display summary.\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const exit = async (args: string[]): Promise<string> => {
  Router.back();
  return 'exiting ...';
};

export const gui = async (args: string[]): Promise<string> => {
  Router.replace('/');
  return 'opening in gui ...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
# bitcoin address
- ${config.donate_urls.bitcoin}
`;
};
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening instagram...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  let visitor = window.sessionStorage.getItem('visitorName');
  return `${visitor}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `bunch
of
fake
directories
and
files`;
};
//  --theme--

// export const theme = async (args: string[]): Promise<string> => {
//   let html = document.querySelector('html');
//   if (`${args}` == 'dark') {
//     window.sessionStorage.setItem('theme', 'dark');
//     html.classList.add('dark');
//     return `changing theme to dark ...`;
//   } else if (`${args}` == 'light') {
//     window.sessionStorage.setItem('theme', 'light');
//     html.classList.remove('dark');
//     return `changing theme to light ..`;
//   } else {
//     return `available options are dark and light.`;
//   }
// };

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return `why don't, tell me where we are going.\nopps!, are you asking about date today\nit's ${new Date().toString()}`;
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah!, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `nice choice, but emacs is better.`;
};

export const touch = async (args: string[]): Promise<string> => {
  return `bro i don't have more space in my server.\nif you want to help, you can type 'donate'`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `emacs is too much complicated, why don't you try codium.`;
};

export const codium = async (args?: string[]): Promise<string> => {
  return `why should i use my resources?\njust install it in your local machine and use it.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗░░██╗░█████╗░███╗░░░███╗░█████╗░██╗░░░░░
██║░██╔╝██╔══██╗████╗░████║██╔══██╗██║░░░░░
█████═╝░███████║██╔████╔██║███████║██║░░░░░
██╔═██╗░██╔══██║██║╚██╔╝██║██╔══██║██║░░░░░
██║░╚██╗██║░░██║██║░╚═╝░██║██║░░██║███████╗
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝

Type 'help' to see the list of available commands.
Type 'neofetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type 'gui' to open graphical interface.
`;
};
