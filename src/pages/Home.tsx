import { Button } from '@/components/ui/button';
import { AUTH_ENDPOINTS } from '@/constants/auth';

function Home() {
  return (
    <div className="flex min-h-full items-center justify-center bg-background">
      <Button variant="outline" size="lg" className="rounded-3xl" asChild>
        <a href={AUTH_ENDPOINTS.AUTH}>Login via Github</a>
      </Button>
    </div>
  );
}

export default Home;
