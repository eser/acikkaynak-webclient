import {
  Flex,
  Box,
  BorderBox,
  Heading,
  Pagehead as PrimerPagehead,
  ButtonPrimary,
  Text,
  CircleBadge,
} from '@primer/components'
import Container from './components/Container/Container'
import Pagehead from './components/Pagehead/Pagehead'
import {
  FileBadgeIcon,
  MortarBoardIcon,
  RocketIcon,
} from '@primer/octicons-react'
import Card from './components/Card/Card'
import Section from './components/Section/Section'
import Spacer from './components/Spacer/Spacer'

function Certificates () {
  return (
    <>
      <Container>
        <Pagehead title="Sertifikalar"
                  description={'Sertifikalar sayesinde profilinde marifetlerini sergileyebilirsin'}
                  icon={FileBadgeIcon}>
        </Pagehead>

        <Spacer/>

        <Section>
          <Section.Header>
            <Section.Icon icon={RocketIcon}/>
            <Section.Title>Web Development</Section.Title>
          </Section.Header>

          <Card width={1 / 2}>
            <Card.Icon icon={MortarBoardIcon}/>

            <Card.Header>
              <Card.Title>
                Web Development Basics
              </Card.Title>
            </Card.Header>

            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Body>

            <Card.Footer>
              <ButtonPrimary mt={2}>Başvur</ButtonPrimary>
            </Card.Footer>
          </Card>
        </Section>
      </Container>
    </>
  )
}

export { Certificates as default }
