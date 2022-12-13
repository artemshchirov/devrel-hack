import { FC } from 'react';
import CustomLink from '../../components/CustomLink';

interface CardProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin?: string;
  github?: string;
  link?: string;
}

const Card: FC<CardProps> = ({
  name,
  role,
  image,
  email,
  linkedin,
  github,
  link,
}) => {
  return (
    <article className="flex flex-col justify-center w-full px-8 mx-2 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
      <img
        alt="Team member"
        className="self-center flex-shrink-0 object-cover w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
        src={image}
      />
      <div className="flex-1 my-4">
        <p className="text-xl font-semibold leading-snug">{name}</p>
        <p>{role}</p>
      </div>
      <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
        <button
          onClick={() => {
            navigator.clipboard.writeText(email);
          }}
        >
          <i className="pi pi-envelope w-5 h-5" />
        </button>
        {linkedin ? (
          <CustomLink href={linkedin}>
            <i className="pi pi-linkedin w-5 h-5" />
          </CustomLink>
        ) : null}
        {github ? (
          <CustomLink href={github}>
            <i className="pi pi-github w-5 h-5" />
          </CustomLink>
        ) : null}
        {link ? (
          <CustomLink href={link}>
            <i className="pi pi-briefcase w-5 h-5" />
          </CustomLink>
        ) : null}
      </div>
    </article>
  );
};

export default Card;
