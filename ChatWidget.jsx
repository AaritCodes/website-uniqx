import { useState } from 'react'

export default function ChatWidget(){
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)

  async function send(){
    if(!msg) return
    try{
      const res = await fetch('/api/messages', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name, msg})})
      if(res.ok){ setSent(true); setMsg('') }
    }catch(e){ console.error(e) }
  }

  return (
    <div>
      <div className="fixed bottom-6 right-6">
        <button onClick={()=>setOpen(!open)} className="bg-uniqYellow p-3 rounded-full shadow-lg">💬</button>
      </div>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg p-4">
          <h4 className="font-semibold">Chat with UniqX</h4>
          <input className="border p-2 rounded w-full mt-2" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
          <textarea className="border p-2 rounded w-full mt-2" rows="4" placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} />
          <div className="flex gap-2 mt-2">
            <button onClick={send} className="px-3 py-2 bg-uniqYellow rounded">Send</button>
            <button onClick={()=>{setOpen(false); setSent(false)}} className="px-3 py-2 border rounded">Close</button>
          </div>
          {sent && <div className="mt-2 text-sm text-green-600">Message sent. We'll respond via email/phone.</div>}
        </div>
      )}
    </div>
  )
}
