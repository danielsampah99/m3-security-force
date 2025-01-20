import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Head Office" invert={invert}>
          Plot 123, Ring Road Central,
          <br />
          Accra, Ghana
        </Office>
      </li>
      <li>
        <Office name="Tema Office" invert={invert}>
          Community 1
          <br />
          Tema, Ghana
        </Office>
      </li>
    </ul>
  )
}
