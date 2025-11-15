import {
  Container,
  OuterHeader,
  Card,
  CardHeader,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  HeaderSubTitle,
  CardContent,
} from "./booking-card.styles";
import ProfileImgD from "@/assets/images/profile-img-desktop.png";

export default function BookingCard() {
  return (
    <Container>
      <OuterHeader></OuterHeader>

      <Card>
        <CardHeader>
          <HeaderImage src={ProfileImgD.src} alt="Profile" />

          <HeaderText>
            <HeaderTitle as="h1">Book a Session</HeaderTitle>

            <HeaderSubTitle as="p">
              Choose a date and time that is convenient for you to e-meet your
              stylist
            </HeaderSubTitle>
          </HeaderText>
        </CardHeader>

        <CardContent></CardContent>
      </Card>
    </Container>
  );
}
