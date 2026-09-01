export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  skype = 'skype',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@kjeih0411',
  site: 'seiji-portfolio-kzar1102.vercel.app',
  calendly: 'https://calendly.com/seijiito1102/30min',
  links: {
    github: 'https://github.com/kjeih',
    linkedin: 'https://www.linkedin.com/in/seiji-ito',
    twitter: 'https://twitter.com/kjeih0411',
    youtube: 'https://www.youtube.com/c/kjeih0411',
    email: 'mailto:seijiito1102@gmail.com',
    skype: 'https://join.skype.com/invite/jdRxtXdi10d9',
  },
};
