import { FC } from 'react'
import { Container } from '@shared/components/Container'
import { H3, H6 } from '@shared/components/Text'
import { Title } from './components/Title'
import styles from './AboutMe.module.css'

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = () => {
  return (
    <div className={styles.AboutMe}>
      <Container className={styles.Container}>
        <Title />

        <div className={styles.TextBlocks}>
          <section className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My past</H3>
            <H6>
              Some text about my past. It should look like a normal text but I will write 
              text content a bit further because now. I am too busy to think about it and 
              I am actually not able to deal with it. Here I do not want to write complicated 
              text because I will anyway change it later
            </H6>
          </section>

          <section className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My present</H3>
            <H6>
              Some text about my past. It should look like a normal text but I will write
              text content a bit further because now. I am too busy to think about it and 
              I am actually not able to deal with it. Here I do not want to write complicated 
              text because I will anyway change it later
            </H6>
          </section>

          <section className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My future</H3>
            <H6>
              Some text about my past. It should look like a normal text but I will write 
              text content a bit further because now. I am too busy to think about it and 
              I am actually not able to deal with it. Here I do not want to write complicated 
              text because I will anyway change it later
            </H6>
          </section>
        </div>
      </Container>
    </div>
  )
}