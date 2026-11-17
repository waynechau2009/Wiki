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
const topics = pacesContent.topics;
const questions = pacesContent.questions;
const documentResources = [
  { id:'annex-5-1-3', annex:'5.1.3', title:'Protocol on Integrated Chinese-Western Medicine Programme in Cancer Palliative Care', filename:'Annex 5.1.3 Protocol on ICWM Programme in Cancer Palliative Care.pdf', category:'Guides', version:'10', issueDate:'07 Jul 2025', reviewDate:'07 Jul 2027', effectiveDate:'06 Aug 2025' },
  { id:'annex-5-1-4', annex:'5.1.4', title:'Protocol on Integrated Chinese-Western Medicine Programme for Cancer Treatment-induced Care', filename:'Annex 5.1.4 Protocol on ICWM Programme for Cancer Treatment-induced Care.pdf', category:'Guides', version:'2', issueDate:'29 Oct 2024', reviewDate:'29 Oct 2026', effectiveDate:'29 Oct 2024' },
  { id:'annex-5-6', annex:'5.6', title:'Roles and Responsibilities of HA Nurse in Project on Integrated Chinese-Western Medicine (ICWM) Programmes', filename:'Annex 5.6 Roles and Responsibilities of HA Nurse in Project on ICWM Programmes.pdf', category:'Guides', version:'1.0', issueDate:'08 Dec 2023', reviewDate:'08 Dec 2026', effectiveDate:'08 Dec 2023' },
  { id:'annex-5-7', annex:'5.7', title:'Clinical Incident Management in Integrated Chinese-Western Medicine Programme', filename:'Annex 5.7 Clinical Incident Management in ICWM Programme.pdf', category:'Guides' },
  { id:'annex-5-8a', annex:'5.8a', title:'Patient Assessment Documentation Form (Cancer Palliative Care) — English', filename:'Annex 5.8a Patient Assessment Documentation Form(Cancer Palliative)_Eng.pdf', category:'Templates', effectiveDate:'06 Aug 2025' },
  { id:'annex-5-8b', annex:'5.8b', title:'Patient Assessment Documentation Form (Cancer Palliative Care) — Chinese', filename:'Annex 5.8b Patient Assessment Documentation Form(Cancer Palliative)_Chi.pdf', category:'Templates', effectiveDate:'06 Aug 2025' },
  { id:'annex-5-8g', annex:'5.8g', title:'Patient Assessment Documentation Form (Cancer Care) — English', filename:'Annex 5.8g Patient Assessment Documentation Form(Cancer Care)_Eng.pdf', category:'Templates', effectiveDate:'06 Aug 2025' },
  { id:'annex-5-8h', annex:'5.8h', title:'Patient Assessment Documentation Form (Cancer Care) — Chinese', filename:'Annex 5.8h Patient Assessment Documentation Form(Cancer Care)_Chi.pdf', category:'Templates', effectiveDate:'06 Aug 2025' },
  { id:'annex-5-9a', annex:'5.9a', title:'CM Informed Consent Form — English', filename:'Annex 5.9a CM Informed Consent Form_Eng.pdf', category:'Templates', effectiveDate:'29 Oct 2024' },
  { id:'annex-5-10a', annex:'5.10a', title:'Notice to Patient (Inpatient) — English', filename:'Annex 5.10a Notice to Patient (Inpatient)_Eng.pdf', category:'Templates', effectiveDate:'29 Oct 2024' },
  { id:'annex-5-10c', annex:'5.10c', title:'Notice to Patient (Cancer Care) — English', filename:'Annex 5.10c Notice to Patient (Cancer care)_Eng.pdf', category:'Templates', effectiveDate:'29 Oct 2024' },
  { id:'annex-5-13', annex:'5.13', title:'CM Inpatient Summary', filename:'Annex 5.13 CM Inpatient Summary.pdf', category:'Templates' },
  { id:'annex-5-14', annex:'5.14', title:'CMIS Workflow for CMCTR in Integrated Chinese-Western Medicine Programme', filename:'Annex 5.14 CMIS Workflow for CMCTR in ICWM Programme.pdf', category:'Guides' },
  { id:'annex-5-15', annex:'5.15', title:'Chinese Medicine Consultation Note', filename:'Annex 5.15 Chinese Medicine Consultation Note.pdf', category:'Templates' },
  { id:'annex-5-18', annex:'5.18', title:'Initial Assessment Checklist for Acupuncture', filename:'Annex 5.18 Initial Assessment Checklist for Acupuncture.pdf', category:'Templates' },
  { id:'annex-5-19', annex:'5.19', title:'Acupuncture Checklist', filename:'Annex 5.19 Acupuncture Checklist.pdf', category:'Templates' },
  { id:'annex-5-21', annex:'5.21', title:'Guidelines for Good Practices in Chinese Medicine Medical Record Documentation', filename:'Annex 5.21 Guidelines for Good Practices in Chinese Medicine Medical Record Documentation.pdf', category:'Guides', version:'4.0' },
].map(item => ({ ...item, icon:'file', url:`assets/documents/${encodeURIComponent(item.filename)}`, description:`Annex ${item.annex} · ${item.category} · Full PDF document` }));
const plannedResources = pacesContent.projectDocuments.map(item => ({...item, category:'Project documents'}));
const resources = [...documentResources, ...plannedResources];
const reviews = [{id:'pilot-review', title:pacesContent.aar.title, description:'Pilot after-action review template and demo lessons learnt log.', category:'AAR / Lessons Learnt', icon:'layers'}];
const contacts = [
  { id:'nurse', title:'Oncology Ward Nurse In-charge', name:'Grace Chan', position:'Oncology Ward Nurse In-charge', phone:'2000 0001', description:'Ward coordination, nursing workflow, and local escalation arrangements.', icon:'nurse' },
  { id:'cmp-contact', title:'CMP Contact', name:'Dr. Raymond Wong', position:'Chinese Medicine Practitioner', phone:'2000 0002', description:'Treatment documentation, knowledge review, and non-urgent practice queries.', icon:'mortar' },
  { id:'coordinator', title:'Pilot Coordinator', name:'Emily Lee', position:'ICWM Programme Coordinator', phone:'2000 0003', description:'Pilot feedback, wiki access, and content contributions.', icon:'users' },
];
const page = document.querySelector('#page-content');
const dialog = document.querySelector('#detail-dialog');
const searchInput = document.querySelector('#search-input');
document.querySelector('#search-icon').innerHTML = icon('search');
function heading(title, description, badge = 'ONCOLOGY WARD PILOT') { return `<div class="page-heading"><div><span class="eyebrow">PACES / KNOWLEDGE HUB</span><h1>${title}</h1><p>${description}</p></div><span class="page-badge">${badge}</span></div>`; }
function renderBlocks(items = []) {
  return items.map(block => {
    if(block.type==='heading') return `<h${block.level || 3}>${escapeHTML(block.text)}</h${block.level || 3}>`;
    if(block.type==='list'||block.type==='ordered') {
      const tag=block.type==='ordered'?'ol':'ul';
      return `<${tag}${block.start?` start="${block.start}"`:''}>${block.items.map(item=>`<li>${escapeHTML(typeof item==='string'?item:item.text)}${typeof item==='object'?renderBlocks(item.children):''}</li>`).join('')}</${tag}>`;
    }
    if(block.type==='links') return `<ul class="content-links">${block.items.map(item=>`<li><a href="${item.href}">${escapeHTML(item.text)} ${icon('arrow')}${item.description?`<span>${escapeHTML(item.description)}</span>`:''}</a></li>`).join('')}</ul>`;
    if(block.type==='table') return `<div class="table-scroll" tabindex="0" aria-label="Lessons learnt log"><table><thead><tr>${block.headers.map(text=>`<th scope="col">${escapeHTML(text)}</th>`).join('')}</tr></thead><tbody>${block.rows.map(row=>`<tr>${row.map(text=>`<td>${escapeHTML(text)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return `<p>${escapeHTML(block.text)}</p>`;
  }).join('');
}
function clinicalFooter() {
  const footer=pacesContent.clinicalFooter;
  return `<aside class="clinical-footer" aria-label="Clinical content information"><dl><div><dt>Evidence source</dt><dd><a href="#resources/clinical-evidence">See Clinical Evidence in Resources</a></dd></div>${[['Content owner',footer.owner],['Clinical reviewer',footer.reviewer],['Last reviewed',footer.lastReviewed],['Version',footer.version]].map(([label,value])=>`<div><dt>${label}</dt><dd>${escapeHTML(value)}</dd></div>`).join('')}</dl><p>${escapeHTML(footer.policy)}</p></aside>`;
}
function panel(title, symbol, items, options = {}) {
  return `<section class="panel ${options.className || ''}"><div class="panel-head ${options.color || ''}">${icon(symbol)}<h2>${escapeHTML(title)}</h2>${options.more ? `<a class="view-more" href="${options.more}">View more ${icon('chevron')}</a>` : ''}</div><ul class="panel-list ${options.bullets ? 'bullet-list' : ''}">${items.map(item => `<li><a href="${item.href}">${options.bullets ? '<span class="bullet"></span>' : icon(item.icon || 'message')}<span>${escapeHTML(item.title)}${item.meta?`<small>${escapeHTML(item.meta)}</small>`:''}</span></a></li>`).join('')}</ul></section>`;
}
function homePage() {
  const quick = topics.slice(0,4).map(t => ({...t,href:`#care-guide/${t.id}`})).concat({title:'FAQ',icon:'help',href:'#care-guide/faq'});
  const audienceLinks=key=>pacesContent[key].blocks.find(block=>block.type==='links').items.map(item=>({title:item.text,href:item.href}));
  return `<section class="welcome article"><h1>${escapeHTML(pacesContent.home.title)}</h1>${renderBlocks(pacesContent.home.intro)}</section>
  <section class="quick-access" aria-labelledby="quick-heading"><h2 id="quick-heading" class="section-heading">${icon('grid')}Quick Access<span class="section-meta">The knowledge you need, when you need it</span></h2><div class="quick-grid">${quick.map(t => `<a class="quick-card ${t.id === 'red-flags' ? 'danger' : ''}" href="${t.href}">${icon(t.icon)}<strong>${escapeHTML(t.title)}</strong>${icon('chevron','chevron')}</a>`).join('')}</div></section>
  <div class="dashboard-grid">
    ${panel('For Nurses','nurse',audienceLinks('forNurses'),{bullets:true,more:'#for-nurses'})}
    ${panel('For CMPs','mortar',audienceLinks('forCMPs'),{bullets:true,color:'mint',more:'#for-cmps'})}
    ${panel('Q&A Forum','chat',questions.slice(0,3).map(q=>({title:q.title,href:`#forum/${q.id}`})),{more:'#forum'})}
    ${panel('Latest Updates','megaphone',pacesContent.updates.entries.map(item=>({title:item.title,href:item.href,meta:item.date,icon:'file'})),{more:'#updates'})}
    ${panel('Key Contacts','users',contacts.map(c=>({title:c.title,href:`#contacts/${c.id}`,icon:'user'})))}
    <section class="panel panel-note" id="clinical-note"><div class="panel-head cream">${icon('info')}<h2>${escapeHTML(pacesContent.home.clinicalNote.title)}</h2></div><div class="clinical-note-content">${renderBlocks(pacesContent.home.clinicalNote.blocks)}</div></section>
  </div>
  <section class="knowledge-cycle" aria-label="Knowledge cycle"><div class="cycle-title">${icon('cycle')}<h2>Knowledge Cycle</h2></div><div class="cycle-steps">${[['Survey & Review','clipboard'],['Build Wiki','laptop'],['Use in Ward','bed'],['AAR / Q&A','chat'],['Update Wiki','cycle']].map((step,i)=>`${i ? '<span class="cycle-arrow" aria-hidden="true">→</span>' : ''}<div class="cycle-step">${icon(step[1])}<span>${step[0]}</span></div>`).join('')}</div></section>`;
}
function audiencePage(key) {
  const content=pacesContent[key];
  return `${heading(content.title,'Knowledge sharing for the oncology ward pilot.')}<article class="article">${renderBlocks(content.blocks)}</article>`;
}
function faqList(active) {
  return `<div class="faq-list">${pacesContent.faq.map(item=>`<details class="discussion" id="${item.id}" ${active===item.id?'open':''}><summary>${icon('help')}<h3>${escapeHTML(item.title)}</h3>${icon('chevron','chevron')}</summary><div class="discussion-answer">${item.answers.map(text=>`<p>${escapeHTML(text)}</p>`).join('')}${item.topic!=='faq'?`<a class="text-button" href="#care-guide/${item.topic}">View related care guide ${icon('arrow')}</a>`:`<a class="text-button" href="#forum">Use the Q&A Forum ${icon('arrow')}</a>`}</div></details>`).join('')}</div>`;
}
function guidePage(id,section) {
  if(id==='cmp') return audiencePage('forCMPs');
  const topic=topics.find(item=>item.id===id);
  const sidebar=`<nav class="guide-sidebar" aria-label="Care guide topics"><a href="#care-guide" ${!topic?'class="active" aria-current="page"':''}>${icon('book')}Overview</a>${topics.map(item=>`<a href="#care-guide/${item.id}" class="${topic?.id===item.id?'active':''}" ${topic?.id===item.id?'aria-current="page"':''}>${icon(item.icon)}${escapeHTML(item.title)}</a>`).join('')}</nav>`;
  let body;
  if(!topic) body=`<h2>${escapeHTML(pacesContent.careGuide.title)}</h2><p>${escapeHTML(pacesContent.careGuide.description)}</p>${renderBlocks([{type:'links',items:topics.map(item=>({text:item.title,description:item.description,href:`#care-guide/${item.id}`}))}])}`;
  else body=`<span class="eyebrow">FOR NURSES &amp; CMPs</span><h2>${escapeHTML(topic.articleTitle || topic.title)}</h2><p>${escapeHTML(topic.description)}</p>${renderBlocks(topic.intro)}${topic.faq?faqList(section):topic.sections.map(item=>`<section class="article-section" id="${item.id}"><h3>${escapeHTML(item.title)}</h3>${renderBlocks(item.blocks)}</section>`).join('')}${topic.id==='observations'?'<h3>Evidence</h3><p>Clinical content informed by de Valois et al. (2024) and Bäumler et al. (2021).</p>':''}`;
  return `${heading('Care Guide',pacesContent.careGuide.description)}<div class="guide-layout">${sidebar}<article class="article">${body}</article></div>`;
}
function filters(labels, active) { return `<div class="tabs" role="group" aria-label="Filter entries">${labels.map(label=>`<button type="button" class="filter-button ${label===active?'active':''}" data-filter="${label}" aria-pressed="${label===active}">${label}</button>`).join('')}</div>`; }
let currentFilter = 'All';
function forumPage(id) {
  const list=questions.filter(item=>currentFilter==='All'||item.category===currentFilter);
  const categories=['All',...new Set(questions.map(item=>item.category))];
  return `${heading(pacesContent.forum.title,'Q&A Forum · Knowledge sharing and non-urgent clarification.','SHARED LEARNING')}
    <section class="article forum-purpose">${renderBlocks(pacesContent.forum.intro)}</section>
    <section class="article question-panel"><h2>${escapeHTML(pacesContent.forum.formTitle)}</h2><p class="demo-form-note">Demo form: questions appear only in this browser session and are not sent to a CMP. Do not enter patient-identifiable information.</p>
      <form id="question-form" class="question-form"><div class="form-row"><label><span id="question-role-label">Your role</span><select name="role" aria-labelledby="question-role-label" required><option value="">Select your role</option>${pacesContent.forum.roles.map(value=>`<option>${escapeHTML(value)}</option>`).join('')}</select></label><label><span id="question-category-label">Category</span><select name="category" aria-labelledby="question-category-label" required><option value="">Select a category</option>${pacesContent.forum.categories.map(value=>`<option>${escapeHTML(value)}</option>`).join('')}</select></label></div><label>Question<textarea name="question" rows="3" maxlength="2000" required></textarea></label><label>What information were you unable to find?<textarea name="missing" rows="2" maxlength="2000"></textarea></label><button type="submit" class="primary-button">Submit demo question</button></form>
    </section>
    <h2 class="list-heading">Demo Q&A</h2>${questions.find(item=>item.id===id)?.local?'<p class="demo-form-note" role="status">Demo question added locally. It has not been sent to a CMP and will disappear when you reload this page.</p>':''}
    ${filters(categories,currentFilter)}<div class="discussion-list">${list.map(item=>`<details class="discussion" ${id===item.id?'open':''}><summary>${icon('message')}<div><h2>${escapeHTML(item.title)}</h2><div class="discussion-meta"><span>Asked by: ${escapeHTML(item.author)}</span><span>${escapeHTML(item.status)}</span></div></div><span class="discussion-tag">${escapeHTML(item.category)}</span>${icon('chevron','chevron')}</summary><div class="discussion-answer">${item.missing?`<h3>Information not found</h3><p>${escapeHTML(item.missing)}</p>`:''}<h3>${item.local?'Response status':item.id==='bruising'?'CMP response':'Response'}</h3>${renderBlocks(item.answer)}${item.action?`<a class="text-button" href="${item.action.href}">${escapeHTML(item.action.text)} ${icon('arrow')}</a>`:''}</div></details>`).join('')}</div>`;
}
function contactDetails(item) {
  return `<dl class="contact-details"><div><dt>Position</dt><dd>${escapeHTML(item.position)}</dd></div><div><dt>Phone number</dt><dd>${escapeHTML(item.phone)}</dd></div></dl>`;
}
function cards(items, action, type) { return `<div class="content-cards">${items.map(item=>`<article class="content-card"><span class="card-icon">${icon(item.icon)}</span><div class="card-meta"><span>${item.category || 'PILOT TEAM'}</span><span>·</span><span>${type==='contacts'?'Placeholder contact':type==='resources'?(item.href?'Project document':'Awaiting upload'):'Demo entry'}</span></div><h2>${escapeHTML(type==='contacts'?item.name:item.title)}</h2>${type==='contacts'?contactDetails(item):''}<p>${item.description}</p>${item.href?`<a class="text-button" href="${item.href}">Open entry ${icon('arrow')}</a>`:`<button type="button" class="text-button" data-detail="${type}/${item.id}">${action} ${icon('arrow')}</button>`}</article>`).join('')}</div>`; }
function documentMetadata(item) {
  return `<dl class="document-metadata">${[['Version number',item.version],['Issue date',item.issueDate],['Review date',item.reviewDate]].map(([label,value])=>`<div><dt>${label}</dt><dd>${escapeHTML(value || 'Not stated')}</dd></div>`).join('')}</dl>`;
}
function documentLink(item) {
  return `<a href="${item.url}" target="_blank" rel="noopener">${escapeHTML(item.title)}<span class="sr-only"> (PDF, opens in a new tab)</span></a>`;
}
function resourcePage() {
  const matches=item=>currentFilter==='All'||item.category===currentFilter;
  const documents=documentResources.filter(matches);
  return `${heading('Resources','Clinical evidence, project documents, and supplied ICWM resources.','SHARED LIBRARY')}
    <section class="article resource-section" id="clinical-evidence"><h2>Clinical Evidence</h2><div class="evidence-grid">${pacesContent.evidence.map(item=>`<section><h3>${escapeHTML(item.author)}</h3><p>${escapeHTML(item.title)}</p><h4>Relevant PACES topics</h4>${renderBlocks([{type:'list',items:item.topics}])}</section>`).join('')}</div></section>
    <section class="resource-section" id="icwm-documents"><h2 class="list-heading">Supplied ICWM documents</h2><p class="document-note">Versions and dates are taken from the documents. “Not stated” means that field is not specified. Effective dates are shown separately from issue dates. Select a title to open the full PDF in a new tab.</p>${filters(['All','Guides','Templates'],currentFilter)}<p class="document-count">${documents.length} ${documents.length===1?'document':'documents'}</p><div class="document-list">${documents.map(item=>`<article class="document-entry"><div class="document-heading"><p class="document-reference">Annex ${item.annex} <span>· ${item.category} · PDF</span></p><h3>${documentLink(item)}</h3>${item.effectiveDate?`<p class="document-effective">Effective date: ${item.effectiveDate}</p>`:''}</div>${documentMetadata(item)}</article>`).join('')}</div></section>
    <section class="resource-section" id="project-documents"><h2 class="list-heading">PACES Project Documents</h2>${cards(plannedResources,'View document status','resources')}</section>
    <section class="article resource-section"><h2>${escapeHTML(pacesContent.localResources.title)}</h2><p>${escapeHTML(pacesContent.localResources.intro)}</p><h3>Examples awaiting local confirmation</h3>${renderBlocks([{type:'list',items:pacesContent.localResources.placeholders}])}<p>Only actual approved local documents should be used as local clinical policies.</p></section>`;
}
function aarPage() {
  return `${heading(pacesContent.aar.title,'AAR / Lessons Learnt · Review the pilot and identify improvements.','CONTINUOUS LEARNING')}<article class="article">${renderBlocks(pacesContent.aar.blocks)}</article>`;
}
function updatesPage() {
  return `${heading(pacesContent.updates.title,'Changes to PACES content and the reasons behind them.')}<div class="updates-list">${pacesContent.updates.entries.map(item=>`<article class="article"><p class="eyebrow">${escapeHTML(item.date)}</p><h2><a href="${item.href}">${escapeHTML(item.title)}</a></h2><p>${escapeHTML(item.description)}</p><p class="update-meta">Source: supplied demo content · Reviewer: not provided</p></article>`).join('')}</div><article class="article">${renderBlocks(pacesContent.updates.blocks)}</article>`;
}
function contactsPage() {
  const content=pacesContent.contacts;
  return `${heading(content.title,'Find the right route for clinical concerns, workflow questions, and PACES suggestions.','PILOT TEAM')}<div class="callout contact-urgent"><strong>${escapeHTML(content.urgentTitle)}</strong><p>${escapeHTML(content.urgentText)}</p><p>Approved local pathway/contact: to be confirmed.</p></div><div class="contact-routing">${content.routes.map(item=>`<section class="article"><h2>${escapeHTML(item.title)}</h2><p>${item.href?`<a class="text-button" href="${item.href}">${escapeHTML(item.text)} ${icon('arrow')}</a>`:escapeHTML(item.text)}</p></section>`).join('')}</div><h2 class="list-heading">Demo contact placeholders</h2><p class="contact-placeholder">All names and phone numbers below are fictitious placeholders for demonstration only. They are not the confirmed local contacts above.</p>${cards(contacts,'View contact details','contacts')}`;
}
function contentText(value) {
  if(typeof value==='string') return value;
  if(Array.isArray(value)) return value.map(contentText).join(' ');
  if(value&&typeof value==='object') return Object.values(value).map(contentText).join(' ');
  return '';
}
function searchEntries() {
  const entries=topics.map(item=>({...item,href:`#care-guide/${item.id}`,searchText:contentText([item.intro,item.sections])}));
  topics.find(item=>item.id==='observations').sections.forEach(item=>entries.push({title:item.id==='dizziness'?'Dizziness after acupuncture':item.title,description:contentText(item.blocks[0]),category:'Post-Acupuncture Observations',relevantTo:'Nurses & CMPs',icon:'clipboard',href:`#care-guide/observations/${item.id}`,searchText:contentText(item.blocks)}));
  pacesContent.faq.forEach(item=>entries.push({title:`FAQ: ${item.title}`,description:item.answers.join(' '),category:'FAQ',relevantTo:'Nurses & CMPs',icon:'help',href:`#care-guide/faq/${item.id}`}));
  questions.forEach(item=>entries.push({title:`Q&A: ${item.title}`,description:contentText(item.answer),category:'Q&A Forum',relevantTo:'Nurses & CMPs',icon:'chat',href:`#forum/${item.id}`}));
  resources.forEach(item=>entries.push({...item,href:item.href || `#resources/${item.id}`,category:item.annex?'ICWM documents':'Project documents'}));
  reviews.forEach(item=>entries.push({...item,href:'#aar',searchText:contentText(pacesContent.aar.blocks)}));
  contacts.forEach(item=>entries.push({...item,title:`${item.name} — ${item.title}`,description:`${item.position} · ${item.phone} · Placeholder contact. ${item.description}`,category:'Contacts',href:`#contacts/${item.id}`}));
  [['forNurses','for-nurses'],['forCMPs','for-cmps']].forEach(([key,route])=>entries.push({title:pacesContent[key].title,description:'Knowledge sharing for the oncology ward pilot.',searchText:contentText(pacesContent[key].blocks),category:key==='forNurses'?'For Nurses':'For CMPs',icon:'users',href:`#${route}`}));
  pacesContent.evidence.forEach(item=>entries.push({title:`${item.author} — ${item.title}`,description:item.topics.join(' '),category:'Clinical Evidence',icon:'book',href:'#resources/clinical-evidence'}));
  entries.push({title:pacesContent.updates.title,description:'Demo updates and pilot update requirements.',searchText:contentText(pacesContent.updates),category:'Latest Updates',icon:'megaphone',href:'#updates'});
  return entries;
}
function searchPage(query) {
  const q=query.trim().toLowerCase();
  const results=q?searchEntries().filter(item=>contentText([item.title,item.description,item.category,item.filename,item.searchText]).toLowerCase().includes(q)):[];
  return `${heading('Search PACES',q?`${results.length} ${results.length===1?'result':'results'} for “${escapeHTML(query)}”`:'Enter a topic, question, or keyword in the search bar.','KNOWLEDGE SEARCH')}${results.length?`<div class="content-cards">${results.map(item=>`<article class="content-card"><span class="card-icon">${icon(item.icon)}</span><div class="card-meta"><span>${escapeHTML(item.category || 'PACES')}</span></div><h2>${escapeHTML(item.title)}</h2>${item.relevantTo?`<p class="search-relevance">Relevant to: ${escapeHTML(item.relevantTo)}</p>`:''}<p>${escapeHTML(item.description)}</p><a class="text-button" href="${item.href}">Open entry ${icon('arrow')}</a></article>`).join('')}</div>`:`<div class="empty-state">${icon('search')}<h2>${q?'No matching entries':'What would you like to find?'}</h2><p>${q?'Try “dizziness”, “bleeding”, or “workflow”.':'Search the care guide, FAQ, Q&A, resources, and contacts.'}</p><a class="text-button" href="#home">Back to home ${icon('arrow')}</a></div>`}`;
}
function openDetail(type,id) {
  const collection = {resources,aar:reviews,contacts}[type];
  const item = collection?.find(item=>item.id===id);
  if(!item) return;
  let body;
  if(item.url) body=`<p>${item.description}</p>${documentMetadata(item)}${item.effectiveDate?`<p class="document-effective">Effective date: ${item.effectiveDate}</p>`:''}<p class="document-note">“Not stated” means that field is not specified in the document.</p><a class="primary-button document-open" href="${item.url}" target="_blank" rel="noopener">Open full PDF <span class="sr-only">(opens in a new tab)</span>${icon('arrow')}</a>`;
  else if(type==='contacts') body=`${contactDetails(item)}<p>${item.description}</p><p class="contact-placeholder">This name and phone number are fictitious placeholders for demonstration only.</p>`;
  else if(type==='aar') body=renderBlocks(pacesContent.aar.blocks);
  else body=`<p>${escapeHTML(item.description)}</p><div class="callout"><strong>Project document awaiting upload</strong><br>No file has been supplied for this project document yet.</div>`;
  document.querySelector('#dialog-body').innerHTML=`<div class="dialog-content"><h2 id="dialog-title">${escapeHTML(type==='contacts'?item.name:item.title)}</h2>${body}</div>`;
  if(!dialog.open) dialog.showModal();
}
let previousRoute = '';
function render() {
  if(dialog.open) dialog.close();
  const hash = location.hash.slice(1) || 'home';
  const [route,id,section] = hash.split('/');
  if(route !== previousRoute) currentFilter='All';
  previousRoute=route;
  document.querySelector('#navigation').innerHTML=nav.map(([key,label,symbol])=>`<a href="#${key}" class="nav-link ${route===key?'active':''}" ${route===key?'aria-current="page"':''}>${icon(symbol)}<span>${label}</span></a>`).join('');
  const query = new URLSearchParams(hash.startsWith('search?')?hash.slice(7):'').get('q')||'';
  const isSearch = hash.startsWith('search?');
  if(isSearch) searchInput.value=query;
  else searchInput.value='';
  const renderer = {home:homePage,'care-guide':()=>guidePage(id,section),forum:()=>forumPage(id),resources:resourcePage,aar:aarPage,contacts:contactsPage,'for-nurses':()=>audiencePage('forNurses'),'for-cmps':()=>audiencePage('forCMPs'),updates:updatesPage};
  page.innerHTML=isSearch?searchPage(query):(renderer[route]||homePage)();
  if(!isSearch&&['home','care-guide','forum','for-nurses','for-cmps'].includes(route)) page.insertAdjacentHTML('beforeend',clinicalFooter());
  const extraTitles={'for-nurses':'For Nurses','for-cmps':'For CMPs',updates:'Latest Updates'};
  document.title=`PACES | ${isSearch?'Search':extraTitles[route]||nav.find(n=>n[0]===route)?.[1]||'Home'}`;
  if(['resources','aar','contacts'].includes(route)&&id) openDetail(route,id);
  const anchor=route==='care-guide'?section:['home','resources'].includes(route)?id:null;
  if(anchor) requestAnimationFrame(()=>document.getElementById(anchor)?.scrollIntoView({block:'start'}));
}
document.querySelector('#search-form').addEventListener('submit',event=>{event.preventDefault();location.hash=`search?q=${encodeURIComponent(searchInput.value.trim())}`;});
page.addEventListener('click',event=>{
  const filter=event.target.closest('[data-filter]');
  if(filter){currentFilter=filter.dataset.filter;render();}
  const detail=event.target.closest('[data-detail]');
  if(detail){const [type,id]=detail.dataset.detail.split('/');openDetail(type,id);}
});
let demoQuestionNumber=0;
page.addEventListener('submit',event=>{
  if(event.target.id!=='question-form') return;
  event.preventDefault();
  const form=event.target;
  const fields=new FormData(form);
  const question=String(fields.get('question') || '').trim();
  const questionInput=form.elements.namedItem('question');
  questionInput.setCustomValidity(question?'':'Please enter a question.');
  if(!form.reportValidity()) return;
  const item={id:`demo-question-${++demoQuestionNumber}`,title:question,author:String(fields.get('role')),category:String(fields.get('category')),status:'Demo — not sent',local:true,missing:String(fields.get('missing') || '').trim(),answer:[{type:'paragraph',text:'No response yet. This demo question has not been sent to a CMP.'}]};
  questions.push(item);
  currentFilter='All';
  location.hash=`forum/${item.id}`;
});
page.addEventListener('input',event=>{if(event.target.name==='question') event.target.setCustomValidity('');});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-done').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!dialog.open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();searchInput.focus();}});
window.addEventListener('hashchange',()=>{render();document.querySelector('#main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});});
render();
