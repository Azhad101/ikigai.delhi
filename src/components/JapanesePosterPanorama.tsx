import React from 'react';

interface JapanesePosterSkylineProps {
  color?: string;
  fillColor?: string;
  skylineColor?: string;
  bgCutoutColor?: string;
  className?: string;
}

/**
 * Japanese Horizon Panorama Illustration (Edge-to-Edge: West to East)
 * Continuous panoramic architectural & landscape silhouette from x=0 to x=1600:
 * - Far West: Mountain foothill, entrance Torii, stone lantern, bamboo fence, stone bridge
 * - West: Artisan Tea Pavilion / Workshop with lanterns and "生き甲斐処" noren
 * - Center-West: Grand Japanese Black Pine (Matsu) with tiered needle clouds
 * - Center: Traditional Jinrikisha (Rickshaw) & classic Torii gate
 * - Center-East: Monumental 3-Tiered Pagoda / Castle Complex with sacred sorin spire
 * - East: Castle ramparts & Corner Watchtower (Yagura)
 * - Far East: Eastern Torii gateway, fluttering Nobori banner poles, and eastern mountain foothills
 * - Backdrop: Symmetrical silhouette of Mount Fuji and rolling mountain ranges across the horizon
 */
export const JapanesePosterSkyline: React.FC<JapanesePosterSkylineProps> = ({
  color = '#A3262A',
  bgCutoutColor = '#F4E7C6',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 1600 420"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* ========================================================================= */}
      {/* 0. CONTINUOUS MOUNTAIN HORIZON & DISTANT MOUNT FUJI (West to East)      */}
      {/* ========================================================================= */}
      <g opacity="0.3">
        {/* Far West Rolling Ridge */}
        <path
          d="M0 418 L0 320 Q80 270 180 300 T380 280 T600 320 L600 418 Z"
          fill={color}
        />
        {/* Distant Mount Fuji (Majestic Volcanic Cone) */}
        <path
          d="M600 418 L750 170 Q780 135 820 135 Q860 135 890 170 L1040 418 Z"
          fill={color}
        />
        {/* Fuji Snow-cap serrated ridge line */}
        <path
          d="M750 170 L775 200 L795 180 L820 205 L845 180 L865 200 L890 170"
          stroke={bgCutoutColor}
          strokeWidth="3.5"
        />
        {/* Far East Rolling Mountain Ridge */}
        <path
          d="M1040 418 L1040 310 Q1180 260 1320 290 T1500 270 T1600 300 L1600 418 Z"
          fill={color}
        />
      </g>

      {/* ========================================================================= */}
      {/* 1. FAR WEST (x = 0 to 220): ENTRANCE TORII, STONE LANTERNS, BAMBOO FENCE */}
      {/* ========================================================================= */}
      {/* Foothill & Stone Wall at the extreme left edge */}
      <polygon points="0,418 0,360 40,360 60,418" fill={color} />
      <line x1="0" y1="380" x2="45" y2="380" stroke={bgCutoutColor} strokeWidth="1.5" />
      <line x1="0" y1="400" x2="55" y2="400" stroke={bgCutoutColor} strokeWidth="1.5" />

      {/* Far West Entrance Torii Gate (x = 35 to 115) */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        {/* Kasagi curved upper lintel */}
        <path d="M30 295 Q75 282 120 295 L118 303 Q75 290 32 303 Z" />
        {/* Shimaki & Nuki tie beams */}
        <rect x="42" y="307" width="66" height="6" />
        <rect x="46" y="325" width="58" height="5" />
        {/* Pillars */}
        <polygon points="54,307 60,307 58,418 52,418" />
        <polygon points="90,307 96,307 98,418 92,418" />
        {/* Center plaque */}
        <rect x="72" y="307" width="6" height="18" />
      </g>

      {/* Stone Lantern 1 (Tōrō) at x = 125 */}
      <g fill={color} stroke={color} strokeWidth="1.5">
        <rect x="122" y="400" width="22" height="18" />
        <rect x="128" y="370" width="10" height="30" />
        <rect x="123" y="360" width="20" height="10" />
        {/* Fire chamber */}
        <rect x="125" y="345" width="16" height="15" fill={bgCutoutColor} />
        <circle cx="133" cy="352" r="3" fill={color} stroke="none" />
        {/* Roof */}
        <path d="M117 345 Q133 335 149 345 Z" fill={color} />
        <circle cx="133" cy="333" r="3" fill={color} />
      </g>

      {/* Traditional Bamboo Fence (Takegaki) & Stone Steps (x = 150 to 220) */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round">
        <line x1="150" y1="380" x2="215" y2="380" />
        <line x1="150" y1="395" x2="215" y2="395" />
        <line x1="155" y1="365" x2="155" y2="418" strokeWidth="2.5" />
        <line x1="170" y1="365" x2="170" y2="418" strokeWidth="2.5" />
        <line x1="185" y1="365" x2="185" y2="418" strokeWidth="2.5" />
        <line x1="200" y1="365" x2="200" y2="418" strokeWidth="2.5" />
        <line x1="215" y1="365" x2="215" y2="418" strokeWidth="2.5" />
      </g>

      {/* ========================================================================= */}
      {/* 2. WEST (x = 210 to 450): ARTISAN TEA PAVILION / WORKSHOP (Yatai / Chaya) */}
      {/* ========================================================================= */}
      <g stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        {/* Wooden Foundation Platform */}
        <rect x="220" y="390" width="220" height="28" strokeWidth="2" />
        <line x1="220" y1="404" x2="440" y2="404" stroke={bgCutoutColor} strokeWidth="1.5" />

        {/* Vertical Support Posts */}
        <line x1="236" y1="260" x2="236" y2="390" strokeWidth="3.5" />
        <line x1="290" y1="260" x2="290" y2="390" strokeWidth="3" />
        <line x1="370" y1="260" x2="370" y2="390" strokeWidth="3" />
        <line x1="424" y1="260" x2="424" y2="390" strokeWidth="3.5" />

        {/* Counter Shelves with Craft Vessels / Bowls */}
        <rect x="230" y="345" width="200" height="8" />
        <path d="M245 345 C245 330 260 330 260 345 Z" />
        <path d="M265 345 C265 325 280 325 280 345 Z" />
        <path d="M305 345 L315 320 L325 345 Z" />
        <path d="M385 345 C385 328 402 328 402 345 Z" />
        <path d="M408 345 C408 332 420 332 420 345 Z" />

        {/* Lower display pots / bamboo planters beneath counter */}
        <rect x="240" y="365" width="20" height="24" />
        <rect x="270" y="365" width="22" height="24" />
        <rect x="300" y="362" width="25" height="27" />
        <rect x="335" y="365" width="20" height="24" />
        <rect x="365" y="362" width="24" height="27" />
        <rect x="398" y="365" width="22" height="24" />

        {/* Noren Fabric Curtains with Japanese Kanji */}
        <g strokeWidth="1.5">
          <rect x="234" y="260" width="34" height="42" rx="2" />
          <rect x="272" y="260" width="34" height="42" rx="2" />
          <rect x="310" y="260" width="34" height="42" rx="2" />
          <rect x="348" y="260" width="34" height="42" rx="2" />
          <rect x="386" y="260" width="34" height="42" rx="2" />
          {/* Slits */}
          <line x1="270" y1="260" x2="270" y2="304" stroke={bgCutoutColor} strokeWidth="2" />
          <line x1="308" y1="260" x2="308" y2="304" stroke={bgCutoutColor} strokeWidth="2" />
          <line x1="346" y1="260" x2="346" y2="304" stroke={bgCutoutColor} strokeWidth="2" />
          <line x1="384" y1="260" x2="384" y2="304" stroke={bgCutoutColor} strokeWidth="2" />
          {/* Kanji */}
          <text x="251" y="286" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[12px] font-bold">生</text>
          <text x="289" y="286" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[12px] font-bold">き</text>
          <text x="327" y="286" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[12px] font-bold">甲</text>
          <text x="365" y="286" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[12px] font-bold">斐</text>
          <text x="403" y="286" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[12px] font-bold">処</text>
        </g>

        {/* Hanging Paper Lanterns (Chochin) */}
        <line x1="250" y1="230" x2="250" y2="245" strokeWidth="1.5" />
        <ellipse cx="250" cy="256" rx="10" ry="14" />
        <line x1="410" y1="230" x2="410" y2="245" strokeWidth="1.5" />
        <ellipse cx="410" cy="256" rx="10" ry="14" />

        {/* Scalloped Tiled Roof / Eaves */}
        <path d="M205 240 Q330 200 455 240 L445 220 Q330 185 215 220 Z" strokeWidth="2" />
        {/* Roof ridge board with ornamental sign */}
        <rect x="255" y="185" width="150" height="28" rx="2" />
        <rect x="260" y="190" width="140" height="18" fill={bgCutoutColor} stroke="none" />
        <text
          x="330"
          y="204"
          textAnchor="middle"
          fill={color}
          stroke="none"
          className="font-jp text-[11px] font-bold tracking-widest"
        >
          壱 · 匠の茶寮
        </text>

        {/* Tile Ridges */}
        <line x1="230" y1="235" x2="275" y2="200" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="270" y1="230" x2="305" y2="195" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="310" y1="225" x2="330" y2="195" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="350" y1="225" x2="330" y2="195" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="390" y1="230" x2="355" y2="195" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="430" y1="235" x2="385" y2="200" stroke={bgCutoutColor} strokeWidth="1.5" />
      </g>

      {/* ========================================================================= */}
      {/* 3. CENTER-WEST (x = 440 to 710): GRAND JAPANESE BLACK PINE (Matsu)       */}
      {/* ========================================================================= */}
      <g fill={color} stroke={color}>
        {/* Gnarled roots spreading horizontally */}
        <path
          d="M480 418 Q505 410 530 418 L525 390 Q485 350 475 290 Q465 240 450 200 Q440 160 420 120 Q410 100 390 80 Q405 75 425 95 Q460 145 480 210 Q500 270 520 340 Q540 395 570 418 Z"
          strokeWidth="1.5"
        />
        <path d="M460 418 Q475 405 490 395" strokeWidth="3" />
        <path d="M550 418 Q540 405 530 390" strokeWidth="3" />

        {/* Main Branches */}
        <path d="M465 280 Q400 250 360 270 T320 290" strokeWidth="14" strokeLinecap="round" />
        <path d="M450 210 Q390 180 360 200" strokeWidth="12" strokeLinecap="round" />
        <path d="M470 250 Q520 230 570 250 T620 270" strokeWidth="13" strokeLinecap="round" />
        <path d="M440 160 Q490 130 540 150" strokeWidth="10" strokeLinecap="round" />
        <path d="M415 110 Q370 90 330 110" strokeWidth="9" strokeLinecap="round" />
        <path d="M400 80 Q440 50 480 60" strokeWidth="8" strokeLinecap="round" />

        {/* Dense Pine Needle Cloud Clusters (Tamabuki) */}
        <path d="M360 60 C360 30 400 20 420 40 C450 15 490 25 500 55 C525 50 540 80 520 100 C490 115 450 105 420 115 C380 115 350 95 360 60 Z" />
        <path d="M300 110 C290 80 330 70 355 85 C380 70 415 80 410 105 C430 120 410 145 385 140 C350 150 315 140 300 110 Z" />
        <path d="M480 140 C480 110 520 100 545 120 C575 110 600 130 590 155 C610 170 590 195 560 190 C520 195 490 175 480 140 Z" />
        <path d="M305 190 C295 160 340 150 370 165 C400 150 435 165 430 190 C450 210 430 235 400 230 C360 240 320 225 305 190 Z" />
        <path d="M280 275 C270 235 325 220 365 240 C405 225 450 240 445 275 C465 300 440 330 400 325 C350 335 300 320 280 275 Z" />
        <path d="M520 240 C515 210 560 200 585 220 C615 205 650 220 645 250 C665 270 645 300 615 295 C575 305 535 285 520 240 Z" />
        <path d="M560 310 C555 285 590 275 610 290 C635 280 665 295 660 320 C675 335 660 355 635 355 C605 360 575 345 560 310 Z" />

        {/* Hand-carved needle notches */}
        <path d="M370 80 L390 95 L380 75" stroke={bgCutoutColor} strokeWidth="2" />
        <path d="M460 70 L480 85 L470 65" stroke={bgCutoutColor} strokeWidth="2" />
        <path d="M340 190 L360 205 L350 185" stroke={bgCutoutColor} strokeWidth="2" />
        <path d="M570 240 L590 255 L580 235" stroke={bgCutoutColor} strokeWidth="2" />
      </g>

      {/* ========================================================================= */}
      {/* 4. CENTER (x = 700 to 940): JINRIKISHA (RICKSHAW) + TORII GATE           */}
      {/* ========================================================================= */}
      <g stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Torii Gate behind Jinrikisha */}
        <g opacity="0.6">
          <path d="M720 240 Q820 220 920 240 L915 250 Q820 232 725 250 Z" fill={color} />
          <rect x="740" y="256" width="160" height="10" fill={color} />
          <rect x="750" y="280" width="140" height="8" fill={color} />
          <polygon points="770,256 780,256 775,418 765,418" fill={color} />
          <polygon points="860,256 870,256 875,418 865,418" fill={color} />
          <rect x="814" y="256" width="12" height="24" fill={color} />
        </g>

        {/* --- THE JINRIKISHA (人力車) --- */}
        <g>
          <circle cx="790" cy="355" r="58" stroke={color} strokeWidth="4" />
          <circle cx="790" cy="355" r="54" stroke={color} strokeWidth="1.5" strokeDasharray="3 4" />
          <circle cx="790" cy="355" r="14" fill={color} />
          <circle cx="790" cy="355" r="6" fill={bgCutoutColor} />
          {/* Wheel Spokes */}
          <line x1="790" y1="297" x2="790" y2="413" strokeWidth="2" />
          <line x1="732" y1="355" x2="848" y2="355" strokeWidth="2" />
          <line x1="749" y1="314" x2="831" y2="396" strokeWidth="2" />
          <line x1="749" y1="396" x2="831" y2="314" strokeWidth="2" />
          <line x1="768" y1="301" x2="812" y2="409" strokeWidth="2" />
          <line x1="812" y1="301" x2="768" y2="409" strokeWidth="2" />
          <line x1="736" y1="333" x2="844" y2="377" strokeWidth="2" />
          <line x1="736" y1="377" x2="844" y2="333" strokeWidth="2" />
        </g>

        {/* Carriage Body & Seat */}
        <path d="M790 355 L825 355 L860 345 L865 285 Q855 255 805 255 L770 265 L770 325 Z" fill={color} strokeWidth="3" />
        <path d="M800 270 Q840 270 845 295 L845 335 L805 335 Z" fill={bgCutoutColor} strokeWidth="2" />
        {/* Hood */}
        <path d="M865 260 Q840 235 790 245 L780 260 Q830 250 860 270 Z" fill={color} strokeWidth="2" />
        <path d="M868 250 Q835 225 775 240 L770 250 Q830 235 865 260 Z" fill={color} strokeWidth="2" />
        {/* Lantern */}
        <line x1="765" y1="285" x2="755" y2="295" strokeWidth="2" />
        <ellipse cx="753" cy="306" rx="7" ry="10" fill={color} strokeWidth="1.5" />
        <circle cx="753" cy="306" r="3" fill={bgCutoutColor} stroke="none" />
        {/* Fender */}
        <path d="M725 350 Q745 290 815 305" strokeWidth="4" stroke={color} />
        {/* Pulling Shafts */}
        <line x1="800" y1="360" x2="670" y2="385" strokeWidth="4.5" />
        <line x1="810" y1="370" x2="680" y2="395" strokeWidth="4" />
        <line x1="670" y1="380" x2="680" y2="400" strokeWidth="5" />
        <line x1="705" y1="388" x2="698" y2="418" strokeWidth="3" />
      </g>

      {/* Stone Guidepost (Michishirube) at x = 915 */}
      <g fill={color} stroke={color} strokeWidth="1.5">
        <rect x="905" y="360" width="16" height="58" />
        <path d="M900 360 L913 348 L926 360 Z" />
        <text x="913" y="385" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">京</text>
        <text x="913" y="402" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">都</text>
      </g>

      {/* ========================================================================= */}
      {/* 5. CENTER-EAST (x = 940 to 1290): GRAND PAGODA & CASTLE SHRINE COMPLEX   */}
      {/* ========================================================================= */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        {/* Monumental Stone Foundation Wall (Ishigaki) */}
        <polygon points="940,418 960,370 1250,370 1270,418" strokeWidth="2.5" />
        <line x1="955" y1="385" x2="1255" y2="385" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="950" y1="402" x2="1260" y2="402" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1000" y1="370" x2="1000" y2="385" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1060" y1="370" x2="1060" y2="385" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1130" y1="370" x2="1130" y2="385" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1200" y1="370" x2="1200" y2="385" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1030" y1="385" x2="1030" y2="402" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1100" y1="385" x2="1100" y2="402" stroke={bgCutoutColor} strokeWidth="1.5" />
        <line x1="1170" y1="385" x2="1170" y2="402" stroke={bgCutoutColor} strokeWidth="1.5" />

        {/* Central Arched Karakon Main Gate */}
        <path d="M1075 418 L1075 390 Q1105 375 1135 390 L1135 418 Z" fill={bgCutoutColor} strokeWidth="2.5" />

        {/* Tier 1: Lower Sanctuary Hall */}
        <rect x="980" y="325" width="250" height="45" />
        <g stroke={bgCutoutColor} strokeWidth="1.5">
          <rect x="995" y="332" width="22" height="30" fill={bgCutoutColor} />
          <rect x="1030" y="332" width="22" height="30" fill={bgCutoutColor} />
          <rect x="1065" y="332" width="22" height="30" fill={bgCutoutColor} />
          <rect x="1125" y="332" width="22" height="30" fill={bgCutoutColor} />
          <rect x="1160" y="332" width="22" height="30" fill={bgCutoutColor} />
          <rect x="1195" y="332" width="22" height="30" fill={bgCutoutColor} />
        </g>
        {/* Tier 1 Roof */}
        <path d="M945 325 Q1105 295 1265 325 L1255 308 Q1105 285 955 308 Z" strokeWidth="3" />
        <path d="M945 325 Q930 310 925 300" strokeWidth="4" />
        <path d="M1265 325 Q1280 310 1285 300" strokeWidth="4" />

        {/* Tier 2: Middle Pagoda Chamber */}
        <rect x="1015" y="255" width="180" height="53" />
        <line x1="1005" y1="300" x2="1205" y2="300" stroke={bgCutoutColor} strokeWidth="2" />
        <line x1="1005" y1="294" x2="1205" y2="294" stroke={bgCutoutColor} strokeWidth="1.5" />
        <g stroke={bgCutoutColor} strokeWidth="1.5">
          <rect x="1035" y="263" width="26" height="30" fill={bgCutoutColor} />
          <rect x="1092" y="263" width="26" height="30" fill={bgCutoutColor} />
          <rect x="1149" y="263" width="26" height="30" fill={bgCutoutColor} />
        </g>
        {/* Tier 2 Roof */}
        <path d="M980 255 Q1105 230 1230 255 L1220 240 Q1105 220 990 240 Z" strokeWidth="3" />
        <path d="M980 255 Q965 240 960 230" strokeWidth="4" />
        <path d="M1230 255 Q1245 240 1250 230" strokeWidth="4" />

        {/* Tier 3: Upper Bell & Relic Chamber */}
        <rect x="1050" y="185" width="110" height="55" />
        <path d="M1090 230 L1090 205 Q1105 195 1120 205 L1120 230 Z" fill={bgCutoutColor} stroke={bgCutoutColor} strokeWidth="1.5" />
        {/* Tier 3 Roof */}
        <path d="M1010 185 Q1105 160 1200 185 L1190 168 Q1105 150 1020 168 Z" strokeWidth="3" />
        <path d="M1010 185 Q995 170 990 160" strokeWidth="4" />
        <path d="M1200 185 Q1215 170 1220 160" strokeWidth="4" />

        {/* Sacred Spire (Sorin) */}
        <rect x="1095" y="155" width="20" height="13" />
        <line x1="1105" y1="70" x2="1105" y2="155" strokeWidth="5" />
        <ellipse cx="1105" cy="142" rx="14" ry="3" />
        <ellipse cx="1105" cy="134" rx="13" ry="3" />
        <ellipse cx="1105" cy="126" rx="12" ry="3" />
        <ellipse cx="1105" cy="118" rx="11" ry="3" />
        <ellipse cx="1105" cy="110" rx="10" ry="3" />
        <ellipse cx="1105" cy="102" rx="9" ry="3" />
        <ellipse cx="1105" cy="94" rx="8" ry="3" />
        <circle cx="1105" cy="72" r="6" />
        <line x1="1105" y1="58" x2="1105" y2="66" strokeWidth="3" />
      </g>

      {/* ========================================================================= */}
      {/* 6. EAST (x = 1270 to 1460): CASTLE WALLS & CORNER WATCHTOWER (Yagura)     */}
      {/* ========================================================================= */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        {/* Rampart wall section */}
        <polygon points="1270,418 1270,345 1420,345 1435,418" />
        <line x1="1280" y1="365" x2="1425" y2="365" stroke={bgCutoutColor} strokeWidth="2" />
        <rect x="1295" y="375" width="10" height="14" fill={bgCutoutColor} />
        <rect x="1335" y="375" width="10" height="14" fill={bgCutoutColor} />
        <rect x="1375" y="375" width="10" height="14" fill={bgCutoutColor} />

        {/* Elevated Corner Watchtower (Yagura) */}
        <rect x="1390" y="275" width="85" height="70" />
        <rect x="1410" y="295" width="18" height="25" fill={bgCutoutColor} />
        <rect x="1440" y="295" width="18" height="25" fill={bgCutoutColor} />
        <path d="M1370 275 Q1432 250 1495 275 L1485 263 Q1432 243 1380 263 Z" strokeWidth="3" />
        <path d="M1370 275 Q1360 260 1355 253" strokeWidth="3" />
        <path d="M1495 275 Q1505 260 1510 253" strokeWidth="3" />

        {/* Castle Terrace Lantern */}
        <rect x="1295" y="330" width="12" height="15" />
        <path d="M1290 330 Q1301 322 1312 330 Z" />
        <circle cx="1301" cy="320" r="3" />
      </g>

      {/* ========================================================================= */}
      {/* 7. FAR EAST (x = 1450 to 1600): NOBORI BANNERS, TORII & MOUNTAIN FOOTHILL */}
      {/* ========================================================================= */}
      {/* Secondary Eastern Torii (x = 1480 to 1560) */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        <path d="M1475 350 Q1520 338 1565 350 L1562 356 Q1520 345 1478 356 Z" />
        <rect x="1485" y="360" width="70" height="5" />
        <rect x="1490" y="372" width="60" height="4" />
        <polygon points="1496,360 1502,360 1500,418 1494,418" />
        <polygon points="1544,360 1550,360 1552,418 1546,418" />
      </g>

      {/* Fluttering Japanese Shrine Banner Poles (Nobori) at x = 1465 and 1575 */}
      <g stroke={color} strokeWidth="1.5" fill={color}>
        {/* Pole 1 */}
        <line x1="1465" y1="280" x2="1465" y2="418" strokeWidth="2.5" />
        <line x1="1465" y1="280" x2="1485" y2="280" strokeWidth="2" />
        <polygon points="1466,282 1484,282 1484,360 1466,360" fill={color} />
        <text x="1475" y="302" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">生</text>
        <text x="1475" y="320" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">き</text>
        <text x="1475" y="338" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">甲</text>
        <text x="1475" y="356" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">斐</text>

        {/* Pole 2 (At extreme right edge) */}
        <line x1="1580" y1="290" x2="1580" y2="418" strokeWidth="2.5" />
        <line x1="1580" y1="290" x2="1598" y2="290" strokeWidth="2" />
        <polygon points="1581,292 1599,292 1599,370 1581,370" fill={color} />
        <text x="1590" y="312" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">神</text>
        <text x="1590" y="330" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">聖</text>
        <text x="1590" y="348" textAnchor="middle" fill={bgCutoutColor} stroke="none" className="font-jp text-[8px] font-bold">地</text>
      </g>

      {/* Far East Foothill Wall running off the screen at x=1600 */}
      <polygon points="1570,418 1570,390 1600,380 1600,418" fill={color} />

      {/* ========================================================================= */}
      {/* 8. CONTINUOUS SOLID GROUND HORIZON BASELINE (0 to 1600)                   */}
      {/* ========================================================================= */}
      <line x1="0" y1="418" x2="1600" y2="418" stroke={color} strokeWidth="3" />
    </svg>
  );
};

interface JapanesePosterGroundCragsProps {
  groundColor?: string;
  cragColor?: string;
  className?: string;
}

export const JapanesePosterGroundCrags: React.FC<JapanesePosterGroundCragsProps> = ({
  groundColor = '#A3262A',
  cragColor = '#1A1817',
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full bg-[${groundColor}] overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1600 480"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1600" height="480" fill={groundColor} />
        <polygon points="140,0 140,65 195,115 160,185 210,195 175,250 110,230 150,110 90,70 90,0" fill={cragColor} />
        <polygon points="730,10 810,12 870,55 890,95 820,80 850,115 790,75 750,110 770,55" fill={cragColor} />
        <polygon
          points="0,480 0,340 70,360 120,320 180,390 260,330 340,380 410,290 480,350 530,310 590,380 670,300 760,400 850,320 940,370 1020,280 1110,350 1200,290 1280,360 1370,310 1460,380 1540,330 1600,360 1600,480"
          fill={cragColor}
        />
      </svg>
    </div>
  );
};
