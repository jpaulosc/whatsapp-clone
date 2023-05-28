import { ReactNode, CSSProperties } from 'react'

type Props = {
  onClick?: () => void;
  children: ReactNode
}

const Avatar = ({ onClick, children }: Props) => {
  return (
    <div className="g0rxnol2 g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb" style={{ height: "40px", width: "40px", cursor: "pointer" }} onClick={onClick}>
      {children}
    </div>
  )
}

export default Avatar
