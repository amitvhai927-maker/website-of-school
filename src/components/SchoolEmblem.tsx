import React from 'react';

interface SchoolEmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SchoolEmblem: React.FC<SchoolEmblemProps> = ({
  className = '',
  size = 56,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      className={`shrink-0 drop-shadow-md select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Official Emblem of Shree Beni Bhola Model Secondary School, Godaita-8, Sarlahi"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="navyRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A2540" />
          <stop offset="50%" stopColor="#0B3056" />
          <stop offset="100%" stopColor="#081E34" />
        </linearGradient>
        <linearGradient id="torchFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FDE047" />
        </linearGradient>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        {/* Text paths */}
        {/* Top arc for Devanagari */}
        <path
          id="topArc"
          d="M 38 150 A 112 112 0 0 1 262 150"
          fill="none"
        />
        {/* Bottom arc for English text */}
        <path
          id="bottomArc"
          d="M 262 150 A 112 112 0 0 1 38 150"
          fill="none"
        />
      </defs>

      {/* Outer Golden Border */}
      <circle cx="150" cy="150" r="146" fill="url(#goldRing)" stroke="#B45309" strokeWidth="2" />
      
      {/* Outer Navy Ring */}
      <circle cx="150" cy="150" r="141" fill="url(#navyRing)" />

      {/* Gold Inner Hairline */}
      <circle cx="150" cy="150" r="102" fill="none" stroke="url(#goldRing)" strokeWidth="3" />

      {/* Center White/Sky Field */}
      <circle cx="150" cy="150" r="100" fill="url(#skyGrad)" />

      {/* Gold Stars on left and right */}
      {/* Left Star */}
      <path
        d="M 23 150 L 26 142 L 34 142 L 28 147 L 30 155 L 23 150 Z"
        fill="#FBBF24"
        transform="translate(4, -2)"
      />
      {/* Right Star */}
      <path
        d="M 273 150 L 276 142 L 284 142 L 278 147 L 280 155 L 273 150 Z"
        fill="#FBBF24"
        transform="translate(-6, -2)"
      />

      {/* Arc Text: Nepali (Top) */}
      <text fill="#FFFFFF" fontSize="13.2" fontWeight="700" letterSpacing="0.8">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          श्री बेनी भोला नमूना मा.वि. गोडैता-८, सर्लाही
        </textPath>
      </text>

      {/* Arc Text: English (Bottom) */}
      <text fill="#FFFFFF" fontSize="9.5" fontWeight="700" letterSpacing="0.4">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          Shree Beni Bhola Model Secondary School Godaita-8
        </textPath>
      </text>

      {/* CENTER MOTIF */}
      
      {/* Radiant Sun Rays behind Torch */}
      <g stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <line x1="150" y1="80" x2="150" y2="65" />
        <line x1="135" y1="84" x2="124" y2="72" />
        <line x1="165" y1="84" x2="176" y2="72" />
        <line x1="123" y1="94" x2="108" y2="88" />
        <line x1="177" y1="94" x2="192" y2="88" />
      </g>

      {/* School Building Silhouette in Center Base */}
      <g transform="translate(0, 15)">
        {/* Building foundation & walls */}
        <rect x="90" y="145" width="120" height="42" rx="2" fill="#FEF08A" stroke="#B91C1C" strokeWidth="1.5" />
        {/* Roof line red */}
        <rect x="86" y="142" width="128" height="6" rx="1" fill="#DC2626" />
        {/* Upper balcony */}
        <rect x="94" y="128" width="112" height="15" fill="#FEF9C3" stroke="#DC2626" strokeWidth="1.5" />
        {/* Upper roof */}
        <rect x="90" y="125" width="120" height="5" fill="#DC2626" />
        {/* Blue central dome */}
        <path d="M 140 125 A 10 10 0 0 1 160 125 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="1" />
        {/* Nepal Triangular Double Flag on mast */}
        <line x1="150" y1="125" x2="150" y2="108" stroke="#334155" strokeWidth="1.5" />
        <path d="M 150 108 L 161 113 L 150 117 L 161 122 L 150 123 Z" fill="#DC2626" stroke="#1E3A8A" strokeWidth="1" />
        
        {/* Red pillars */}
        <line x1="102" y1="145" x2="102" y2="187" stroke="#DC2626" strokeWidth="3" />
        <line x1="122" y1="145" x2="122" y2="187" stroke="#DC2626" strokeWidth="3" />
        <line x1="178" y1="145" x2="178" y2="187" stroke="#DC2626" strokeWidth="3" />
        <line x1="198" y1="145" x2="198" y2="187" stroke="#DC2626" strokeWidth="3" />

        {/* Windows */}
        <rect x="132" y="152" width="14" height="20" fill="#991B1B" />
        <rect x="154" y="152" width="14" height="20" fill="#991B1B" />
        <rect x="107" y="152" width="11" height="14" fill="#B45309" />
        <rect x="182" y="152" width="11" height="14" fill="#B45309" />
      </g>

      {/* Torch of Knowledge (मसाल) with Flame */}
      <g transform="translate(0, -6)">
        {/* Flame */}
        <path
          d="M 150 68 C 144 76, 142 82, 145 88 C 147 92, 150 94, 150 94 C 150 94, 153 92, 155 88 C 158 82, 156 76, 150 68 Z"
          fill="url(#torchFlame)"
        />
        {/* Inner intense yellow flame */}
        <path
          d="M 150 74 C 147 79, 146 83, 148 86 C 149 88, 150 89, 150 89 C 150 89, 151 88, 152 86 C 154 83, 153 79, 150 74 Z"
          fill="#FEF08A"
        />
        {/* Torch handle */}
        <polygon points="146,94 154,94 152,104 148,104" fill="#B45309" stroke="#78350F" strokeWidth="1" />
      </g>

      {/* Open Book of Wisdom */}
      <g transform="translate(0, 0)">
        {/* Left page */}
        <path
          d="M 150 102 C 140 96, 122 97, 108 102 C 108 111, 122 108, 150 114 Z"
          fill="#FFFFFF"
          stroke="#1E3A8A"
          strokeWidth="1.5"
        />
        {/* Right page */}
        <path
          d="M 150 102 C 160 96, 178 97, 192 102 C 192 111, 178 108, 150 114 Z"
          fill="#FFFFFF"
          stroke="#1E3A8A"
          strokeWidth="1.5"
        />
        {/* Book spine line */}
        <line x1="150" y1="102" x2="150" y2="114" stroke="#1E3A8A" strokeWidth="2" />
        {/* Page text lines */}
        <line x1="116" y1="104" x2="142" y2="102" stroke="#94A3B8" strokeWidth="1" />
        <line x1="116" y1="107" x2="142" y2="105" stroke="#94A3B8" strokeWidth="1" />
        <line x1="158" y1="102" x2="184" y2="104" stroke="#94A3B8" strokeWidth="1" />
        <line x1="158" y1="105" x2="184" y2="107" stroke="#94A3B8" strokeWidth="1" />
      </g>

      {/* Laurel Wreath Leaves (Left and Right) */}
      {/* Left leaves */}
      <g fill="#16A34A" stroke="#15803D" strokeWidth="0.5">
        <path d="M 76 130 C 72 122, 64 125, 68 135 C 72 136, 76 134, 76 130 Z" />
        <path d="M 68 145 C 62 138, 56 142, 60 151 C 64 151, 68 149, 68 145 Z" />
        <path d="M 65 162 C 58 156, 54 162, 58 170 C 62 169, 65 166, 65 162 Z" />
        <path d="M 68 180 C 62 175, 60 183, 65 189 C 69 188, 70 184, 68 180 Z" />
        <path d="M 76 198 C 72 194, 72 203, 78 207 C 81 205, 80 200, 76 198 Z" />
      </g>
      {/* Right leaves */}
      <g fill="#16A34A" stroke="#15803D" strokeWidth="0.5">
        <path d="M 224 130 C 228 122, 236 125, 232 135 C 228 136, 224 134, 224 130 Z" />
        <path d="M 232 145 C 238 138, 244 142, 240 151 C 236 151, 232 149, 232 145 Z" />
        <path d="M 235 162 C 242 156, 246 162, 242 170 C 238 169, 235 166, 235 162 Z" />
        <path d="M 232 180 C 238 175, 240 183, 235 189 C 231 188, 230 184, 232 180 Z" />
        <path d="M 224 198 C 228 194, 228 203, 222 207 C 219 205, 220 200, 224 198 Z" />
      </g>

      {/* Sanskrit Motto: "विद्या ददाति विनयम्" */}
      <text
        x="150"
        y="125"
        textAnchor="middle"
        fill="#0F172A"
        fontSize="8.5"
        fontWeight="800"
        fontFamily="serif"
        letterSpacing="0.5"
      >
        — विद्या ददाति विनयम् —
      </text>

      {/* Lower Ribbon / Banner: Estd. 2004 */}
      <g transform="translate(0, 10)">
        {/* Ribbon back folds */}
        <polygon points="95,214 84,222 95,230 95,224" fill="#0369A1" />
        <polygon points="205,214 216,222 205,230 205,224" fill="#0369A1" />
        {/* Main Ribbon banner */}
        <path
          d="M 92 216 Q 150 210 208 216 L 205 233 Q 150 228 95 233 Z"
          fill="#0284C7"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <text
          x="150"
          y="227"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="800"
          letterSpacing="1"
        >
          Estd. 2004
        </text>
      </g>
    </svg>
  );
};
