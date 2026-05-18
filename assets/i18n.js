/* =========================================================================
   konsulencë arGEar — i18n runtime
   Languages: SQ (source of truth), EN, IT, DE, ES
   ======================================================================== */
(function(){
  'use strict';

  // ---------- TRANSLATIONS ----------
  const T = {
    sq: {
      'nav.home':'Home','nav.about':'Rreth Nesh','nav.services':'Shërbime','nav.why':'Pse Ne',
      'nav.dss':'DSS','nav.calc':'Kalkulator','nav.contact':'Kontakt',
      'header.menuToggle':'Hap menunë','header.ctaContact':'Na Shkruaj','header.ctaWhatsapp':'WhatsApp',
      'header.brandSub':'Shkodër · 2015',
      'btn.bookMeeting':'Cakto takimin','btn.bookOne':'Cakto një takim','btn.services':'Shërbimet',
      'btn.allServices':'Të gjitha shërbimet →','btn.readStory':'Lexo historinë','btn.whyUs':'Pse ne',
      'btn.send':'Dërgo','btn.discussProject':'Diskuto një projekt','btn.visitDss':'Vizito DSS',
      'btn.writeEmail':'Shkruaj email','btn.writeDss':'Shkruaj DSS','btn.argearServices':'Shërbimet arGEar',
      'footer.tagline':'Konsulencë dhe shërbime biznesi<br/>Consultancy &amp; business services · 2015',
      'footer.pages':'Faqet','footer.services':'Shërbime','footer.contact':'Kontakt',
      'footer.svc.accounting':'Kontabilitet','footer.svc.taxRep':'Përfaqësim tatimor',
      'footer.svc.businessPlans':'Plane biznesi','footer.svc.statements':'Pasqyra',
      'footer.dssLabel':'DSS · Software','footer.setIn':'Set in <em>Archivo</em>',
      'footer.copyright':'© 2026 konsulencë ar<em class="nv">G</em><em>E</em>ar · Gilber Hysaj',
      'footer.cityCountry':'Shkodër · Albania',
      // Home
      'home.hero.badge':'Që nga 6 janar · 2015','home.hero.h1':'Bilanci i <em>besimit.</em>',
      'home.hero.tagline':'Konsulencë, kontabilitet, përfaqësim tatimor, ndërtime Website / Aplikacione dhe zgjidhje digjitale — për biznesin tuaj.',
      'home.transform.eyebrow':'Transformim','home.transform.h2':'Nga <span class="lt">letra,</span><br/>drejt <em>cloud‑it.</em>',
      'home.transform.tagline':'Që nga viti 2021 përdorim mbi pesë platforma fiskale të miratuara nga Drejtoria e Tatimeve.',
      'home.transform.meta1':'<b>2015</b> Themelimi','home.transform.meta2':'<b>2021</b> Cloud','home.transform.meta3':'<b>2026</b> Sot',
      'home.intro.eyebrow':'Rreth Nesh','home.intro.h2':'Një firmë e vogël<br/>me <em>kujtesë</em> të gjatë.',
      'home.intro.p':'Themeluar nga Gilber Hysaj në Shkodër, më 6 janar 2015. Sot, dhjetë vjet më vonë, klientët tanë të parë janë akoma klientët tanë — dhe një rrjet biznesesh shqiptare e të huaja u shtua rreth tyre.',
      'home.kpi1.l':'vjet · që nga 2015','home.kpi2.l':'biznese nën administrim','home.kpi3.l':'platforma fiskale cloud',
      'home.svc.eyebrow':'Shërbime','home.svc.h2':'Shtatë <em>shërbime,</em><br/>një standard.',
      'home.svc.note':'E gjithë puna jonë lind nga e njëjta fjalë: <em>korrektësi.</em>',
      'home.svc.l1':'Kontabilitet dhe deklarata','home.svc.l2':'Plane biznesi','home.svc.l3':'Këshillim tatimor',
      'home.svc.l4':'e‑Banking','home.svc.l5':'Raporte mujore','home.svc.l6':'Pasqyra financiare','home.svc.l7':'e‑Faturë',
      'home.svc.l8':'DSS · Departamenti i Zgjidhjeve Digjitale dhe Software',
      'home.dssteaser.eyebrow':'Department of Software Solutions',
      'home.dssteaser.h2':'DSS — <em>software</em><br/>',
      'home.dssteaser.p':'Departamenti i Zgjidhjeve Digjitale dhe Software. Ne ofrojmë zgjidhje digjitale për biznesin tuaj.Të apasionuar pas programimit — ndërtojmë websites, aplikacione, dashboardë, sisteme sezervimi, API-Integration, platforma për blerje online dhe çdo dëshirë tuajen e kthejmë në realitet.',
      'home.story.eyebrow':'Themeluesi','home.story.h2':'Një emër pas<br/>çdo <em>dosjeje.</em>',
      'home.story.p':'Gilber Hysaj është themeluesi dhe administratori i shoqërisë që nga 6 janari 2015. Bashkërisht me z. Hysaj, ekipi ynë punon me përkushtim dhe profesionalizëm të lartë, me synim ofrimin e shërbimeve cilësore për çdo klient.',
      'home.closing.eyebrow':'Kontakt','home.closing.h2':'Le të <em>flasim</em><br/>për bilancin tuaj.',
      'home.closing.p':'Na kontaktoni sot për një takim 30-minutësh, në Shkodër ose online, dhe le të flasim për biznesin tuaj.',
      'home.closing.metaAddr.b':'Adresa','home.closing.metaAddr.v':'Rruga Mbreti Gent, Shkodër',
      'home.closing.metaMail.b':'E‑mail','home.closing.metaHours.b':'Orari','home.closing.metaHours.v':'Hën — Pre · 08:30—17:30',
      // About
      'about.crumb':'Rreth Nesh','about.hero.h1':'Një firmë e vogël,<br/>me <em>kujtesë</em> të gjatë.',
      'about.hero.lead':'Themeluar nga Gilber Hysaj në Shkodër më 6 janar 2015. Dhjetë vjet përvojë në kontabilitet, përfaqësim tatimor dhe administrim biznesi.',
      'about.founder.eyebrow':'Themeluesi','about.founder.h2':'Një emër pas<br/>çdo <em>dosjeje.</em>',
      'about.founder.p1':'Gilber Hysaj është themeluesi dhe administratori i shoqërisë që nga dita e parë. Drejton një ekip prej tre profesionistësh me kohë të plotë dhe firmos personalisht çdo bilanc që del nga zyra.',
      'about.founder.p2':'Përfaqësimi “in persona” pranë Drejtorisë së Tatimeve dhe Sigurimeve Shoqërore nuk është shërbim shtesë, është standardi ynë.',
      'about.founder.quote':'“Bilanci nuk është thjesht një numër. Është marrëveshja midis bizneseve të vërteta dhe institucioneve që presin afatin.”',
      'about.founder.cite':'— Gilber Hysaj',
      'about.tl.eyebrow':'Kronologjia','about.tl.h2':'Dhjetë vjet, pa <em>ndërprerje.</em>',
      'about.tl.s1.h4':'Themelimi','about.tl.s1.p':'Regjistrohet me 4 SHPK dhe 7 PF. Të gjithë janë akoma klientët tanë.',
      'about.tl.s2.h4':'Cloud','about.tl.s2.p':'Integrim me pesë platformat fiskale të miratuara nga shteti.',
      'about.tl.s3.h4':'Sot','about.tl.s3.p':'16 SHPK dhe 21 PF. Katër me aksionerë të huaj. Dy filiala.',
      'about.values.eyebrow':'Vlerat','about.values.h2':'Tre <em>vlera,</em><br/>pa kompromis.',
      'about.values.v1.h3':'Konfidencialitet','about.values.v1.p':'Çdo e dhënë mbetet brenda dosjes. Pa përjashtime, pa ndarje informale.',
      'about.values.v2.h3':'Përfaqësim <em>“in persona”</em>','about.values.v2.p':'Jemi në sportel kur duhet. Klienti vazhdon biznesin.',
      'about.values.v3.h3':'Azhornim i vazhdueshëm','about.values.v3.p':'Lexojmë ligjin para se të bëhet titull. Vendime të bazuara në informacion të freskët.',
      'about.closing.h2':'Le ta vazhdojmë<br/>bisedën.','about.closing.p':'Një takim pa detyrim, në Shkodër ose online.',
      // Services
      'services.crumb':'Shërbime','services.hero.h1':'Shtatë <em>shërbime,</em><br/>një standard.',
      'services.s1.h2':'Kontabilitet &amp; deklarata.','services.s1.p':'Mbajtje e plotë e kontabilitetit dhe dorëzim periodik i deklaratave tatimore, për individë dhe biznese. Gjithmonë në afat.',
      'services.s1.t1':'Libri kryesor','services.s1.t2':'TVSH','services.s1.t3':'Sigurime','services.s1.t4':'Tatim mbi fitimin',
      'services.s2.h2':'Plane biznesi.','services.s2.p':'Studim fizibiliteti, projeksione 3 deri 5 vjeçare dhe modele financiare të mbrojtshme, për klientë shqiptarë dhe investitorë të huaj.',
      'services.s2.t1':'Fizibilitet','services.s2.t2':'Projeksione','services.s2.t3':'P&amp;L · CF','services.s2.t4':'Para bankave',
      'services.s3.h2':'Këshillim <em>tatimor.</em>','services.s3.p':'Azhornim i vazhdueshëm me ndryshimet ligjore që prekin biznesin tuaj, drejtpërdrejt apo tërthorazi. Vendime të qëndrueshme në kohë.',
      'services.s3.t1':'Newsletter ligjor','services.s3.t2':'Konsulencë e dedikuar','services.s3.t3':'Plan reagimi',
      'services.s4.h2':'e‑Banking.','services.s4.p':'Me autorizim të klientit, kryejmë pagesat periodike përmes e‑banking: paga, taksa dhe furnitorë. Asnjë afat i humbur.',
      'services.s4.t1':'Paga','services.s4.t2':'Taksa','services.s4.t3':'Furnitorë','services.s4.t4':'Rakordim mujor',
      'services.s5.h2':'Raporte <em>mujore.</em>','services.s5.p':'Të lexueshme për administratorin, jo tabela për kontabilistin. Një faqe që e kuptoni, një bilanc që e mbroni.',
      'services.s5.t1':'KPI dashboard','services.s5.t2':'Trende','services.s5.t3':'Takim 1:1',
      'services.s6.h2':'Pasqyra financiare.','services.s6.p':'Pasqyrat vjetore të shoqëruara me analizë të performancës ekonomiko‑financiare të biznesit. Aty ku shifrat marrin kuptim.',
      'services.s6.t1':'P&amp;L','services.s6.t2':'Bilanc','services.s6.t3':'Fluksi i parave','services.s6.t4':'Memo vjetore',
      'services.s7.h2':'e‑<em>Faturë.</em>','services.s7.p':'Punojmë mbi pesë platformat fiskale të miratuara që nga viti 2021. Ju nuk mendoni më për faturën, ne e dërgojmë.',
      'services.fiscal.lab':'Platforma fiskale të integruara · që nga 2021',
      'services.fiscal.sub':'Pesë platforma cloud të licencuara nga Administrata Tatimore.',
      'services.closing.h2':'Cili <em>shërbim</em><br/>ju duhet sot?','services.closing.p':'Bisedojmë më tej në një takim.',
      // Why
      'why.crumb':'Pse Ne','why.hero.h1':'Katër <em>arsye.</em><br/>Asnjë premtim bosh.',
      'why.hero.lead':'Konfidencialitet, përfaqësim personal, përvojë dhjetëvjeçare dhe azhornim i vazhdueshëm.',
      'why.r1.lab':'Arsyeja e parë','why.r1.h2':'Përvojë <em>shumëvjeçare.</em><br/>','why.r1.p':'Dhjetë vjet të pandërprerë në konsulencë biznesi për profile të ndryshme. Klientët tanë të parë janë akoma këtu.',
      'why.r2.lab':'Arsyeja e dytë','why.r2.h2':'Azhornim i vazhdueshëm<br/>me <em>legjislacionin.</em>','why.r2.p':'Lexojmë çdo ndryshim ligjor para se të bëhet titull. Pastaj e përkthejmë në vendime konkrete për biznesin tuaj.',
      'why.r3.lab':'Arsyeja e tretë','why.r3.h2':'Konfidencialitet <em>i plotë.</em><br/>','why.r3.p':'Çdo e dhënë ekonomike, financiare e tatimore mbahet brenda dosjes. Pa ndarje informale, edhe kur do të ishte më e shpejtë.',
      'why.r4.lab':'Arsyeja e katërt','why.r4.h2':'Përfaqësim <em>“in persona”.</em><br/>','why.r4.p':'Ne jemi në sportel pranë Drejtorisë së Tatimeve dhe Sigurimeve Shoqërore. Ju qëndroni në biznesin tuaj.',
      'why.closing.h2':'Edhe një <em>arsye</em><br/>e <em>pestë?</em>','why.closing.p':'Bisedojmë më tej në një takim.',
      // DSS
      'dss.crumb':'DSS','dss.hero.h1':'Software për <em>ju</em>','dss.hero.lead':'Departamenti i zgjidhjeve digjitale dhe software te konsulencë arGEar',
      'dss.manifesto.q':'Ne jemi <em>të apasionuar</em> pas programimit dhe e bëjmë atë të prekshëm.','dss.manifesto.sub':'DSS · Department of Software Solutions',
      'dss.orbital.eyebrow':'Çfarë ndërton DSS','dss.orbital.h2':'Shërbimet <em>tona.</em>','dss.orbital.caption':'klikoni një pikë për të parë detajet',
      'dss.showcase.eyebrow':'Punë e ndërtuar nga DSS','dss.showcase.h2':'Software që mund <em>ta prekësh.</em>',
      'dss.showcase.p':'Lëvizni kursorin mbi figurën. Softueri ynë është diçka që ndihet.',
      'dss.showcase.caseCaption':'një nga projektet tona 3d interaktive','dss.showcase.loader':'Po ngarkohet',
      'dss.offer.eyebrow':'Linja DSS','dss.offer.h2':'Çfarë <em>ndërtojmë</em><br/>për biznesin tuaj.',
      'dss.offer.i1.h3':'Web &amp; <em>aplikacione</em>','dss.offer.i1.p':'Website, portale, dashboardë, aplikacione — sipas nevojave tuaja.',
      'dss.offer.i2.h3':'Raporte &amp; <em>Dashboard</em>','dss.offer.i2.p':'Të dhëna live nga libri, banka dhe e‑faturat — për administratorin.',
      'dss.offer.i3.h3':'e‑Banking automatik','dss.offer.i3.p':'Pagesa periodike pa dorë. Konfirmime &amp; rakordim ndaj librit.',
      'dss.offer.i4.h3':'E‑commerce <em>stores</em>','dss.offer.i4.p':'Dyqane online të integruara me arkën, stokun dhe faturën fiskale. Nga produkti tek pagesa.',
      'dss.offer.i5.h3':'Integrime &amp; API','dss.offer.i5.p':'Sisteme që flasin: ERP, kasë, bankë, raportim — një burim i vetëm.',
      'dss.offer.i6.h3':'Siguria e <em>dosjes</em>','dss.offer.i6.p':'Backup, akses me role, kriptim AES‑256, pajtueshmëri GDPR.',
      'dss.contact.eyebrow':'Kontakti DSS','dss.contact.h2':'Shkruani <em>drejtpërdrejt</em> ekipit të kodit.',
      'dss.contact.p':'DSS ka linjën e vet të kontaktit. Ekipi i softuerit ju kthen përgjigje brenda 24 orësh — për një ofertë, një ide, ose vetëm një bisedë teknike.',
      'dss.contact.cardLab':'Department of Software Solutions','dss.contact.cardH3':'DSS <em>@</em> arGEar',
      'dss.contact.rEmail':'E‑mail','dss.contact.rPhone':'Telefon','dss.contact.rBased':'Bazuar','dss.contact.based.v':'Shkodër · Albania',
      'dss.closing.h2':'Një ide <em>softueri?</em><br/>Diskutojmë.','dss.closing.p':'Bashkë me kontabilistët, jo veçmas. DSS dhe arGEar punojnë në të njëjtën tavolinë.',
      // DSS orbital nodes
      'dss.n1.title':'Web & aplikacione','dss.n1.badge':'01 · Code','dss.n1.desc':'Portale, dashbordë e panele admini me React, TypeScript dhe Node.',
      'dss.n2.title':'E‑commerce stores','dss.n2.badge':'02 · Commerce','dss.n2.desc':'Dyqane online të integruara me arkën, stokun dhe faturën fiskale — nga produkti tek pagesa.',
      'dss.n3.title':'Dashbordë real‑time','dss.n3.badge':'03 · Data','dss.n3.desc':'Të dhëna live nga libri, banka dhe e‑Faturat — për administratorin.',
      'dss.n4.title':'e‑Banking automatik','dss.n4.badge':'04 · Banka','dss.n4.desc':'Pagesa periodike pa dorë. Konfirmime e rakordim ndaj librit.',
      'dss.n5.title':'Aplikacione mobile','dss.n5.badge':'05 · Mobile','dss.n5.desc':'iOS dhe Android — aplikacione native dhe cross-platform me React Native.',
      'dss.n6.title':'Integrime & API','dss.n6.badge':'06 · API','dss.n6.desc':'ERP, kasa fiskale, sisteme të huaja — një burim i vetëm i të dhënave.',
      'dss.n7.title':'Cloud & hosting','dss.n7.badge':'07 · Cloud','dss.n7.desc':'Deployment automatik në AWS, Cloudflare e Vercel. Skalim, backup, monitorim.',
      'dss.n8.title':'Siguria & GDPR','dss.n8.badge':'08 · Security','dss.n8.desc':'Backup, akses me role, kriptim AES‑256, pajtueshmëri e plotë GDPR.',
      // Calculator
      'calc.crumb':'Kalkulator','calc.hero.h1':'Numra <em>të qartë.</em><br/>Para se të firmosni.',
      'calc.hero.lead':'Tre kalkulatorë të shpejtë për TVSH-në, pagat dhe tatimin në burim. Falas, drejtpërdrejt, pa formularë.',
      'calc.hero.tag':'Mjete falas · 2026','calc.tabs.aria':'Zgjidh kalkulatorin',
      'calc.tab.vat':'TVSH','calc.tab.pay':'Pagë · bruto → neto','calc.tab.wht':'Tatim në burim',
      'calc.vat.modeAria':'Drejtimi i konvertimit','calc.vat.modeUp':'Neto → Bruto','calc.vat.modeDown':'Bruto → Neto',
      'calc.vat.lblInput':'Shuma pa TVSH','calc.vat.lblRate':'Norma',
      'calc.vat.opt20':'20% — normë standarde','calc.vat.opt10':'10% — turizëm i licencuar','calc.vat.opt6':'6% — agro-turizëm, librarë','calc.vat.opt0':'0% — eksport, përjashtime',
      'calc.vat.outNet':'Vlera neto (pa TVSH)','calc.vat.outTax':'TVSH','calc.vat.outGross':'Vlera bruto me TVSH',
      'calc.pay.lblInput':'Pagë bruto mujore','calc.pay.subEmp':'Punëmarrësi','calc.pay.subEr':'Punëdhënësi',
      'calc.pay.gross':'Pagë bruto','calc.pay.ss':'Sig. shoqërore (9.5%)','calc.pay.sh':'Sig. shëndetësore (1.7%)','calc.pay.tap':'Tatim mbi të ardhurat','calc.pay.net':'Pagë neto mujore',
      'calc.pay.ess':'Sig. shoqërore (15%)','calc.pay.esh':'Sig. shëndetësore (1.7%)','calc.pay.cost':'Kostoja totale',
      'calc.wht.lblType':'Lloji i pagesës','calc.wht.optDiv':'Dividend — 8%','calc.wht.optRent':'Qira — 15%','calc.wht.optSrv':'Pagesë për shërbime — 15%','calc.wht.optAgri':'Qira e tokës bujqësore — 7%','calc.wht.optIns':'Premium sigurimi jashtë vendit — 5%','calc.wht.optCustom':'Normë e personalizuar…',
      'calc.wht.lblCustom':'Norma e personalizuar','calc.wht.lblInput':'Vlera bruto',
      'calc.wht.outGross':'Vlera bruto','calc.wht.outTax':'Tatim në burim','calc.wht.outNet':'Vlera neto për marrësin',
      'calc.disc.strong':'Kujdes.','calc.disc.p':'Kalkulatorët nuk zëvendësojnë konsulencën financiare. Normat dhe kufijtë mund të ndryshojnë me ligj. Për llogaritje zyrtare të deklarueshme,','calc.disc.link':'kontaktoni me ne','calc.disc.or':'ose drejtohuni te','calc.disc.end':'.',
      'calc.cta.h3':'Doni <em>llogaritje të plotë</em> për biznesin tuaj?','calc.cta.p':'Na kontaktoni për më shumë informacion rreth llogaritjes së pagave, deklarimeve, raporte, etj.',
      // Contact
      'contact.crumb':'Kontakt','contact.hero.h1':'Le të <em>flasim.</em>',
      'contact.form.lab':'Shkruani','contact.form.h2':'Një <em>rresht</em> mjafton.','contact.form.sub':'Përgjigjemi brenda 4 orësh. Të dhënat janë konfidenciale.',
      'contact.form.lblName':'Emri','contact.form.phName':'Si t\'ju thërrasim?','contact.form.lblCompany':'Shoqëria','contact.form.phCompany':'opsionale',
      'contact.form.lblEmail':'E‑mail','contact.form.phEmail':'emri@shoqeria.com','contact.form.lblPhone':'Telefon','contact.form.phPhone':'+355 ...',
      'contact.form.lblMsg':'Mesazhi','contact.form.phMsg':'Çfarë po kërkoni?',
      'contact.form.privacy':'Të dhënat përdoren vetëm për t\'ju kontaktuar, jo për marketing.','contact.form.btnSend':'Dërgo',
      'contact.success.h3':'Mesazhi është gati.','contact.success.p':'Ju hapëm një email me mesazhin tuaj të para‑plotësuar. Klikoni <strong>Dërgo</strong> në klientin tuaj të email‑it për ta dorëzuar.',
      'contact.success.alt':'A nuk u hap email‑i? Na shkruani direkt te','contact.info.lab':'Kontakti direkt','contact.info.h3':'Telefon. <em>Email.</em> Sportel.',
      'contact.info.rTel':'Tel.','contact.info.rEmail':'E‑mail','contact.info.rAddr':'Adresa','contact.info.addr.v':'Rruga Mbreti Gent · Shkodër',
      'contact.info.rResp':'Përgjegjës','contact.info.btnWa':'WhatsApp','contact.info.btnEmail':'Shkruaj email',
      'contact.hours.lab':'Orari i punës','contact.hours.h4':'Hën — Sht · 08:00 — 17:00',
      'contact.hours.mon':'E hënë','contact.hours.tue':'E martë','contact.hours.wed':'E mërkurë','contact.hours.thu':'E enjte','contact.hours.fri':'E premte','contact.hours.sat':'E shtunë','contact.hours.sun':'E diel','contact.hours.closed':'Mbyllur'
    },

    en: {
      'nav.home':'Home','nav.about':'About','nav.services':'Services','nav.why':'Why Us',
      'nav.dss':'DSS','nav.calc':'Calculators','nav.contact':'Contact',
      'header.menuToggle':'Open menu','header.ctaContact':'Get in touch','header.ctaWhatsapp':'WhatsApp',
      'header.brandSub':'Shkodër · 2015',
      'btn.bookMeeting':'Book a meeting','btn.bookOne':'Book a meeting','btn.services':'Services',
      'btn.allServices':'All services →','btn.readStory':'Read the story','btn.whyUs':'Why us',
      'btn.send':'Send','btn.discussProject':'Discuss a project','btn.visitDss':'Visit DSS',
      'btn.writeEmail':'Send email','btn.writeDss':'Email DSS','btn.argearServices':'arGEar services',
      'footer.tagline':'Business consulting and services<br/>Consultancy &amp; business services · 2015',
      'footer.pages':'Pages','footer.services':'Services','footer.contact':'Contact',
      'footer.svc.accounting':'Accounting','footer.svc.taxRep':'Tax representation',
      'footer.svc.businessPlans':'Business plans','footer.svc.statements':'Financial statements',
      'footer.dssLabel':'DSS · Software','footer.setIn':'Set in <em>Archivo</em>',
      'footer.copyright':'© 2026 konsulencë ar<em class="nv">G</em><em>E</em>ar · Gilber Hysaj',
      'footer.cityCountry':'Shkodër · Albania',
      'home.hero.badge':'Since 6 January · 2015','home.hero.h1':'The balance sheet of <em>trust.</em>',
      'home.hero.tagline':'Consulting, accounting, tax representation, websites and digital solutions for your business.',
      'home.transform.eyebrow':'Transformation','home.transform.h2':'From <span class="lt">paper,</span><br/>to the <em>cloud.</em>',
      'home.transform.tagline':'Since 2021 we work on five fiscal platforms approved by the Albanian Tax Authority.',
      'home.transform.meta1':'<b>2015</b> Founded','home.transform.meta2':'<b>2021</b> Cloud','home.transform.meta3':'<b>2026</b> Today',
      'home.intro.eyebrow':'About','home.intro.h2':'A small firm<br/>with a long <em>memory.</em>',
      'home.intro.p':'Founded by Gilber Hysaj in Shkodër on 6 January 2015. Ten years later, our first clients are still our clients, and a network of Albanian and international businesses has grown around them.',
      'home.kpi1.l':'years · since 2015','home.kpi2.l':'businesses under management','home.kpi3.l':'cloud fiscal platforms',
      'home.svc.eyebrow':'Services','home.svc.h2':'Seven <em>services,</em><br/>one standard.',
      'home.svc.note':'All our work comes from one word: <em>rigour.</em>',
      'home.svc.l1':'Accounting and tax filings','home.svc.l2':'Business plans','home.svc.l3':'Tax advisory',
      'home.svc.l4':'e‑Banking','home.svc.l5':'Monthly reports','home.svc.l6':'Financial statements','home.svc.l7':'e‑Faturë',
      'home.svc.l8':'DSS · Department of Digital Solutions and Software',
      'home.dssteaser.eyebrow':'Department of Software Solutions',
      'home.dssteaser.h2':'DSS — <em>software</em><br/>',
      'home.dssteaser.p':'The Department of Digital Solutions and Software. We deliver digital solutions for your business. Passionate about programming, we build websites, applications, dashboards, booking systems, API integrations, online stores and turn every idea of yours into reality.',
      'home.story.eyebrow':'The founder','home.story.h2':'A name behind<br/>every <em>file.</em>',
      'home.story.p':'Gilber Hysaj has been the founder and managing director of the firm since 6 January 2015. Together with Mr. Hysaj, our team works with commitment and high professionalism, with the goal of providing quality services to every client.',
      'home.closing.eyebrow':'Contact','home.closing.h2':'Let\'s <em>talk</em><br/>about your books.',
      'home.closing.p':'Get in touch today for a 30-minute meeting, in Shkodër or online, and let\'s talk about your business.',
      'home.closing.metaAddr.b':'Address','home.closing.metaAddr.v':'Rruga Mbreti Gent, Shkodër',
      'home.closing.metaMail.b':'E‑mail','home.closing.metaHours.b':'Hours','home.closing.metaHours.v':'Mon — Fri · 08:30—17:30',
      'about.crumb':'About','about.hero.h1':'A small firm,<br/>with a long <em>memory.</em>',
      'about.hero.lead':'Founded by Gilber Hysaj in Shkodër on 6 January 2015. Ten years of experience in accounting, tax representation and business administration.',
      'about.founder.eyebrow':'The founder','about.founder.h2':'A name behind<br/>every <em>file.</em>',
      'about.founder.p1':'Gilber Hysaj has been the founder and managing director of the firm since day one. He leads a team of three full-time professionals and personally signs every balance sheet that leaves the office.',
      'about.founder.p2':'Representation "in persona" at the Tax and Social Insurance Directorate is not an extra service, it is our standard.',
      'about.founder.quote':'"A balance sheet is not just a number. It is the agreement between real businesses and the institutions watching the deadline."',
      'about.founder.cite':'— Gilber Hysaj',
      'about.tl.eyebrow':'Timeline','about.tl.h2':'Ten years, without <em>interruption.</em>',
      'about.tl.s1.h4':'Founded','about.tl.s1.p':'Registered with 4 SHPK and 7 PF. All of them are still our clients.',
      'about.tl.s2.h4':'Cloud','about.tl.s2.p':'Integration with five fiscal platforms approved by the state.',
      'about.tl.s3.h4':'Today','about.tl.s3.p':'16 SHPK and 21 PF. Four with foreign shareholders. Two branches.',
      'about.values.eyebrow':'Values','about.values.h2':'Three <em>values,</em><br/>no compromise.',
      'about.values.v1.h3':'Confidentiality','about.values.v1.p':'Every record stays inside the file. No exceptions, no informal sharing.',
      'about.values.v2.h3':'Representation <em>"in persona"</em>','about.values.v2.p':'We are at the counter when needed. The client stays focused on the business.',
      'about.values.v3.h3':'Continuous updates','about.values.v3.p':'We read the law before it becomes a headline. Decisions based on fresh information.',
      'about.closing.h2':'Let\'s continue<br/>the conversation.','about.closing.p':'A meeting with no obligation, in Shkodër or online.',
      'services.crumb':'Services','services.hero.h1':'Seven <em>services,</em><br/>one standard.',
      'services.s1.h2':'Accounting &amp; tax filings.','services.s1.p':'Full bookkeeping and periodic submission of tax declarations, for individuals and businesses. Always on time.',
      'services.s1.t1':'General ledger','services.s1.t2':'TVSH','services.s1.t3':'Insurance','services.s1.t4':'Profit tax',
      'services.s2.h2':'Business plans.','services.s2.p':'Feasibility studies, 3 to 5 year projections and defensible financial models, for Albanian clients and foreign investors.',
      'services.s2.t1':'Feasibility','services.s2.t2':'Projections','services.s2.t3':'P&amp;L · CF','services.s2.t4':'Bank-ready',
      'services.s3.h2':'Tax <em>advisory.</em>','services.s3.p':'Continuous updates on legal changes that affect your business, directly or indirectly. Decisions that hold up over time.',
      'services.s3.t1':'Legal newsletter','services.s3.t2':'Dedicated advisory','services.s3.t3':'Response plan',
      'services.s4.h2':'e‑Banking.','services.s4.p':'With client authorisation, we run periodic payments through e‑banking: payroll, taxes and suppliers. No deadline missed.',
      'services.s4.t1':'Payroll','services.s4.t2':'Taxes','services.s4.t3':'Suppliers','services.s4.t4':'Monthly reconciliation',
      'services.s5.h2':'Monthly <em>reports.</em>','services.s5.p':'Readable for the manager, not a spreadsheet for the accountant. One page you understand, one balance sheet you can defend.',
      'services.s5.t1':'KPI dashboard','services.s5.t2':'Trends','services.s5.t3':'1:1 meeting',
      'services.s6.h2':'Financial statements.','services.s6.p':'Annual statements with analysis of the economic and financial performance of the business. This is where the numbers gain meaning.',
      'services.s6.t1':'P&amp;L','services.s6.t2':'Balance sheet','services.s6.t3':'Cash flow','services.s6.t4':'Annual memo',
      'services.s7.h2':'e‑<em>Faturë.</em>','services.s7.p':'We work on five approved fiscal platforms, since 2021. You no longer think about the invoice, we send it.',
      'services.fiscal.lab':'Integrated fiscal platforms · since 2021',
      'services.fiscal.sub':'Five cloud platforms licensed by the Tax Administration.',
      'services.closing.h2':'Which <em>service</em><br/>do you need today?','services.closing.p':'We continue the conversation in a meeting.',
      'why.crumb':'Why Us','why.hero.h1':'Four <em>reasons.</em><br/>No empty promises.',
      'why.hero.lead':'Confidentiality, personal representation, ten years of experience and continuous updates.',
      'why.r1.lab':'Reason one','why.r1.h2':'Years of <em>experience.</em><br/>','why.r1.p':'Ten uninterrupted years in business consulting across different profiles. Our first clients are still here.',
      'why.r2.lab':'Reason two','why.r2.h2':'Always current<br/>with the <em>law.</em>','why.r2.p':'We read every legal change before it makes the headlines. Then we translate it into concrete decisions for your business.',
      'why.r3.lab':'Reason three','why.r3.h2':'Full <em>confidentiality.</em><br/>','why.r3.p':'Every economic, financial and tax record stays inside the file. No informal sharing, even when it would be faster.',
      'why.r4.lab':'Reason four','why.r4.h2':'Representation <em>"in persona".</em><br/>','why.r4.p':'We are at the counter at the Tax and Social Insurance Directorate. You stay focused on your business.',
      'why.closing.h2':'One more <em>reason,</em><br/>a <em>fifth?</em>','why.closing.p':'We continue the conversation in a meeting.',
      'dss.crumb':'DSS','dss.hero.h1':'Software for <em>you</em>','dss.hero.lead':'The digital and software solutions department at konsulencë arGEar.',
      'dss.manifesto.q':'We are <em>passionate</em> about programming and we make it tangible.','dss.manifesto.sub':'DSS · Department of Software Solutions',
      'dss.orbital.eyebrow':'What DSS builds','dss.orbital.h2':'Our <em>services.</em>','dss.orbital.caption':'click a point to see the details',
      'dss.showcase.eyebrow':'Work built by DSS','dss.showcase.h2':'Software you can <em>touch.</em>',
      'dss.showcase.p':'Move your cursor over the figure. Our software is something you can feel.',
      'dss.showcase.caseCaption':'one of our interactive 3D projects','dss.showcase.loader':'Loading',
      'dss.offer.eyebrow':'DSS lines','dss.offer.h2':'What we <em>build</em><br/>for your business.',
      'dss.offer.i1.h3':'Web &amp; <em>applications</em>','dss.offer.i1.p':'Websites, portals, dashboards and applications, built to your needs.',
      'dss.offer.i2.h3':'Reports &amp; <em>Dashboard</em>','dss.offer.i2.p':'Live data from the ledger, the bank and e‑Faturë, made for the manager.',
      'dss.offer.i3.h3':'Automated e‑Banking','dss.offer.i3.p':'Recurring payments without manual work. Confirmations and ledger reconciliation.',
      'dss.offer.i4.h3':'E‑commerce <em>stores</em>','dss.offer.i4.p':'Online stores integrated with the till, stock and fiscal invoicing. From the product to the payment.',
      'dss.offer.i5.h3':'Integrations &amp; API','dss.offer.i5.p':'Systems that talk to each other: ERP, till, bank, reporting. One single source.',
      'dss.offer.i6.h3':'File <em>security</em>','dss.offer.i6.p':'Backups, role-based access, AES‑256 encryption, full GDPR compliance.',
      'dss.contact.eyebrow':'DSS contact','dss.contact.h2':'Write <em>directly</em> to the code team.',
      'dss.contact.p':'DSS has its own contact line. The software team gets back to you within 24 hours, for an offer, an idea or just a technical conversation.',
      'dss.contact.cardLab':'Department of Software Solutions','dss.contact.cardH3':'DSS <em>@</em> arGEar',
      'dss.contact.rEmail':'E‑mail','dss.contact.rPhone':'Phone','dss.contact.rBased':'Based in','dss.contact.based.v':'Shkodër · Albania',
      'dss.closing.h2':'A <em>software</em> idea?<br/>Let\'s discuss it.','dss.closing.p':'Together with the accountants, not separately. DSS and arGEar work at the same table.',
      'dss.n1.title':'Web & applications','dss.n1.badge':'01 · Code','dss.n1.desc':'Portals, dashboards and admin panels with React, TypeScript and Node.',
      'dss.n2.title':'E‑commerce stores','dss.n2.badge':'02 · Commerce','dss.n2.desc':'Online stores integrated with till, stock and fiscal invoicing. From product to payment.',
      'dss.n3.title':'Real‑time dashboards','dss.n3.badge':'03 · Data','dss.n3.desc':'Live data from the ledger, the bank and e‑Faturë, for the manager.',
      'dss.n4.title':'Automated e‑Banking','dss.n4.badge':'04 · Bank','dss.n4.desc':'Recurring payments without manual work. Confirmations and ledger reconciliation.',
      'dss.n5.title':'Mobile applications','dss.n5.badge':'05 · Mobile','dss.n5.desc':'iOS and Android, native and cross-platform apps with React Native.',
      'dss.n6.title':'Integrations & API','dss.n6.badge':'06 · API','dss.n6.desc':'ERP, fiscal tills, third-party systems. One single data source.',
      'dss.n7.title':'Cloud & hosting','dss.n7.badge':'07 · Cloud','dss.n7.desc':'Automated deployment on AWS, Cloudflare and Vercel. Scaling, backups, monitoring.',
      'dss.n8.title':'Security & GDPR','dss.n8.badge':'08 · Security','dss.n8.desc':'Backups, role-based access, AES‑256 encryption, full GDPR compliance.',
      'calc.crumb':'Calculators','calc.hero.h1':'Clear <em>numbers.</em><br/>Before you sign.',
      'calc.hero.lead':'Three quick calculators for TVSH, payroll and withholding tax. Free, direct, no forms.',
      'calc.hero.tag':'Free tools · 2026','calc.tabs.aria':'Choose the calculator',
      'calc.tab.vat':'TVSH','calc.tab.pay':'Payroll · gross to net','calc.tab.wht':'Withholding tax',
      'calc.vat.modeAria':'Conversion direction','calc.vat.modeUp':'Net → Gross','calc.vat.modeDown':'Gross → Net',
      'calc.vat.lblInput':'Amount before TVSH','calc.vat.lblRate':'Rate',
      'calc.vat.opt20':'20% — standard rate','calc.vat.opt10':'10% — licensed tourism','calc.vat.opt6':'6% — agritourism, bookstores','calc.vat.opt0':'0% — exports, exemptions',
      'calc.vat.outNet':'Net value (before TVSH)','calc.vat.outTax':'TVSH','calc.vat.outGross':'Gross value with TVSH',
      'calc.pay.lblInput':'Monthly gross salary','calc.pay.subEmp':'Employee','calc.pay.subEr':'Employer',
      'calc.pay.gross':'Gross salary','calc.pay.ss':'Social insurance (9.5%)','calc.pay.sh':'Health insurance (1.7%)','calc.pay.tap':'Personal income tax','calc.pay.net':'Monthly net salary',
      'calc.pay.ess':'Social insurance (15%)','calc.pay.esh':'Health insurance (1.7%)','calc.pay.cost':'Total cost',
      'calc.wht.lblType':'Type of payment','calc.wht.optDiv':'Dividend — 8%','calc.wht.optRent':'Rent — 15%','calc.wht.optSrv':'Service payment — 15%','calc.wht.optAgri':'Agricultural land rent — 7%','calc.wht.optIns':'Foreign insurance premium — 5%','calc.wht.optCustom':'Custom rate…',
      'calc.wht.lblCustom':'Custom rate','calc.wht.lblInput':'Gross value',
      'calc.wht.outGross':'Gross value','calc.wht.outTax':'Withholding tax','calc.wht.outNet':'Net value to the recipient',
      'calc.disc.strong':'Note.','calc.disc.p':'These calculators do not replace financial advisory. Rates and thresholds can change by law. For official, reportable calculations,','calc.disc.link':'contact us','calc.disc.or':'or refer to','calc.disc.end':'.',
      'calc.cta.h3':'Want a <em>full calculation</em> for your business?','calc.cta.p':'Get in touch for more information on payroll, filings, reports and more.',
      'contact.crumb':'Contact','contact.hero.h1':'Let\'s <em>talk.</em>',
      'contact.form.lab':'Write to us','contact.form.h2':'One <em>line</em> is enough.','contact.form.sub':'We reply within 4 hours. Your information stays confidential.',
      'contact.form.lblName':'Name','contact.form.phName':'What should we call you?','contact.form.lblCompany':'Company','contact.form.phCompany':'optional',
      'contact.form.lblEmail':'E‑mail','contact.form.phEmail':'name@company.com','contact.form.lblPhone':'Phone','contact.form.phPhone':'+355 ...',
      'contact.form.lblMsg':'Message','contact.form.phMsg':'What are you looking for?',
      'contact.form.privacy':'Your information is used only to contact you, never for marketing.','contact.form.btnSend':'Send',
      'contact.success.h3':'Your message is ready.','contact.success.p':'We opened an email with your message already filled in. Click <strong>Send</strong> in your email client to deliver it.',
      'contact.success.alt':'Email did not open? Write to us directly at','contact.info.lab':'Direct contact','contact.info.h3':'Phone. <em>Email.</em> Office.',
      'contact.info.rTel':'Tel.','contact.info.rEmail':'E‑mail','contact.info.rAddr':'Address','contact.info.addr.v':'Rruga Mbreti Gent · Shkodër',
      'contact.info.rResp':'In charge','contact.info.btnWa':'WhatsApp','contact.info.btnEmail':'Send email',
      'contact.hours.lab':'Office hours','contact.hours.h4':'Mon — Sat · 08:00 — 17:00',
      'contact.hours.mon':'Monday','contact.hours.tue':'Tuesday','contact.hours.wed':'Wednesday','contact.hours.thu':'Thursday','contact.hours.fri':'Friday','contact.hours.sat':'Saturday','contact.hours.sun':'Sunday','contact.hours.closed':'Closed'
    },

    it: {
      'nav.home':'Home','nav.about':'Chi siamo','nav.services':'Servizi','nav.why':'Perché noi',
      'nav.dss':'DSS','nav.calc':'Calcolatori','nav.contact':'Contatti',
      'header.menuToggle':'Apri menu','header.ctaContact':'Scriveteci','header.ctaWhatsapp':'WhatsApp',
      'header.brandSub':'Scutari · 2015',
      'btn.bookMeeting':'Fissa un incontro','btn.bookOne':'Fissa un incontro','btn.services':'Servizi',
      'btn.allServices':'Tutti i servizi →','btn.readStory':'Leggi la storia','btn.whyUs':'Perché noi',
      'btn.send':'Invia','btn.discussProject':'Parliamo di un progetto','btn.visitDss':'Visita DSS',
      'btn.writeEmail':'Scrivi email','btn.writeDss':'Scrivi al DSS','btn.argearServices':'Servizi arGEar',
      'footer.tagline':'Consulenza e servizi per le imprese<br/>Consultancy &amp; business services · 2015',
      'footer.pages':'Pagine','footer.services':'Servizi','footer.contact':'Contatti',
      'footer.svc.accounting':'Contabilità','footer.svc.taxRep':'Rappresentanza fiscale',
      'footer.svc.businessPlans':'Business plan','footer.svc.statements':'Bilanci',
      'footer.dssLabel':'DSS · Software','footer.setIn':'Set in <em>Archivo</em>',
      'footer.copyright':'© 2026 konsulencë ar<em class="nv">G</em><em>E</em>ar · Gilber Hysaj',
      'footer.cityCountry':'Scutari · Albania',
      'home.hero.badge':'Dal 6 gennaio · 2015','home.hero.h1':'Il bilancio della <em>fiducia.</em>',
      'home.hero.tagline':'Consulenza, contabilità, rappresentanza fiscale, siti web, applicazioni e soluzioni digitali per la vostra impresa.',
      'home.transform.eyebrow':'Trasformazione','home.transform.h2':'Dalla <span class="lt">carta,</span><br/>verso il <em>cloud.</em>',
      'home.transform.tagline':'Dal 2021 operiamo su cinque piattaforme fiscali approvate dalla Direzione Generale delle Imposte.',
      'home.transform.meta1':'<b>2015</b> Fondazione','home.transform.meta2':'<b>2021</b> Cloud','home.transform.meta3':'<b>2026</b> Oggi',
      'home.intro.eyebrow':'Chi siamo','home.intro.h2':'Uno studio piccolo,<br/>con una <em>memoria</em> lunga.',
      'home.intro.p':'Fondato da Gilber Hysaj a Scutari il 6 gennaio 2015. Dieci anni dopo, i nostri primi clienti sono ancora i nostri clienti, e attorno a loro si è formata una rete di imprese albanesi e straniere.',
      'home.kpi1.l':'anni · dal 2015','home.kpi2.l':'imprese in gestione','home.kpi3.l':'piattaforme fiscali cloud',
      'home.svc.eyebrow':'Servizi','home.svc.h2':'Sette <em>servizi,</em><br/>uno standard.',
      'home.svc.note':'Tutto il nostro lavoro nasce da una sola parola: <em>rigore.</em>',
      'home.svc.l1':'Contabilità e dichiarazioni','home.svc.l2':'Business plan','home.svc.l3':'Consulenza fiscale',
      'home.svc.l4':'e‑Banking','home.svc.l5':'Report mensili','home.svc.l6':'Bilanci','home.svc.l7':'e‑Faturë',
      'home.svc.l8':'DSS · Dipartimento di Soluzioni Digitali e Software',
      'home.dssteaser.eyebrow':'Department of Software Solutions',
      'home.dssteaser.h2':'DSS — <em>software</em><br/>',
      'home.dssteaser.p':'Il Dipartimento di Soluzioni Digitali e Software. Sviluppiamo soluzioni digitali per la vostra impresa. Appassionati di programmazione, costruiamo siti web, applicazioni, dashboard, sistemi di prenotazione, integrazioni API, piattaforme di vendita online e trasformiamo ogni vostra idea in realtà.',
      'home.story.eyebrow':'Il fondatore','home.story.h2':'Un nome dietro<br/>ogni <em>pratica.</em>',
      'home.story.p':'Gilber Hysaj è fondatore e amministratore dello studio dal 6 gennaio 2015. Insieme al sig. Hysaj, il nostro team lavora con impegno e alta professionalità, con l\'obiettivo di offrire un servizio di qualità a ogni cliente.',
      'home.closing.eyebrow':'Contatti','home.closing.h2':'<em>Parliamo</em><br/>del vostro bilancio.',
      'home.closing.p':'Contattateci oggi per un incontro di 30 minuti, a Scutari o online, e parliamo della vostra impresa.',
      'home.closing.metaAddr.b':'Indirizzo','home.closing.metaAddr.v':'Rruga Mbreti Gent, Scutari',
      'home.closing.metaMail.b':'E‑mail','home.closing.metaHours.b':'Orari','home.closing.metaHours.v':'Lun — Ven · 08:30—17:30',
      'about.crumb':'Chi siamo','about.hero.h1':'Uno studio piccolo,<br/>con una lunga <em>memoria.</em>',
      'about.hero.lead':'Fondato da Gilber Hysaj a Scutari il 6 gennaio 2015. Dieci anni di esperienza in contabilità, rappresentanza fiscale e amministrazione d\'impresa.',
      'about.founder.eyebrow':'Il fondatore','about.founder.h2':'Un nome dietro<br/>ogni <em>pratica.</em>',
      'about.founder.p1':'Gilber Hysaj è fondatore e amministratore dello studio fin dal primo giorno. Guida un team di tre professionisti a tempo pieno e firma personalmente ogni bilancio che esce dallo studio.',
      'about.founder.p2':'La rappresentanza "in persona" presso la Direzione Generale delle Imposte e degli Istituti Previdenziali non è un servizio aggiuntivo, è il nostro standard.',
      'about.founder.quote':'"Un bilancio non è solo un numero. È l\'accordo tra imprese reali e le istituzioni che attendono la scadenza."',
      'about.founder.cite':'— Gilber Hysaj',
      'about.tl.eyebrow':'Cronologia','about.tl.h2':'Dieci anni, senza <em>interruzioni.</em>',
      'about.tl.s1.h4':'Fondazione','about.tl.s1.p':'Iscrizione con 4 SHPK e 7 PF. Sono ancora tutti nostri clienti.',
      'about.tl.s2.h4':'Cloud','about.tl.s2.p':'Integrazione con cinque piattaforme fiscali approvate dallo Stato.',
      'about.tl.s3.h4':'Oggi','about.tl.s3.p':'16 SHPK e 21 PF. Quattro con soci stranieri. Due filiali.',
      'about.values.eyebrow':'Valori','about.values.h2':'Tre <em>valori,</em><br/>nessun compromesso.',
      'about.values.v1.h3':'Riservatezza','about.values.v1.p':'Ogni dato resta dentro la pratica. Nessuna eccezione, nessuna condivisione informale.',
      'about.values.v2.h3':'Rappresentanza <em>"in persona"</em>','about.values.v2.p':'Siamo allo sportello quando serve. Il cliente continua il suo lavoro.',
      'about.values.v3.h3':'Aggiornamento continuo','about.values.v3.p':'Leggiamo la legge prima che diventi un titolo. Decisioni basate su informazioni fresche.',
      'about.closing.h2':'Continuiamo<br/>il discorso.','about.closing.p':'Un incontro senza impegno, a Scutari o online.',
      'services.crumb':'Servizi','services.hero.h1':'Sette <em>servizi,</em><br/>uno standard.',
      'services.s1.h2':'Contabilità e dichiarazioni.','services.s1.p':'Tenuta completa della contabilità e invio periodico delle dichiarazioni fiscali, per privati e imprese. Sempre nei tempi.',
      'services.s1.t1':'Libro generale','services.s1.t2':'TVSH','services.s1.t3':'Previdenza','services.s1.t4':'Imposta sui profitti',
      'services.s2.h2':'Business plan.','services.s2.p':'Studi di fattibilità, proiezioni a 3, 5 anni e modelli finanziari difendibili, per clienti albanesi e investitori esteri.',
      'services.s2.t1':'Fattibilità','services.s2.t2':'Proiezioni','services.s2.t3':'P&amp;L · CF','services.s2.t4':'Pronto per la banca',
      'services.s3.h2':'Consulenza <em>fiscale.</em>','services.s3.p':'Aggiornamento continuo sui cambiamenti normativi che riguardano la vostra impresa, in modo diretto o indiretto. Decisioni che reggono nel tempo.',
      'services.s3.t1':'Newsletter legale','services.s3.t2':'Consulenza dedicata','services.s3.t3':'Piano di risposta',
      'services.s4.h2':'e‑Banking.','services.s4.p':'Su autorizzazione del cliente, eseguiamo i pagamenti periodici via e‑banking: stipendi, imposte e fornitori. Nessuna scadenza saltata.',
      'services.s4.t1':'Stipendi','services.s4.t2':'Imposte','services.s4.t3':'Fornitori','services.s4.t4':'Riconciliazione mensile',
      'services.s5.h2':'Report <em>mensili.</em>','services.s5.p':'Leggibili per chi amministra, non un foglio per il contabile. Una pagina che capite, un bilancio che difendete.',
      'services.s5.t1':'KPI dashboard','services.s5.t2':'Trend','services.s5.t3':'Incontro 1 a 1',
      'services.s6.h2':'Bilanci.','services.s6.p':'Bilanci annuali corredati da un\'analisi della performance economico-finanziaria dell\'impresa. Dove i numeri acquistano significato.',
      'services.s6.t1':'P&amp;L','services.s6.t2':'Bilancio','services.s6.t3':'Flusso di cassa','services.s6.t4':'Memo annuale',
      'services.s7.h2':'e‑<em>Faturë.</em>','services.s7.p':'Lavoriamo su cinque piattaforme fiscali approvate, dal 2021. Voi non pensate più alla fattura, la inviamo noi.',
      'services.fiscal.lab':'Piattaforme fiscali integrate · dal 2021',
      'services.fiscal.sub':'Cinque piattaforme cloud autorizzate dall\'Amministrazione Tributaria.',
      'services.closing.h2':'Quale <em>servizio</em><br/>vi serve oggi?','services.closing.p':'Continuiamo il discorso in un incontro.',
      'why.crumb':'Perché noi','why.hero.h1':'Quattro <em>ragioni.</em><br/>Nessuna promessa vuota.',
      'why.hero.lead':'Riservatezza, rappresentanza personale, dieci anni di esperienza e aggiornamento continuo.',
      'why.r1.lab':'Prima ragione','why.r1.h2':'Esperienza <em>pluriennale.</em><br/>','why.r1.p':'Dieci anni ininterrotti di consulenza alle imprese, su profili molto diversi. I nostri primi clienti sono ancora qui.',
      'why.r2.lab':'Seconda ragione','why.r2.h2':'Sempre aggiornati<br/>con la <em>normativa.</em>','why.r2.p':'Leggiamo ogni cambiamento normativo prima che diventi un titolo. Poi lo traduciamo in decisioni concrete per la vostra impresa.',
      'why.r3.lab':'Terza ragione','why.r3.h2':'Riservatezza <em>totale.</em><br/>','why.r3.p':'Ogni dato economico, finanziario e fiscale resta dentro la pratica. Nessuna condivisione informale, anche quando sarebbe più rapido.',
      'why.r4.lab':'Quarta ragione','why.r4.h2':'Rappresentanza <em>"in persona".</em><br/>','why.r4.p':'Siamo allo sportello della Direzione Generale delle Imposte e degli Istituti Previdenziali. Voi restate concentrati sulla vostra impresa.',
      'why.closing.h2':'Vi serve una <em>quinta</em><br/><em>ragione?</em>','why.closing.p':'Continuiamo il discorso in un incontro.',
      'dss.crumb':'DSS','dss.hero.h1':'Software per <em>voi</em>','dss.hero.lead':'Il dipartimento di soluzioni digitali e software presso konsulencë arGEar.',
      'dss.manifesto.q':'Siamo <em>appassionati</em> di programmazione, e la rendiamo tangibile.','dss.manifesto.sub':'DSS · Department of Software Solutions',
      'dss.orbital.eyebrow':'Cosa costruisce DSS','dss.orbital.h2':'I nostri <em>servizi.</em>','dss.orbital.caption':'cliccate un punto per i dettagli',
      'dss.showcase.eyebrow':'Lavori realizzati dal DSS','dss.showcase.h2':'Software che si può <em>toccare.</em>',
      'dss.showcase.p':'Muovete il cursore sopra la figura. Il nostro software è qualcosa che si sente.',
      'dss.showcase.caseCaption':'uno dei nostri progetti 3D interattivi','dss.showcase.loader':'Caricamento',
      'dss.offer.eyebrow':'Linee DSS','dss.offer.h2':'Cosa <em>costruiamo</em><br/>per la vostra impresa.',
      'dss.offer.i1.h3':'Web e <em>applicazioni</em>','dss.offer.i1.p':'Siti, portali, dashboard e applicazioni, secondo le vostre esigenze.',
      'dss.offer.i2.h3':'Report e <em>Dashboard</em>','dss.offer.i2.p':'Dati live dal libro contabile, dalla banca e dalle e‑Faturë, pensati per chi amministra.',
      'dss.offer.i3.h3':'e‑Banking automatico','dss.offer.i3.p':'Pagamenti periodici senza interventi manuali. Conferme e riconciliazione contabile.',
      'dss.offer.i4.h3':'E‑commerce <em>stores</em>','dss.offer.i4.p':'Negozi online integrati con cassa, magazzino e fatturazione fiscale. Dal prodotto al pagamento.',
      'dss.offer.i5.h3':'Integrazioni e API','dss.offer.i5.p':'Sistemi che si parlano: ERP, casse, banca, reportistica. Un\'unica fonte.',
      'dss.offer.i6.h3':'Sicurezza dei <em>dati</em>','dss.offer.i6.p':'Backup, accessi per ruolo, cifratura AES‑256, piena conformità GDPR.',
      'dss.contact.eyebrow':'Contatto DSS','dss.contact.h2':'Scrivete <em>direttamente</em> al team di sviluppo.',
      'dss.contact.p':'DSS ha la sua linea di contatto. Il team software vi risponde entro 24 ore, per un\'offerta, un\'idea o anche solo una chiacchierata tecnica.',
      'dss.contact.cardLab':'Department of Software Solutions','dss.contact.cardH3':'DSS <em>@</em> arGEar',
      'dss.contact.rEmail':'E‑mail','dss.contact.rPhone':'Telefono','dss.contact.rBased':'Sede','dss.contact.based.v':'Scutari · Albania',
      'dss.closing.h2':'Un\'idea <em>software?</em><br/>Parliamone.','dss.closing.p':'Insieme ai contabili, non separati. DSS e arGEar lavorano allo stesso tavolo.',
      'dss.n1.title':'Web e applicazioni','dss.n1.badge':'01 · Code','dss.n1.desc':'Portali, dashboard e pannelli di amministrazione con React, TypeScript e Node.',
      'dss.n2.title':'E‑commerce stores','dss.n2.badge':'02 · Commerce','dss.n2.desc':'Negozi online integrati con cassa, magazzino e fatturazione fiscale. Dal prodotto al pagamento.',
      'dss.n3.title':'Dashboard real‑time','dss.n3.badge':'03 · Data','dss.n3.desc':'Dati live dal libro contabile, dalla banca e dalle e‑Faturë, per chi amministra.',
      'dss.n4.title':'e‑Banking automatico','dss.n4.badge':'04 · Banca','dss.n4.desc':'Pagamenti periodici senza interventi manuali. Conferme e riconciliazione contabile.',
      'dss.n5.title':'Applicazioni mobile','dss.n5.badge':'05 · Mobile','dss.n5.desc':'iOS e Android, app native e cross-platform con React Native.',
      'dss.n6.title':'Integrazioni e API','dss.n6.badge':'06 · API','dss.n6.desc':'ERP, casse fiscali, sistemi di terzi. Un\'unica fonte di dati.',
      'dss.n7.title':'Cloud e hosting','dss.n7.badge':'07 · Cloud','dss.n7.desc':'Deployment automatico su AWS, Cloudflare e Vercel. Scalabilità, backup, monitoraggio.',
      'dss.n8.title':'Sicurezza e GDPR','dss.n8.badge':'08 · Security','dss.n8.desc':'Backup, accessi per ruolo, cifratura AES‑256, piena conformità GDPR.',
      'calc.crumb':'Calcolatori','calc.hero.h1':'Numeri <em>chiari.</em><br/>Prima di firmare.',
      'calc.hero.lead':'Tre calcolatori veloci per TVSH, stipendi e ritenuta d\'acconto. Gratuiti, diretti, senza moduli.',
      'calc.hero.tag':'Strumenti gratuiti · 2026','calc.tabs.aria':'Scegliete il calcolatore',
      'calc.tab.vat':'TVSH','calc.tab.pay':'Stipendio · lordo a netto','calc.tab.wht':'Ritenuta d\'acconto',
      'calc.vat.modeAria':'Direzione della conversione','calc.vat.modeUp':'Netto → Lordo','calc.vat.modeDown':'Lordo → Netto',
      'calc.vat.lblInput':'Importo senza TVSH','calc.vat.lblRate':'Aliquota',
      'calc.vat.opt20':'20% — aliquota standard','calc.vat.opt10':'10% — turismo autorizzato','calc.vat.opt6':'6% — agriturismo, librerie','calc.vat.opt0':'0% — esportazioni, esenzioni',
      'calc.vat.outNet':'Valore netto (senza TVSH)','calc.vat.outTax':'TVSH','calc.vat.outGross':'Valore lordo con TVSH',
      'calc.pay.lblInput':'Stipendio lordo mensile','calc.pay.subEmp':'Lavoratore','calc.pay.subEr':'Datore di lavoro',
      'calc.pay.gross':'Stipendio lordo','calc.pay.ss':'Previdenza sociale (9.5%)','calc.pay.sh':'Assicurazione sanitaria (1.7%)','calc.pay.tap':'Imposta sul reddito','calc.pay.net':'Stipendio netto mensile',
      'calc.pay.ess':'Previdenza sociale (15%)','calc.pay.esh':'Assicurazione sanitaria (1.7%)','calc.pay.cost':'Costo totale',
      'calc.wht.lblType':'Tipo di pagamento','calc.wht.optDiv':'Dividendo — 8%','calc.wht.optRent':'Affitto — 15%','calc.wht.optSrv':'Pagamento per servizi — 15%','calc.wht.optAgri':'Affitto di terreno agricolo — 7%','calc.wht.optIns':'Premio assicurativo estero — 5%','calc.wht.optCustom':'Aliquota personalizzata…',
      'calc.wht.lblCustom':'Aliquota personalizzata','calc.wht.lblInput':'Valore lordo',
      'calc.wht.outGross':'Valore lordo','calc.wht.outTax':'Ritenuta d\'acconto','calc.wht.outNet':'Valore netto al beneficiario',
      'calc.disc.strong':'Avvertenza.','calc.disc.p':'I calcolatori non sostituiscono la consulenza finanziaria. Aliquote e soglie possono cambiare per legge. Per calcoli ufficiali da dichiarare,','calc.disc.link':'contattateci','calc.disc.or':'o consultate','calc.disc.end':'.',
      'calc.cta.h3':'Volete un <em>calcolo completo</em> per la vostra impresa?','calc.cta.p':'Scriveteci per maggiori informazioni su stipendi, dichiarazioni, report e altro ancora.',
      'contact.crumb':'Contatti','contact.hero.h1':'<em>Parliamo.</em>',
      'contact.form.lab':'Scriveteci','contact.form.h2':'Basta una <em>riga.</em>','contact.form.sub':'Rispondiamo entro 4 ore. I dati restano riservati.',
      'contact.form.lblName':'Nome','contact.form.phName':'Come dobbiamo chiamarvi?','contact.form.lblCompany':'Società','contact.form.phCompany':'opzionale',
      'contact.form.lblEmail':'E‑mail','contact.form.phEmail':'nome@azienda.com','contact.form.lblPhone':'Telefono','contact.form.phPhone':'+355 ...',
      'contact.form.lblMsg':'Messaggio','contact.form.phMsg':'Cosa state cercando?',
      'contact.form.privacy':'I dati vengono usati solo per ricontattarvi, mai per attività di marketing.','contact.form.btnSend':'Invia',
      'contact.success.h3':'Il messaggio è pronto.','contact.success.p':'Abbiamo aperto un\'email con il vostro messaggio già compilato. Cliccate <strong>Invia</strong> nel vostro client di posta per inoltrarlo.',
      'contact.success.alt':'L\'email non si è aperta? Scriveteci direttamente a','contact.info.lab':'Contatto diretto','contact.info.h3':'Telefono. <em>Email.</em> Sportello.',
      'contact.info.rTel':'Tel.','contact.info.rEmail':'E‑mail','contact.info.rAddr':'Indirizzo','contact.info.addr.v':'Rruga Mbreti Gent · Scutari',
      'contact.info.rResp':'Referente','contact.info.btnWa':'WhatsApp','contact.info.btnEmail':'Scrivi email',
      'contact.hours.lab':'Orari di apertura','contact.hours.h4':'Lun — Sab · 08:00 — 17:00',
      'contact.hours.mon':'Lunedì','contact.hours.tue':'Martedì','contact.hours.wed':'Mercoledì','contact.hours.thu':'Giovedì','contact.hours.fri':'Venerdì','contact.hours.sat':'Sabato','contact.hours.sun':'Domenica','contact.hours.closed':'Chiuso'
    },

    de: {
      'nav.home':'Start','nav.about':'Über uns','nav.services':'Leistungen','nav.why':'Warum wir',
      'nav.dss':'DSS','nav.calc':'Rechner','nav.contact':'Kontakt',
      'header.menuToggle':'Menü öffnen','header.ctaContact':'Schreiben Sie uns','header.ctaWhatsapp':'WhatsApp',
      'header.brandSub':'Shkodër · 2015',
      'btn.bookMeeting':'Termin vereinbaren','btn.bookOne':'Termin vereinbaren','btn.services':'Leistungen',
      'btn.allServices':'Alle Leistungen →','btn.readStory':'Geschichte lesen','btn.whyUs':'Warum wir',
      'btn.send':'Senden','btn.discussProject':'Projekt besprechen','btn.visitDss':'DSS besuchen',
      'btn.writeEmail':'E‑Mail senden','btn.writeDss':'DSS schreiben','btn.argearServices':'arGEar Leistungen',
      'footer.tagline':'Unternehmensberatung und Dienstleistungen<br/>Consultancy &amp; business services · 2015',
      'footer.pages':'Seiten','footer.services':'Leistungen','footer.contact':'Kontakt',
      'footer.svc.accounting':'Buchhaltung','footer.svc.taxRep':'Steuerliche Vertretung',
      'footer.svc.businessPlans':'Businesspläne','footer.svc.statements':'Jahresabschlüsse',
      'footer.dssLabel':'DSS · Software','footer.setIn':'Set in <em>Archivo</em>',
      'footer.copyright':'© 2026 konsulencë ar<em class="nv">G</em><em>E</em>ar · Gilber Hysaj',
      'footer.cityCountry':'Shkodër · Albanien',
      'home.hero.badge':'Seit 6. Januar · 2015','home.hero.h1':'Die Bilanz des <em>Vertrauens.</em>',
      'home.hero.tagline':'Beratung, Buchhaltung, steuerliche Vertretung, Websites, Anwendungen und digitale Lösungen für Ihr Unternehmen.',
      'home.transform.eyebrow':'Wandel','home.transform.h2':'Vom <span class="lt">Papier,</span><br/>in die <em>Cloud.</em>',
      'home.transform.tagline':'Seit 2021 arbeiten wir auf fünf zugelassenen Fiskalplattformen der albanischen Steuerverwaltung.',
      'home.transform.meta1':'<b>2015</b> Gründung','home.transform.meta2':'<b>2021</b> Cloud','home.transform.meta3':'<b>2026</b> Heute',
      'home.intro.eyebrow':'Über uns','home.intro.h2':'Eine kleine Kanzlei<br/>mit langem <em>Gedächtnis.</em>',
      'home.intro.p':'Gegründet von Gilber Hysaj in Shkodër am 6. Januar 2015. Zehn Jahre später sind unsere ersten Mandanten noch immer unsere Mandanten, und ein Netzwerk albanischer und ausländischer Unternehmen ist um sie herum gewachsen.',
      'home.kpi1.l':'Jahre · seit 2015','home.kpi2.l':'Unternehmen in Betreuung','home.kpi3.l':'Cloud‑Fiskalplattformen',
      'home.svc.eyebrow':'Leistungen','home.svc.h2':'Sieben <em>Leistungen,</em><br/>ein Standard.',
      'home.svc.note':'Unsere gesamte Arbeit beruht auf einem Wort: <em>Sorgfalt.</em>',
      'home.svc.l1':'Buchhaltung und Steuererklärungen','home.svc.l2':'Businesspläne','home.svc.l3':'Steuerberatung',
      'home.svc.l4':'e‑Banking','home.svc.l5':'Monatsberichte','home.svc.l6':'Jahresabschlüsse','home.svc.l7':'e‑Faturë',
      'home.svc.l8':'DSS · Abteilung für digitale Lösungen und Software',
      'home.dssteaser.eyebrow':'Department of Software Solutions',
      'home.dssteaser.h2':'DSS — <em>Software</em><br/>',
      'home.dssteaser.p':'Die Abteilung für digitale Lösungen und Software. Wir liefern digitale Lösungen für Ihr Unternehmen. Mit Leidenschaft für die Programmierung entwickeln wir Websites, Anwendungen, Dashboards, Buchungssysteme, API‑Integrationen, Online‑Shops und verwandeln jede Ihrer Ideen in Realität.',
      'home.story.eyebrow':'Der Gründer','home.story.h2':'Ein Name hinter<br/>jeder <em>Akte.</em>',
      'home.story.p':'Gilber Hysaj ist seit dem 6. Januar 2015 Gründer und Geschäftsführer der Kanzlei. Gemeinsam mit Herrn Hysaj arbeitet unser Team mit Hingabe und hoher Fachkompetenz, mit dem Ziel, für jeden Mandanten erstklassige Leistungen zu erbringen.',
      'home.closing.eyebrow':'Kontakt','home.closing.h2':'<em>Sprechen</em> wir<br/>über Ihre Bilanz.',
      'home.closing.p':'Kontaktieren Sie uns heute für ein 30‑minütiges Gespräch, in Shkodër oder online, und sprechen wir über Ihr Unternehmen.',
      'home.closing.metaAddr.b':'Adresse','home.closing.metaAddr.v':'Rruga Mbreti Gent, Shkodër',
      'home.closing.metaMail.b':'E‑Mail','home.closing.metaHours.b':'Zeiten','home.closing.metaHours.v':'Mo — Fr · 08:30—17:30',
      'about.crumb':'Über uns','about.hero.h1':'Eine kleine Kanzlei,<br/>mit langem <em>Gedächtnis.</em>',
      'about.hero.lead':'Gegründet von Gilber Hysaj in Shkodër am 6. Januar 2015. Zehn Jahre Erfahrung in Buchhaltung, steuerlicher Vertretung und Unternehmensverwaltung.',
      'about.founder.eyebrow':'Der Gründer','about.founder.h2':'Ein Name hinter<br/>jeder <em>Akte.</em>',
      'about.founder.p1':'Gilber Hysaj ist Gründer und Geschäftsführer der Kanzlei seit dem ersten Tag. Er leitet ein Team von drei Vollzeit‑Fachleuten und unterzeichnet jede Bilanz, die das Büro verlässt, persönlich.',
      'about.founder.p2':'Die Vertretung „in persona" bei der Steuer‑ und Sozialversicherungsdirektion ist keine Zusatzleistung, sondern unser Standard.',
      'about.founder.quote':'„Eine Bilanz ist nicht nur eine Zahl. Sie ist die Vereinbarung zwischen echten Unternehmen und den Behörden, die auf die Frist warten."',
      'about.founder.cite':'— Gilber Hysaj',
      'about.tl.eyebrow':'Chronik','about.tl.h2':'Zehn Jahre, ohne <em>Unterbrechung.</em>',
      'about.tl.s1.h4':'Gründung','about.tl.s1.p':'Eintragung mit 4 SHPK und 7 PF. Alle sind noch unsere Mandanten.',
      'about.tl.s2.h4':'Cloud','about.tl.s2.p':'Integration mit fünf staatlich zugelassenen Fiskalplattformen.',
      'about.tl.s3.h4':'Heute','about.tl.s3.p':'16 SHPK und 21 PF. Vier mit ausländischen Gesellschaftern. Zwei Filialen.',
      'about.values.eyebrow':'Werte','about.values.h2':'Drei <em>Werte,</em><br/>ohne Kompromiss.',
      'about.values.v1.h3':'Vertraulichkeit','about.values.v1.p':'Jeder Datensatz bleibt in der Akte. Keine Ausnahmen, kein informeller Austausch.',
      'about.values.v2.h3':'Vertretung <em>„in persona"</em>','about.values.v2.p':'Wir sind am Schalter, wenn es nötig ist. Der Mandant bleibt bei seinem Geschäft.',
      'about.values.v3.h3':'Ständige Aktualisierung','about.values.v3.p':'Wir lesen das Gesetz, bevor es Schlagzeile wird. Entscheidungen auf Grundlage aktueller Informationen.',
      'about.closing.h2':'Setzen wir das<br/>Gespräch fort.','about.closing.p':'Ein unverbindlicher Termin, in Shkodër oder online.',
      'services.crumb':'Leistungen','services.hero.h1':'Sieben <em>Leistungen,</em><br/>ein Standard.',
      'services.s1.h2':'Buchhaltung und Steuererklärungen.','services.s1.p':'Vollständige Buchführung und fristgerechte Abgabe der Steuererklärungen, für Privatpersonen und Unternehmen. Immer pünktlich.',
      'services.s1.t1':'Hauptbuch','services.s1.t2':'TVSH','services.s1.t3':'Sozialabgaben','services.s1.t4':'Gewinnsteuer',
      'services.s2.h2':'Businesspläne.','services.s2.p':'Machbarkeitsstudien, Projektionen über 3 bis 5 Jahre und belastbare Finanzmodelle, für albanische Mandanten und ausländische Investoren.',
      'services.s2.t1':'Machbarkeit','services.s2.t2':'Projektionen','services.s2.t3':'P&amp;L · CF','services.s2.t4':'Bankfähig',
      'services.s3.h2':'Steuer<em>beratung.</em>','services.s3.p':'Ständige Aktualisierung zu Gesetzesänderungen, die Ihr Unternehmen direkt oder indirekt betreffen. Entscheidungen, die langfristig halten.',
      'services.s3.t1':'Rechts‑Newsletter','services.s3.t2':'Persönliche Beratung','services.s3.t3':'Reaktionsplan',
      'services.s4.h2':'e‑Banking.','services.s4.p':'Mit Vollmacht des Mandanten führen wir die laufenden Zahlungen über e‑Banking aus: Löhne, Steuern und Lieferanten. Keine Frist versäumt.',
      'services.s4.t1':'Löhne','services.s4.t2':'Steuern','services.s4.t3':'Lieferanten','services.s4.t4':'Monatliche Abstimmung',
      'services.s5.h2':'Monats<em>berichte.</em>','services.s5.p':'Lesbar für die Geschäftsleitung, keine Tabelle für die Buchhaltung. Eine Seite, die Sie verstehen, eine Bilanz, die Sie vertreten können.',
      'services.s5.t1':'KPI‑Dashboard','services.s5.t2':'Trends','services.s5.t3':'1:1‑Termin',
      'services.s6.h2':'Jahresabschlüsse.','services.s6.p':'Jahresabschlüsse mit Analyse der wirtschaftlich‑finanziellen Leistung des Unternehmens. Hier bekommen die Zahlen Bedeutung.',
      'services.s6.t1':'P&amp;L','services.s6.t2':'Bilanz','services.s6.t3':'Cashflow','services.s6.t4':'Jahresmemo',
      'services.s7.h2':'e‑<em>Faturë.</em>','services.s7.p':'Wir arbeiten seit 2021 auf fünf zugelassenen Fiskalplattformen. Sie denken nicht mehr an die Rechnung, wir versenden sie.',
      'services.fiscal.lab':'Integrierte Fiskalplattformen · seit 2021',
      'services.fiscal.sub':'Fünf Cloud‑Plattformen, lizenziert von der Steuerverwaltung.',
      'services.closing.h2':'Welche <em>Leistung</em><br/>brauchen Sie heute?','services.closing.p':'Wir setzen das Gespräch in einem Termin fort.',
      'why.crumb':'Warum wir','why.hero.h1':'Vier <em>Gründe.</em><br/>Keine leeren Versprechen.',
      'why.hero.lead':'Vertraulichkeit, persönliche Vertretung, zehn Jahre Erfahrung und ständige Aktualisierung.',
      'why.r1.lab':'Erster Grund','why.r1.h2':'Langjährige <em>Erfahrung.</em><br/>','why.r1.p':'Zehn ununterbrochene Jahre Unternehmensberatung über sehr unterschiedliche Profile hinweg. Unsere ersten Mandanten sind noch hier.',
      'why.r2.lab':'Zweiter Grund','why.r2.h2':'Immer aktuell<br/>mit der <em>Gesetzgebung.</em>','why.r2.p':'Wir lesen jede Gesetzesänderung, bevor sie Schlagzeile wird. Dann übersetzen wir sie in konkrete Entscheidungen für Ihr Unternehmen.',
      'why.r3.lab':'Dritter Grund','why.r3.h2':'Volle <em>Vertraulichkeit.</em><br/>','why.r3.p':'Jede wirtschaftliche, finanzielle und steuerliche Information bleibt in der Akte. Kein informeller Austausch, auch wenn es schneller wäre.',
      'why.r4.lab':'Vierter Grund','why.r4.h2':'Vertretung <em>„in persona".</em><br/>','why.r4.p':'Wir sind am Schalter der Steuer‑ und Sozialversicherungsdirektion. Sie bleiben bei Ihrem Geschäft.',
      'why.closing.h2':'Noch ein <em>fünfter</em><br/><em>Grund?</em>','why.closing.p':'Wir setzen das Gespräch in einem Termin fort.',
      'dss.crumb':'DSS','dss.hero.h1':'Software für <em>Sie</em>','dss.hero.lead':'Die Abteilung für digitale Lösungen und Software bei konsulencë arGEar.',
      'dss.manifesto.q':'Wir sind <em>begeistert</em> vom Programmieren und machen es greifbar.','dss.manifesto.sub':'DSS · Department of Software Solutions',
      'dss.orbital.eyebrow':'Was DSS baut','dss.orbital.h2':'Unsere <em>Leistungen.</em>','dss.orbital.caption':'klicken Sie einen Punkt für Details',
      'dss.showcase.eyebrow':'Arbeit von DSS','dss.showcase.h2':'Software zum <em>Anfassen.</em>',
      'dss.showcase.p':'Bewegen Sie den Cursor über die Figur. Unsere Software ist etwas, das man spürt.',
      'dss.showcase.caseCaption':'eines unserer interaktiven 3D‑Projekte','dss.showcase.loader':'Lädt',
      'dss.offer.eyebrow':'DSS‑Linien','dss.offer.h2':'Was wir <em>bauen</em><br/>für Ihr Unternehmen.',
      'dss.offer.i1.h3':'Web und <em>Anwendungen</em>','dss.offer.i1.p':'Websites, Portale, Dashboards und Anwendungen, nach Ihren Anforderungen.',
      'dss.offer.i2.h3':'Berichte und <em>Dashboard</em>','dss.offer.i2.p':'Live‑Daten aus Buchhaltung, Bank und e‑Faturë, für die Geschäftsleitung.',
      'dss.offer.i3.h3':'Automatisches e‑Banking','dss.offer.i3.p':'Wiederkehrende Zahlungen ohne manuellen Aufwand. Bestätigungen und Abstimmung mit dem Buch.',
      'dss.offer.i4.h3':'E‑Commerce <em>Stores</em>','dss.offer.i4.p':'Online‑Shops, integriert mit Kasse, Lager und Fiskalrechnung. Vom Produkt bis zur Zahlung.',
      'dss.offer.i5.h3':'Integrationen und API','dss.offer.i5.p':'Systeme, die miteinander sprechen: ERP, Kasse, Bank, Reporting. Eine einzige Quelle.',
      'dss.offer.i6.h3':'Akten<em>sicherheit</em>','dss.offer.i6.p':'Backups, rollenbasierter Zugriff, AES‑256‑Verschlüsselung, volle DSGVO‑Konformität.',
      'dss.contact.eyebrow':'DSS‑Kontakt','dss.contact.h2':'Schreiben Sie <em>direkt</em> dem Entwicklungsteam.',
      'dss.contact.p':'DSS hat eine eigene Kontaktlinie. Das Software‑Team antwortet Ihnen innerhalb von 24 Stunden, für ein Angebot, eine Idee oder einfach ein technisches Gespräch.',
      'dss.contact.cardLab':'Department of Software Solutions','dss.contact.cardH3':'DSS <em>@</em> arGEar',
      'dss.contact.rEmail':'E‑Mail','dss.contact.rPhone':'Telefon','dss.contact.rBased':'Sitz','dss.contact.based.v':'Shkodër · Albanien',
      'dss.closing.h2':'Eine <em>Software‑</em>Idee?<br/>Sprechen wir darüber.','dss.closing.p':'Gemeinsam mit den Buchhaltern, nicht getrennt. DSS und arGEar arbeiten am selben Tisch.',
      'dss.n1.title':'Web und Anwendungen','dss.n1.badge':'01 · Code','dss.n1.desc':'Portale, Dashboards und Admin‑Panels mit React, TypeScript und Node.',
      'dss.n2.title':'E‑Commerce Stores','dss.n2.badge':'02 · Commerce','dss.n2.desc':'Online‑Shops, integriert mit Kasse, Lager und Fiskalrechnung. Vom Produkt bis zur Zahlung.',
      'dss.n3.title':'Real‑time Dashboards','dss.n3.badge':'03 · Data','dss.n3.desc':'Live‑Daten aus Buchhaltung, Bank und e‑Faturë, für die Geschäftsleitung.',
      'dss.n4.title':'Automatisches e‑Banking','dss.n4.badge':'04 · Bank','dss.n4.desc':'Wiederkehrende Zahlungen ohne manuellen Aufwand. Bestätigungen und Abstimmung mit dem Buch.',
      'dss.n5.title':'Mobile Anwendungen','dss.n5.badge':'05 · Mobile','dss.n5.desc':'iOS und Android, native und plattformübergreifende Apps mit React Native.',
      'dss.n6.title':'Integrationen und API','dss.n6.badge':'06 · API','dss.n6.desc':'ERP, Fiskalkassen, fremde Systeme. Eine einzige Datenquelle.',
      'dss.n7.title':'Cloud und Hosting','dss.n7.badge':'07 · Cloud','dss.n7.desc':'Automatisches Deployment auf AWS, Cloudflare und Vercel. Skalierung, Backups, Monitoring.',
      'dss.n8.title':'Sicherheit und DSGVO','dss.n8.badge':'08 · Security','dss.n8.desc':'Backups, rollenbasierter Zugriff, AES‑256‑Verschlüsselung, volle DSGVO‑Konformität.',
      'calc.crumb':'Rechner','calc.hero.h1':'Klare <em>Zahlen.</em><br/>Bevor Sie unterschreiben.',
      'calc.hero.lead':'Drei schnelle Rechner für TVSH, Löhne und Quellensteuer. Kostenlos, direkt, ohne Formulare.',
      'calc.hero.tag':'Kostenlose Tools · 2026','calc.tabs.aria':'Rechner auswählen',
      'calc.tab.vat':'TVSH','calc.tab.pay':'Lohn · brutto zu netto','calc.tab.wht':'Quellensteuer',
      'calc.vat.modeAria':'Umrechnungsrichtung','calc.vat.modeUp':'Netto → Brutto','calc.vat.modeDown':'Brutto → Netto',
      'calc.vat.lblInput':'Betrag ohne TVSH','calc.vat.lblRate':'Satz',
      'calc.vat.opt20':'20% — Regelsatz','calc.vat.opt10':'10% — lizenzierter Tourismus','calc.vat.opt6':'6% — Agrotourismus, Buchhandel','calc.vat.opt0':'0% — Export, Befreiungen',
      'calc.vat.outNet':'Nettowert (ohne TVSH)','calc.vat.outTax':'TVSH','calc.vat.outGross':'Bruttowert mit TVSH',
      'calc.pay.lblInput':'Monatslohn brutto','calc.pay.subEmp':'Arbeitnehmer','calc.pay.subEr':'Arbeitgeber',
      'calc.pay.gross':'Bruttolohn','calc.pay.ss':'Sozialversicherung (9,5%)','calc.pay.sh':'Krankenversicherung (1,7%)','calc.pay.tap':'Einkommensteuer','calc.pay.net':'Monatslohn netto',
      'calc.pay.ess':'Sozialversicherung (15%)','calc.pay.esh':'Krankenversicherung (1,7%)','calc.pay.cost':'Gesamtkosten',
      'calc.wht.lblType':'Zahlungsart','calc.wht.optDiv':'Dividende — 8%','calc.wht.optRent':'Miete — 15%','calc.wht.optSrv':'Dienstleistungszahlung — 15%','calc.wht.optAgri':'Pacht von Agrarflächen — 7%','calc.wht.optIns':'Auslandsversicherungsprämie — 5%','calc.wht.optCustom':'Eigener Satz…',
      'calc.wht.lblCustom':'Eigener Satz','calc.wht.lblInput':'Bruttowert',
      'calc.wht.outGross':'Bruttowert','calc.wht.outTax':'Quellensteuer','calc.wht.outNet':'Nettowert für den Empfänger',
      'calc.disc.strong':'Hinweis.','calc.disc.p':'Die Rechner ersetzen keine Finanzberatung. Sätze und Grenzen können sich gesetzlich ändern. Für offizielle, meldepflichtige Berechnungen,','calc.disc.link':'kontaktieren Sie uns','calc.disc.or':'oder wenden Sie sich an','calc.disc.end':'.',
      'calc.cta.h3':'Wünschen Sie eine <em>vollständige Berechnung</em> für Ihr Unternehmen?','calc.cta.p':'Schreiben Sie uns für weitere Informationen zu Löhnen, Erklärungen, Berichten und mehr.',
      'contact.crumb':'Kontakt','contact.hero.h1':'Sprechen wir <em>miteinander.</em>',
      'contact.form.lab':'Schreiben Sie','contact.form.h2':'Eine <em>Zeile</em> reicht.','contact.form.sub':'Wir antworten innerhalb von 4 Stunden. Ihre Angaben bleiben vertraulich.',
      'contact.form.lblName':'Name','contact.form.phName':'Wie sollen wir Sie ansprechen?','contact.form.lblCompany':'Firma','contact.form.phCompany':'optional',
      'contact.form.lblEmail':'E‑Mail','contact.form.phEmail':'name@firma.de','contact.form.lblPhone':'Telefon','contact.form.phPhone':'+355 ...',
      'contact.form.lblMsg':'Nachricht','contact.form.phMsg':'Was suchen Sie?',
      'contact.form.privacy':'Ihre Angaben werden ausschließlich zur Kontaktaufnahme verwendet, nicht für Marketing.','contact.form.btnSend':'Senden',
      'contact.success.h3':'Die Nachricht ist bereit.','contact.success.p':'Wir haben eine E‑Mail mit Ihrer Nachricht vorbereitet. Klicken Sie in Ihrem E‑Mail‑Programm auf <strong>Senden</strong>, um sie abzuschicken.',
      'contact.success.alt':'E‑Mail nicht geöffnet? Schreiben Sie uns direkt an','contact.info.lab':'Direkter Kontakt','contact.info.h3':'Telefon. <em>E‑Mail.</em> Büro.',
      'contact.info.rTel':'Tel.','contact.info.rEmail':'E‑Mail','contact.info.rAddr':'Adresse','contact.info.addr.v':'Rruga Mbreti Gent · Shkodër',
      'contact.info.rResp':'Ansprechpartner','contact.info.btnWa':'WhatsApp','contact.info.btnEmail':'E‑Mail senden',
      'contact.hours.lab':'Öffnungszeiten','contact.hours.h4':'Mo — Sa · 08:00 — 17:00',
      'contact.hours.mon':'Montag','contact.hours.tue':'Dienstag','contact.hours.wed':'Mittwoch','contact.hours.thu':'Donnerstag','contact.hours.fri':'Freitag','contact.hours.sat':'Samstag','contact.hours.sun':'Sonntag','contact.hours.closed':'Geschlossen'
    },

    es: {
      'nav.home':'Inicio','nav.about':'Nosotros','nav.services':'Servicios','nav.why':'Por qué nosotros',
      'nav.dss':'DSS','nav.calc':'Calculadoras','nav.contact':'Contacto',
      'header.menuToggle':'Abrir menú','header.ctaContact':'Escríbanos','header.ctaWhatsapp':'WhatsApp',
      'header.brandSub':'Shkodër · 2015',
      'btn.bookMeeting':'Agendar una reunión','btn.bookOne':'Agendar una reunión','btn.services':'Servicios',
      'btn.allServices':'Todos los servicios →','btn.readStory':'Leer la historia','btn.whyUs':'Por qué nosotros',
      'btn.send':'Enviar','btn.discussProject':'Hablemos de un proyecto','btn.visitDss':'Visitar DSS',
      'btn.writeEmail':'Enviar correo','btn.writeDss':'Escribir a DSS','btn.argearServices':'Servicios arGEar',
      'footer.tagline':'Consultoría y servicios empresariales<br/>Consultancy &amp; business services · 2015',
      'footer.pages':'Páginas','footer.services':'Servicios','footer.contact':'Contacto',
      'footer.svc.accounting':'Contabilidad','footer.svc.taxRep':'Representación fiscal',
      'footer.svc.businessPlans':'Planes de negocio','footer.svc.statements':'Estados financieros',
      'footer.dssLabel':'DSS · Software','footer.setIn':'Set in <em>Archivo</em>',
      'footer.copyright':'© 2026 konsulencë ar<em class="nv">G</em><em>E</em>ar · Gilber Hysaj',
      'footer.cityCountry':'Shkodër · Albania',
      'home.hero.badge':'Desde el 6 de enero · 2015','home.hero.h1':'El balance de la <em>confianza.</em>',
      'home.hero.tagline':'Consultoría, contabilidad, representación fiscal, sitios web, aplicaciones y soluciones digitales para su empresa.',
      'home.transform.eyebrow':'Transformación','home.transform.h2':'Del <span class="lt">papel,</span><br/>a la <em>nube.</em>',
      'home.transform.tagline':'Desde 2021 operamos en cinco plataformas fiscales autorizadas por la Dirección General de Impuestos.',
      'home.transform.meta1':'<b>2015</b> Fundación','home.transform.meta2':'<b>2021</b> Cloud','home.transform.meta3':'<b>2026</b> Hoy',
      'home.intro.eyebrow':'Nosotros','home.intro.h2':'Una firma pequeña<br/>con larga <em>memoria.</em>',
      'home.intro.p':'Fundada por Gilber Hysaj en Shkodër el 6 de enero de 2015. Diez años después, nuestros primeros clientes siguen siendo nuestros clientes, y a su alrededor ha crecido una red de empresas albanesas y extranjeras.',
      'home.kpi1.l':'años · desde 2015','home.kpi2.l':'empresas bajo administración','home.kpi3.l':'plataformas fiscales en la nube',
      'home.svc.eyebrow':'Servicios','home.svc.h2':'Siete <em>servicios,</em><br/>un solo estándar.',
      'home.svc.note':'Todo nuestro trabajo nace de una sola palabra: <em>rigor.</em>',
      'home.svc.l1':'Contabilidad y declaraciones','home.svc.l2':'Planes de negocio','home.svc.l3':'Asesoría fiscal',
      'home.svc.l4':'e‑Banking','home.svc.l5':'Informes mensuales','home.svc.l6':'Estados financieros','home.svc.l7':'e‑Faturë',
      'home.svc.l8':'DSS · Departamento de Soluciones Digitales y Software',
      'home.dssteaser.eyebrow':'Department of Software Solutions',
      'home.dssteaser.h2':'DSS — <em>software</em><br/>',
      'home.dssteaser.p':'El Departamento de Soluciones Digitales y Software. Ofrecemos soluciones digitales para su empresa. Apasionados por la programación, desarrollamos sitios web, aplicaciones, dashboards, sistemas de reservas, integraciones API, tiendas en línea y convertimos cada idea suya en realidad.',
      'home.story.eyebrow':'El fundador','home.story.h2':'Un nombre detrás<br/>de cada <em>expediente.</em>',
      'home.story.p':'Gilber Hysaj es fundador y administrador de la firma desde el 6 de enero de 2015. Junto con el sr. Hysaj, nuestro equipo trabaja con dedicación y alto profesionalismo, con el objetivo de brindar un servicio de calidad a cada cliente.',
      'home.closing.eyebrow':'Contacto','home.closing.h2':'<em>Hablemos</em><br/>de su balance.',
      'home.closing.p':'Contáctenos hoy para una reunión de 30 minutos, en Shkodër o en línea, y hablemos sobre su empresa.',
      'home.closing.metaAddr.b':'Dirección','home.closing.metaAddr.v':'Rruga Mbreti Gent, Shkodër',
      'home.closing.metaMail.b':'Correo','home.closing.metaHours.b':'Horario','home.closing.metaHours.v':'Lun — Vie · 08:30—17:30',
      'about.crumb':'Nosotros','about.hero.h1':'Una firma pequeña,<br/>con larga <em>memoria.</em>',
      'about.hero.lead':'Fundada por Gilber Hysaj en Shkodër el 6 de enero de 2015. Diez años de experiencia en contabilidad, representación fiscal y administración de empresas.',
      'about.founder.eyebrow':'El fundador','about.founder.h2':'Un nombre detrás<br/>de cada <em>expediente.</em>',
      'about.founder.p1':'Gilber Hysaj es fundador y administrador de la firma desde el primer día. Dirige un equipo de tres profesionales a tiempo completo y firma personalmente cada balance que sale de la oficina.',
      'about.founder.p2':'La representación "in persona" ante la Dirección de Impuestos y Seguridad Social no es un servicio adicional, es nuestro estándar.',
      'about.founder.quote':'"Un balance no es solo un número. Es el acuerdo entre empresas reales y las instituciones que esperan el plazo."',
      'about.founder.cite':'— Gilber Hysaj',
      'about.tl.eyebrow':'Cronología','about.tl.h2':'Diez años, sin <em>interrupciones.</em>',
      'about.tl.s1.h4':'Fundación','about.tl.s1.p':'Inscripción con 4 SHPK y 7 PF. Todos siguen siendo nuestros clientes.',
      'about.tl.s2.h4':'Cloud','about.tl.s2.p':'Integración con cinco plataformas fiscales aprobadas por el Estado.',
      'about.tl.s3.h4':'Hoy','about.tl.s3.p':'16 SHPK y 21 PF. Cuatro con socios extranjeros. Dos sucursales.',
      'about.values.eyebrow':'Valores','about.values.h2':'Tres <em>valores,</em><br/>sin concesiones.',
      'about.values.v1.h3':'Confidencialidad','about.values.v1.p':'Cada dato queda dentro del expediente. Sin excepciones, sin filtraciones informales.',
      'about.values.v2.h3':'Representación <em>"in persona"</em>','about.values.v2.p':'Estamos en la ventanilla cuando hace falta. El cliente sigue con su negocio.',
      'about.values.v3.h3':'Actualización continua','about.values.v3.p':'Leemos la ley antes de que sea titular. Decisiones basadas en información fresca.',
      'about.closing.h2':'Sigamos<br/>la conversación.','about.closing.p':'Una reunión sin compromiso, en Shkodër o en línea.',
      'services.crumb':'Servicios','services.hero.h1':'Siete <em>servicios,</em><br/>un solo estándar.',
      'services.s1.h2':'Contabilidad y declaraciones.','services.s1.p':'Llevanza completa de la contabilidad y presentación periódica de las declaraciones fiscales, para personas y empresas. Siempre en plazo.',
      'services.s1.t1':'Libro mayor','services.s1.t2':'TVSH','services.s1.t3':'Seguridad social','services.s1.t4':'Impuesto sobre beneficios',
      'services.s2.h2':'Planes de negocio.','services.s2.p':'Estudios de viabilidad, proyecciones a 3 o 5 años y modelos financieros sólidos, para clientes albaneses e inversionistas extranjeros.',
      'services.s2.t1':'Viabilidad','services.s2.t2':'Proyecciones','services.s2.t3':'P&amp;L · CF','services.s2.t4':'Listo para el banco',
      'services.s3.h2':'Asesoría <em>fiscal.</em>','services.s3.p':'Actualización continua sobre los cambios legales que afectan a su empresa, directa o indirectamente. Decisiones que se sostienen en el tiempo.',
      'services.s3.t1':'Boletín legal','services.s3.t2':'Asesoría dedicada','services.s3.t3':'Plan de respuesta',
      'services.s4.h2':'e‑Banking.','services.s4.p':'Con la autorización del cliente, realizamos los pagos periódicos por e‑banking: nómina, impuestos y proveedores. Sin plazos perdidos.',
      'services.s4.t1':'Nómina','services.s4.t2':'Impuestos','services.s4.t3':'Proveedores','services.s4.t4':'Conciliación mensual',
      'services.s5.h2':'Informes <em>mensuales.</em>','services.s5.p':'Legibles para quien administra, no una hoja para el contador. Una página que entiende, un balance que defiende.',
      'services.s5.t1':'Dashboard de KPI','services.s5.t2':'Tendencias','services.s5.t3':'Reunión 1 a 1',
      'services.s6.h2':'Estados financieros.','services.s6.p':'Estados anuales acompañados de un análisis del desempeño económico y financiero del negocio. Aquí las cifras toman sentido.',
      'services.s6.t1':'P&amp;L','services.s6.t2':'Balance','services.s6.t3':'Flujo de caja','services.s6.t4':'Memo anual',
      'services.s7.h2':'e‑<em>Faturë.</em>','services.s7.p':'Trabajamos sobre cinco plataformas fiscales aprobadas, desde 2021. Usted ya no piensa en la factura, nosotros la enviamos.',
      'services.fiscal.lab':'Plataformas fiscales integradas · desde 2021',
      'services.fiscal.sub':'Cinco plataformas en la nube autorizadas por la Administración Tributaria.',
      'services.closing.h2':'¿Qué <em>servicio</em><br/>necesita hoy?','services.closing.p':'Seguimos la conversación en una reunión.',
      'why.crumb':'Por qué nosotros','why.hero.h1':'Cuatro <em>razones.</em><br/>Ninguna promesa vacía.',
      'why.hero.lead':'Confidencialidad, representación personal, diez años de experiencia y actualización continua.',
      'why.r1.lab':'Primera razón','why.r1.h2':'Años de <em>experiencia.</em><br/>','why.r1.p':'Diez años ininterrumpidos de consultoría empresarial en perfiles muy distintos. Nuestros primeros clientes siguen aquí.',
      'why.r2.lab':'Segunda razón','why.r2.h2':'Siempre al día<br/>con la <em>normativa.</em>','why.r2.p':'Leemos cada cambio normativo antes de que sea titular. Después lo traducimos en decisiones concretas para su empresa.',
      'why.r3.lab':'Tercera razón','why.r3.h2':'Confidencialidad <em>total.</em><br/>','why.r3.p':'Cada dato económico, financiero y fiscal queda dentro del expediente. Sin filtraciones informales, ni siquiera cuando sería más rápido.',
      'why.r4.lab':'Cuarta razón','why.r4.h2':'Representación <em>"in persona".</em><br/>','why.r4.p':'Estamos en la ventanilla de la Dirección de Impuestos y Seguridad Social. Usted sigue con su negocio.',
      'why.closing.h2':'¿Una <em>quinta</em><br/><em>razón?</em>','why.closing.p':'Seguimos la conversación en una reunión.',
      'dss.crumb':'DSS','dss.hero.h1':'Software para <em>usted</em>','dss.hero.lead':'El departamento de soluciones digitales y software de konsulencë arGEar.',
      'dss.manifesto.q':'Somos <em>apasionados</em> de la programación, y la hacemos tangible.','dss.manifesto.sub':'DSS · Department of Software Solutions',
      'dss.orbital.eyebrow':'Lo que construye DSS','dss.orbital.h2':'Nuestros <em>servicios.</em>','dss.orbital.caption':'haga clic en un punto para ver los detalles',
      'dss.showcase.eyebrow':'Trabajo desarrollado por DSS','dss.showcase.h2':'Software que se puede <em>tocar.</em>',
      'dss.showcase.p':'Mueva el cursor sobre la figura. Nuestro software es algo que se siente.',
      'dss.showcase.caseCaption':'uno de nuestros proyectos 3D interactivos','dss.showcase.loader':'Cargando',
      'dss.offer.eyebrow':'Líneas DSS','dss.offer.h2':'Lo que <em>construimos</em><br/>para su empresa.',
      'dss.offer.i1.h3':'Web y <em>aplicaciones</em>','dss.offer.i1.p':'Sitios, portales, dashboards y aplicaciones, según sus necesidades.',
      'dss.offer.i2.h3':'Informes y <em>Dashboard</em>','dss.offer.i2.p':'Datos en vivo desde el libro contable, el banco y e‑Faturë, pensados para quien administra.',
      'dss.offer.i3.h3':'e‑Banking automatizado','dss.offer.i3.p':'Pagos periódicos sin intervención manual. Confirmaciones y conciliación contable.',
      'dss.offer.i4.h3':'Tiendas <em>e‑commerce</em>','dss.offer.i4.p':'Tiendas en línea integradas con caja, inventario y facturación fiscal. Del producto al pago.',
      'dss.offer.i5.h3':'Integraciones y API','dss.offer.i5.p':'Sistemas que se comunican: ERP, caja, banca, reportes. Una sola fuente.',
      'dss.offer.i6.h3':'Seguridad del <em>expediente</em>','dss.offer.i6.p':'Backups, acceso por roles, cifrado AES‑256, cumplimiento total del GDPR.',
      'dss.contact.eyebrow':'Contacto DSS','dss.contact.h2':'Escriba <em>directamente</em> al equipo de desarrollo.',
      'dss.contact.p':'DSS tiene su propia línea de contacto. El equipo de software le responde en 24 horas, para una propuesta, una idea o solo una conversación técnica.',
      'dss.contact.cardLab':'Department of Software Solutions','dss.contact.cardH3':'DSS <em>@</em> arGEar',
      'dss.contact.rEmail':'Correo','dss.contact.rPhone':'Teléfono','dss.contact.rBased':'Sede','dss.contact.based.v':'Shkodër · Albania',
      'dss.closing.h2':'¿Una idea de <em>software?</em><br/>Conversemos.','dss.closing.p':'Junto con los contadores, no por separado. DSS y arGEar trabajan en la misma mesa.',
      'dss.n1.title':'Web y aplicaciones','dss.n1.badge':'01 · Code','dss.n1.desc':'Portales, dashboards y paneles de administración con React, TypeScript y Node.',
      'dss.n2.title':'Tiendas e‑commerce','dss.n2.badge':'02 · Commerce','dss.n2.desc':'Tiendas en línea integradas con caja, inventario y facturación fiscal. Del producto al pago.',
      'dss.n3.title':'Dashboards en tiempo real','dss.n3.badge':'03 · Data','dss.n3.desc':'Datos en vivo desde el libro contable, el banco y e‑Faturë, para quien administra.',
      'dss.n4.title':'e‑Banking automatizado','dss.n4.badge':'04 · Banco','dss.n4.desc':'Pagos periódicos sin intervención manual. Confirmaciones y conciliación contable.',
      'dss.n5.title':'Aplicaciones móviles','dss.n5.badge':'05 · Mobile','dss.n5.desc':'iOS y Android, aplicaciones nativas y multiplataforma con React Native.',
      'dss.n6.title':'Integraciones y API','dss.n6.badge':'06 · API','dss.n6.desc':'ERP, cajas fiscales, sistemas externos. Una sola fuente de datos.',
      'dss.n7.title':'Cloud y hosting','dss.n7.badge':'07 · Cloud','dss.n7.desc':'Despliegue automático en AWS, Cloudflare y Vercel. Escalado, backups, monitoreo.',
      'dss.n8.title':'Seguridad y GDPR','dss.n8.badge':'08 · Security','dss.n8.desc':'Backups, acceso por roles, cifrado AES‑256, cumplimiento total del GDPR.',
      'calc.crumb':'Calculadoras','calc.hero.h1':'Cifras <em>claras.</em><br/>Antes de firmar.',
      'calc.hero.lead':'Tres calculadoras rápidas para TVSH, salarios y retención. Gratuitas, directas, sin formularios.',
      'calc.hero.tag':'Herramientas gratuitas · 2026','calc.tabs.aria':'Elija la calculadora',
      'calc.tab.vat':'TVSH','calc.tab.pay':'Salario · bruto a neto','calc.tab.wht':'Retención en la fuente',
      'calc.vat.modeAria':'Dirección de la conversión','calc.vat.modeUp':'Neto → Bruto','calc.vat.modeDown':'Bruto → Neto',
      'calc.vat.lblInput':'Monto sin TVSH','calc.vat.lblRate':'Tasa',
      'calc.vat.opt20':'20% — tasa estándar','calc.vat.opt10':'10% — turismo autorizado','calc.vat.opt6':'6% — agroturismo, librerías','calc.vat.opt0':'0% — exportaciones, exenciones',
      'calc.vat.outNet':'Valor neto (sin TVSH)','calc.vat.outTax':'TVSH','calc.vat.outGross':'Valor bruto con TVSH',
      'calc.pay.lblInput':'Salario bruto mensual','calc.pay.subEmp':'Empleado','calc.pay.subEr':'Empleador',
      'calc.pay.gross':'Salario bruto','calc.pay.ss':'Seguridad social (9.5%)','calc.pay.sh':'Seguro de salud (1.7%)','calc.pay.tap':'Impuesto sobre la renta','calc.pay.net':'Salario neto mensual',
      'calc.pay.ess':'Seguridad social (15%)','calc.pay.esh':'Seguro de salud (1.7%)','calc.pay.cost':'Costo total',
      'calc.wht.lblType':'Tipo de pago','calc.wht.optDiv':'Dividendo — 8%','calc.wht.optRent':'Arriendo — 15%','calc.wht.optSrv':'Pago por servicios — 15%','calc.wht.optAgri':'Arriendo de tierra agrícola — 7%','calc.wht.optIns':'Prima de seguro extranjera — 5%','calc.wht.optCustom':'Tasa personalizada…',
      'calc.wht.lblCustom':'Tasa personalizada','calc.wht.lblInput':'Valor bruto',
      'calc.wht.outGross':'Valor bruto','calc.wht.outTax':'Retención en la fuente','calc.wht.outNet':'Valor neto para el destinatario',
      'calc.disc.strong':'Aviso.','calc.disc.p':'Las calculadoras no sustituyen a la asesoría financiera. Las tasas y los límites pueden cambiar por ley. Para cálculos oficiales declarables,','calc.disc.link':'contáctenos','calc.disc.or':'o consulte','calc.disc.end':'.',
      'calc.cta.h3':'¿Desea un <em>cálculo completo</em> para su empresa?','calc.cta.p':'Escríbanos para más información sobre nómina, declaraciones, informes y más.',
      'contact.crumb':'Contacto','contact.hero.h1':'<em>Hablemos.</em>',
      'contact.form.lab':'Escríbanos','contact.form.h2':'Una <em>línea</em> basta.','contact.form.sub':'Respondemos en 4 horas. Sus datos son confidenciales.',
      'contact.form.lblName':'Nombre','contact.form.phName':'¿Cómo lo llamamos?','contact.form.lblCompany':'Empresa','contact.form.phCompany':'opcional',
      'contact.form.lblEmail':'Correo','contact.form.phEmail':'nombre@empresa.com','contact.form.lblPhone':'Teléfono','contact.form.phPhone':'+355 ...',
      'contact.form.lblMsg':'Mensaje','contact.form.phMsg':'¿Qué busca?',
      'contact.form.privacy':'Sus datos se usan solo para contactarlo, nunca para marketing.','contact.form.btnSend':'Enviar',
      'contact.success.h3':'El mensaje está listo.','contact.success.p':'Abrimos un correo con su mensaje ya preparado. Haga clic en <strong>Enviar</strong> en su cliente de correo para entregarlo.',
      'contact.success.alt':'¿El correo no se abrió? Escríbanos directamente a','contact.info.lab':'Contacto directo','contact.info.h3':'Teléfono. <em>Correo.</em> Oficina.',
      'contact.info.rTel':'Tel.','contact.info.rEmail':'Correo','contact.info.rAddr':'Dirección','contact.info.addr.v':'Rruga Mbreti Gent · Shkodër',
      'contact.info.rResp':'Responsable','contact.info.btnWa':'WhatsApp','contact.info.btnEmail':'Enviar correo',
      'contact.hours.lab':'Horario de atención','contact.hours.h4':'Lun — Sáb · 08:00 — 17:00',
      'contact.hours.mon':'Lunes','contact.hours.tue':'Martes','contact.hours.wed':'Miércoles','contact.hours.thu':'Jueves','contact.hours.fri':'Viernes','contact.hours.sat':'Sábado','contact.hours.sun':'Domingo','contact.hours.closed':'Cerrado'
    }
  };

  // ---------- RUNTIME ----------
  const LANGS = ['sq','en','it','de','es'];
  const DEFAULT = 'sq';
  const STORAGE_KEY = 'argear:lang';

  function getStored(){
    try { return localStorage.getItem(STORAGE_KEY) || ''; } catch(e){ return ''; }
  }
  function setStored(l){
    try { localStorage.setItem(STORAGE_KEY, l); } catch(e){}
  }
  function currentLang(){
    const stored = getStored();
    if(stored && LANGS.indexOf(stored) !== -1) return stored;
    return DEFAULT;
  }

  function tr(lang, key){
    const dict = T[lang] || T[DEFAULT];
    if(key in dict) return dict[key];
    if(key in T[DEFAULT]) return T[DEFAULT][key];
    return null;
  }

  function applyLang(lang){
    if(LANGS.indexOf(lang) === -1) lang = DEFAULT;
    document.documentElement.setAttribute('lang', lang);
    // text content
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const v = tr(lang, el.getAttribute('data-i18n'));
      if(v !== null) el.textContent = v;
    });
    // innerHTML (with <em>, <br/>, <strong>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      const v = tr(lang, el.getAttribute('data-i18n-html'));
      if(v !== null) el.innerHTML = v;
    });
    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      const v = tr(lang, el.getAttribute('data-i18n-placeholder'));
      if(v !== null) el.setAttribute('placeholder', v);
    });
    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      const v = tr(lang, el.getAttribute('data-i18n-aria'));
      if(v !== null) el.setAttribute('aria-label', v);
    });
    // title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(function(el){
      const v = tr(lang, el.getAttribute('data-i18n-title'));
      if(v !== null) el.setAttribute('title', v);
    });
    // language switcher active state (desktop + drawer)
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function(b){
      const isActive = b.getAttribute('data-lang') === lang;
      b.setAttribute('aria-pressed', String(isActive));
      b.classList.toggle('on', isActive);
    });
    // mobile lang dropdown current label
    document.querySelectorAll('.lang-mobile .cur').forEach(function(el){
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('.lang-mobile-menu [data-lang]').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    // notify any consumers (orbital nodes, etc.)
    window.dispatchEvent(new CustomEvent('i18n:changed', {detail:{lang:lang, t:T[lang]}}));
  }

  function setLang(lang){
    setStored(lang);
    applyLang(lang);
  }

  function bindSwitchers(){
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function(b){
      b.addEventListener('click', function(e){
        e.preventDefault();
        setLang(b.getAttribute('data-lang'));
      });
    });
    // Mobile dropdown
    document.querySelectorAll('.lang-mobile').forEach(function(wrap){
      const toggle = wrap.querySelector('.lang-mobile-toggle');
      const menu = wrap.querySelector('.lang-mobile-menu');
      if(!toggle || !menu) return;
      function close(){
        wrap.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
      }
      function open(){
        wrap.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
      }
      toggle.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        if(wrap.classList.contains('open')) close(); else open();
      });
      menu.querySelectorAll('[data-lang]').forEach(function(b){
        b.addEventListener('click', function(e){
          e.preventDefault();
          setLang(b.getAttribute('data-lang'));
          close();
        });
      });
      document.addEventListener('click', function(e){
        if(!wrap.contains(e.target)) close();
      });
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') close();
      });
    });
  }

  function init(){
    bindSwitchers();
    applyLang(currentLang());
  }

  // expose
  window.i18n = { setLang: setLang, getLang: currentLang, t: function(k){ return tr(currentLang(), k); }, T: T };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
