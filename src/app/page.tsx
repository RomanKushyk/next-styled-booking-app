import { Container } from "./page.styles";
import Header from "@/components/shared/header/header";
import BookingCard from "@/components/shared/booking-card/booking-card";

export default function Home() {
  return (
    <Container>
      <Header />

      <BookingCard />
    </Container>
  );
}
