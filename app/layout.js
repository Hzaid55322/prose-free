'use client'
import { useState } from 'react'

export default function Home() {
  const [tab, setTab] = useState('book')
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function analyze() {
    if (!text.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/analyze-free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      const data = await res.json()
      setResult(data.analysis || 'Error')
    } catch (e) {
      setResult('Error: ' + e.message)
    }
    setLoading(false)
  }

  async function generate() {
    if (!text.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/youtube-free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: text, genre: 'educational' })
      })
      const data = await res.json()
      setResult(data.script || 'Error')
    } catch (e) {
      setResult('Error: ' + e.message)
    }
    setLoading(false)
  }

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', background: '#0a0a0a', color: '#e0e0e0' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #222', display: 'flex', gap: 10 }}>
        <button onClick={() => setTab('book')} style={{ padding: '8px 16px', background: tab === 'book' ? '#22aa44' : '#333', border: 'none', borderRadius: 6, color: '#fff', cursor: 'pointer' }}>Book Editor</button>
        <button onClick={() => setTab('youtube')} style={{ padding: '8px 16px', background: tab === 'youtube' ? '#22aa44' : '#333', border: 'none', borderRadius: 6, color: '#fff', cursor: 'pointer' }}>YouTube Creator</button>
      </div>
      <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." style={{ width: '100%', minHeight: 150, padding: 10, background: '#1a1a1a', border: '1px solid #222', color: '#e0e0e0', borderRadius: 6, fontFamily: 'inherit' }} />
        <button onClick={tab === 'book' ? analyze : generate} disabled={loading} style={{ marginTop: 10, padding: '10px 20px', background: loading ? '#666' : '#22aa44', border: 'none', borderRadius: 6, color: '#000', fontWeight: 600, cursor: 'pointer' }}>
          {loading ? 'Loading...' : (tab === 'book' ? 'Analyse' : 'Generate')}
        </button>
        {result && <div style={{ marginTop: 20, padding: 16, background: '#1a1a1a', borderRadius: 6, whiteSpace: 'pre-wrap', fontSize: 13, color: '#bbb', maxHeight: 400, overflow: 'auto' }}>{result}</div>}
      </div>
    </div>
  )
}
