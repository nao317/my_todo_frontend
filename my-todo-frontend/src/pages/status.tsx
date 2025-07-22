// pages/status.tsx
'use client';

import { useEffect, useState } from 'react';

export default function StatusPage() {
    const [message, setMessage] = useState<string>('Loading...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchStatus = async () => {
        try {
            // const res = await fetch(`http://localhost:8080/`);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.text();
            setMessage(data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(String(err));
            }
        }
    };
    fetchStatus();
}, []);

return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
        <h1>Status</h1>
        {error ? (
            <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
        <p style={{ color: 'green', fontSize: '1.5rem' }}>{message}</p>
        )}
        </main>
    );
}
