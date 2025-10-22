export default function SimpleBarChart({ data = [] }){
  // data: [{label, value}]
  const max = Math.max(...data.map(d=>d.value), 1)
  return (
    <div className="w-full max-w-xl mx-auto">
      <svg viewBox={`0 0 100 ${data.length * 12 + 10}`} className="w-full h-40">
        {data.map((d,i)=>{
          const h = (d.value / max) * 60
          const y = 10 + i*12
          return (
            <g key={i}>
              <rect x="20" y={y} width={Math.max(5, (d.value/max)*70)} height="8" rx="2" fill="#ffd400" />
              <text x="0" y={y+6} fontSize="3.5" fill="#333">{d.label}</text>
              <text x={22 + Math.max(5, (d.value/max)*70)} y={y+6} fontSize="3.5" fill="#222">{d.value}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
