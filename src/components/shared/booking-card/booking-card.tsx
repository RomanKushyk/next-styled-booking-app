"use client";
import {
  Container,
  Banner,
  BannerContent,
  SessionDetails,
  SessionTitle,
  SessionSubtitle,
  SessionDuration,
  BannerBg,
  BannerProfileImage,
  BannerProfileImageBg,
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
import Background from "@/assets/icons/background-m.svg";
import Image from "next/image";
import Button from "@/components/ui/button/button";

export default function BookingCard() {
  return (
    <Container>
      <Banner>
        <BannerBg src={Background.src} alt="background" />

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

        <BannerProfileImageBg src={Ellipse.src} alt="Profile image bacground" />

        <BannerProfileImage src={ProfileImgM.src} alt="Profile image" />
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

        <CardContent>
          <div>affaff</div>

          <Button isActive={false}>Confirm</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
