import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

type Props = {};

export default function Announcement({ }: Props) {
    return (
        <div className="bg-[#339FB1] w-full overflow-hidden relative p-5">
            <div className="justify-between whitespace-nowrap animate-marquee flex items-center text-glow">
                <div className="flex items-center mr-8">
                    <FaPhoneAlt className="mr-2" />
                    <p className="font-light text-lg">Got Questions?&nbsp;&nbsp; Call Us Now: 925-237-8403&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <FaEnvelope className="mr-2" />
                    <p className="font-light text-lg">&nbsp;&nbsp;Message Us: info@azcareservicesllc.com&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <FaMapMarkerAlt className="mr-2" />
                    <p className="font-light text-lg">&nbsp;&nbsp;Locate Us:&nbsp;&nbsp; Antioch, CA 94509&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p className="font-light text-lg">&nbsp;&nbsp;Welcome to AZ Transportation and Care Services LLC, where compassion meets care in the comfort of your home. We understand that your loved ones deserve the best, and that’s exactly what we deliver. We’re committed to creating a safe, nurturing, and supportive environment so you can trust that your loved ones are in capable hands.</p>
                </div>
            </div>
        </div>
    );
}
