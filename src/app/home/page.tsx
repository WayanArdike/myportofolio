import Link from 'next/link';
import { Metadata } from 'next';
import { Buku } from '@/data/buku';

export const metadata: Metadata = {
    title: "home - wayan ardike",
    description: "Personal Website",
};
export default function Home() {
    return (
        <div className='grid grid-cols-3 mobile:grid-cols-2 tablet:grid-cols-2 mini:grid-cols-1 gap-10 m-5'>
            {Buku.map((item, index) => (
                <ul key={index} className=' bg-slate-500 justify-center items-center rounded-lg flex-col p-3'>
                    <li>
                        {item.judul}
                    </li>
                    <li>
                        {item.halaman}
                    </li>
                    <li>
                        {item.penulis}
                    </li>
                    {item.Daftar.map((item, index) => (
                        <ul key={index}>
                            <li>
                                {item.judul}
                            </li>
                            <li>
                                {item.abstrak}
                            </li>
                        </ul>
                    ))}
                </ul>
            ))}
        </div>
    );
}
