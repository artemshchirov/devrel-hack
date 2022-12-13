import { FC } from 'react';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
