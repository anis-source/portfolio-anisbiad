'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Play, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type MediaType = 'image' | 'video' | 'pdf';

interface Creation {
    id: string;
    type: MediaType;
    src: string;
    title: string;
    thumbnail?: string;
}

const creations: Creation[] = [
    { id: '1', type: 'image', src: '/creations/Diamond.png', title: 'Diamond Concept' },
    { id: '3', type: 'image', src: '/creations/Chaise.png', title: 'Furniture Design' },
    { id: '4', type: 'image', src: '/creations/cars2.png', title: 'Automotive Concept' },
    { id: '6', type: 'image', src: '/creations/three.png', title: 'Chaise Model 1' },
    { id: '7', type: 'image', src: '/creations/untitled.png', title: 'Chaise Model 2' },
    { id: '8', type: 'video', src: '/creations/OceanPartOne.mp4', title: 'Ocean Animation' },
];

const planches = [
    { id: 'p1', title: 'Architecture Project - Part 1', src: '/planches/Planches_01.pdf' },
    { id: 'p2', title: 'Architecture Project - Part 2', src: '/planches/Planches_02.pdf' },
    { id: 'p3', title: 'Architecture Project - Part 3', src: '/planches/Planches_03.pdf' },
    { id: 'p4', title: 'Architecture Project - Part 4', src: '/planches/Planches_04.pdf' },
    { id: 'p5', title: 'Architecture Project - Part 5', src: '/planches/Planches_05.pdf' },
];

export default function CreationsPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const { t } = useLanguage();

    const selectedItem = creations.find((c) => c.id === selectedId);

    return (
        <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter"
            >
                {t.creations.title}
            </motion.h1>

            {/* 3D / Digital Art Section */}
            <div className="mb-24">
                <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <h2 className="text-3xl font-bold mb-2">{t.creations.digitalTitle}</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg italic">
                        {t.creations.blenderContext}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {creations.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className="group relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.type === 'image' ? (
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        muted
                                        loop
                                        playsInline
                                        onMouseOver={(e) => e.currentTarget.play()}
                                        onMouseOut={(e) => e.currentTarget.pause()}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <Play className="w-12 h-12 text-white opacity-80" fill="currentColor" />
                                    </div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-medium text-lg">{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Architecture Section */}
            <div>
                <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <h2 className="text-3xl font-bold mb-2">{t.creations.architectureTitle}</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg italic max-w-3xl">
                        {t.creations.pfeContext}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {planches.map((planche) => (
                        <a
                            key={planche.id}
                            href={planche.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl hover:border-black dark:hover:border-white transition-colors"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <FileText className="w-10 h-10 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">PDF</span>
                            </div>
                            <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{planche.title}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.creations.viewBoard}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
                            onClick={() => setSelectedId(null)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            layoutId={selectedId}
                            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'image' ? (
                                <Image
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <video
                                    src={selectedItem.src}
                                    controls
                                    autoPlay
                                    muted // Muted by default as requested, user can unmute
                                    className="max-w-full max-h-full shadow-2xl"
                                />
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-8 left-0 right-0 text-center text-white"
                        >
                            <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
