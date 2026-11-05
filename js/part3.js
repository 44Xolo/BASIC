(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.from((r||document).querySelectorAll(s))};
var DATA=[
{id:"code",code:"CODE",name:"CODE: Coding & Software",cat:"Digital",dur:12,level:"Beginner",intake:"15 Feb 2026",desc:"HTML/CSS/JS, Git and project delivery for community apps."},
{id:"ai",code:"AI",name:"AI: Artificial Intelligence Literacy",cat:"Digital",dur:8,level:"Intermediate",intake:"03 Mar 2026",desc:"Prompting, data cleaning, ethical use and small tools for local problems."},
{id:"green",code:"GREEN",name:"GREEN: Solar & Circular Economy",cat:"Sustainability",dur:10,level:"Beginner",intake:"10 Mar 2026",desc:"Solar PV basics, e-waste repurposing and green entrepreneurship."},
{id:"build",code:"BUILD",name:"BUILD: Makers & Urban Workshop",cat:"Making",dur:6,level:"Beginner",intake:"22 Feb 2026",desc:"Welding, woodwork and digital fabrication for local prototypes."},
{id:"entrepreneur",code:"ENTREPRENEUR",name:"ENTREPRENEUR: Micro-Business Incubation",cat:"Enterprise",dur:16,level:"Intermediate",intake:"01 Apr 2026",desc:"Business model canvas, costing, market testing and funding readiness."},
{id:"education",code:"EDUCATION",name:"EDUCATION: Tutor & Facilitator Track",cat:"Education",dur:12,level:"Advanced",intake:"08 Mar 2026",desc:"Train-the-trainer: pedagogy, facilitation and digital classroom tools."},
{id:"connect",code:"CONNECT",name:"CONNECT: Digital Inclusion & Access",cat:"Access",dur:4,level:"Beginner",intake:"Weekly",desc:"Device refurbishing, connectivity clinics and basic digital skills."}];
var SLOTS={code:["Mon/Wed 09:00-12:00","Tue/Thu 14:00-17:00"],ai:["Mon 14:00-16:00","Fri 09:00-11:00"],green:["Wed 09:00-15:00"],build:["Tue/Thu 09:00-13:00"],entrepreneur:["Thu 10:00-13:00"],education:["Mon-Fri 08:00-12:00"],connect:["Sat 09:00-12:00"]};
var PROGRAM_IMAGES={code:"code-editor.jpg",ai:"computer.jpg",green:"solar-energy.jpg",build:"machine.jpg",entrepreneur:"community-collaboration.jpg",education:"community-tutor.jpg",connect:"TOGETHER.jpg"};
var esc=function(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
/* nav */
var tg=$(".nav-toggle");if(tg)tg.addEventListener("click",function(){var o=$("#nav").classList.toggle("open");tg.setAttribute("aria-expanded",o)});
/* reveal */
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}})},{threshold:.1});$$(".reveal").forEach(function(el){io.observe(el)})}else $$(".reveal").forEach(function(el){el.classList.add("is-visible")});
/* accordion */
$$(".acc-btn").forEach(function(b){b.addEventListener("click",function(){var p=b.nextElementSibling,o=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",!o);p.style.maxHeight=o?0:p.scrollHeight+"px";b.lastChild.textContent=o?"+":"-"})});
/* modal */
function modal(t){$("#modal-text").textContent=t;$("#modal").classList.add("open");$("#modal-x").focus()}
$("#modal-x").addEventListener("click",function(){$("#modal").classList.remove("open")});
$("#modal").addEventListener("click",function(e){if(e.target.id==="modal")e.target.classList.remove("open")});
/* lightbox */
var imgs=$$(".gallery-grid img"),cur=0;
function show(i){cur=(i+imgs.length)%imgs.length;$("#lb-img").src=imgs[cur].src;$("#lb-img").alt=imgs[cur].alt;$("#lb-cap").textContent=imgs[cur].alt;$("#lb").classList.add("open")}
imgs.forEach(function(im,i){im.addEventListener("click",function(){show(i)})});
var gallery=$(".gallery-grid");
/* Keep only the six unique images in the HTML gallery; repeated clones are not added. */
$("#lb-x").addEventListener("click",function(){$("#lb").classList.remove("open")});$("#lb-p").addEventListener("click",function(){show(cur-1)});$("#lb-n").addEventListener("click",function(){show(cur+1)});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){$("#lb").classList.remove("open");$("#modal").classList.remove("open")}if($("#lb").classList.contains("open")){if(e.key==="ArrowRight")show(cur+1);if(e.key==="ArrowLeft")show(cur-1)}});
/* programmes */
var list=$("#programme-list");
if(list){var cat=$("#prog-cat");["All"].concat(DATA.map(function(d){return d.cat}).filter(function(v,i,a){return a.indexOf(v)===i})).forEach(function(c){cat.add(new Option(c,c))});
function render(){var q=$("#prog-search").value.trim().toLowerCase(),c=cat.value,s=$("#prog-sort").value;
var r=DATA.filter(function(d){return(c==="All"||d.cat===c)&&(!q||(d.name+d.desc+d.code).toLowerCase().indexOf(q)>-1)}).sort(function(a,b){return s==="za"?b.name.localeCompare(a.name):s==="dur"?a.dur-b.dur:a.name.localeCompare(b.name)});
var hl=function(t){t=esc(t);return q?t.replace(new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>"):t};
list.innerHTML=r.length?r.map(function(d){return'<article class="prog" id="'+d.id+'"><div><img class="prog-image" src="images/'+PROGRAM_IMAGES[d.id]+'" alt="'+esc(d.name)+' at BASIC"><span class="badge">'+d.code+'</span><p>'+d.cat+' | '+d.level+'<br>'+d.dur+' weeks | Intake '+d.intake+'</p></div><div><h3>'+hl(d.name)+'</h3><p>'+hl(d.desc)+'</p></div><div><a class="btn" href="enquiry.html?programme='+d.id+'">Volunteer</a></div></article>'}).join(""):"<p>No programmes match your search.</p>";
$("#prog-count").textContent=r.length+" / "+DATA.length+" programmes"}
["input","change"].forEach(function(ev){$(".tools").addEventListener(ev,render)});render()}
/* validation */
function check(el){var v=el.value,msg="",rules=(el.dataset.rules||"").split("|"),n=(el.labels&&el.labels[0]?el.labels[0].textContent:"Field");
for(var i=0;i<rules.length&&!msg;i++){var r=rules[i];
if(r==="required"&&!v.trim())msg=n+" is required";
else if(r.indexOf("min:")===0&&v.length<+r.slice(4))msg="Must be at least "+r.slice(4)+" characters";
else if(r.indexOf("max:")===0&&v.length>+r.slice(4))msg="Must be under "+r.slice(4)+" characters";
else if(r==="email"&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))msg="Enter a valid email";
else if(r==="sa-phone"&&v&&!/^(\+27|0)[6-8][0-9]{8}$/.test(v.replace(/[\s-]/g,"")))msg="Use SA format: 082 123 4567 or +27 82 123 4567";
else if(r==="future-date"&&v&&new Date(v+"T23:59:59")<=new Date())msg="Date must be in the future"}
var e=$("#"+el.id+"-e");if(e)e.textContent=msg;el.classList.toggle("invalid",!!msg);el.classList.toggle("valid",!msg&&!!v);return!msg}
function validate(f){var ok=true;$$("[data-rules]",f).forEach(function(el){if(el.closest("[hidden]"))return;if(!check(el))ok=false});return ok}
$$("[data-rules]").forEach(function(el){el.addEventListener("blur",function(){check(el)})});
/* enquiry */
var ef=$("#enq-form");
if(ef){var type="Volunteer",pq=new URLSearchParams(location.search).get("programme");if(pq&&SLOTS[pq])$("#e-prog").value=pq;
$$(".tab").forEach(function(t){t.addEventListener("click",function(){$$(".tab").forEach(function(x){x.classList.remove("active")});t.classList.add("active");type=t.dataset.type;$("#vol-box").hidden=type!=="Volunteer";$("#spon-box").hidden=type!=="Sponsor";$("#enq-result").hidden=true})});
ef.addEventListener("submit",function(e){e.preventDefault();if(!validate(ef))return;var out,n=$("#e-name").value,p=$("#e-prog").value.toUpperCase();
if(type==="Volunteer"){var d=new Date();d.setMonth(d.getMonth()+1);out="Thank you "+n+"!\nProgramme: "+p+"\nNext intake: "+d.toLocaleDateString("en-ZA",{month:"long",year:"numeric"})+"\nAvailable slots:\n- "+SLOTS[$("#e-prog").value].join("\n- ")+"\nWe will reply within 48 hours at "+$("#e-email").value+"."}
else if(type==="Sponsor"){var base=+$("#s-type").value,m=Math.min(36,Math.max(1,parseInt($("#s-months").value)||12)),t=+$("#s-tier").value,tot=Math.round(base*m/12*t);
out="Sponsorship estimate for "+n+"\nBase: R"+base.toLocaleString("en-ZA")+"/year | "+m+" months | tier x"+t+"\nTotal: R"+tot.toLocaleString("en-ZA")+"\n"+(m>=6?"Availability: immediate":"Availability: short-term, limited slots")}
else out="Partnership enquiry received from "+n+".\nOur Partnerships Lead will reply within 48 hours at "+$("#e-email").value+".";
var r=$("#enq-result");r.textContent=out;r.hidden=false;modal(out)})}
/* contact */
var cf=$("#contact-form");
if(cf)cf.addEventListener("submit",function(e){e.preventDefault();if(!validate(cf))return;
var sub="[BASIC "+$("#c-type").value+"] Message from "+$("#c-name").value,body="Name: "+$("#c-name").value+"\nEmail: "+$("#c-email").value+"\nPhone: "+($("#c-phone").value||"N/A")+"\nType: "+$("#c-type").value+"\n\n"+$("#c-msg").value;
$("#mail-pre").textContent="To: info@basiccommunity.org\nSubject: "+sub+"\n\n"+body;$("#mail-link").href="mailto:info@basiccommunity.org?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);$("#mail-out").hidden=false});

var pb=document.createElement("div");pb.className="progress";document.body.appendChild(pb);
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;pb.style.width=(h>0?scrollY/h*100:0)+"%"},{passive:true});
var sp=$("#splash"),seen=false,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
try{seen=sessionStorage.getItem("basic-splash")==="1";sessionStorage.setItem("basic-splash","1")}catch(e){}
if(sp){if(seen||reduce)sp.remove();else sp.innerHTML="BASIC.".split("").map(function(c,i){return'<span style="--i:'+i+'">'+c+'</span>'}).join("")}
var wait=sp&&!seen&&!reduce;document.documentElement.style.setProperty("--base",wait?"2.2s":".1s");
var h1=$(".hero h1");if(h1){h1.setAttribute("aria-label",h1.textContent);h1.innerHTML=h1.textContent.split(" ").map(function(w,i){return'<span class="w" aria-hidden="true"><span style="--i:'+i+'">'+esc(w)+'</span></span>'}).join(" ")}
$$(".two,.three,.four,.stats,.gallery-grid").forEach(function(g){g.classList.add("stagger");Array.from(g.children).forEach(function(c,i){c.style.setProperty("--i",i)})});
$$("[data-count]").forEach(function(el){var end=+el.dataset.count,dec=+(el.dataset.dec||0),suf=el.dataset.suffix||"";if(reduce||!("IntersectionObserver" in window))return;el.textContent=(0).toFixed(dec)+suf;
var o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();setTimeout(function(){var t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1500),e=1-Math.pow(1-p,3);el.textContent=(end*e).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0)},wait?2300:100)});o.observe(el)});
})();
