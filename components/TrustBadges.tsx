import Image from 'next/image';

const trustBadges = [
  { name: 'SSL Secure', icon: '/icons/ssl-secure.svg' },
  { name: 'Money-back Guarantee', icon: '/icons/money-back-guarantee.svg' },
  { name: 'Trusted Shop', icon: '/icons/trusted-shop.svg' },
  { name: 'PCI Compliant', icon: '/icons/pci-compliant.svg' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-4">
      {trustBadges.map((badge) => (
        <div key={badge.name} className="flex flex-col items-center">
          <Image
            src={badge.icon}
            alt={`${badge.name} badge`}
            width={60}
            height={60}
            className="mb-2"
          />
          <span className="text-xs text-gray-600 dark:text-gray-300">{badge.name}</span>
        </div>
      ))}
    </div>
  );
}