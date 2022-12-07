import type { ReactElement } from 'react'
import cn from 'classnames'
import styles from './alert.module.css'

interface AlertProps {
  children: ReactElement[],
  type?: 'success' | 'error' | undefined
}

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
