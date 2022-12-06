import styles from './alert.module.css'
import cn from 'classnames'
import type { ReactElement } from 'react'

interface AlertProps {
  children: ReactElement[],
  type?: 'success' | 'error' | undefined
}

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  )
}