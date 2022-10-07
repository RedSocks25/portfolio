import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties, PropsWithChildren, FC } from 'react'

const style: CSSProperties = {
  color: '#FD545D',
}

interface Props {
  routeName: string;
  href: string;
}

export const ActiveLink: FC<PropsWithChildren<Props>> = ({ routeName, href }) => {
  const { asPath } = useRouter();
  
  return (
    <Link href={ href } passHref key={ href }>
      <a className='text-white m-3' style={ asPath === href ? style : undefined}>{ routeName }</a>
    </Link>
  )
}
