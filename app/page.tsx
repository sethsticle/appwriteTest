import Image from 'next/image';
import { UserProvider } from './lib/';
export default function Home() {
  return (
    <div>
      {/* <UserProvider> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
