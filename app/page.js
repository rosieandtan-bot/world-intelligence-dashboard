'use client';
import {useState} from 'react';
import data from '../data.json';

export default function Page(){
 const [filter,setFilter]=useState('All');
 const [open,setOpen]=useState({});
 const cats=['All','AI','Geopolitics','Markets','Social'];
 const rows=data.stories.filter(s=>filter==='All'||s.cat===filter);
 return <main className="wrap">
  <header><div><h1>World Intelligence Dashboard</h1><p>AI · Geopolitics · Markets · Social & Internet</p></div><span className="badge">Updated {data.date} · Sydney</span></header>
  <div className="filters">{cats.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div>
  <div className="grid">
   <section className="panel"><h2>🔥 Top developments</h2>{rows.map(s=><article key={s.id}>
    <div className="head" onClick={()=>setOpen({...open,[s.id]:!open[s.id]})}><div><strong>{s.title}</strong><small>{s.cat} · {s.importance} importance</small></div><b>{open[s.id]?'−':'＋'}</b></div>
    {open[s.id]&&<div className="body"><label>Quick summary</label><p>{s.summary}</p><label>What it means</label><p className="callout">{s.meaning}</p><div className="chips">{s.impact.map(x=><span key={x}>{x}</span>)}</div><a href={s.source} target="_blank">Read original source ↗</a></div>}
   </article>)}</section>
   <aside>
    <section className="panel"><h2>⚡ Opportunities & threats</h2><div className="card"><b>OPPORTUNITY</b><p>Agentic AI can expand demand for cloud, routing, observability and workflow infrastructure.</p></div><div className="card"><b>WATCH</b><p>Bitcoin can benefit from liquidity and risk appetite, but tighter rates and energy-driven inflation remain counterforces.</p></div><div className="card"><b>OPPORTUNITY</b><p>Social changes increasingly reward interactive creative and community design.</p></div></section>
    <section className="panel"><h2>🔄 Old vs new</h2><div className="card"><strong>YouTube</strong><p>Old: headline views carried more meaning.<br/>New: engaged views matter more for real attention.</p></div><div className="card"><strong>TikTok</strong><p>Old: comments were mostly passive.<br/>New: comments are becoming richer participation surfaces.</p></div></section>
   </aside>
  </div>
 </main>
}