/* CPLA — Vocabulary visuals, v1
 * ---------------------------------------------------------------------------
 * Loaded via <script src="data/vocab-visuals.js">, sets window.CPLA_VISUALS.
 * Maps a lowercased term name -> an accurate, annotated SVG diagram string.
 * The key detail named in the definition is highlighted in GOLD with a label,
 * so a student associates image + term + definition (dual coding).
 *
 * Coverage v1: Typography, Principles, Color, and marquee vector/raster/photo
 * terms. Terms without a visual fall back to the category icon on the flip card.
 * Add more by adding a V['term name in lowercase'] = S( ... ) entry.
 * ---------------------------------------------------------------------------
 */
(function (root) {
  var P='#faf7f2', B='#01123a', INK='#1a1410', G='#da9e2b', M='#1a56c4',
      GR='#2d7a1a', RD='#c8401a', L='#d9cebb', MID='#6b5e52', WARM='#e8894a', COOL='#3a7bd0';

  // wrapper (explicit background rect so the paper color renders everywhere)
  function S(inner, vb){
    return '<svg viewBox="'+(vb||'0 0 320 190')+'" width="100%" role="img" '+
      'style="max-width:360px;border:1px solid '+L+';border-radius:12px;display:block;margin:0 auto">'+
      '<rect x="0" y="0" width="100%" height="100%" fill="'+P+'"/>'+inner+'</svg>';
  }
  // caption strip along the bottom
  function cap(text){
    return '<rect x="0" y="164" width="320" height="26" fill="#fff"/>'+
      '<line x1="0" y1="164" x2="320" y2="164" stroke="'+L+'"/>'+
      '<text x="160" y="181" text-anchor="middle" font-family="DM Mono, monospace" font-size="10.5" fill="'+MID+'">'+text+'</text>';
  }
  // small gold label pill
  function tag(x,y,text,anchor){
    var w=text.length*6.0+14, ax=(anchor==='mid')?x-w/2:(anchor==='end'?x-w:x);
    return '<g><rect x="'+ax+'" y="'+(y-11)+'" rx="7" width="'+w+'" height="16" fill="'+G+'"/>'+
      '<text x="'+(ax+w/2)+'" y="'+(y+0.5)+'" text-anchor="middle" font-family="DM Mono, monospace" font-size="9.5" font-weight="600" fill="#fff">'+text+'</text></g>';
  }
  function ln(x1,y1,x2,y2,c,dash){ return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+(c||G)+'" stroke-width="1.5"'+(dash?' stroke-dasharray="3 3"':'')+'/>'; }
  var SER='Georgia, serif', SANS='Arial, Helvetica, sans-serif';

  var V = {};

  /* ===================== TYPOGRAPHY ===================== */
  // Serif — real glyphs + a geometric detail box highlighting the serif
  V['serif']=S(
    '<text x="26" y="128" font-family="'+SER+'" font-size="112" fill="'+INK+'">Ag</text>'+
    // detail box: a stem foot with serifs, highlighted gold
    '<rect x="196" y="34" width="100" height="104" rx="8" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="240" y="52" width="12" height="60" fill="'+INK+'"/>'+            // stem
    '<rect x="226" y="108" width="40" height="9" rx="2" fill="'+G+'"/>'+       // bottom serif (gold)
    '<rect x="230" y="52" width="32" height="8" rx="2" fill="'+G+'"/>'+        // top serif (gold)
    tag(246,132,'serif','mid')+
    cap('Small strokes (serifs) finish each letter’s ends')
  );
  V['sans-serif']=S(
    '<text x="26" y="128" font-family="'+SANS+'" font-size="112" fill="'+INK+'">Ag</text>'+
    '<rect x="196" y="34" width="100" height="104" rx="8" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="240" y="52" width="12" height="64" fill="'+INK+'"/>'+           // stem, plain
    '<circle cx="246" cy="116" r="12" fill="none" stroke="'+G+'" stroke-width="2"/>'+ // highlight clean end
    tag(246,140,'clean end','mid')+
    cap('“Sans” = without serifs — clean stroke endings')
  );
  V['slab serif']=S(
    '<text x="30" y="128" font-family="'+SER+'" font-weight="700" font-size="112" fill="'+INK+'">Ag</text>'+
    '<rect x="196" y="34" width="100" height="104" rx="8" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="240" y="50" width="12" height="60" fill="'+INK+'"/>'+
    '<rect x="220" y="106" width="52" height="14" rx="2" fill="'+G+'"/>'+     // thick block serif
    '<rect x="224" y="48" width="44" height="12" rx="2" fill="'+G+'"/>'+
    tag(246,134,'slab','mid')+
    cap('Thick, block-like rectangular serifs')
  );
  V['script']=S(
    '<text x="34" y="120" font-family="\'Segoe Script\',\'Brush Script MT\',cursive" font-size="72" fill="'+INK+'">Script</text>'+
    '<path d="M40 132 C 90 150, 150 150, 210 132" fill="none" stroke="'+G+'" stroke-width="2.5"/>'+
    tag(130,150,'connected strokes','mid')+
    cap('Flowing, joined letters imitating handwriting')
  );
  V['display typeface']=S(
    '<text x="20" y="96" font-family="'+SER+'" font-weight="900" font-size="76" fill="'+INK+'">Aa</text>'+
    tag(210,64,'large-size impact','mid')+
    '<text x="20" y="132" font-family="'+SANS+'" font-size="9" fill="'+MID+'">…but illegible as small body text like this line.</text>'+
    '<rect x="18" y="120" width="200" height="1" fill="'+L+'"/>'+
    cap('Stylized faces built for headlines and posters')
  );
  V['baseline']=S(
    '<text x="40" y="120" font-family="'+SER+'" font-size="86" fill="'+INK+'">Rxe</text>'+
    ln(24,120,300,120,G)+
    tag(300,138,'baseline','end')+
    cap('The invisible line every letter sits on')
  );
  V['x-height']=S(
    '<text x="60" y="130" font-family="'+SANS+'" font-size="120" fill="'+INK+'">x</text>'+
    ln(30,130,300,130,L)+ln(30,66,300,66,L)+                 // baseline + x-height line
    '<rect x="150" y="66" width="0" height="0"/>'+
    '<line x1="270" y1="66" x2="270" y2="130" stroke="'+G+'" stroke-width="2"/>'+
    '<polygon points="266,72 274,72 270,64" fill="'+G+'"/><polygon points="266,124 274,124 270,132" fill="'+G+'"/>'+
    tag(292,100,'x-height','mid')+
    cap('Height of lowercase letters — baseline to top of x')
  );
  V['counter']=S(
    '<text x="40" y="128" font-family="'+SER+'" font-size="112" fill="'+INK+'">e</text>'+
    '<text x="150" y="128" font-family="'+SER+'" font-size="112" fill="'+INK+'">o</text>'+
    '<circle cx="188" cy="92" r="20" fill="'+G+'" opacity="0.55"/>'+          // counter of o
    '<path d="M70 96 q22 -2 34 6" fill="'+G+'" opacity="0.55"/>'+
    tag(188,150,'counter','mid')+
    cap('The enclosed space inside a letter')
  );
  V['kerning']=S(
    '<text x="60" y="120" font-family="'+SER+'" font-size="96" fill="'+INK+'">AV</text>'+
    '<rect x="112" y="46" width="26" height="74" fill="'+G+'" opacity="0.25"/>'+
    ln(112,150,138,150,G)+'<polygon points="112,146 112,154 106,150" fill="'+G+'"/><polygon points="138,146 138,154 144,150" fill="'+G+'"/>'+
    tag(125,156,'this pair','mid')+
    cap('Adjusting space between two specific letters')
  );
  V['tracking']=S(
    '<text x="24" y="86" font-family="'+SANS+'" font-size="34" letter-spacing="1" fill="'+INK+'">TIGHT</text>'+
    '<text x="24" y="140" font-family="'+SANS+'" font-size="34" letter-spacing="14" fill="'+INK+'">L O O S E</text>'+
    tag(250,156,'even spacing','end')+
    cap('Uniform spacing across a whole word or line')
  );
  V['leading']=S(
    '<text x="30" y="70" font-family="'+SANS+'" font-size="26" fill="'+INK+'">First line</text>'+
    '<text x="30" y="120" font-family="'+SANS+'" font-size="26" fill="'+INK+'">Second line</text>'+
    ln(24,70,24,120,G)+'<polygon points="20,74 28,74 24,66" fill="'+G+'"/><polygon points="20,116 28,116 24,124" fill="'+G+'"/>'+
    tag(120,150,'baseline-to-baseline','mid')+
    cap('The vertical space between lines of text')
  );
  V['stress & contrast']=S(
    '<text x="98" y="140" font-family="'+SER+'" font-size="150" fill="'+INK+'">O</text>'+
    '<rect x="120" y="60" width="12" height="0"/>'+
    ln(150,36,182,150,G,true)+                                 // stress axis
    tag(196,60,'stress axis','start')+
    '<circle cx="128" cy="92" r="9" fill="none" stroke="'+G+'" stroke-width="2"/>'+  // thin
    '<circle cx="205" cy="92" r="9" fill="none" stroke="'+G+'" stroke-width="2"/>'+  // thick
    tag(166,156,'thick vs thin strokes','mid')+
    cap('Thick/thin stroke variation + its angle (stress)')
  );

  /* ===================== PRINCIPLES ===================== */
  V['contrast']=S(
    '<rect x="16" y="24" width="132" height="118" fill="'+L+'"/>'+
    '<rect x="172" y="24" width="132" height="118" fill="'+B+'"/>'+
    '<circle cx="238" cy="83" r="26" fill="'+G+'"/>'+
    tag(238,120,'stands out','mid')+
    cap('Strong difference makes an element stand out')
  );
  V['value contrast']=S(
    '<rect x="16" y="24" width="132" height="118" fill="#efe9db"/>'+
    '<text x="46" y="106" font-family="'+SER+'" font-size="52" fill="#d8cfbb">Aa</text>'+
    '<rect x="172" y="24" width="132" height="118" fill="#efe9db"/>'+
    '<text x="202" y="106" font-family="'+SER+'" font-size="52" fill="#111">Aa</text>'+
    tag(238,60,'legible','mid')+
    cap('Light-vs-dark difference — the key to legibility')
  );
  V['visual weight']=S(
    '<circle cx="90" cy="83" r="46" fill="'+B+'"/>'+
    '<circle cx="238" cy="83" r="18" fill="'+B+'"/>'+
    tag(90,150,'heavier','mid')+
    cap('An element’s power to attract the eye')
  );
  V['alignment']=S(
    ln(58,18,58,150,G,true)+
    '<rect x="58" y="34" width="180" height="15" fill="'+B+'"/>'+
    '<rect x="58" y="64" width="140" height="11" fill="'+M+'"/>'+
    '<rect x="58" y="90" width="205" height="11" fill="'+L+'"/>'+
    '<rect x="58" y="116" width="120" height="11" fill="'+L+'"/>'+
    tag(58,156,'shared edge','mid')+
    cap('Elements connected along a shared edge')
  );
  V['near-miss']=S(
    ln(58,18,58,150,G,true)+
    '<rect x="58" y="34" width="180" height="15" fill="'+B+'"/>'+
    '<rect x="66" y="64" width="140" height="11" fill="'+RD+'"/>'+
    '<rect x="55" y="90" width="205" height="11" fill="'+L+'"/>'+
    '<rect x="63" y="116" width="120" height="11" fill="'+RD+'"/>'+
    tag(150,156,'almost aligned','mid')+
    cap('Nearly aligned but visibly off — worse than clear')
  );
  V['balance']=S(
    ln(160,14,160,150,L,true)+
    '<circle cx="92" cy="82" r="34" fill="'+B+'"/><circle cx="228" cy="82" r="34" fill="'+B+'"/>'+
    cap('Visual weight evenly distributed')
  );
  V['symmetrical balance']=S(
    ln(160,14,160,150,G,true)+
    '<circle cx="92" cy="82" r="34" fill="'+B+'"/><circle cx="228" cy="82" r="34" fill="'+B+'"/>'+
    tag(160,156,'mirror image','mid')+
    cap('Equal, mirrored elements across a center axis')
  );
  V['asymmetrical balance']=S(
    ln(160,14,160,150,G,true)+
    '<circle cx="92" cy="82" r="44" fill="'+B+'"/>'+
    '<circle cx="236" cy="60" r="16" fill="'+G+'"/><circle cx="250" cy="104" r="12" fill="'+M+'"/>'+
    tag(160,156,'unequal, still balanced','mid')+
    cap('One large balanced by several small')
  );
  V['radial balance']=S(
    '<circle cx="160" cy="82" r="15" fill="'+B+'"/>'+
    [0,45,90,135,180,225,270,315].map(function(a){var r=a*Math.PI/180;return '<circle cx="'+(160+52*Math.cos(r)).toFixed(0)+'" cy="'+(82+52*Math.sin(r)).toFixed(0)+'" r="12" fill="'+G+'"/>';}).join('')+
    cap('Elements radiate from a central point')
  );
  V['proximity']=S(
    '<g fill="'+B+'"><rect x="34" y="34" width="18" height="18"/><rect x="56" y="34" width="18" height="18"/><rect x="34" y="56" width="18" height="18"/><rect x="56" y="56" width="18" height="18"/></g>'+
    '<g fill="'+M+'"><rect x="244" y="94" width="18" height="18"/><rect x="266" y="94" width="18" height="18"/><rect x="244" y="116" width="18" height="18"/><rect x="266" y="116" width="18" height="18"/></g>'+
    tag(160,90,'grouped = related','mid')+
    cap('Near = related; far = separate')
  );
  V['repetition']=S(
    [0,1,2,3,4].map(function(i){return '<g transform="translate('+(28+i*56)+',54)"><rect width="42" height="42" rx="8" fill="'+(i%2?M:B)+'"/><circle cx="21" cy="21" r="9" fill="'+G+'"/></g>';}).join('')+
    tag(160,132,'consistent system','mid')+
    cap('Reusing elements builds unity and recognition')
  );
  V['visual hierarchy']=S(
    '<text x="26" y="52" font-family="'+SER+'" font-weight="900" font-size="30" fill="'+B+'">Headline</text>'+
    '<text x="26" y="82" font-family="'+SANS+'" font-size="16" fill="'+M+'">A supporting subhead</text>'+
    '<rect x="26" y="98" width="250" height="7" fill="'+L+'"/><rect x="26" y="112" width="230" height="7" fill="'+L+'"/><rect x="26" y="126" width="245" height="7" fill="'+L+'"/>'+
    '<g font-family="DM Mono,monospace" font-size="12" font-weight="700" fill="'+G+'"><text x="292" y="50">1</text><text x="292" y="82">2</text><text x="292" y="118">3</text></g>'+
    cap('Size and weight set what you notice first')
  );
  V['white space']=S(
    '<rect x="132" y="74" width="56" height="24" rx="4" fill="'+B+'"/>'+
    '<rect x="20" y="20" width="280" height="126" fill="none" stroke="'+G+'" stroke-dasharray="4 4"/>'+
    tag(160,150,'room to breathe','mid')+
    cap('Generous empty space signals confidence')
  );

  /* ===================== COLOR ===================== */
  function wheel(cx,cy,r,hl){ // 12-segment color wheel; hl = array of segment idx to ring
    var hues=['#e5352b','#e56a1f','#e59a1f','#d8c02a','#8fbf3a','#3fae54','#2fae8f','#2f95c9','#2f5fd0','#5a3fce','#8f3fce','#ce3fa0'];
    var out='';
    for(var i=0;i<12;i++){
      var a0=(i*30-90)*Math.PI/180, a1=((i+1)*30-90)*Math.PI/180;
      var x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
      out+='<path d="M'+cx+' '+cy+' L'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+r+' '+r+' 0 0 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+' Z" fill="'+hues[i]+'"/>';
    }
    (hl||[]).forEach(function(i){var am=((i+0.5)*30-90)*Math.PI/180;out+='<circle cx="'+(cx+r*0.7*Math.cos(am)).toFixed(1)+'" cy="'+(cy+r*0.7*Math.sin(am)).toFixed(1)+'" r="10" fill="none" stroke="#fff" stroke-width="3"/>';});
    out+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(r*0.34)+'" fill="'+P+'"/>';
    return out;
  }
  V['color wheel']=S(wheel(160,80,64)+cap('Hues arranged to show their relationships'));
  V['hue']=S('<rect x="20" y="30" width="280" height="70" fill="url(#hg)"/>'+
    '<defs><linearGradient id="hg"><stop offset="0" stop-color="#e5352b"/><stop offset="0.33" stop-color="#3fae54"/><stop offset="0.66" stop-color="#2f5fd0"/><stop offset="1" stop-color="#ce3fa0"/></linearGradient></defs>'+
    '<rect x="150" y="26" width="20" height="78" fill="none" stroke="'+G+'" stroke-width="3"/>'+tag(160,124,'the color itself','mid')+
    cap('Hue = a color’s name: red, blue, green…'));
  V['saturation']=S('<rect x="20" y="30" width="280" height="70" fill="url(#sg)"/>'+
    '<defs><linearGradient id="sg"><stop offset="0" stop-color="#8a8a86"/><stop offset="1" stop-color="#e53b8a"/></linearGradient></defs>'+
    tag(44,124,'dull','start')+tag(292,124,'vivid','end')+
    cap('Intensity — from gray to fully vivid'));
  V['value (color)']=S('<rect x="20" y="30" width="280" height="70" fill="url(#vg)"/>'+
    '<defs><linearGradient id="vg"><stop offset="0" stop-color="#f4eee0"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient></defs>'+
    tag(44,124,'light','start')+tag(292,124,'dark','end')+
    cap('Value — how light or dark a color is'));
  V['complementary colors']=S(wheel(160,80,60,[0,6])+ln(160,26,160,134,'#fff')+
    cap('Opposite on the wheel — maximum contrast'));
  V['analogous colors']=S(wheel(160,80,60,[3,4,5])+
    cap('Neighbors on the wheel — calm harmony'));
  V['tint / shade']=S('<rect x="40" y="46" width="70" height="70" fill="#e56a1f"/>'+
    '<rect x="125" y="46" width="70" height="70" fill="#f2b487"/><rect x="210" y="46" width="70" height="70" fill="#7a3a12"/>'+
    tag(75,132,'base','mid')+tag(160,132,'+ white = tint','mid')+tag(245,132,'+ black = shade','mid')+
    cap('Tint lightens with white; shade darkens with black'));
  V['color temperature']=S('<rect x="20" y="30" width="140" height="86" fill="'+WARM+'"/>'+
    '<rect x="160" y="30" width="140" height="86" fill="'+COOL+'"/>'+
    tag(90,132,'warm','mid')+tag(230,132,'cool','mid')+
    cap('Warm reds/oranges vs cool blues'));
  V['rgb']=S('<rect x="0" y="0" width="320" height="164" fill="#0a0a0a"/>'+
    '<g style="mix-blend-mode:screen"><circle cx="130" cy="70" r="48" fill="#ff2b2b"/><circle cx="190" cy="70" r="48" fill="#2bff2b"/><circle cx="160" cy="112" r="48" fill="#2b2bff"/></g>'+
    '<text x="160" y="150" text-anchor="middle" font-family="DM Mono,monospace" font-size="11" fill="#fff">light adds up to white</text>'+
    cap('RGB — additive light for screens'));
  V['cmyk']=S('<g style="mix-blend-mode:multiply"><circle cx="130" cy="70" r="48" fill="#20c5e8"/><circle cx="190" cy="70" r="48" fill="#e820b0"/><circle cx="160" cy="112" r="48" fill="#f2e21f"/></g>'+
    tag(160,150,'inks subtract light','mid')+
    cap('CMYK — subtractive inks for print'));

  /* ===================== VECTOR / RASTER ===================== */
  V['vector graphic']=S('<path d="M40 130 Q120 20 180 90 T300 60" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    ['40,130','180,90','300,60'].map(function(p){var xy=p.split(',');return '<rect x="'+(xy[0]-5)+'" y="'+(xy[1]-5)+'" width="10" height="10" fill="#fff" stroke="'+M+'" stroke-width="2"/>';}).join('')+
    tag(160,150,'math, not pixels','mid')+
    cap('Defined by points and curves — scales infinitely'));
  V['anchor point']=S('<path d="M50 120 Q160 20 270 120" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    '<line x1="110" y1="30" x2="210" y2="30" stroke="'+M+'" stroke-width="1.5"/>'+
    '<circle cx="110" cy="30" r="5" fill="'+M+'"/><circle cx="210" cy="30" r="5" fill="'+M+'"/>'+
    '<rect x="153" y="17" width="14" height="14" fill="#fff" stroke="'+G+'" stroke-width="3"/>'+
    tag(160,64,'anchor point','mid')+
    cap('A point that defines a vector path'));
  V['path']=S('<path d="M40 120 Q160 30 280 120" fill="none" stroke="'+G+'" stroke-width="3"/>'+
    '<rect x="35" y="115" width="10" height="10" fill="#fff" stroke="'+B+'" stroke-width="2"/>'+
    '<rect x="275" y="115" width="10" height="10" fill="#fff" stroke="'+B+'" stroke-width="2"/>'+
    tag(160,150,'line between points','mid')+
    cap('A line or shape connecting anchor points'));
  V['bézier curve']=S('<path d="M50 130 C 90 30, 230 30, 270 130" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    '<line x1="50" y1="130" x2="90" y2="30" stroke="'+M+'" stroke-width="1.5"/><line x1="270" y1="130" x2="230" y2="30" stroke="'+M+'" stroke-width="1.5"/>'+
    '<circle cx="90" cy="30" r="5" fill="'+G+'"/><circle cx="230" cy="30" r="5" fill="'+G+'"/>'+
    tag(160,150,'handles shape the curve','mid')+
    cap('Curve controlled by direction handles'));
  V['pen tool']=S('<path d="M40 120 Q160 30 280 120" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    '<polygon points="150,60 170,80 160,84 168,96 160,100 152,86 142,90" fill="'+G+'"/>'+
    tag(160,150,'draws precise paths','mid')+
    cap('The core tool for drawing vector paths'));
  V['stroke']=S('<rect x="90" y="40" width="140" height="86" rx="8" fill="#fff" stroke="'+G+'" stroke-width="7"/>'+
    tag(160,150,'the outline','mid')+cap('The visible outline along a path'));
  V['fill']=S('<rect x="90" y="40" width="140" height="86" rx="8" fill="'+M+'" stroke="'+B+'" stroke-width="2"/>'+
    tag(160,150,'the interior color','mid')+cap('The color inside a closed shape'));
  V['gradient']=S('<rect x="30" y="36" width="260" height="80" rx="8" fill="url(#gr)"/>'+
    '<defs><linearGradient id="gr"><stop offset="0" stop-color="'+G+'"/><stop offset="1" stop-color="'+B+'"/></linearGradient></defs>'+
    cap('A gradual blend between colors'));
  V['raster image']=S(gridPixels(false)+tag(160,150,'a grid of pixels','mid')+
    cap('Made of pixels — blurs when enlarged too far'));
  V['pixel']=S(gridPixels(true)+tag(232,150,'one pixel','end')+
    cap('The smallest square unit of a raster image'));
  function gridPixels(one){
    var out='',n=10,s=13,ox=95,oy=24;
    for(var y=0;y<9;y++)for(var x=0;x<n;x++){
      var hl=(one&&x===8&&y===2);
      out+='<rect x="'+(ox+x*s)+'" y="'+(oy+y*s)+'" width="'+s+'" height="'+s+'" fill="'+(hl?G:(((x+y)%2)?'#c9d3e0':'#e9edf3'))+'" stroke="#fff"/>';
    }
    return out;
  }
  V['layer']=S(
    [0,1,2].map(function(i){return '<g transform="translate('+(70+i*28)+','+(30+i*26)+')"><rect width="150" height="70" rx="6" fill="'+[ '#fff','#eaf0fb','#e9f6e5'][i]+'" stroke="'+[B,M,GR][i]+'" stroke-width="2" opacity="0.92"/></g>';}).join('')+
    tag(160,150,'stacked and independent','mid')+
    cap('Independent levels you can edit separately'));
  V['resolution (ppi)']=S(gridPixels(false)+cap('Pixel density — more pixels = more detail'));

  /* ===================== PHOTOGRAPHY ===================== */
  V['aperture']=S('<circle cx="100" cy="80" r="42" fill="'+B+'"/><circle cx="100" cy="80" r="26" fill="'+P+'"/>'+
    '<circle cx="220" cy="80" r="42" fill="'+B+'"/><circle cx="220" cy="80" r="10" fill="'+P+'"/>'+
    tag(100,140,'wide (more light)','mid')+tag(220,140,'narrow','mid')+
    cap('Lens opening — controls light and depth of field'));
  V['shutter speed']=S('<circle cx="95" cy="78" r="30" fill="'+B+'"/>'+
    '<g opacity="0.4"><circle cx="210" cy="78" r="30" fill="'+B+'"/></g><g opacity="0.6"><circle cx="228" cy="78" r="30" fill="'+B+'"/></g><circle cx="246" cy="78" r="30" fill="'+B+'"/>'+
    tag(95,132,'fast = frozen','mid')+tag(228,132,'slow = blur','mid')+
    cap('Exposure time — freezes or blurs motion'));
  V['depth of field']=S('<circle cx="80" cy="80" r="30" fill="'+B+'"/>'+
    '<g opacity="0.35"><circle cx="180" cy="70" r="22" fill="'+MID+'"/><circle cx="250" cy="90" r="28" fill="'+MID+'"/></g>'+
    tag(80,140,'sharp subject','mid')+tag(230,140,'soft background','mid')+
    cap('How much of the scene is in focus'));
  V['rule of thirds']=S('<rect x="20" y="20" width="280" height="124" fill="#eef2ea" stroke="'+L+'"/>'+
    ln(113,20,113,144,G,true)+ln(207,20,207,144,G,true)+ln(20,61,300,61,G,true)+ln(20,103,300,103,G,true)+
    '<circle cx="207" cy="61" r="13" fill="'+B+'"/>'+
    tag(207,138,'place on an intersection','mid')+
    cap('Put key elements on the grid lines'));
  V['leading lines']=S('<rect x="20" y="20" width="280" height="124" fill="#eef2ea" stroke="'+L+'"/>'+
    '<line x1="30" y1="140" x2="160" y2="60" stroke="'+G+'" stroke-width="2.5"/><line x1="290" y1="140" x2="160" y2="60" stroke="'+G+'" stroke-width="2.5"/>'+
    '<circle cx="160" cy="56" r="11" fill="'+B+'"/>'+
    tag(160,120,'lead to the subject','mid')+
    cap('Lines that guide the eye to the subject'));
  V['exposure triangle']=S('<polygon points="160,34 262,128 58,128" fill="none" stroke="'+B+'" stroke-width="2"/>'+
    tag(160,30,'Aperture','mid')+tag(58,144,'ISO','mid')+tag(262,144,'Shutter','mid')+
    '<circle cx="160" cy="98" r="6" fill="'+G+'"/>'+
    cap('Aperture + shutter + ISO set exposure together'));

  /* ===================== TYPOGRAPHY (continued) ===================== */
  V['type pairing']=S(
    '<text x="26" y="64" font-family="'+SER+'" font-weight="700" font-size="38" fill="'+INK+'">Headline</text>'+
    '<text x="26" y="96" font-family="'+SANS+'" font-size="14" fill="'+MID+'">A calm sans-serif carries the body text</text>'+
    '<text x="26" y="116" font-family="'+SANS+'" font-size="14" fill="'+MID+'">beneath the serif display face above.</text>'+
    tag(74,150,'serif display','mid')+tag(240,150,'sans text','mid')+
    cap('Two typefaces chosen to work together'));
  V['contrast with compatibility']=S(
    ln(30,128,300,128,L)+ln(30,46,300,46,L)+
    '<text x="66" y="128" font-family="'+SER+'" font-size="104" fill="'+INK+'">A</text>'+
    '<text x="196" y="128" font-family="'+SANS+'" font-size="104" fill="'+M+'">A</text>'+
    tag(96,150,'serif','mid')+tag(232,150,'sans','mid')+
    cap('Different roles, shared underlying feel'));
  V['superfamily']=S(
    '<text x="44" y="108" font-family="'+SER+'" font-size="74" fill="'+INK+'">Aa</text>'+
    '<text x="182" y="108" font-family="'+SANS+'" font-size="74" fill="'+INK+'">Aa</text>'+
    '<path d="M44 124 h232" stroke="'+G+'" stroke-width="2" fill="none"/>'+
    tag(84,148,'serif','mid')+tag(222,148,'sans','mid')+
    cap('Serif + sans built from one shared skeleton'));
  V['display / text roles']=S(
    '<text x="26" y="70" font-family="'+SER+'" font-weight="900" font-size="44" fill="'+INK+'">TITLE</text>'+
    tag(288,52,'display — leads','end')+
    '<rect x="26" y="88" width="250" height="7" fill="'+L+'"/><rect x="26" y="102" width="232" height="7" fill="'+L+'"/><rect x="26" y="116" width="244" height="7" fill="'+L+'"/>'+
    tag(288,132,'text — supports','end')+
    cap('Display face leads; text face carries the body'));
  V['typeface limit']=S(
    '<text x="30" y="58" font-family="'+SER+'" font-size="24" fill="'+INK+'">Serif</text><text x="118" y="58" font-family="'+SANS+'" font-size="24" fill="'+INK+'">Sans</text>'+
    '<text x="252" y="60" font-size="26" fill="'+GR+'">✓</text>'+
    '<text x="30" y="116" font-family="'+SER+'" font-size="19" fill="'+INK+'">Serif</text><text x="94" y="116" font-family="'+SANS+'" font-size="19" fill="'+INK+'">Sans</text><text x="158" y="116" font-family="cursive" font-size="19" fill="'+INK+'">Script</text><text x="226" y="116" font-family="monospace" font-size="19" fill="'+INK+'">Mono</text>'+
    '<text x="286" y="116" font-size="24" fill="'+RD+'">✕</text>'+
    tag(150,150,'two, maybe three — no more','mid')+
    cap('Limit a design to two typefaces, three at most'));
  V['era matching']=S(
    ln(40,96,280,96,L)+
    '<text x="72" y="74" font-family="'+SER+'" font-size="26" fill="'+INK+'">Aa</text><circle cx="90" cy="96" r="6" fill="'+G+'"/>'+
    '<text x="182" y="74" font-family="'+SER+'" font-size="26" fill="'+INK+'">Aa</text><circle cx="200" cy="96" r="6" fill="'+G+'"/>'+
    '<path d="M96 70 q54 -16 108 0" stroke="'+G+'" stroke-width="2" fill="none"/>'+
    '<text x="145" y="126" text-anchor="middle" font-family="DM Mono,monospace" font-size="9" fill="'+MID+'">same period</text>'+
    tag(160,150,'shared proportions','mid')+
    cap('Pair faces from the same historical era'));
  V['typographic hierarchy']=S(
    '<text x="26" y="48" font-family="'+SER+'" font-weight="900" font-size="28" fill="'+INK+'">Chapter Title</text>'+
    '<text x="26" y="76" font-family="'+SANS+'" font-weight="600" font-size="17" fill="'+M+'">Section subhead</text>'+
    '<rect x="26" y="90" width="250" height="6" fill="'+L+'"/><rect x="26" y="102" width="234" height="6" fill="'+L+'"/><rect x="26" y="114" width="244" height="6" fill="'+L+'"/>'+
    '<text x="26" y="138" font-family="'+SANS+'" font-size="10" fill="'+MID+'">caption</text>'+
    '<g font-family="DM Mono,monospace" font-size="11" font-weight="700" fill="'+G+'"><text x="294" y="46">1</text><text x="294" y="74">2</text><text x="294" y="112">3</text></g>'+
    cap('Text levels ordered by size, weight and space'));
  V['type scale']=S(
    '<text x="30" y="128" font-family="'+SANS+'" font-size="18" fill="'+INK+'">Aa</text>'+
    '<text x="78" y="128" font-family="'+SANS+'" font-size="30" fill="'+INK+'">Aa</text>'+
    '<text x="146" y="128" font-family="'+SANS+'" font-size="46" fill="'+INK+'">Aa</text>'+
    '<text x="234" y="128" font-family="'+SANS+'" font-size="66" fill="'+INK+'">Aa</text>'+
    tag(160,150,'each step × a fixed ratio','mid')+
    cap('Sizes generated from a base and a ratio'));
  V['hierarchy level']=S(
    '<text x="26" y="50" font-family="'+SER+'" font-weight="900" font-size="24" fill="'+L+'">Title</text>'+
    '<rect x="20" y="62" width="228" height="28" fill="'+G+'" opacity="0.16"/>'+
    '<text x="26" y="84" font-family="'+SANS+'" font-weight="700" font-size="18" fill="'+INK+'">Subhead (H2)</text>'+
    '<rect x="26" y="104" width="248" height="6" fill="'+L+'"/><rect x="26" y="116" width="232" height="6" fill="'+L+'"/>'+
    tag(288,78,'one tier','end')+
    cap('One distinct level in the type hierarchy'));
  V['differentiation']=S(
    '<text x="26" y="50" font-family="'+SANS+'" font-weight="600" font-size="18" fill="'+INK+'">Heading</text>'+
    '<text x="26" y="72" font-family="'+SANS+'" font-size="16" fill="'+INK+'">body text</text>'+
    '<text x="150" y="60" font-family="DM Mono,monospace" font-size="9" fill="'+RD+'">too similar</text><text x="258" y="64" font-size="20" fill="'+RD+'">✕</text>'+
    '<text x="26" y="110" font-family="'+SER+'" font-weight="900" font-size="24" fill="'+INK+'">Heading</text>'+
    '<text x="26" y="132" font-family="'+SANS+'" font-size="13" fill="'+MID+'">body text</text>'+
    '<text x="150" y="120" font-family="DM Mono,monospace" font-size="9" fill="'+GR+'">clearly different</text><text x="262" y="124" font-size="20" fill="'+GR+'">✓</text>'+
    cap('Levels must look clearly different to work'));
  V['style variation']=S(
    '<text x="30" y="58" font-family="'+SER+'" font-size="26" fill="'+INK+'">Regular</text>'+
    '<rect x="24" y="76" width="118" height="28" fill="'+G+'" opacity="0.16"/>'+
    '<text x="30" y="98" font-family="'+SER+'" font-size="26" font-style="italic" fill="'+INK+'">Italic</text>'+
    tag(288,92,'signals a role','end')+
    '<text x="30" y="136" font-family="'+SANS+'" font-size="20" letter-spacing="2" fill="'+INK+'">SMALL CAPS</text>'+
    cap('Italic or caps mark a role, not just rank'));

  /* ===================== INDESIGN ===================== */
  V['frame']=S(
    '<rect x="70" y="26" width="180" height="118" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="86" y="40" width="148" height="50" fill="none" stroke="'+M+'" stroke-width="2"/>'+
    '<line x1="86" y1="40" x2="234" y2="90" stroke="'+M+'"/><line x1="234" y1="40" x2="86" y2="90" stroke="'+M+'"/>'+
    '<rect x="86" y="100" width="148" height="34" fill="none" stroke="'+G+'" stroke-width="2"/>'+
    '<line x1="94" y1="112" x2="210" y2="112" stroke="'+L+'" stroke-width="3"/><line x1="94" y1="122" x2="188" y2="122" stroke="'+L+'" stroke-width="3"/>'+
    tag(160,150,'a container for content','mid')+
    cap('Every element sits inside a frame'));
  V['master page']=S(
    '<rect x="60" y="26" width="90" height="118" fill="#fff" stroke="'+L+'"/><rect x="170" y="26" width="90" height="118" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="66" y="32" width="78" height="8" fill="'+G+'" opacity="0.55"/><rect x="176" y="32" width="78" height="8" fill="'+G+'" opacity="0.55"/>'+
    '<rect x="66" y="130" width="78" height="6" fill="'+G+'" opacity="0.35"/><rect x="176" y="130" width="78" height="6" fill="'+G+'" opacity="0.35"/>'+
    tag(160,150,'repeats on every page','mid')+
    cap('A template whose elements repeat automatically'));
  V['baseline grid']=S(
    '<rect x="70" y="24" width="180" height="120" fill="#fff" stroke="'+L+'"/>'+
    [0,1,2,3,4,5,6].map(function(i){return ln(70,42+i*15,250,42+i*15,G,true);}).join('')+
    '<text x="82" y="54" font-family="'+SANS+'" font-size="12" fill="'+INK+'">Text aligns</text>'+
    '<text x="82" y="69" font-family="'+SANS+'" font-size="12" fill="'+INK+'">to the grid</text>'+
    tag(160,150,'shared baselines','mid')+
    cap('Text snaps to evenly spaced baseline lines'));
  V['bleed']=S(
    '<rect x="80" y="34" width="160" height="104" fill="'+M+'" opacity="0.22"/>'+
    '<rect x="80" y="34" width="160" height="104" fill="none" stroke="'+G+'" stroke-width="1.5"/>'+
    '<rect x="96" y="46" width="128" height="80" fill="none" stroke="'+RD+'" stroke-dasharray="4 3" stroke-width="1.5"/>'+
    '<text x="228" y="44" font-size="8" fill="'+RD+'" text-anchor="end">trim</text>'+
    tag(160,24,'bleed edge','mid')+tag(160,150,'art runs past the trim','mid')+
    cap('Artwork extended past the trim edge'));
  V['trim']=S(
    '<rect x="96" y="36" width="128" height="102" fill="#fff" stroke="'+INK+'" stroke-width="1.5"/>'+
    '<g stroke="'+INK+'" stroke-width="1">'+
      '<line x1="86" y1="36" x2="92" y2="36"/><line x1="96" y1="26" x2="96" y2="32"/>'+
      '<line x1="228" y1="36" x2="234" y2="36"/><line x1="224" y1="26" x2="224" y2="32"/>'+
      '<line x1="86" y1="138" x2="92" y2="138"/><line x1="96" y1="142" x2="96" y2="148"/>'+
      '<line x1="228" y1="138" x2="234" y2="138"/><line x1="224" y1="142" x2="224" y2="148"/>'+
    '</g>'+
    tag(160,150,'final cut size','mid')+
    cap('The finished size after cutting'));
  V['slug']=S(
    '<rect x="66" y="24" width="188" height="120" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="92" y="40" width="136" height="76" fill="#eef2f8" stroke="'+M+'" stroke-dasharray="3 3"/>'+
    '<rect x="72" y="124" width="130" height="12" fill="'+G+'" opacity="0.18"/>'+
    '<text x="78" y="133" font-family="DM Mono,monospace" font-size="8" fill="'+MID+'">printer: CMYK · v3 · do not print</text>'+
    tag(160,150,'notes, then trimmed off','mid')+
    cap('Instructions outside the bleed, discarded'));
  V['gutter']=S(
    '<rect x="70" y="26" width="180" height="118" fill="#fff" stroke="'+L+'"/>'+
    '<rect x="82" y="40" width="64" height="90" fill="#eef2f8"/><rect x="174" y="40" width="64" height="90" fill="#eef2f8"/>'+
    '<rect x="146" y="40" width="28" height="90" fill="'+G+'" opacity="0.32"/>'+
    tag(160,150,'space between columns','mid')+
    cap('The gap that separates two columns'));
  V['paragraph style']=S(
    '<rect x="58" y="42" width="204" height="72" fill="#eef2f8" stroke="'+M+'" stroke-dasharray="3 3"/>'+
    [0,1,2].map(function(i){return '<line x1="72" y1="'+(58+i*15)+'" x2="248" y2="'+(58+i*15)+'" stroke="'+INK+'" stroke-width="4"/>';}).join('')+
    '<line x1="72" y1="103" x2="180" y2="103" stroke="'+INK+'" stroke-width="4"/>'+
    tag(250,36,'Body','end')+
    tag(160,150,'formats the whole paragraph','mid')+
    cap('Saved formatting applied to entire paragraphs'));
  V['character style']=S(
    '<line x1="60" y1="58" x2="260" y2="58" stroke="'+INK+'" stroke-width="4"/>'+
    '<line x1="60" y1="78" x2="120" y2="78" stroke="'+INK+'" stroke-width="4"/>'+
    '<rect x="126" y="71" width="58" height="12" fill="'+G+'"/>'+
    '<line x1="190" y1="78" x2="260" y2="78" stroke="'+INK+'" stroke-width="4"/>'+
    '<line x1="60" y1="98" x2="232" y2="98" stroke="'+INK+'" stroke-width="4"/>'+
    tag(155,120,'just these characters','mid')+
    cap('Formatting applied to selected characters only'));
  V['text threading']=S(
    '<rect x="40" y="42" width="100" height="72" fill="#fff" stroke="'+M+'"/>'+
    '<rect x="182" y="42" width="100" height="72" fill="#fff" stroke="'+M+'"/>'+
    [0,1,2,3].map(function(i){return '<line x1="50" y1="'+(56+i*14)+'" x2="130" y2="'+(56+i*14)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    [0,1,2].map(function(i){return '<line x1="192" y1="'+(56+i*14)+'" x2="272" y2="'+(56+i*14)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    '<path d="M140 100 C 164 100, 160 60, 180 60" stroke="'+G+'" stroke-width="2" fill="none"/>'+
    '<polygon points="175,55 186,60 175,65" fill="'+G+'"/>'+
    tag(160,150,'story flows frame to frame','mid')+
    cap('Linked frames let one story flow onward'));
  V['facing pages']=S(
    '<rect x="60" y="30" width="98" height="110" fill="#fff" stroke="'+L+'"/><rect x="162" y="30" width="98" height="110" fill="#fff" stroke="'+L+'"/>'+
    ln(160,26,160,144,G,true)+
    [0,1,2,3].map(function(i){return '<line x1="72" y1="'+(48+i*16)+'" x2="146" y2="'+(48+i*16)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    [0,1,2,3].map(function(i){return '<line x1="174" y1="'+(48+i*16)+'" x2="248" y2="'+(48+i*16)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    tag(160,150,'left + right = a spread','mid')+
    cap('Two pages viewed together as a spread'));
  V['preflight']=S(
    '<rect x="80" y="30" width="160" height="108" fill="#fff" stroke="'+L+'"/>'+
    '<text x="96" y="56" font-size="14" fill="'+GR+'">✓</text><text x="118" y="56" font-family="'+SANS+'" font-size="12" fill="'+INK+'">Images linked</text>'+
    '<text x="96" y="82" font-size="14" fill="'+GR+'">✓</text><text x="118" y="82" font-family="'+SANS+'" font-size="12" fill="'+INK+'">Color = CMYK</text>'+
    '<text x="96" y="108" font-size="14" fill="'+RD+'">✕</text><text x="118" y="108" font-family="'+SANS+'" font-size="12" fill="'+RD+'">Missing font</text>'+
    tag(160,152,'catches errors before print','mid')+
    cap('An automated pre-output error check'));
  V['package']=S(
    '<path d="M96 52 h40 l8 12 h72 v74 h-120 z" fill="#f3e9cf" stroke="'+G+'" stroke-width="2"/>'+
    '<rect x="116" y="80" width="26" height="32" fill="#fff" stroke="'+M+'"/>'+
    '<text x="156" y="100" font-family="'+SER+'" font-size="16" fill="'+INK+'">Aa</text>'+
    '<rect x="180" y="84" width="28" height="24" fill="'+M+'" opacity="0.4"/>'+
    tag(160,150,'doc + fonts + links','mid')+
    cap('Collects the file with its fonts and images'));
  V['column']=S(
    '<rect x="70" y="26" width="180" height="118" fill="#fff" stroke="'+L+'"/>'+
    [0,1,2].map(function(i){return '<rect x="'+(82+i*56)+'" y="40" width="44" height="90" fill="#eef2f8" stroke="'+(i===1?G:L)+'" stroke-width="'+(i===1?2:1)+'"/>';}).join('')+
    tag(160,150,'vertical divisions','mid')+
    cap('Vertical divisions that structure the page'));

  /* ===================== PRINT & OUTPUT ===================== */
  V['pdf']=S(
    '<rect x="110" y="30" width="100" height="112" fill="#fff" stroke="'+L+'"/>'+
    [0,1,2,3].map(function(i){return '<line x1="124" y1="'+(64+i*12)+'" x2="196" y2="'+(64+i*12)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    '<rect x="128" y="98" width="64" height="22" rx="4" fill="'+RD+'"/><text x="160" y="113" text-anchor="middle" font-family="'+SANS+'" font-weight="700" font-size="12" fill="#fff">PDF</text>'+
    tag(160,152,'views anywhere','mid')+
    cap('A portable file that looks the same everywhere'));
  V['press-ready pdf']=S(
    '<rect x="104" y="38" width="112" height="86" fill="'+M+'" opacity="0.18"/>'+
    '<rect x="118" y="50" width="84" height="62" fill="#fff" stroke="'+INK+'"/>'+
    '<g stroke="'+INK+'" stroke-width="1"><line x1="110" y1="50" x2="116" y2="50"/><line x1="118" y1="42" x2="118" y2="48"/><line x1="204" y1="50" x2="210" y2="50"/><line x1="202" y1="42" x2="202" y2="48"/></g>'+
    '<rect x="126" y="120" width="68" height="18" rx="3" fill="'+B+'"/><text x="160" y="133" text-anchor="middle" font-family="'+SANS+'" font-size="10" fill="#fff">CMYK · bleed</text>'+
    tag(160,28,'crop marks','mid')+
    cap('Print-standard PDF: bleed, marks, CMYK'));
  V['dpi']=S(
    (function(){var o="";for(var y=0;y<7;y++)for(var x=0;x<16;x++){o+='<circle cx="'+(98+x*8)+'" cy="'+(44+y*12)+'" r="2.4" fill="'+INK+'"/>';}return o;})()+
    tag(160,150,'printer dots per inch','mid')+
    cap('Dot density a printer lays down (DPI)'));
  V['crop marks']=S(
    '<rect x="110" y="42" width="100" height="80" fill="#fff" stroke="'+L+'"/>'+
    '<g stroke="'+G+'" stroke-width="1.5">'+
      '<line x1="94" y1="42" x2="104" y2="42"/><line x1="110" y1="26" x2="110" y2="36"/>'+
      '<line x1="216" y1="42" x2="226" y2="42"/><line x1="210" y1="26" x2="210" y2="36"/>'+
      '<line x1="94" y1="122" x2="104" y2="122"/><line x1="110" y1="128" x2="110" y2="138"/>'+
      '<line x1="216" y1="122" x2="226" y2="122"/><line x1="210" y1="128" x2="210" y2="138"/>'+
    '</g>'+
    tag(160,152,'where to cut','mid')+
    cap('Corner lines that mark where to trim'));
  V['color profile']=S(
    '<rect x="44" y="58" width="56" height="56" fill="#c8401a"/>'+
    '<text x="72" y="132" font-family="DM Mono,monospace" font-size="9" fill="'+MID+'" text-anchor="middle">values</text>'+
    '<path d="M112 86 h56" stroke="'+G+'" stroke-width="2"/><polygon points="168,80 180,86 168,92" fill="'+G+'"/>'+
    '<rect x="200" y="52" width="30" height="30" fill="'+G+'"/><text x="215" y="47" font-size="9" fill="'+MID+'" text-anchor="middle">sRGB</text>'+
    '<rect x="200" y="92" width="30" height="30" fill="'+M+'"/><text x="215" y="135" font-size="9" fill="'+MID+'" text-anchor="middle">CMYK</text>'+
    tag(150,150,'maps values to real color','mid')+
    cap('Defines how numbers become actual color'));
  V['overprint']=S(
    '<circle cx="136" cy="80" r="42" fill="'+G+'"/>'+
    '<circle cx="184" cy="80" r="42" fill="'+M+'" style="mix-blend-mode:multiply"/>'+
    tag(160,150,'overlap, not knock-out','mid')+
    cap('One ink prints on top of another'));
  V['rasterize']=S(
    '<path d="M36 118 Q66 40 106 88 T166 68" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    '<path d="M180 88 h28" stroke="'+G+'" stroke-width="2"/><polygon points="208,82 220,88 208,94" fill="'+G+'"/>'+
    (function(){var o="";for(var y=0;y<5;y++)for(var x=0;x<5;x++){o+='<rect x="'+(236+x*11)+'" y="'+(56+y*11)+'" width="11" height="11" fill="'+(((x+y)%2)?'#c9d3e0':'#e9edf3')+'" stroke="#fff"/>';}return o;})()+
    tag(120,150,'vector to pixels','mid')+
    cap('Converting vector art into fixed pixels'));
  V['vector vs raster']=S(
    '<path d="M40 120 Q90 30 150 100" fill="none" stroke="'+B+'" stroke-width="3"/>'+
    '<rect x="52" y="115" width="9" height="9" fill="#fff" stroke="'+M+'"/><rect x="146" y="95" width="9" height="9" fill="#fff" stroke="'+M+'"/>'+
    ln(160,26,160,140,L,true)+
    (function(){var o="";for(var y=0;y<8;y++)for(var x=0;x<10;x++){var on=(y>=x*0.7-1&&y<=x*0.7+1);o+='<rect x="'+(180+x*11)+'" y="'+(40+y*11)+'" width="11" height="11" fill="'+(on?B:(((x+y)%2)?'#e3e8ee':'#eef1f5'))+'" stroke="#fff"/>';}return o;})()+
    tag(96,150,'vector','mid')+tag(232,150,'raster','mid')+
    cap('Vectors scale by math; rasters are pixel grids'));
  V['trim size']=S(
    '<rect x="96" y="40" width="128" height="84" fill="#fff" stroke="'+INK+'"/>'+
    '<line x1="96" y1="134" x2="224" y2="134" stroke="'+G+'" stroke-width="1.5"/><polygon points="100,130 100,138 94,134" fill="'+G+'"/><polygon points="220,130 220,138 226,134" fill="'+G+'"/>'+
    '<line x1="234" y1="40" x2="234" y2="124" stroke="'+G+'" stroke-width="1.5"/><polygon points="230,44 238,44 234,38" fill="'+G+'"/><polygon points="230,120 238,120 234,126" fill="'+G+'"/>'+
    '<text x="160" y="88" text-anchor="middle" font-family="'+SER+'" font-size="15" fill="'+MID+'">8.5 × 11</text>'+
    cap('The finished, cut dimensions of the piece'));
  V['export']=S(
    '<rect x="40" y="52" width="70" height="86" fill="#fff" stroke="'+M+'"/>'+
    [0,1,2,3].map(function(i){return '<line x1="52" y1="'+(70+i*14)+'" x2="98" y2="'+(70+i*14)+'" stroke="'+L+'" stroke-width="3"/>';}).join('')+
    '<path d="M118 95 h34" stroke="'+G+'" stroke-width="2"/><polygon points="152,89 164,95 152,101" fill="'+G+'"/>'+
    '<g font-family="'+SANS+'" font-weight="700" font-size="11">'+
      '<rect x="176" y="60" width="46" height="20" rx="3" fill="'+RD+'"/><text x="199" y="74" text-anchor="middle" fill="#fff">PDF</text>'+
      '<rect x="176" y="86" width="46" height="20" rx="3" fill="'+GR+'"/><text x="199" y="100" text-anchor="middle" fill="#fff">PNG</text>'+
      '<rect x="176" y="112" width="46" height="20" rx="3" fill="'+M+'"/><text x="199" y="126" text-anchor="middle" fill="#fff">JPG</text>'+
    '</g>'+
    cap('Producing the final delivery file'));
  V['compression']=S(
    '<rect x="52" y="40" width="68" height="100" fill="'+M+'" opacity="0.5"/><text x="86" y="94" text-anchor="middle" font-family="'+SANS+'" font-size="12" fill="#fff">5 MB</text>'+
    '<path d="M132 90 h40" stroke="'+G+'" stroke-width="2"/><polygon points="172,84 184,90 172,96" fill="'+G+'"/>'+
    '<rect x="196" y="70" width="46" height="60" fill="'+M+'"/><text x="219" y="104" text-anchor="middle" font-family="'+SANS+'" font-size="11" fill="#fff">0.5 MB</text>'+
    tag(160,152,'smaller file','mid')+
    cap('Reducing a file’s size for delivery'));

  root.CPLA_VISUALS = V;
  root.CPLA_VISUALS_VERSION = 'v1';
})(window);
