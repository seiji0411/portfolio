export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@kjeih0411',
  site: 'seiji-portfolio.vercel.app',
  calendly: 'https://calendly.com/seijiito1102/30min',
  links: {
    github: 'https://github.com/seiji0411',
    linkedin: 'https://www.linkedin.com/in/seiji-ito-a4508a384/',
    twitter: 'https://x.com/kjeih0411',
    email: 'mailto:seijiito1102@gmail.com',
  },
};
