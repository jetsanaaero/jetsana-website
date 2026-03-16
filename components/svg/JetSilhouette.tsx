'use client';

import React from 'react';

interface JetSilhouetteProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const JetSilhouette: React.FC<JetSilhouetteProps> = ({
  className = '',
  width = 800,
  height = 280,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 280"
      width={width}
      height={height}
      className={className}
      fill="none"
      stroke="#C9A96E"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Private jet silhouette"
    >
      {/* Contrail / trail path — animatable separately */}
      <path
        data-name="contrail"
        d="M0 148 Q40 146 80 147 Q120 148 160 146 Q200 148 240 147 Q280 146 320 147"
        strokeWidth="0.8"
        strokeDasharray="6 8"
        opacity="0.45"
      />

      {/* ===== FUSELAGE ===== */}
      <path
        data-name="fuselage-upper"
        d="
          M105 130
          Q108 124 118 118
          Q130 112 148 108
          Q170 104 200 102
          L360 98
          Q420 96 500 96
          L600 97
          Q640 98 660 100
          Q680 104 692 112
          Q698 118 700 126
        "
        strokeWidth="1.8"
      />
      <path
        data-name="fuselage-lower"
        d="
          M105 130
          Q106 138 112 146
          Q120 154 138 160
          Q160 166 200 168
          L360 172
          Q420 174 500 174
          L580 173
          Q620 172 650 168
          Q672 162 688 152
          Q696 142 700 126
        "
        strokeWidth="1.8"
      />

      {/* ===== NOSE CONE ===== */}
      <path
        data-name="nose"
        d="
          M105 130
          Q98 130 90 131
          Q78 132 68 134
          Q54 137 42 140
          Q34 142 30 144
        "
        strokeWidth="2"
      />
      <path
        data-name="nose-underline"
        d="
          M105 130
          Q98 132 88 136
          Q76 140 64 144
          Q50 149 38 152
          Q34 153 30 144
        "
        strokeWidth="1.8"
      />

      {/* ===== COCKPIT WINDOWS ===== */}
      <path
        data-name="cockpit-window-1"
        d="M92 124 L82 128 L80 132 L90 128 Z"
        strokeWidth="1.5"
      />
      <path
        data-name="cockpit-window-2"
        d="M102 120 L94 124 L92 128 L100 124 Z"
        strokeWidth="1.5"
      />

      {/* ===== CABIN WINDOWS ===== */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <ellipse
          key={`window-${i}`}
          data-name={`cabin-window-${i}`}
          cx={160 + i * 42}
          cy={104 + (i < 3 ? 0 : 1)}
          rx="5"
          ry="3.5"
          strokeWidth="1.2"
        />
      ))}

      {/* ===== WING — main swept wing ===== */}
      <path
        data-name="wing-upper"
        d="
          M340 170
          L310 178
          Q280 186 240 206
          L200 228
          Q192 236 186 244
          L182 250
        "
        strokeWidth="1.8"
      />
      <path
        data-name="wing-lower"
        d="
          M420 172
          L380 180
          Q340 190 290 218
          L250 244
          Q240 250 234 254
          L228 258
        "
        strokeWidth="1.5"
      />
      {/* Wing tip */}
      <path
        data-name="wing-tip"
        d="M182 250 Q196 254 228 258"
        strokeWidth="1.5"
      />
      {/* Wing root fairing */}
      <path
        data-name="wing-root"
        d="M340 170 Q370 171 420 172"
        strokeWidth="1.2"
        opacity="0.6"
      />

      {/* ===== ENGINE (under-wing, left side visible) ===== */}
      <path
        data-name="engine-nacelle"
        d="
          M282 200
          Q276 198 272 202
          Q268 208 268 216
          L270 226
          Q272 232 278 234
          L298 236
          Q304 234 306 228
          L308 218
          Q308 208 304 202
          Q300 198 294 200
          Z
        "
        strokeWidth="1.6"
      />
      {/* Engine intake ring */}
      <ellipse
        data-name="engine-intake"
        cx="288"
        cy="204"
        rx="10"
        ry="4"
        strokeWidth="1.2"
      />
      {/* Engine pylon */}
      <path
        data-name="engine-pylon"
        d="M288 200 L304 190 Q310 186 316 184"
        strokeWidth="1.2"
      />

      {/* ===== TAIL / VERTICAL STABILIZER ===== */}
      <path
        data-name="vertical-stabilizer"
        d="
          M670 104
          Q672 90 678 72
          Q684 54 692 40
          Q698 30 706 24
          L714 20
          Q718 18 720 20
          L722 26
          Q722 34 720 48
          Q716 68 712 86
          Q708 100 704 110
          Q700 120 696 124
        "
        strokeWidth="1.8"
      />

      {/* ===== HORIZONTAL STABILIZER ===== */}
      <path
        data-name="h-stab-upper"
        d="
          M680 108
          L700 104
          Q720 100 740 92
          L758 84
          Q764 82 768 80
        "
        strokeWidth="1.5"
      />
      <path
        data-name="h-stab-lower"
        d="
          M692 120
          L716 118
          Q740 114 756 108
          L770 102
          Q774 100 776 98
        "
        strokeWidth="1.5"
      />
      {/* H-stab tip */}
      <path
        data-name="h-stab-tip"
        d="M768 80 Q772 86 776 98"
        strokeWidth="1.3"
      />

      {/* ===== TAIL-MOUNTED ENGINE (rear fuselage) ===== */}
      <path
        data-name="tail-engine"
        d="
          M688 118
          Q684 116 680 118
          Q676 122 676 130
          Q676 138 680 142
          Q684 144 690 144
          Q696 142 698 138
          Q700 130 698 122
          Q696 118 692 118
        "
        strokeWidth="1.4"
      />
      {/* Tail engine exhaust */}
      <ellipse
        data-name="tail-engine-exhaust"
        cx="688"
        cy="142"
        rx="6"
        ry="3"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* ===== DORSAL SPINE (fuselage top detail) ===== */}
      <path
        data-name="dorsal-spine"
        d="M500 96 Q540 95 580 96 Q620 97 650 100 Q666 103 674 108"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* ===== BELLY FAIRING ===== */}
      <path
        data-name="belly-fairing"
        d="M360 172 Q400 176 440 177 Q480 178 500 176"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* ===== DOOR OUTLINE ===== */}
      <rect
        data-name="entry-door"
        x="132"
        y="110"
        width="14"
        height="32"
        rx="2"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* ===== GOLDEN CONTRAIL (animated trail behind jet) ===== */}
      <path
        data-name="golden-contrail"
        d="
          M700 132
          Q720 134 740 132
          Q758 130 772 134
          Q784 138 794 132
          Q800 128 800 128
        "
        strokeWidth="1.2"
        strokeDasharray="4 6"
        opacity="0.6"
      />
      <path
        data-name="golden-contrail-lower"
        d="
          M698 140
          Q718 144 738 140
          Q756 136 774 142
          Q790 146 800 140
        "
        strokeWidth="0.8"
        strokeDasharray="3 7"
        opacity="0.35"
      />
    </svg>
  );
};

export default JetSilhouette;
