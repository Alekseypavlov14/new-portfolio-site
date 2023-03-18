import { FC } from 'react'
import { ProjectsButton } from './components/ProjectsButton'
import { HireButton } from './components/HireButton'
import { Container } from '@shared/components/Container'
import { Subtitle } from './components/Subtitle'
import { Title } from './components/Title'
import { Photo } from './components/Photo'
import styles from './Introduce.module.css'

interface IntroduceProps {}

export const Introduce: FC<IntroduceProps> = () => {
  return (
    <div className={styles.Introduce}>
      <Container className={styles.Container}>
        <div className={styles.TextContent}>
          <Title />
          <Subtitle />
  
          <div className={styles.Buttons}>
            <HireButton />
            <ProjectsButton />
          </div>
        </div>
        
        <Photo />
      </Container>
    </div>
  )
}