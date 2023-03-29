import { FC } from 'react'
import { Appear, Directions } from '@shared/components/Animations'
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
          <Appear from={Directions.Bottom} className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My past</H3>
            <H6>
              My childhood was in Odesa - a big city on south of Ukraine. There, I was 
              studying in Odesa Lyceum #56. I took part in a lot of different olympiads of Maths,
              Physics, Chemistry, Geography, History, Law, Biology, Computer Technologies and so on. 
              As you may understand, I was an excellent student in school. I was easy-to-communicate since
              I was a child. Also, I did sport a lot. I am professional at football, swimming, chess, athletics and many more.
              As well as physically, I developed myself mentally - I learn English since I was 7 years old.
              I started learning programming in 7th grade in 13 years old. Approximately one year, 
              I was learning C# and Python and then I found JavaScript and Web Development. Since that, 
              I am working hard to improve myself at this skill.
            </H6>
          </Appear>

          <Appear from={Directions.Bottom} className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My present</H3>
            <H6>
              Now, I am in Romania because of russian invasion to my motherland Ukraine. 
              Since the 5th March of 2022, I live in Brasov - historical and cultural center 
              of Transylvania, Romania. I am still learning English diligently to be able to communicate
              with people. Now I am looking for my first paid orders and I want to improve my coding skills.
              For this, I sometimes make pet projects to learn new tools and update my knowledge. 
              Sometimes I code applications for personal usage. For example, Homework Tracker and Training Tracker were 
              created to help me monitor my different activities. About the education, I am studying to get to a university 
              easily and it would be better to do it for free. I want to get the education in European Union because here the 
              education is much better that in Ukraine and I want to achieve the best and hardest goals!
            </H6>
          </Appear>

          <Appear from={Directions.Bottom} className={styles.TextBlock}>
            <H3 className={styles.SectionTitle}>My future</H3>
            <H6>
              I am planning to work as a frontend developer so I am going to learn different tools and
              technics to become better. Now, I want to live in European Union and work distantly. Maybe,
              if the war is finished, I will think about getting back to Ukraine to rebuild by country.
              About my personal life, I want to save my best friends and close people because I understood
              what they mean for me. In nearest time, I want to get education in the university and start working 
              by the education I will get. Also, I can say that self-improving became my lifestyle so I am ready to
              work for myself to get better in all things I see as useful for me! My future is full of optimistic plans
              I will definitely realize. I enjoy that I believe in myself and I have such an interesting life!  
            </H6>
          </Appear>
        </div>
      </Container>
    </div>
  )
}