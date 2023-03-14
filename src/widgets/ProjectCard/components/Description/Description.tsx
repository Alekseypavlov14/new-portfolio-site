import { FC, useMemo } from "react"
import { MAX_DESCRIPTION_LENGTH } from "./../../const"
import { isTextLong } from "./../../utils/isTextLong"
import { useToggle } from "@shared/hooks/useToggle"
import { MoreLink } from "../MoreLink"
import styles from "./Description.module.css"

interface DescriptionProps {
  text: string
}

const Description: FC<DescriptionProps> = ({ text }) => {
  const [isOpened, toggleOpened] = useToggle(false)
  const isLong = useMemo(() => isTextLong(text), [text])

  if (!isLong) return  (
    <span>{text}</span>
  )

  return (
    <div className={styles.Description}>
      {isOpened 
        ? <span onClick={toggleOpened}>{text}</span> 
        : <>
          <span>{text.slice(0, MAX_DESCRIPTION_LENGTH)}...</span>
          <MoreLink onClick={toggleOpened} />
        </>
      }
    </div>
  )
}

export { Description }
