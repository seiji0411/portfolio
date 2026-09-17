import clsx from 'clsx';
import { Colors } from 'config/colors';
import { contact, ContactType } from 'config/contact';
import React, { memo } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';
import { Maybe, Tuple } from 'types';

const asIcon = (Icon: IconType) => Icon as React.ComponentType<IconBaseProps>;
const LinkedinIcon = asIcon(FaLinkedinIn);
const TwitterIcon = asIcon(FaXTwitter);
const GithubIcon = asIcon(IoLogoGithub);
const MailIcon = asIcon(SiGmail);

interface SocialIconsProps {
  className?: string;
}

function SocialIcons(props: SocialIconsProps): React.ReactElement {
  const { className } = props;

  return (
    <div className={clsx('mt-2 flex', className)}>
      {React.Children.toArray(Object.entries(contact.links).map(resolveIcon))}
    </div>
  );
}

function resolveIcon(entry: Tuple<string>): React.ReactNode {
  const [type, url] = entry;

  const props: IconBaseProps = {
    className: 'icon cursor-pointer text-2xl mr-6',
    color: Colors[type],
  };

  let icon: Maybe<React.ReactNode> = null;

  switch (type) {
    case ContactType.linkedin:
      icon = <LinkedinIcon {...props} />;
      break;

    case ContactType.twitter:
      icon = <TwitterIcon {...props} />;
      break;

    case ContactType.github:
      icon = <GithubIcon {...props} />;
      break;

    case ContactType.email:
      icon = <MailIcon {...props} />;
      break;
    default:
      break;
  }

  return (
    <a
      className='social-icons'
      href={url}
      aria-label={type}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  );
}

export default memo(SocialIcons);
