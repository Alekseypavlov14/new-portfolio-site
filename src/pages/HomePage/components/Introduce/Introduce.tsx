import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
import { ProjectsButton } from './components/ProjectsButton'
import { HireButton } from '@features/hiring'
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
  
          <Appear 
            className={styles.Buttons}
            from={Directions.Bottom} 
          >
            <HireButton />
            <ProjectsButton />
          </Appear>
        </div>
        
        <Photo />
      </Container>
    </div>
  )
}