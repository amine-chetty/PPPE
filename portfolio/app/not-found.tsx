import { Container } from '@/components/container';
import Link from 'next/link';
import { Button } from '@/components/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <Container size="sm">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
