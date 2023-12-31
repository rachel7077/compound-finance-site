//import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { extraBoldManrope } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${extraBoldManrope.className} flex flex-row items-center leading-none text-blue-400`}
    >
      <p className="text-[20px]">Compound</p>
    </div>
  );
}
