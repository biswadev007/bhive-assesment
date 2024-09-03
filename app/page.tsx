import Container from '@/components/shared/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopSection from '@/components/TopSection';
import Facilities from '@/components/Facilities';
import WorkspaceList from '@/components/WorkspaceList';
import BottomSection from '@/components/BottomSection';

export default function Home() {
  return (
    <>
      <Header />
      <TopSection />
      <Container>
        <Facilities />
        <WorkspaceList />
        <BottomSection />
      </Container>
      <Footer />
    </>
  );
}
