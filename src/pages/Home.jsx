import { Container, Heading, HeadingMedium, Preferences, Preference, Text } from "./Home.styled"
const Home = () => {
  return (
    <Container>
      <Heading>Why Choose Us?</Heading>
      <Preferences>
        <Preference>
<HeadingMedium>Premium Service</HeadingMedium>
<Text>Rent Car provides high-quality service to everyone who is looking for reliable car rentals.</Text>
</Preference>
        <Preference>
<HeadingMedium>Variety of Locations</HeadingMedium>
<Text>We have a variety of car rental offices located throughout the USA in almost all 50 states.</Text>
</Preference>
        <Preference>
<HeadingMedium>Qualified Team</HeadingMedium>
<Text>You can fully rely on our team of professionals who are always ready to help you.</Text>
</Preference>
      </Preferences>
      </Container>

  )
}
export default Home;