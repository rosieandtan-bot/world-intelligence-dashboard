'use client';
import {useState} from 'react';
import data from '../data.json';

const catIcon={AI:'✦',Geopolitics:'◆',Markets:'↗',Social:'◎'};

export default function Page(){
 const [filter,setFilter]=useState('All');
 const [open,setOpen]=useState({});
 const cats=['All','AI','Geopolitics','Markets','Social'];
 const rows=data.stories.filter(s=>filter==='All'||s.cat===filter);
 return <main className="wrap">
  <header className="hero">
   <div className="eyebrow">DAILY GLOBAL SIGNALS</div>
   <h1>World Intelligence Dashboard</h1>
   <p>AI · Geopolitics · Markets · Social & Internet</p>
   <span className="badge">Updated {data.date} · Sydney</span>
  </header>

  <section className="legend" aria-label="Signal legend">
   <div><span className="dot red"></span><b>Red</b><small>High importance / risk</small></div>
   <div><span className="dot yellow"></span><b>Yellow</b><small>Watch / medium importance</small></div>
   <div><span className="dot green"></span><b>Green</b><small>Opportunity / constructive</small></div>
  </section>

  <div className="filters">{cats.map(c=><button key={c} className={`${filter===c?'active':''} ${c.toLowerCase()}`} onClick={()=>setFilter(c)}>{c}</button>)}</div>
  <div className="grid">
   <section className="panel developments"><h2>🔥 Top developments</h2>{rows.map(s=><article key={s.id} className={`story signal-${s.signal}`}>
    <div className="head" onClick={()=>setOpen({...open,[s.id]:!open[s.id]})}>
      <div className="story-title-row"><span className={`signal-dot ${s.signal}`}></span><div><strong>{s.title}</strong><small><span className={`category-tag ${s.cat.toLowerCase()}`}>{catIcon[s.cat]} {s.cat}</span><span className={`importance ${s.signal}`}>{s.importance} importance</span></small></div></div>
      <b className="expand">{open[s.id]?'−':'＋'}</b>
    </div>
    {open[s.id]&&<div className="body"><label>Quick summary</label><p>{s.summary}</p><label>What it means</label><p className={`callout ${s.signal}`}>{s.meaning}</p><div className="chips">{s.impact.map(x=><span key={x}>{x}</span>)}</div><a className="source-link" href={s.source} target="_blank" rel="noreferrer"><span>Read exact article</span><small>{s.sourceName}</small><b>↗</b></a></div>}
   </article>)}</section>
   <aside>
    <section className="panel"><h2>⚡ Opportunities & threats</h2>
      <div className="card green-card"><div className="card-label">● OPPORTUNITY</div><p>Agentic AI can expand demand for cloud, routing, observability and workflow infrastructure.</p></div>
      <div className="card yellow-card"><div className="card-label">● WATCH</div><p>Bitcoin can benefit from liquidity and risk appetite, but tighter rates and energy-driven inflation remain counterforces.</p></div>
      <div className="card green-card"><div className="card-label">● OPPORTUNITY</div><p>Social changes increasingly reward interactive creative and community design.</p></div>
    </section>
    <section className="panel"><h2>🔄 Old vs new</h2><div className="card compare"><strong>YouTube</strong><p><span className="old">OLD</span> Headline views carried more meaning.<br/><span className="new">NEW</span> Engaged views matter more for real attention.</p></div><div className="card compare"><strong>TikTok</strong><p><span className="old">OLD</span> Comments were mostly passive.<br/><span className="new">NEW</span> Comments are becoming richer participation surfaces.</p></div></section>
   </aside>
  </div>
 </main>
}
