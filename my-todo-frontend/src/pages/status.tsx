// pages/status.tsx
import { useEffect, useState } from 'react';

export default function StatusPage() {
    const [message, setMessage] = useState<string>('Loading...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    fetch('http://localhost:8080/')
    .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
    })
    .then((data) => setMessage(data))
    .catch((err) => setError(err.message));
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
