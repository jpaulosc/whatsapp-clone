import { useState, ReactNode, CSSProperties, useEffect, useRef } from 'react'

type PropsItem = {
  title: string
  onClick?: () => void;
  style?: CSSProperties
}

export const DropdownItem =  ({ title, onClick, style }: PropsItem) => {
  return (
    <div tabIndex={0} className="relative hover:bg-[color:var(--dropdown-background-hover)]" style={style} onClick={onClick}>
      <div className="relative grow overflow-hidden text-ellipsis whitespace-nowrap h-10 box-border flex items-center whitespace-nowrap text-[14.5px] leading-[14.5px] text-[color:var(--primary)] cursor-pointer pl-6 pr-[58px]" role="button">{title}</div>
    </div>
  )
}

type Props = {
  onClick?: () => void;
  className?: string | undefined
  children: ReactNode
  style?: CSSProperties
  dropdown?: ReactNode
}

const Button = ({ onClick, className, children, style, dropdown }: Props) => {
  const [status, setStatus] = useState<boolean>(false);
  const wrap = useRef<any>(null);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (!status) {
        return
      }
      const element = e.target as Element
      const isElement = element.isSameNode(wrap.current)
      const containsElement = wrap.current.contains(e.target)
      const hasParent = element.closest('div._3OtEr')?.isSameNode(wrap.current)

      if (!(isElement || containsElement || hasParent)) {
        setStatus(false)
      } else {
      }
    })
  }, [status])

  const handleClick = () => {
    setStatus(!status)
    if (onClick) {
      onClick()
    }
  }

  return (
    <div ref={wrap} className={(`relative h-full flex-none transition-[background-color] ease-in-out duration duration-[0.3s] ease-[ease] active:bg-[color:var(--menu-bar-item-background-active)] rounded-[50%] ml-2.5 first-of-type:ml-0 ${className ?? ''} ${status && dropdown ? 'bg-[color:var(--menu-bar-item-background-active)]' : ''}`).replace(/\s+/g, ' ')} style={style}>
      <div role="button" tabIndex={0} className="p-2" onClick={handleClick}>
        <span>
          {children}
        </span>
      </div>
      {dropdown && status && (
        <div tabIndex={-1} className="text-left absolute z-[10000] max-w-[340px] overflow-visible bg-[color:var(--dropdown-background)] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] px-0 py-[9px] rounded-[3px] right-1 top-11; --tw-shadow: 0 2px 5px 0 rgba(var(--shadow-rgb), 0.26), 0 2px 10px 0 rgba(var(--shadow-rgb), 0.16); --tw-shadow-colored: 0 2px 5px 0 var(--tw-shadow-color), 0 2px 10px 0 var(--tw-shadow-color) flex flex-col" role="application">
          {dropdown}
        </div>
      )}
    </div>
  )
}

export default Button
