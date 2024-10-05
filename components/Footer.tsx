import TrustBadges from './TrustBadges';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <TrustBadges />
        <div className="text-center mt-4">
          <p>&copy; 2024 iPhone Accessories Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}