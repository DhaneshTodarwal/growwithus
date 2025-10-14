import Image from 'next/image'
import React from 'react'

type Props = { children?: React.ReactNode }

export const MDXComponents = {
  img: (props: any) => (
    // Allow <img> fallback for simple MDX images
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} className={`rounded-lg ${props.className || ''}`} />
  ),
  Image,
  Callout: ({ children }: Props) => (
    <div className="p-4 border rounded-lg bg-glassmorphism-bg border-glassmorphism-border">{children}</div>
  ),
}
