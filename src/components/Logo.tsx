import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logoImage from '@/images/m3_security-transparent.png'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <Image
      src={logoImage}
      alt="M3 Security Force Logo"
      height={24}
      width={24}
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        fillOnHover && 'group/logo',
        className,
        'flex items-start gap-x-1',
      )}
    >
      <p>M3 SECURITY FORCE </p>
    </div>
  )
}
