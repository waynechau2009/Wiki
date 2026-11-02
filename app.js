const paths = {
  home: '<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',
  book: '<path d="M12 5v16m0-16C8 2 3 4 3 4v15s5-2 9 2c4-4 9-2 9-2V4s-5-2-9 1Z"/>',
  chat: '<path d="M21 11c0 5-4 8-9 8-1 0-3 0-4-1l-5 3 1-6c-1-1-1-2-1-4 0-5 4-8 9-8s9 3 9 8Z"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  folder: '<path d="M3 7V4h7l2 3h9v14H3V7Zm0 3h18"/>',
  users: '<circle cx="9" cy="7" r="3"/><path d="M2 21v-3c0-4 14-4 14 0v3H2ZM16 4c5-1 6 6 1 6m2 4c3 0 3 4 3 7h-3"/>',
  user: '<circle cx="12" cy="6" r="4"/><path d="M4 22v-3c0-7 16-7 16 0v3H4Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
  grid: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
  clipboard: '<path d="M8 5H5v17h14V5h-3M9 3h6v5H9V3Zm-1 12 3 3 6-7"/>',
  leaf: '<path d="M12 21v-9M12 16C2 16 3 6 3 6s10-1 9 10Zm0-3C11 3 22 3 22 3s0 11-10 10Z"/>',
  alert: '<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v.2"/>',
  workflow: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9 8a3 3 0 0 1 6 1c0 2-3 2-3 5m0 3v.1"/>',
  nurse: '<path d="m2 8 10-5 10 5-5 12H7L2 8Zm10-1v8m-4-4h8"/>',
  mortar: '<path d="M3 12h18c0 6-4 9-9 9s-9-3-9-9Zm1 9h16M14 12l6-10 2 2-5 8M2 12h20"/>',
  message: '<rect x="3" y="4" width="18" height="14" rx="3"/><path d="m7 18-2 4M7 9h10M7 13h6"/>',
  megaphone: '<path d="M3 9v7h5l12 5V3L8 9H3Zm5 7 2 6h4l-2-4M20 9h2v6h-2"/>',
  file: '<path d="M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8M8 15h8M8 18h6"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v.1"/>',
  cycle: '<path d="M3 10a9 9 0 0 1 16-5l2 3M21 2v6h-6m6 6a9 9 0 0 1-16 5l-2-3m0 6v-6h6"/>',
  laptop: '<path d="M4 3h16v15H4V3ZM1 21h22l-3-3H4l-3 3Z"/>',
  bed: '<path d="M2 5v17m20-13v13M2 18h20M5 9h5v5H5V9Zm5 5V8h8c3 0 4 2 4 6H2"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
};
function icon(name, cls = '') { return `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.file}</svg>`; }
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
const nav = [ ['home','Home','home'], ['care-guide','Care Guide','book'], ['forum','Q&A Forum','chat'], ['aar','AAR / Lessons Learnt','layers'], ['resources','Resources','folder'], ['contacts','Contacts','users'] ];
const topics = [
  { id:'observations', title:'Post-Acupuncture Observations', icon:'clipboard', description:'A shared reference for observation, documentation, and handover after treatment.', category:'For nurses', sections:['Observation checklist','Documentation and handover','Questions for the treating CMP'] },
  { id:'reactions', title:'Common Mild Reactions', icon:'leaf', description:'A space for approved information on commonly reported post-treatment reactions.', category:'For nurses', sections:['Commonly reported reactions','Recording an observation','Discussing concerns with the CMP'] },
  { id:'red-flags', title:'Red Flags & Escalation', icon:'alert', description:'Find the ward’s approved escalation pathway and responsible clinical contacts.', category:'For nurses', sections:['Recognising a concern','Local escalation pathway','Clinical contacts'] },
  { id:'workflow', title:'Ward Workflow', icon:'workflow', description:'Connect treatment, nursing observations, documentation, and team communication.', category:'For everyone', sections:['Before and after treatment','Ward handover','Roles and responsibilities'] },
  { id:'cmp', title:'CMP Practice Notes', icon:'mortar', description:'Common nurse queries, documentation points, and teaching pearls for ward staff.', category:'For CMPs', sections:['Common nurse queries','Documentation points','Teaching pearls for ward staff'] },
];
const questions = [
  { id:'bruising', title:'Is mild bruising expected?', category:'Reactions', author:'Ward nurse', topic:'reactions', answer:'This sample discussion is awaiting a reviewed CMP response. The final entry will link to the approved guidance on post-acupuncture reactions.' },
  { id:'dizziness', title:'When should dizziness be escalated?', category:'Escalation', author:'Ward nurse', topic:'red-flags', answer:'The pilot team will add the locally approved escalation guidance here. For an urgent patient concern, follow the existing clinical escalation pathway rather than waiting for a forum response.' },
  { id:'handover', title:'Where can I find the handover note?', category:'Workflow', author:'Ward nurse', topic:'workflow', answer:'The ward’s agreed handover location and documentation process will be listed in Ward Workflow once confirmed by the pilot team.' },
  { id:'bleeding', title:'How should minor bleeding be documented?', category:'Documentation', author:'Pilot team', topic:'observations', answer:'This example FAQ is awaiting the approved documentation standard. The pilot team will add the relevant template and responsible reviewer before clinical use.' },
];
const resources = [
  { id:'observation-sheet', title:'Post-treatment observation sheet', description:'A place for the ward’s approved observation and documentation template.', category:'Templates', icon:'clipboard' },
  { id:'handover-template', title:'Ward handover template', description:'A shared format for nursing and CMP handover.', category:'Templates', icon:'file' },
  { id:'workflow-map', title:'Pilot ward workflow', description:'The agreed pathway from treatment to observation and team handover.', category:'Guides', icon:'workflow' },
  { id:'staff-introduction', title:'PACES staff introduction', description:'An introduction to the pilot, the knowledge hub, and how to contribute.', category:'Teaching', icon:'book' },
  { id:'escalation-pathway', title:'Clinical escalation pathway', description:'A place for the existing, locally approved clinical escalation reference.', category:'Guides', icon:'alert' },
  { id:'aar-template', title:'After-action review template', description:'Capture what happened, what was learnt, and what should change.', category:'Templates', icon:'layers' },
];
const reviews = [
  { id:'handover-review', title:'Making the handover easier to find', description:'A sample review of how nurses and CMPs locate shared treatment notes.', category:'Workflow', icon:'workflow' },
  { id:'questions-review', title:'Turning common questions into shared learning', description:'A sample review exploring how recurring ward questions become wiki entries.', category:'Team learning', icon:'chat' },
  { id:'pilot-review', title:'First pilot ward reflection', description:'A space for the first team review of what worked well and what to improve.', category:'Pilot review', icon:'layers' },
];
const contacts = [
  { id:'nurse', title:'Oncology Ward Nurse In-charge', description:'Ward coordination, nursing workflow, and local escalation arrangements.', icon:'nurse' },
  { id:'cmp-contact', title:'CMP Contact', description:'Treatment documentation, knowledge review, and non-urgent practice queries.', icon:'mortar' },
  { id:'coordinator', title:'Pilot Coordinator', description:'Pilot feedback, wiki access, and content contributions.', icon:'users' },
];
const page = document.querySelector('#page-content');
const dialog = document.querySelector('#detail-dialog');
const searchInput = document.querySelector('#search-input');
document.querySelector('#search-icon').innerHTML = icon('search');
function heading(title, description, badge = 'ONCOLOGY WARD PILOT') { return `<div class="page-heading"><div><span class="eyebrow">PACES / KNOWLEDGE HUB</span><h1>${title}</h1><p>${description}</p></div><span class="page-badge">${badge}</span></div>`; }
function note() { return '<p class="subpage-note">Pilot demo · Sample entries illustrate the layout. Clinical guidance and team details are awaiting local review.</p>'; }
function panel(title, symbol, items, options = {}) {
  return `<section class="panel ${options.className || ''}"><div class="panel-head ${options.color || ''}">${icon(symbol)}<h2>${title}</h2>${options.more ? `<a class="view-more" href="${options.more}">View more ${icon('chevron')}</a>` : ''}</div><ul class="panel-list ${options.bullets ? 'bullet-list' : ''}">${items.map(item => `<li><a href="${item.href}">${options.bullets ? '<span class="bullet"></span>' : icon(item.icon || 'message')}<span>${item.title}</span></a></li>`).join('')}</ul></section>`;
}
function homePage() {
  const quick = topics.slice(0,4).map(t => ({...t,href:`#care-guide/${t.id}`})).concat({title:'FAQ',icon:'help',href:'#forum'});
  return `<section class="quick-access" aria-labelledby="quick-heading"><h1 id="quick-heading" class="section-heading">${icon('grid')}Quick Access<span class="section-meta">The knowledge you need, when you need it</span></h1><div class="quick-grid">${quick.map(t => `<a class="quick-card ${t.id === 'red-flags' ? 'danger' : ''}" href="${t.href}">${icon(t.icon)}<strong>${t.title}</strong>${icon('chevron','chevron')}</a>`).join('')}</div></section>
  <div class="dashboard-grid">
    ${panel('For Nurses','nurse',[{title:'What to observe after treatment',href:'#care-guide/observations'},{title:'When to contact CMP',href:'#contacts/cmp-contact'},{title:'How to escalate urgent concerns',href:'#care-guide/red-flags'}],{bullets:true})}
    ${panel('For CMPs','mortar',[{title:'Common nurse queries',href:'#forum'},{title:'Documentation points',href:'#care-guide/cmp'},{title:'Teaching pearls for ward staff',href:'#care-guide/cmp'}],{bullets:true,color:'mint'})}
    ${panel('Q&A Forum','chat',questions.slice(0,3).map(q=>({title:q.title,href:`#forum/${q.id}`})),{more:'#forum'})}
    ${panel('Latest Updates','megaphone',[{title:'New FAQ added: minor bleeding',href:'#forum/bleeding',icon:'file'},{title:'AAR summary uploaded',href:'#aar/handover-review',icon:'file'},{title:'Workflow updated for pilot ward',href:'#care-guide/workflow',icon:'file'}])}
    ${panel('Key Contacts','users',contacts.map(c=>({title:c.title,href:`#contacts/${c.id}`,icon:'user'})))}
    <section class="panel panel-note"><div class="panel-head cream">${icon('info')}<h2>Clinical Note</h2></div><p>PACES supports knowledge sharing and non-urgent clarification. <strong>For urgent patient concerns, follow the existing clinical escalation pathway.</strong></p></section>
  </div>
  <section class="knowledge-cycle" aria-label="Knowledge cycle"><div class="cycle-title">${icon('cycle')}<h2>Knowledge Cycle</h2></div><div class="cycle-steps">${[['Survey & Review','clipboard','#aar'],['Build Wiki','laptop','#resources'],['Use in Ward','bed','#care-guide'],['AAR / Q&A','chat','#forum'],['Update Wiki','cycle','#aar']].map((step,i)=>`${i ? '<span class="cycle-arrow" aria-hidden="true">→</span>' : ''}<a class="cycle-step" href="${step[2]}">${icon(step[1])}<span>${step[0]}</span></a>`).join('')}</div></section>`;
}
function guidePage(id) {
  const t = topics.find(t=>t.id===id) || topics[0];
  return `${heading('Care Guide','A shared reference for consistent post-acupuncture care.')}<div class="guide-layout"><nav class="guide-sidebar" aria-label="Care guide topics">${topics.map(item=>`<a href="#care-guide/${item.id}" class="${t.id===item.id?'active':''}" ${t.id===item.id?'aria-current="page"':''}>${icon(item.icon)}${item.title}</a>`).join('')}</nav><article class="article"><span class="eyebrow">${t.category.toUpperCase()}</span><h2>${t.title}</h2><p>${t.description}</p>${t.sections.map(section=>`<h3>${section}</h3><p>Content for this section will be added by the PACES Pilot Team using the ward’s approved guidance.</p>`).join('')}<div class="callout">${t.id==='red-flags' ? 'For urgent patient concerns, follow the existing clinical escalation pathway. This wiki supports non-urgent knowledge sharing.' : 'This is a demonstration of the guide layout. Clinical content will be reviewed locally before use.'}</div><a class="text-button" href="${t.id==='red-flags'?'#contacts':'#forum'}">${t.id==='red-flags'?'View key contacts':'Explore related questions'} ${icon('arrow')}</a></article></div>${note()}`;
}
function filters(labels, active) { return `<div class="tabs" role="group" aria-label="Filter entries">${labels.map(label=>`<button type="button" class="filter-button ${label===active?'active':''}" data-filter="${label}" aria-pressed="${label===active}">${label}</button>`).join('')}</div>`; }
let currentFilter = 'All';
function forumPage(id) {
  const list = questions.filter(q=>currentFilter==='All'||q.category===currentFilter);
  return `${heading('Q&A Forum','Ask, share, and learn together. A space for non-urgent ward questions.','SHARED LEARNING')}${filters(['All','Reactions','Escalation','Workflow','Documentation'],currentFilter)}<div class="discussion-list">${list.map(q=>`<details class="discussion" ${id===q.id?'open':''}><summary>${icon('message')}<div><h2>${q.title}</h2><div class="discussion-meta"><span>${q.author}</span><span>Sample discussion</span></div></div><span class="discussion-tag">${q.category}</span>${icon('chevron','chevron')}</summary><div class="discussion-answer">${q.answer}<br><a class="text-button" href="#care-guide/${q.topic}">View related care guide ${icon('arrow')}</a></div></details>`).join('')}</div>${note()}`;
}
function cards(items, action, type) { return `<div class="content-cards">${items.map(item=>`<article class="content-card"><span class="card-icon">${icon(item.icon)}</span><div class="card-meta"><span>${item.category || 'PILOT TEAM'}</span><span>·</span><span>Demo entry</span></div><h2>${item.title}</h2><p>${item.description}</p><button type="button" class="text-button" data-detail="${type}/${item.id}">${action} ${icon('arrow')}</button></article>`).join('')}</div>`; }
function resourcePage() { return `${heading('Resources','Useful guides, templates, and teaching materials — all in one place.','SHARED LIBRARY')}${filters(['All','Guides','Templates','Teaching'],currentFilter)}${cards(resources.filter(r=>currentFilter==='All'||r.category===currentFilter),'View resource','resources')}${note()}`; }
function aarPage() { return `${heading('AAR / Lessons Learnt','Reflect on ward experience. Turn shared learning into better ways of working.','CONTINUOUS LEARNING')}${cards(reviews,'Read review','aar')}<div class="callout">Our knowledge cycle: review experience, capture lessons, and use those lessons to update the wiki.</div>${note()}`; }
function contactsPage() { return `${heading('Key Contacts','Find the right person for your question, feedback, or contribution.','PILOT TEAM')}${cards(contacts,'View contact details','contacts')}<div class="callout">For urgent patient concerns, use the existing clinical escalation pathway.</div>${note()}`; }
function searchPage(query) {
  const q = query.trim().toLowerCase();
  const all = [...topics.map(t=>({...t,href:`#care-guide/${t.id}`})),...questions.map(t=>({...t,icon:'chat',description:t.answer,href:`#forum/${t.id}`})),...resources.map(t=>({...t,href:`#resources/${t.id}`})),...reviews.map(t=>({...t,href:`#aar/${t.id}`})),...contacts.map(t=>({...t,href:`#contacts/${t.id}`}))];
  const results = q ? all.filter(t=>`${t.title} ${t.description} ${t.category || ''}`.toLowerCase().includes(q)) : [];
  return `${heading('Search the wiki',q?`${results.length} ${results.length===1?'result':'results'} for “${escapeHTML(query)}”`:'Enter a topic, question, or keyword in the search bar.','KNOWLEDGE SEARCH')}${results.length?`<div class="content-cards">${results.map(t=>`<article class="content-card"><span class="card-icon">${icon(t.icon)}</span><h2>${t.title}</h2><p>${t.description}</p><a class="text-button" href="${t.href}">Open entry ${icon('arrow')}</a></article>`).join('')}</div>`:`<div class="empty-state">${icon('search')}<h2>${q?'No matching entries yet':'What would you like to find?'}</h2><p>${q?'Try “handover”, “observations”, or “workflow”.':'Search the care guide, questions, resources, and contacts.'}</p><a class="text-button" href="#home" style="justify-content:center">Back to home ${icon('arrow')}</a></div>`}`;
}
function openDetail(type,id) {
  const collection = {resources,aar:reviews,contacts}[type];
  const item = collection?.find(item=>item.id===id);
  if(!item) return;
  let body;
  if(type==='contacts') body=`<p>${item.description}</p><div class="callout"><strong>Contact details to be confirmed</strong><br>The pilot team will add the name, ward extension, availability, and preferred contact method here. No live contact details are included in this demo.</div>`;
  else if(type==='aar') body=`<p>${item.description}</p>${['What happened?','What did we learn?','What will we change?'].map(s=>`<h3 style="margin:20px 0 7px;font-size:15px">${s}</h3><p>The pilot team’s reviewed reflection will appear here.</p>`).join('')}<div class="callout">Sample review layout · No actual case or patient information is included.</div>`;
  else body=`<p>${item.description}</p><div class="callout"><strong>Resource awaiting upload</strong><br>This is a sample library entry. The pilot team will attach the reviewed document and record its owner, version, and review date here.</div>`;
  document.querySelector('#dialog-body').innerHTML=`<div class="dialog-content"><h2 id="dialog-title">${item.title}</h2>${body}</div>`;
  if(!dialog.open) dialog.showModal();
}
let previousRoute = '';
function render() {
  if(dialog.open) dialog.close();
  const hash = location.hash.slice(1) || 'home';
  const [route,id] = hash.split('/');
  if(route !== previousRoute) currentFilter='All';
  previousRoute=route;
  document.querySelector('#navigation').innerHTML=nav.map(([key,label,symbol])=>`<a href="#${key}" class="nav-link ${route===key?'active':''}" ${route===key?'aria-current="page"':''}>${icon(symbol)}<span>${label}</span></a>`).join('');
  const query = new URLSearchParams(hash.startsWith('search?')?hash.slice(7):'').get('q')||'';
  const isSearch = hash.startsWith('search?');
  if(isSearch) searchInput.value=query;
  else searchInput.value='';
  const renderer = {home:homePage,'care-guide':()=>guidePage(id),forum:()=>forumPage(id),resources:resourcePage,aar:aarPage,contacts:contactsPage};
  page.innerHTML=isSearch?searchPage(query):(renderer[route]||homePage)();
  document.title=`PACES | ${isSearch?'Search':nav.find(n=>n[0]===route)?.[1]||'Home'}`;
  if(['resources','aar','contacts'].includes(route)&&id) openDetail(route,id);
}
document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();location.hash=`search?q=${encodeURIComponent(searchInput.value.trim())}`;});
page.addEventListener('click',event=>{
  const filter=event.target.closest('[data-filter]');
  if(filter){currentFilter=filter.dataset.filter;render();}
  const detail=event.target.closest('[data-detail]');
  if(detail){const [type,id]=detail.dataset.detail.split('/');openDetail(type,id);}
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-done').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!dialog.open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();searchInput.focus();}});
window.addEventListener('hashchange',()=>{render();document.querySelector('#main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});});
render();
