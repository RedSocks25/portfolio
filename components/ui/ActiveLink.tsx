import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react'


interface Props {
  routeName: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ routeName, href }) => {
  const { asPath } = useRouter();
  
  return (
    <Link href={ href } passHref key={ href }>
      <a className={`m-3 ${ asPath === href ? 'text-cerulean-blue' : 'text-white' } font-semibold`}>{ routeName }</a>
    </Link>
  )
}
