import {
  Container,
  Banner,
  BannerContent,
  SessionDetails,
  SessionTitle,
  SessionSubtitle,
  SessionDuration,
  OuterHeaderImage,
  Card,
  CardHeader,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  HeaderSubTitle,
  CardContent,
} from "./booking-card.styles";
import ProfileImgD from "@/assets/images/profile-img-desktop.png";
import ProfileImgM from "@/assets/images/profile-img-mobile.png";
import Ellipse from "@/assets/icons/ellipse.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import Image from "next/image";

export default function BookingCard() {
  return (
    <Container>
      <Banner>
        <BannerContent>
          <SessionDetails>
            <SessionTitle>Cool session</SessionTitle>

            <SessionSubtitle>Additional type</SessionSubtitle>
          </SessionDetails>

          <SessionDuration>
            <Image src={ClockIcon} alt="Clock icon" />
            30 min
          </SessionDuration>
        </BannerContent>

        <Image
          src={Ellipse}
          alt="Ellipse"
          style={{
            width: "301px",
            aspectRatio: 1,
            position: "absolute",
            right: "-57px",
            bottom: "-78px",
          }}
        />
        <OuterHeaderImage src={ProfileImgM.src} alt="Profile image" />
      </Banner>

      <Card>
        <CardHeader>
          <HeaderImage src={ProfileImgD.src} alt="Profile image" />

          <HeaderText>
            <HeaderTitle>Book a Session</HeaderTitle>

            <HeaderSubTitle>
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
