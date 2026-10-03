// Shared by the content server and browser preview. Only standard reading
// documents opt into recolouring; custom games, canvases and media keep theirs.
export const reportThemeCSS = `
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]){color-scheme:light;background-color:#fff;color:#232735}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]),html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) body,html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) body *{scrollbar-color:#99a2b3 #edf0f4!important;scrollbar-width:thin}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) ::-webkit-scrollbar-track,html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) ::-webkit-scrollbar-corner{background:#edf0f4!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) ::-webkit-scrollbar-thumb{background:#99a2b3!important;border-color:#edf0f4}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document]{
  --atlas-bg:#fff!important;--atlas-surface:#f5f6f9!important;--atlas-border:#202a4020!important;--atlas-text:#232735!important;--atlas-muted:#505b70!important;--atlas-accent:#98445e!important;
  --bg:#fff!important;--card:#f5f6f9!important;--card2:#edf0f5!important;--border:#202a4020!important;
  --surface-1:#fff!important;--surface-2:#f3f5f8!important;--hairline:#202a4020!important;
  --text:#232735!important;--text-bright:#111521!important;--text-dim:#505b70!important;--text-muted:#626d81!important;--muted:#505b70!important;
  --pink:#98445e!important;--blue:#245c9e!important;--purple:#6b48a4!important;--green:#216c45!important;--amber:#80541b!important;--red:#b13643!important;
  --card-glass:linear-gradient(#f8f9fb,#f3f5f8)!important;
}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] body{background:#fff!important;color:#232735!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] body::before{opacity:0!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(h1,h2,h3,h4,strong){color:#111521!important;border-color:#202a4020!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(.meta,.subtitle,.sub,.muted,.eyebrow,.label,.card-desc,.var-label,.status,.stats small,em){color:#505b70!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] .card-title{color:#111521!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(.card,.atlas-card,.obj-card,.verdict,.variant,.title-card,.kpi,main>section,main>header,main>figure){background:#f5f6f9!important;border-color:#202a4020!important;box-shadow:none!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(a,code){color:#98445e!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(pre,code,.flow,th){background:#edf0f5!important;border-color:#202a4020!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] pre code{background:none!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(th,td){color:#232735!important;border-color:#202a4020!important}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom])[data-atlas-report=document] :is(button,select,summary){color:#232735;border-color:#202a4020}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) dialog.atlas-lightbox{background:#f2f4f7;color:#232735;border-color:#202a4030}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) .atlas-lightbox .atlas-lightbox-toolbar{background:#fff;border-color:#202a4030}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) .atlas-lightbox .atlas-lightbox-caption,html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) .atlas-lightbox .atlas-lightbox-note{color:#505b70}
html[data-mratlas-theme=light]:not([data-atlas-theme=custom]) .atlas-lightbox .atlas-lightbox-toolbar :is(button,a){background:#f5f6f9!important;color:#232735!important;border-color:#202a4030}
`;
