/**
 * Logo component renders an SVG logo.
 * @param {string} className - The class name to apply to the SVG element.
 * @returns {JSX.Element} - The SVG logo.
 */
export const Logo = ({ className, size }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 768.000000 768.000000`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      width={size}
      height={size}
    >
      <g
        transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
        stroke="currentColor"
      >
        <path
          d="M3375 7410 c-690 -37 -1309 -301 -1864 -794 -291 -259 -560 -607
-616 -799 -12 -42 -15 -45 -137 -132 -149 -106 -106 -244 121 -385 43 -27 107
-80 158 -135 322 -338 487 -490 668 -617 91 -63 323 -205 435 -266 89 -48 267
-125 279 -120 9 3 81 95 81 102 0 2 -33 17 -72 32 -450 169 -999 598 -1380
1075 -33 41 -42 47 -89 52 -90 11 -183 83 -160 125 16 30 55 60 111 86 72 34
102 33 142 -3 29 -25 33 -35 33 -78 0 -26 -4 -55 -8 -65 -6 -11 -3 -18 10 -22
10 -4 42 -38 72 -76 72 -93 277 -301 426 -433 240 -213 530 -402 827 -539 133
-62 133 -62 248 -67 141 -8 169 -20 231 -103 25 -34 79 -51 243 -77 270 -44
507 -49 706 -15 458 79 975 302 1347 580 102 77 437 400 646 624 101 108 107
117 101 148 -13 67 46 162 100 162 39 -1 105 -38 126 -72 53 -88 -13 -178
-132 -178 -18 0 -31 -8 -39 -22 -24 -46 -165 -194 -493 -517 -121 -119 -142
-145 -98 -122 12 6 47 11 79 11 56 0 61 2 138 64 44 35 165 146 268 247 119
115 212 198 250 220 127 76 177 138 177 221 0 63 -30 112 -125 203 -65 63 -86
91 -100 130 -61 178 -176 359 -343 541 -104 113 -166 173 -335 325 -116 103
-384 281 -580 384 -143 76 -395 170 -602 225 -244 65 -566 95 -850 80z m460
-131 c556 -57 1095 -304 1588 -728 171 -147 449 -473 491 -575 14 -33 -24 0
-221 195 -346 341 -556 502 -903 687 -263 141 -607 253 -917 299 -181 26 -572
24 -752 -5 -392 -64 -754 -201 -1062 -403 -133 -88 -358 -259 -464 -353 -114
-102 -82 -71 -310 -291 -109 -104 -207 -196 -218 -204 -31 -22 -19 2 54 105
247 349 600 674 981 903 116 69 348 179 473 224 381 138 833 190 1260 146z
m-114 -230 c234 -19 466 -72 734 -168 110 -40 328 -147 435 -214 348 -217 467
-312 810 -654 l275 -273 -44 -25 c-54 -31 -65 -31 -86 2 -51 77 -333 368 -480
494 -187 161 -436 332 -635 436 -92 49 -346 153 -475 196 -405 134 -862 153
-1280 52 -145 -34 -415 -126 -528 -179 -322 -150 -713 -443 -1062 -796 -77
-78 -168 -164 -203 -192 -61 -49 -64 -50 -95 -37 -18 6 -35 15 -40 19 -9 7
324 336 518 512 179 162 310 264 504 392 184 121 311 190 453 246 56 23 113
45 126 50 50 21 275 80 401 105 209 42 435 53 672 34z m6 -229 c136 -10 352
-56 430 -90 66 -29 242 -157 309 -225 283 -286 450 -728 415 -1093 -19 -203
-64 -353 -154 -518 -48 -89 -63 -111 -175 -248 -100 -122 -265 -229 -449 -291
-157 -53 -240 -70 -408 -86 -316 -28 -684 36 -880 154 -199 120 -365 299 -470
507 -103 205 -139 362 -138 600 0 237 43 410 154 619 113 212 263 383 448 510
160 109 255 139 531 165 80 7 264 5 387 -4z m-1185 -227 c-16 -21 -40 -47 -52
-58 -30 -27 -117 -136 -167 -211 -50 -74 -125 -220 -159 -311 -77 -205 -103
-507 -63 -753 16 -105 86 -297 151 -415 67 -122 97 -165 172 -243 50 -52 50
-53 21 -46 -40 9 -164 67 -228 107 -87 53 -404 274 -480 334 -39 32 -106 91
-147 133 -41 41 -120 118 -175 171 -55 53 -122 128 -148 167 -46 68 -48 72
-34 99 8 15 45 57 81 92 37 34 87 90 112 122 25 32 49 59 54 59 5 0 10 -21 12
-47 3 -46 4 -48 35 -51 30 -3 32 -1 39 33 4 21 4 64 0 97 -6 58 -5 61 27 90
l32 31 7 -54 c3 -30 6 -80 7 -111 1 -32 5 -58 10 -58 5 0 23 -3 40 -6 l32 -7
-2 159 -1 158 28 23 c38 30 44 18 44 -85 l0 -83 38 3 37 3 0 133 0 133 32 20
c38 24 41 21 45 -56 3 -49 4 -50 36 -53 l33 -3 -2 95 c-3 110 4 124 77 152 24
9 44 20 44 25 0 19 400 249 433 249 5 0 -5 -17 -21 -37z m2230 -118 c179 -108
181 -110 168 -155 -15 -52 -13 -200 3 -205 45 -15 52 -11 54 35 2 25 5 73 9
108 l6 62 31 -22 c18 -12 33 -22 35 -23 1 -1 5 -65 7 -141 6 -183 9 -196 43
-192 23 3 28 9 34 43 4 22 7 79 7 128 1 48 4 87 8 87 4 0 24 -16 44 -36 34
-33 36 -38 28 -72 -4 -20 -5 -70 -2 -109 l6 -73 33 0 c37 0 42 9 46 89 3 51
13 58 47 32 22 -17 23 -23 22 -133 -2 -127 4 -142 56 -136 28 3 28 4 33 82 5
77 6 79 23 61 45 -45 49 -60 48 -185 l-2 -119 25 -7 c48 -12 55 -2 58 88 l3
83 58 -78 c32 -43 65 -93 73 -111 15 -31 15 -35 -6 -77 -36 -70 -126 -173
-297 -340 -224 -218 -357 -330 -532 -446 -66 -43 -235 -129 -274 -139 -27 -6
-24 -1 36 74 153 190 258 427 292 662 20 134 16 333 -9 472 -38 209 -151 460
-295 656 -50 68 -91 126 -91 129 0 10 26 -5 172 -92z"
        />
        <path
          d="M3420 6780 c-9 -5 -13 -22 -12 -47 4 -59 11 -73 38 -73 23 0 24 3 24
59 0 44 -4 60 -16 65 -19 7 -16 8 -34 -4z"
        />
        <path
          d="M3566 6772 c-2 -4 -7 -24 -11 -45 -8 -41 6 -67 36 -67 24 0 29 10 36
70 l6 50 -31 0 c-17 0 -33 -3 -36 -8z"
        />
        <path
          d="M3283 6763 c-31 -11 2 -127 34 -121 23 4 27 27 13 76 -10 40 -24 53
-47 45z"
        />
        <path
          d="M3715 6727 c-21 -55 -17 -81 13 -85 18 -3 26 5 43 43 25 57 22 79
-13 83 -23 3 -28 -3 -43 -41z"
        />
        <path
          d="M3138 6743 c-23 -6 -23 -21 1 -75 25 -59 44 -74 66 -52 19 19 14 50
-13 98 -18 31 -27 36 -54 29z"
        />
        <path
          d="M3888 6723 c-9 -10 -23 -35 -31 -55 -15 -36 -15 -37 9 -53 14 -9 29
-13 34 -10 19 12 60 104 54 119 -8 21 -47 20 -66 -1z m42 -8 c0 -16 -26 -55
-37 -55 -16 0 -16 2 -1 35 9 21 38 36 38 20z"
        />
        <path
          d="M3003 6703 c-21 -8 -15 -45 18 -101 20 -36 35 -52 47 -50 35 7 21 88
-26 141 -16 18 -19 19 -39 10z"
        />
        <path
          d="M4030 6665 c-29 -47 -37 -100 -16 -108 15 -6 38 21 75 91 30 57 -25
72 -59 17z"
        />
        <path
          d="M2876 6624 c-9 -8 -16 -19 -16 -23 0 -15 50 -98 69 -115 17 -16 20
-16 35 -1 9 9 16 23 16 31 0 32 -60 124 -81 124 -4 0 -15 -7 -23 -16z"
        />
        <path
          d="M4158 6613 c-41 -47 -62 -123 -34 -123 23 0 97 91 94 114 -4 27 -39
32 -60 9z"
        />
        <path
          d="M3370 6540 c-71 -13 -218 -68 -298 -111 -94 -50 -172 -110 -248 -191
-205 -220 -296 -464 -281 -757 15 -286 141 -547 348 -721 282 -236 660 -297
1023 -165 135 49 294 158 382 263 161 193 254 429 254 649 0 185 -32 334 -103
474 -139 273 -341 444 -628 529 -91 27 -122 32 -254 35 -82 2 -170 0 -195 -5z
m216 -169 c23 -10 44 -24 48 -30 5 -7 15 -7 34 0 33 13 94 4 194 -27 102 -32
223 -115 314 -214 128 -140 223 -372 226 -555 2 -113 -41 -291 -101 -412 -63
-125 -125 -195 -245 -275 -108 -73 -179 -106 -311 -144 -83 -24 -117 -28 -200
-27 -199 2 -396 74 -527 191 -29 27 -68 58 -85 71 -43 30 -190 252 -208 316
-8 27 -21 97 -30 155 -14 102 -14 107 8 172 14 44 27 68 37 68 19 0 40 -78 50
-185 20 -231 121 -409 300 -532 96 -65 252 -135 335 -149 109 -20 232 -6 357
40 114 41 175 77 276 160 86 72 107 96 150 182 120 238 120 470 0 714 -44 90
-63 116 -131 182 -90 87 -205 154 -323 186 -39 11 -80 26 -92 33 -18 11 -26
10 -60 -9 -47 -26 -67 -27 -115 -7 -32 13 -42 12 -128 -11 -125 -35 -206 -74
-266 -131 -27 -27 -77 -74 -111 -106 -66 -62 -114 -139 -157 -255 -29 -79 -49
-97 -88 -83 -49 19 -44 66 18 191 60 118 129 204 237 295 106 89 185 136 272
162 41 12 225 47 271 52 6 0 29 -8 51 -18z m131 -272 c180 -46 344 -205 409
-399 29 -84 27 -263 -4 -352 -50 -145 -159 -271 -290 -337 -120 -61 -218 -85
-317 -78 -218 14 -409 137 -509 326 -48 93 -66 167 -66 281 0 78 5 109 29 177
38 111 72 165 150 242 129 128 252 175 426 165 54 -3 132 -14 172 -25z"
        />
        <path
          d="M3426 6014 c-97 -21 -157 -55 -234 -132 -117 -117 -176 -280 -152
-423 22 -132 117 -276 228 -347 111 -72 296 -95 421 -52 189 64 283 154 336
323 91 288 -81 566 -390 632 -85 18 -120 18 -209 -1z m-88 -170 c42 -29 19
-78 -35 -72 -23 2 -29 9 -31 33 -3 19 2 33 14 42 22 16 25 16 52 -3z m293 -82
c43 -22 59 -38 81 -81 62 -118 20 -238 -100 -285 -61 -23 -109 -20 -167 12
-63 34 -95 91 -95 170 0 63 18 107 63 150 71 69 133 79 218 34z"
        />
        <path
          d="M4272 6530 c-24 -26 -63 -100 -53 -100 27 0 91 78 91 110 0 16 -18
12 -38 -10z"
        />
        <path
          d="M2756 6524 c-7 -18 28 -76 65 -110 18 -16 21 -16 36 -2 14 15 13 21
-14 70 -22 39 -37 54 -55 56 -17 2 -28 -3 -32 -14z"
        />
        <path
          d="M4321 6423 c-50 -56 -51 -58 -32 -76 23 -23 39 -16 95 41 31 33 37
45 32 66 -10 41 -39 32 -95 -31z"
        />
        <path
          d="M2667 6463 c-17 -16 -4 -52 31 -86 64 -63 99 -38 47 34 -37 50 -63
68 -78 52z"
        />
        <path
          d="M2570 6351 c-18 -35 -11 -49 42 -85 39 -26 56 -32 65 -24 24 19 13
46 -33 87 -53 47 -59 48 -74 22z"
        />
        <path
          d="M4427 6321 c-44 -42 -49 -51 -38 -65 19 -23 30 -20 84 19 47 35 58
60 35 83 -19 19 -26 15 -81 -37z"
        />
        <path
          d="M2486 6226 c-15 -24 -15 -26 12 -44 15 -11 41 -27 59 -36 31 -15 33
-15 43 3 5 11 10 22 10 25 0 7 -91 76 -100 76 -4 0 -15 -11 -24 -24z"
        />
        <path
          d="M4510 6214 c-50 -40 -58 -55 -36 -73 13 -11 25 -8 68 17 55 30 68 53
48 77 -18 21 -30 18 -80 -21z"
        />
        <path
          d="M2414 6105 c-9 -14 -14 -28 -12 -31 3 -3 35 -16 71 -28 l65 -24 10
23 c8 17 8 26 -1 33 -11 9 -105 52 -113 52 -2 0 -11 -11 -20 -25z"
        />
        <path
          d="M4583 6097 c-56 -34 -62 -46 -38 -71 14 -14 21 -13 70 11 56 28 70
54 43 81 -16 16 -15 16 -75 -21z"
        />
        <path
          d="M2355 5977 c-8 -12 -15 -26 -15 -32 0 -6 29 -19 65 -31 67 -21 85
-17 85 18 0 19 -19 32 -80 53 -37 13 -40 13 -55 -8z"
        />
        <path
          d="M4643 5967 c-36 -15 -53 -28 -53 -40 0 -25 23 -31 77 -18 71 17 79
24 65 55 -14 31 -20 31 -89 3z"
        />
        <path
          d="M2308 5835 c-6 -14 -9 -27 -7 -30 3 -2 33 -11 67 -19 59 -14 63 -13
73 5 14 27 5 36 -53 54 -67 19 -66 19 -80 -10z"
        />
        <path
          d="M4685 5834 c-49 -18 -57 -26 -50 -47 10 -25 28 -26 85 -6 64 22 64
22 55 48 -8 25 -33 26 -90 5z"
        />
        <path
          d="M2291 5707 c-6 -6 -11 -21 -11 -33 0 -19 7 -23 59 -29 33 -4 65 -4
70 0 15 9 14 45 -1 50 -39 15 -108 21 -117 12z"
        />
        <path
          d="M4714 5701 c-43 -11 -54 -19 -54 -41 0 -23 19 -30 67 -24 81 11 84
13 81 42 -2 22 -8 27 -33 29 -16 1 -44 -2 -61 -6z"
        />
        <path
          d="M2274 5566 c-3 -8 -4 -23 -2 -33 3 -15 14 -18 68 -18 62 0 65 1 65
25 0 27 -23 37 -88 39 -24 1 -40 -4 -43 -13z"
        />
        <path
          d="M4710 5561 c-29 -5 -35 -10 -35 -31 0 -24 2 -25 65 -25 l65 0 0 30
c0 26 -4 30 -30 31 -16 1 -46 -1 -65 -5z"
        />
        <path
          d="M2282 5403 c2 -23 9 -29 32 -31 16 -2 44 -1 63 3 27 5 33 11 33 30 0
24 -3 25 -66 25 l-65 0 3 -27z"
        />
        <path
          d="M4667 5405 c-12 -30 4 -43 59 -50 62 -7 87 5 82 39 -3 19 -11 21 -69
24 -53 2 -68 0 -72 -13z"
        />
        <path d="M2333 5283 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" />
        <path
          d="M4650 5238 c-29 -47 -25 -56 26 -78 60 -26 74 -25 74 4 0 19 -7 26
-30 31 -35 8 -40 20 -9 22 55 5 50 53 -6 53 -29 0 -39 -6 -55 -32z"
        />
        <path
          d="M2373 5179 c-26 -8 -33 -15 -33 -35 0 -29 12 -29 83 1 74 31 33 58
-50 34z"
        />
        <path
          d="M2430 5082 c-58 -28 -61 -31 -50 -53 13 -24 26 -24 84 1 47 21 51 26
40 54 -8 20 -29 19 -74 -2z"
        />
        <path
          d="M4570 5080 c-14 -27 -12 -30 53 -65 47 -25 57 -27 71 -16 32 26 19
50 -40 76 -68 30 -70 30 -84 5z"
        />
        <path
          d="M2489 4954 c-30 -20 -55 -37 -57 -39 -6 -5 21 -55 30 -55 5 0 33 16
63 35 58 37 71 66 37 84 -15 8 -31 2 -73 -25z m17 -50 c-23 -16 -46 -19 -46
-5 0 6 10 17 22 25 30 21 52 2 24 -20z"
        />
        <path
          d="M4512 4968 c-21 -21 -13 -35 35 -67 57 -38 87 -37 91 1 3 23 -3 29
-52 52 -64 30 -59 29 -74 14z"
        />
        <path
          d="M2596 4846 c-35 -31 -33 -40 4 -21 25 13 30 13 30 1 0 -14 -41 -46
-59 -46 -5 0 -11 7 -13 16 -3 13 -6 13 -22 1 -15 -11 -17 -17 -7 -35 17 -32
43 -27 91 16 38 34 41 39 31 65 -13 33 -23 34 -55 3z"
        />
        <path
          d="M4432 4839 c-12 -18 -9 -24 30 -60 49 -44 83 -50 94 -17 5 18 -2 29
-37 60 -50 43 -69 47 -87 17z"
        />
        <path
          d="M2667 4711 c-44 -42 -49 -51 -38 -65 21 -25 37 -19 80 32 75 87 42
113 -42 33z"
        />
        <path
          d="M4332 4748 c-19 -19 -15 -26 36 -74 34 -33 54 -44 72 -42 46 5 36 39
-24 86 -59 46 -66 48 -84 30z"
        />
        <path
          d="M2776 4630 c-25 -27 -46 -53 -46 -58 0 -12 34 -42 48 -42 16 0 82 89
82 111 0 10 -8 23 -19 28 -16 9 -26 2 -65 -39z m54 6 c0 -16 -14 -36 -26 -36
-14 0 -19 22 -7 33 7 8 33 10 33 3z"
        />
        <path
          d="M4227 4663 c-15 -15 -4 -41 38 -88 38 -42 47 -48 62 -39 30 18 26 38
-17 87 -38 43 -67 57 -83 40z"
        />
        <path
          d="M2901 4555 c-55 -81 -55 -82 -21 -100 l30 -15 30 47 c40 64 38 113
-5 113 -2 0 -17 -20 -34 -45z m24 -25 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10
3 6 11 10 16 10 6 0 7 -4 4 -10z"
        />
        <path
          d="M4122 4588 c-22 -22 -13 -60 24 -105 l37 -45 21 22 21 21 -32 57
c-32 59 -50 71 -71 50z"
        />
        <path
          d="M3047 4533 c-4 -4 -19 -31 -33 -62 -25 -52 -25 -55 -8 -68 29 -21 39
-16 62 32 26 54 28 90 6 99 -19 7 -19 7 -27 -1z m4 -72 c-8 -42 -31 -55 -23
-14 4 26 21 57 28 51 1 -2 -1 -19 -5 -37z"
        />
        <path
          d="M3987 4515 c-18 -18 -11 -47 24 -96 23 -33 44 -37 57 -11 7 12 2 31
-17 66 -29 56 -42 64 -64 41z"
        />
        <path
          d="M3154 4455 c-7 -19 -14 -40 -14 -48 0 -7 -5 -18 -11 -24 -7 -7 -2
-13 19 -21 30 -10 31 -9 51 38 25 58 26 76 5 84 -28 11 -35 7 -50 -29z"
        />
        <path
          d="M3873 4483 c-34 -13 8 -123 47 -123 23 0 24 8 8 64 -17 60 -27 71
-55 59z"
        />
        <path
          d="M3286 4413 c-11 -69 -8 -83 17 -83 19 0 25 8 36 50 14 56 10 70 -23
70 -19 0 -25 -7 -30 -37z"
        />
        <path
          d="M3703 4435 c-8 -22 3 -95 16 -108 30 -30 62 39 47 99 -7 28 -53 34
-63 9z"
        />
        <path
          d="M3415 4407 c-11 -57 -3 -92 22 -95 26 -4 43 28 43 82 0 26 -5 35 -22
40 -35 9 -37 8 -43 -27z"
        />
        <path
          d="M3571 4426 c-7 -8 -11 -35 -9 -63 3 -44 5 -48 28 -48 24 0 25 3 25
60 0 47 -3 60 -16 63 -9 1 -21 -4 -28 -12z"
        />
        <path
          d="M2092 6228 c3 -110 4 -113 27 -116 33 -5 41 12 41 94 0 93 -14 134
-46 134 l-25 0 3 -112z"
        />
        <path
          d="M1939 6058 c-2 -56 4 -104 14 -110 7 -4 24 -8 40 -8 27 0 27 0 27 70
l0 70 -40 0 c-35 0 -40 -3 -41 -22z"
        />
        <path
          d="M1970 5891 c-22 -6 -25 -13 -28 -59 -3 -55 -3 -55 51 -66 l28 -7 -3
67 c-3 71 -7 76 -48 65z"
        />
        <path
          d="M1797 5863 c-12 -11 -8 -78 5 -91 17 -17 55 -15 62 4 12 31 6 82 -10
88 -21 8 -49 8 -57 -1z"
        />
        <path
          d="M1965 5711 c-26 -5 -30 -11 -33 -45 -4 -44 19 -76 53 -76 27 0 35 17
35 75 0 47 -9 54 -55 46z"
        />
        <path
          d="M1500 5660 l0 -50 36 0 37 0 -7 38 c-3 20 -6 43 -6 50 0 7 -13 12
-30 12 -29 0 -30 -1 -30 -50z m40 -4 c0 -16 -18 -31 -27 -22 -8 8 5 36 17 36
5 0 10 -6 10 -14z"
        />
        <path
          d="M1797 5698 c-2 -7 -2 -28 1 -46 4 -30 7 -33 36 -30 17 2 30 6 29 11
-2 4 -3 23 -3 42 0 32 -3 35 -29 35 -16 0 -31 -6 -34 -12z"
        />
        <path
          d="M1359 5683 c-15 -17 -26 -194 -15 -239 7 -27 46 -34 63 -11 14 17 24
226 12 249 -12 22 -42 23 -60 1z"
        />
        <path d="M1641 5684 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path
          d="M1701 5665 c-1 -12 -6 -26 -13 -33 -9 -9 -7 -12 10 -12 23 0 26 12
12 45 -9 20 -9 20 -9 0z"
        />
        <path
          d="M1651 5546 c-18 -22 -4 -86 19 -86 10 0 26 -3 35 -6 14 -6 16 1 13
47 -3 50 -5 54 -29 57 -14 2 -31 -4 -38 -12z"
        />
        <path
          d="M1968 5553 c-18 -5 -35 -64 -23 -82 3 -6 19 -11 36 -11 28 0 29 1 29
50 0 51 -3 54 -42 43z"
        />
        <path
          d="M1494 5508 c2 -24 4 -47 5 -51 1 -5 16 -7 34 -5 31 3 32 5 32 48 0
45 0 45 -37 48 l-38 3 4 -43z"
        />
        <path
          d="M1796 5533 c-3 -10 -2 -31 2 -48 7 -25 14 -30 38 -30 28 0 29 2 29
45 0 43 -1 45 -32 48 -23 2 -33 -2 -37 -15z"
        />
        <path
          d="M1673 5403 c-21 -4 -23 -10 -23 -59 l0 -54 35 0 36 0 -3 57 c-3 58
-7 63 -45 56z"
        />
        <path
          d="M1958 5403 c-14 -3 -18 -15 -18 -54 0 -44 3 -49 25 -55 46 -11 56 0
53 58 -3 55 -14 64 -60 51z"
        />
        <path
          d="M1494 5387 c-3 -8 -4 -36 -2 -63 3 -49 3 -49 38 -49 l35 0 0 60 0 60
-33 3 c-21 2 -34 -2 -38 -11z"
        />
        <path
          d="M1800 5341 c0 -44 2 -49 26 -55 37 -10 47 4 39 58 -7 42 -9 46 -36
46 -28 0 -29 -2 -29 -49z"
        />
        <path
          d="M1945 5233 c-12 -11 -15 -25 -11 -46 8 -38 6 -37 52 -40 43 -2 51 10
39 69 -5 29 -10 34 -35 34 -16 0 -36 -7 -45 -17z"
        />
        <path
          d="M1661 5233 c-23 -5 -23 -7 -17 -66 3 -33 7 -62 9 -64 2 -1 18 -6 36
-9 l32 -7 -3 74 c-3 78 -6 82 -57 72z"
        />
        <path
          d="M1807 5228 c-14 -11 -15 -27 -9 -123 l7 -110 33 -3 32 -3 0 113 c0
133 -15 162 -63 126z"
        />
        <path
          d="M1944 5066 c-3 -7 -4 -33 -2 -57 3 -43 4 -44 40 -47 33 -3 38 0 44
22 3 15 3 42 0 61 -6 32 -10 35 -42 35 -20 0 -37 -6 -40 -14z"
        />
        <path
          d="M5108 5879 c-13 -7 -18 -23 -18 -54 0 -39 3 -45 25 -51 40 -10 55 1
55 41 0 64 -23 87 -62 64z"
        />
        <path
          d="M5283 5883 c-21 -4 -23 -10 -23 -64 0 -58 0 -59 29 -59 33 0 39 11
35 60 -1 19 -3 43 -3 53 -1 9 -4 16 -8 16 -5 -1 -18 -4 -30 -6z"
        />
        <path
          d="M5415 5707 c-26 -20 -14 -82 18 -91 44 -12 47 -8 47 49 0 51 -2 55
-23 55 -13 0 -31 -6 -42 -13z"
        />
        <path
          d="M5109 5708 c-1 -2 -2 -15 -3 -30 -2 -25 -1 -26 15 -12 13 12 18 13
22 2 4 -8 6 -6 6 5 1 11 6 15 12 11 7 -4 10 -1 7 7 -4 12 -55 27 -59 17z"
        />
        <path
          d="M5267 5703 c-4 -3 -7 -24 -7 -45 0 -37 1 -38 35 -38 35 0 35 0 35 45
0 43 -1 45 -28 45 -16 0 -32 -3 -35 -7z"
        />
        <path
          d="M5125 5630 c28 -12 45 -12 45 0 0 6 -15 10 -32 9 -28 0 -30 -2 -13
-9z"
        />
        <path
          d="M5107 5543 c-4 -3 -7 -23 -7 -43 0 -34 3 -38 31 -44 17 -3 35 -3 40
0 13 8 11 68 -3 82 -13 13 -50 16 -61 5z"
        />
        <path d="M5262 5503 c3 -46 4 -48 36 -51 l32 -3 0 50 0 51 -36 0 -35 0 3 -47z" />
        <path
          d="M5404 5536 c-3 -8 -4 -29 -2 -48 3 -30 6 -33 41 -36 l37 -3 0 50 0
51 -35 0 c-21 0 -38 -6 -41 -14z"
        />
        <path
          d="M5560 5491 c0 -58 1 -60 31 -66 33 -8 53 8 44 33 -3 8 -5 31 -5 53 0
38 -1 39 -35 39 l-35 0 0 -59z"
        />
        <path
          d="M5112 5392 c-9 -6 -12 -25 -10 -53 3 -41 5 -44 34 -47 37 -4 44 8 35
63 -6 41 -30 56 -59 37z"
        />
        <path
          d="M5254 5376 c-3 -13 -4 -38 -2 -57 3 -31 6 -34 41 -37 l37 -3 0 54 c0
48 -3 55 -22 61 -38 10 -47 7 -54 -18z"
        />
        <path
          d="M5404 5376 c-3 -7 -4 -35 -2 -62 3 -49 3 -49 41 -52 l37 -3 0 65 0
66 -35 0 c-21 0 -38 -6 -41 -14z"
        />
        <path
          d="M5092 5228 c-7 -7 -12 -25 -12 -40 0 -21 6 -31 25 -38 37 -14 55 -3
55 34 0 35 -15 56 -40 56 -9 0 -21 -5 -28 -12z"
        />
        <path
          d="M5252 5163 l3 -68 32 -3 c38 -4 45 12 35 83 -7 47 -9 50 -40 53 l-33
3 3 -68z"
        />
        <path
          d="M5086 5074 c-20 -19 -21 -88 -2 -104 8 -6 25 -10 38 -8 20 3 23 9 26
57 2 37 -1 57 -10 62 -20 13 -35 11 -52 -7z"
        />
        <path
          d="M6632 7303 c-11 -10 -59 -88 -107 -173 -48 -85 -107 -190 -131 -232
-75 -131 -64 -150 81 -141 82 5 106 3 132 -11 38 -19 94 -21 111 -4 8 8 58 15
135 18 l122 5 3 27 c2 19 -15 57 -55 125 -33 54 -92 157 -133 228 -71 124
-108 175 -128 175 -6 0 -19 -8 -30 -17z"
        />
        <path
          d="M5794 7125 c-7 -18 12 -45 32 -45 8 0 14 6 14 14 0 8 3 21 6 30 5 12
0 16 -20 16 -15 0 -29 -7 -32 -15z"
        />
        <path
          d="M5336 6944 c-20 -52 8 -77 81 -72 52 3 69 21 59 61 -6 26 -9 27 -70
27 -49 0 -65 -4 -70 -16z"
        />
        <path
          d="M5557 6953 c-12 -12 -7 -60 7 -72 8 -7 37 -11 68 -9 l53 3 3 43 3 42
-64 0 c-35 0 -67 -3 -70 -7z"
        />
        <path
          d="M5774 6933 c-11 -44 6 -58 72 -58 l59 0 3 43 3 42 -65 0 c-63 0 -66
-1 -72 -27z"
        />
        <path
          d="M5996 6944 c-19 -51 5 -74 78 -74 51 0 71 21 60 65 -6 23 -10 25 -69
25 -48 0 -64 -4 -69 -16z"
        />
        <path
          d="M5791 6756 c-17 -20 -17 -101 -1 -121 8 -10 25 -15 44 -13 l31 3 0
70 0 70 -31 3 c-18 2 -36 -3 -43 -12z"
        />
        <path
          d="M6110 6693 c-100 -41 -140 -159 -80 -241 39 -54 81 -76 135 -69 111
12 170 139 109 232 -14 22 -37 48 -51 59 -26 19 -87 30 -113 19z m78 -115 c7
-7 12 -24 12 -38 0 -54 -54 -68 -89 -24 -20 25 -20 34 2 62 12 15 59 16 75 0z"
        />
        <path
          d="M6590 6572 c-52 -51 -60 -97 -28 -154 29 -54 83 -75 145 -59 110 30
125 173 24 229 -59 33 -96 29 -141 -16z m98 -79 c-4 -22 -22 -20 -26 1 -2 10
3 16 13 16 10 0 15 -7 13 -17z"
        />
        <path
          d="M878 6589 c-12 -6 -18 -22 -18 -45 0 -27 5 -37 25 -46 46 -21 81 33
55 83 -12 21 -35 24 -62 8z"
        />
        <path
          d="M716 6574 c-19 -18 -20 -38 -6 -65 12 -21 50 -25 68 -7 26 26 3 88
-33 88 -7 0 -21 -7 -29 -16z"
        />
        <path
          d="M710 6390 c-26 -26 -25 -44 2 -70 25 -23 32 -24 59 -10 13 7 19 21
19 45 0 24 -6 38 -19 45 -28 14 -38 13 -61 -10z"
        />
        <path
          d="M882 6398 c-15 -15 -15 -61 0 -76 28 -28 88 -2 88 38 0 40 -60 66
-88 38z"
        />
        <path
          d="M6106 6238 c-9 -12 -16 -30 -16 -39 0 -26 35 -51 67 -47 24 3 28 8
31 39 5 62 -50 93 -82 47z"
        />
        <path
          d="M712 6218 c-20 -20 -14 -66 9 -79 33 -17 69 3 69 39 0 33 -16 52 -45
52 -12 0 -26 -5 -33 -12z"
        />
        <path
          d="M882 6218 c-15 -15 -15 -61 0 -76 7 -7 21 -12 33 -12 12 0 26 5 33
12 18 18 15 75 -4 82 -25 9 -49 7 -62 -6z"
        />
        <path
          d="M6495 6220 c-63 -19 -60 15 -60 -765 l0 -710 -184 0 -184 0 -16 -24
c-14 -22 -16 -73 -19 -385 -1 -199 -4 -453 -5 -566 l-2 -205 -122 -9 c-67 -5
-129 -6 -137 -3 -21 8 -22 159 -2 232 14 54 12 70 -12 98 -13 15 -33 17 -151
16 -202 -1 -290 -11 -307 -34 -12 -16 -14 -286 -14 -1750 0 -1333 3 -1734 12
-1743 18 -18 56 -14 77 7 19 19 20 56 23 1704 2 927 6 1688 9 1692 4 3 22 3
40 0 l34 -6 -3 -1689 c-2 -1526 -1 -1690 14 -1704 8 -9 24 -16 33 -16 48 0 46
-76 51 1724 l5 1691 35 3 35 3 -4 -1691 c-3 -1605 -2 -1692 14 -1710 23 -26
47 -25 71 1 18 20 18 72 22 1542 2 910 7 1526 13 1531 33 35 34 8 32 -1532
l-2 -1517 21 -23 c26 -27 40 -28 62 -3 16 18 17 112 14 1535 l-3 1516 31 0 31
0 6 -402 c3 -222 6 -905 7 -1518 2 -996 3 -1117 17 -1132 22 -25 50 -22 68 6
14 21 15 185 13 1545 -3 1415 -2 1521 14 1521 9 0 23 3 32 6 15 6 16 -133 16
-1528 0 -1474 1 -1536 18 -1551 10 -10 26 -17 35 -17 45 0 44 -67 40 1792 -2
1107 -7 1804 -14 1891 -6 76 -7 184 -4 240 5 63 3 133 -5 182 -6 44 -14 97
-17 118 l-6 38 54 -3 54 -3 1 -450 c1 -247 4 -1197 8 -2110 7 -1492 9 -1662
23 -1677 23 -25 50 -22 69 8 16 23 17 166 10 2047 -3 1112 -9 2059 -13 2105
l-6 82 35 0 35 0 6 -122 c4 -68 7 -1011 7 -2096 0 -1696 2 -1978 15 -2007 16
-41 42 -46 71 -14 19 21 19 83 19 2873 l0 2851 42 3 42 3 0 -2671 c1 -1469 3
-2676 6 -2681 9 -14 49 -11 71 5 19 14 19 54 16 2679 l-2 2665 36 4 c20 2 38
0 40 -6 2 -6 5 -1291 7 -2856 1 -1565 6 -2853 11 -2863 4 -9 20 -20 34 -24 20
-5 30 0 49 21 l23 27 0 2883 c0 2823 0 2884 -19 2907 -19 24 -23 24 -203 26
-100 1 -196 -2 -213 -7z m-379 -2236 c8 -32 0 -401 -9 -410 -4 -4 -14 -1 -22
6 -14 12 -16 40 -13 209 2 108 7 202 11 209 13 19 26 14 33 -14z"
        />
        <path
          d="M710 6036 c-32 -39 23 -100 65 -72 43 28 26 86 -25 86 -15 0 -33 -7
-40 -14z"
        />
        <path
          d="M6191 5112 c-62 -34 -90 -126 -57 -190 27 -53 64 -77 112 -76 79 2
134 65 134 155 0 55 -26 94 -76 115 -45 19 -73 18 -113 -4z m84 -117 c0 -25
-4 -31 -27 -33 -19 -2 -28 2 -33 18 -8 27 12 52 39 48 16 -2 21 -10 21 -33z"
        />
        <path
          d="M717 5032 c-32 -36 -15 -82 30 -82 21 0 43 25 43 49 0 13 -36 51 -48
51 -5 0 -16 -8 -25 -18z"
        />
        <path
          d="M880 5030 c-21 -21 -20 -30 8 -62 19 -22 36 -23 56 -2 21 21 20 40
-4 64 -25 25 -35 25 -60 0z"
        />
        <path
          d="M704 4865 c-16 -25 -16 -27 6 -50 28 -30 41 -31 63 -7 21 23 22 46 1
66 -23 23 -51 19 -70 -9z"
        />
        <path
          d="M887 4872 c-23 -25 -21 -34 7 -61 20 -18 28 -21 44 -12 30 16 37 49
16 72 -22 24 -46 24 -67 1z"
        />
        <path
          d="M5469 4732 c-51 -23 -109 -94 -138 -172 -19 -49 -32 -63 -118 -130
-53 -41 -155 -122 -226 -179 -72 -57 -153 -120 -181 -140 -50 -35 -102 -77
-439 -350 -93 -75 -193 -154 -222 -176 -29 -22 -98 -79 -153 -128 -93 -81
-102 -87 -127 -77 -40 15 -82 12 -125 -10 l-40 -20 -103 87 c-56 49 -124 106
-152 128 -78 61 -153 125 -219 186 -34 31 -99 86 -146 124 -205 165 -216 176
-233 236 -38 131 -156 189 -230 111 -31 -33 -57 -91 -57 -130 0 -24 -12 -38
-61 -77 -34 -27 -107 -87 -163 -135 -55 -47 -139 -116 -185 -153 l-84 -66 -35
15 c-46 19 -104 18 -142 -3 -29 -17 -32 -17 -41 -1 -15 27 -355 310 -422 352
-23 14 -27 22 -23 44 13 60 -41 160 -105 193 -23 11 -59 19 -90 19 -46 0 -55
-4 -85 -35 -37 -39 -74 -129 -74 -179 0 -30 -5 -37 -42 -55 -24 -11 -95 -62
-158 -112 -63 -51 -145 -114 -182 -141 -84 -61 -94 -89 -50 -140 29 -34 62
-22 156 57 48 42 116 94 150 117 33 23 91 65 128 95 l67 53 33 -20 c39 -24
115 -27 144 -5 10 8 25 15 32 15 7 0 46 -28 86 -62 40 -35 138 -118 218 -185
l145 -123 5 -49 c9 -88 68 -151 149 -159 74 -7 115 5 159 47 37 35 40 42 40
93 l0 56 58 43 c31 23 134 104 227 179 233 186 223 180 288 180 41 0 62 -6 83
-22 50 -38 268 -212 294 -234 35 -31 225 -191 360 -304 186 -155 197 -166 209
-214 13 -52 62 -99 121 -117 53 -16 108 0 160 47 36 33 39 40 42 97 l3 62 151
120 c278 220 418 333 534 430 63 52 225 184 360 292 135 108 278 223 318 255
l72 59 46 -27 c54 -32 92 -29 153 12 89 58 109 146 55 243 -19 35 -41 61 -64
73 -34 18 -100 23 -131 10z m109 -134 c17 -15 15 -74 -4 -92 -20 -20 -73 -20
-102 0 -22 15 -29 57 -13 82 18 29 87 34 119 10z m-4298 -465 c37 -47 4 -123
-53 -123 -30 0 -67 39 -67 70 0 71 79 105 120 53z m1450 -21 c44 -35 -1 -99
-55 -78 -20 7 -19 55 2 78 20 22 25 22 53 0z m-728 -559 c39 -35 9 -93 -48
-93 -23 0 -38 7 -48 22 -21 30 -20 44 4 68 24 24 67 26 92 3z m1842 -285 c47
-21 43 -70 -7 -97 -34 -18 -75 -7 -87 23 -13 35 -2 64 29 75 35 13 36 13 65
-1z"
        />
        <path
          d="M1057 4712 c-22 -24 -21 -45 1 -65 24 -22 45 -21 65 1 22 24 21 38
-3 62 -25 25 -42 25 -63 2z"
        />
        <path
          d="M712 4708 c-36 -36 7 -91 54 -69 24 10 30 34 18 65 -7 19 -55 21 -72
4z"
        />
        <path
          d="M874 4694 c-6 -21 -2 -31 16 -46 28 -23 35 -23 60 2 30 30 13 64 -33
68 -32 3 -37 0 -43 -24z"
        />
        <path
          d="M5213 4631 c-102 -73 -354 -227 -448 -274 -240 -119 -558 -233 -785
-281 -245 -52 -719 -48 -927 8 -29 8 -53 11 -53 8 1 -4 20 -22 43 -40 23 -18
64 -50 91 -72 76 -59 112 -65 421 -65 252 1 280 2 411 28 78 15 182 39 230 53
107 31 346 116 430 154 62 28 244 149 299 199 17 15 68 56 115 91 89 67 208
176 241 223 11 15 19 27 17 27 -2 0 -40 -27 -85 -59z"
        />
        <path
          d="M711 4556 c-17 -21 -10 -56 15 -73 19 -12 24 -11 45 6 23 19 23 21 9
48 -18 32 -51 41 -69 19z"
        />
        <path
          d="M880 4551 c-16 -31 -12 -49 14 -66 45 -30 91 16 61 61 -19 29 -60 32
-75 5z"
        />
        <path
          d="M1060 4550 c-24 -24 -24 -29 -4 -58 18 -27 45 -28 67 -4 21 23 22 46
1 66 -21 21 -40 20 -64 -4z"
        />
        <path
          d="M1490 4531 c-26 -50 4 -93 154 -219 151 -128 490 -352 531 -352 9 0
32 15 51 34 41 40 45 36 -99 110 -150 77 -327 206 -492 358 -98 91 -126 104
-145 69z"
        />
        <path
          d="M707 4392 c-24 -26 -21 -47 8 -66 46 -30 96 24 59 65 -22 24 -46 24
-67 1z"
        />
        <path
          d="M886 4394 c-30 -30 -13 -74 29 -74 44 0 63 60 26 80 -27 14 -37 13
-55 -6z"
        />
        <path
          d="M1048 4374 c-11 -22 -10 -28 7 -40 27 -20 42 -17 61 11 13 20 14 28
4 40 -20 24 -59 19 -72 -11z"
        />
        <path
          d="M5504 4256 c-64 -28 -96 -103 -69 -160 50 -106 159 -114 210 -16 30
58 7 137 -49 171 -36 22 -50 23 -92 5z m61 -106 c0 -22 -39 -19 -43 3 -3 15 1
18 20 15 12 -2 23 -10 23 -18z"
        />
        <path
          d="M720 4175 c0 -10 7 -15 18 -13 21 4 19 22 -2 26 -10 2 -16 -3 -16
-13z"
        />
        <path
          d="M3970 3794 c-37 -8 -163 -18 -290 -22 -219 -7 -225 -8 -228 -28 -2
-13 9 -33 28 -53 l32 -31 116 0 c115 0 301 13 388 26 60 9 104 41 119 87 l13
37 -57 -1 c-31 -1 -85 -8 -121 -15z"
        />
        <path
          d="M2734 3716 c-103 -46 -118 -164 -31 -243 37 -33 43 -35 89 -31 126
13 176 175 76 251 -42 32 -94 41 -134 23z m84 -125 c5 -53 -35 -70 -63 -27
-23 34 -5 68 33 64 23 -2 28 -9 30 -37z"
        />
        <path
          d="M1127 3553 c-14 -13 -6 -53 12 -63 26 -14 29 -13 41 10 16 29 3 60
-24 60 -12 0 -26 -3 -29 -7z"
        />
        <path
          d="M4764 3461 c-61 -19 -114 -94 -114 -162 0 -82 77 -169 149 -169 33 0
93 28 124 58 51 49 59 151 16 206 -40 50 -125 83 -175 67z m90 -130 c25 -28
-6 -91 -45 -91 -21 0 -59 37 -59 59 0 45 72 68 104 32z"
        />
        <path
          d="M1301 3403 c-27 -19 -27 -59 0 -73 46 -25 93 15 70 58 -14 26 -45 33
-70 15z"
        />
        <path
          d="M957 3389 c-20 -27 -10 -58 19 -65 30 -8 54 11 54 40 0 46 -48 62
-73 25z"
        />
        <path
          d="M1121 3396 c-36 -43 29 -101 69 -61 17 17 18 23 7 45 -15 29 -58 38
-76 16z"
        />
        <path
          d="M2598 3319 c-10 -5 -23 -19 -28 -30 -8 -14 -11 -453 -10 -1456 0
-1312 2 -1439 17 -1455 22 -24 45 -23 71 5 l22 23 0 1402 0 1402 40 0 40 0 0
-1409 c0 -1268 2 -1411 16 -1425 23 -23 49 -20 68 9 15 23 16 141 14 1426 l-3
1400 40 -3 40 -3 2 -1404 c3 -1291 4 -1406 20 -1423 22 -25 59 -23 77 4 14 20
16 146 16 1149 0 620 3 1134 6 1143 3 9 14 16 24 16 10 0 21 -7 24 -16 3 -9 6
-524 6 -1145 0 -1116 0 -1129 20 -1149 25 -25 42 -25 63 -2 16 17 17 112 17
1155 l0 1137 43 0 42 0 -3 -1138 c-2 -1115 -2 -1139 17 -1156 25 -23 56 -13
69 22 12 28 13 1880 3 2140 l-6 132 43 0 42 0 2 -1062 c1 -585 1 -1095 -1
-1135 -3 -61 0 -74 18 -92 27 -27 57 -27 76 2 13 20 15 166 15 1197 0 1128 0
1175 -18 1193 -17 16 -38 18 -215 18 -126 1 -209 -3 -232 -11 -20 -7 -39 -9
-43 -5 -4 4 -9 121 -12 260 -5 231 -7 255 -24 274 -18 20 -29 21 -210 21 -110
0 -198 -5 -208 -11z"
        />
        <path
          d="M960 3250 c-25 -25 -26 -52 -1 -74 24 -22 59 -13 70 17 10 26 -2 52
-29 67 -15 8 -24 6 -40 -10z"
        />
        <path
          d="M772 3248 c-18 -18 -15 -53 6 -71 26 -23 41 -21 54 8 22 49 -25 98
-60 63z"
        />
        <path
          d="M1126 3241 c-41 -46 18 -107 64 -66 25 23 25 40 0 65 -25 25 -42 25
-64 1z"
        />
        <path
          d="M1290 3240 c-26 -26 -25 -45 2 -64 32 -23 55 -20 74 9 15 23 15 27 0
50 -20 30 -49 32 -76 5z"
        />
        <path
          d="M1457 3242 c-22 -24 -21 -45 1 -65 37 -34 82 -15 82 33 0 49 -51 68
-83 32z"
        />
        <path
          d="M2005 3238 c-70 -41 -85 -142 -30 -202 20 -21 33 -26 74 -26 42 0 54
5 80 30 17 17 33 46 36 64 17 90 -86 177 -160 134z"
        />
        <path
          d="M3280 3193 c-74 -38 -98 -117 -61 -198 27 -59 52 -77 110 -78 53 -2
87 16 125 66 24 32 32 122 14 156 -30 56 -129 84 -188 54z m98 -99 c26 -18 27
-27 6 -48 -24 -24 -69 -20 -81 7 -22 48 27 75 75 41z"
        />
        <path
          d="M768 3074 c-22 -47 24 -83 63 -48 23 21 24 37 3 58 -23 24 -53 19
-66 -10z"
        />
        <path
          d="M956 3084 c-22 -22 -20 -50 5 -68 24 -16 57 -9 73 16 7 11 5 24 -7
42 -20 29 -48 34 -71 10z"
        />
        <path
          d="M1122 3088 c-28 -28 -7 -78 33 -78 23 0 55 28 55 48 0 33 -63 55 -88
30z"
        />
        <path
          d="M1292 3088 c-7 -7 -12 -21 -12 -33 0 -48 68 -64 88 -21 20 45 -41 89
-76 54z"
        />
        <path
          d="M1456 3081 c-23 -25 -17 -52 14 -68 30 -15 63 2 68 36 7 48 -49 69
-82 32z"
        />
        <path
          d="M4563 3010 c-56 -23 -53 55 -52 -1327 0 -969 3 -1275 12 -1294 15
-30 52 -36 78 -13 19 17 19 48 19 1271 l0 1253 51 0 c45 0 50 -2 43 -17 -14
-27 -17 -2479 -4 -2503 14 -27 44 -25 67 3 17 22 18 78 18 1253 0 676 -4 1237
-9 1247 -7 15 -2 17 44 17 46 0 51 -2 44 -17 -5 -10 -10 -575 -12 -1255 -2
-1115 -1 -1238 14 -1252 20 -20 27 -20 55 3 l24 19 0 1219 c0 670 -3 1233 -7
1251 l-8 33 38 -3 37 -3 6 -85 c4 -47 7 -609 8 -1249 0 -1080 1 -1165 17
-1182 23 -25 40 -24 69 6 l25 24 0 1253 c0 1173 -1 1255 -18 1288 -32 64 -58
70 -312 69 -124 0 -235 -4 -247 -9z"
        />
        <path
          d="M1130 2933 c-31 -22 -24 -65 13 -77 23 -8 31 -6 49 12 18 18 20 25
11 45 -14 31 -46 39 -73 20z"
        />
        <path
          d="M1296 2934 c-21 -21 -20 -47 2 -67 25 -23 48 -21 66 4 16 23 12 47
-12 67 -21 16 -37 15 -56 -4z"
        />
        <path
          d="M1459 2929 c-26 -26 -21 -49 13 -69 21 -11 32 -12 45 -4 28 17 28 59
1 78 -29 21 -34 20 -59 -5z"
        />
        <path
          d="M793 2933 c-18 -7 -16 -58 3 -74 33 -27 72 33 44 67 -13 14 -25 16
-47 7z"
        />
        <path
          d="M955 2920 c-16 -18 -17 -23 -5 -46 27 -49 90 -16 76 39 -8 33 -44 37
-71 7z"
        />
        <path
          d="M1846 2880 c-66 -13 -74 -41 -65 -240 4 -80 7 -615 8 -1190 1 -940 3
-1048 17 -1068 21 -31 64 -26 81 8 10 20 13 276 13 1203 l0 1177 49 0 50 0 -2
-1184 c-2 -1152 -1 -1184 17 -1205 24 -26 48 -27 64 -1 9 16 12 275 12 1207
l0 1188 39 2 40 1 0 -1190 c0 -1111 1 -1191 17 -1209 21 -24 60 -25 72 -1 5 9
13 539 17 1207 4 655 8 1209 9 1232 0 23 -5 48 -12 55 -15 15 -360 22 -426 8z"
        />
        <path
          d="M3916 2840 c-65 -57 -82 -129 -47 -198 33 -64 54 -77 131 -77 59 0
72 3 95 25 44 41 58 77 52 136 -7 64 -29 99 -78 125 -58 29 -111 25 -153 -11z
m116 -87 c40 -36 5 -98 -42 -73 -30 16 -43 46 -30 70 13 24 47 26 72 3z"
        />
        <path
          d="M1128 2778 c-27 -21 -25 -49 4 -71 27 -20 28 -20 48 -2 24 22 26 48
4 69 -19 19 -35 20 -56 4z"
        />
        <path
          d="M1296 2771 c-23 -26 -17 -52 16 -70 24 -14 28 -14 47 3 26 24 27 48
3 69 -24 22 -45 21 -66 -2z"
        />
        <path
          d="M854 2621 c-28 -12 -72 -66 -80 -98 -4 -14 -1 -42 5 -63 38 -127 241
-102 241 29 0 45 -24 97 -53 116 -31 20 -85 28 -113 16z m66 -96 c15 -18 6
-45 -14 -45 -18 0 -40 36 -31 50 9 15 31 12 45 -5z"
        />
        <path
          d="M1361 2478 c-97 -50 -135 -152 -97 -253 32 -84 132 -145 214 -131 41
6 111 58 143 106 30 45 38 135 16 176 -56 106 -181 152 -276 102z m153 -119
c32 -38 33 -79 2 -115 -29 -35 -83 -38 -123 -8 -40 30 -44 94 -9 129 38 38 96
35 130 -6z"
        />
        <path
          d="M3845 2423 c-69 -6 -82 -12 -95 -43 -11 -26 -10 -32 12 -59 22 -26
26 -42 31 -142 4 -63 10 -490 13 -949 7 -895 5 -870 55 -870 46 0 46 -4 45
1003 l-2 947 38 0 38 0 0 -958 c0 -916 1 -960 18 -975 30 -27 52 -21 68 19 13
32 15 156 12 975 l-3 939 38 0 37 0 2 -842 c2 -464 3 -890 3 -948 0 -58 4
-115 8 -127 11 -31 52 -40 77 -18 20 18 20 38 20 1010 0 840 -2 994 -14 1011
-12 15 -32 20 -108 26 -97 6 -225 7 -293 1z"
        />
        <path
          d="M736 2241 c-24 -5 -49 -19 -63 -35 l-23 -27 0 -890 0 -890 25 -24
c29 -30 39 -31 64 -6 26 26 33 153 31 539 -1 175 -2 518 -1 765 l1 447 38 0
37 0 -3 -864 -3 -864 27 -21 c27 -21 52 -17 71 12 4 6 10 401 13 877 l5 865
30 0 30 0 3 -869 c1 -622 5 -873 13 -883 18 -21 67 -16 81 10 10 17 13 161 13
674 0 358 3 655 8 659 24 24 28 -46 32 -666 5 -587 7 -656 22 -672 20 -22 37
-23 57 -2 14 14 16 89 16 680 l0 664 30 0 30 0 0 -655 c0 -587 2 -658 16 -680
20 -31 59 -33 74 -5 8 14 12 230 13 683 l2 662 30 0 30 0 3 -664 c1 -470 5
-668 13 -678 6 -7 21 -13 34 -13 40 0 47 34 44 211 -1 90 -1 386 -1 657 2 466
3 493 19 490 17 -3 18 -40 19 -666 2 -620 3 -664 19 -682 24 -27 71 -26 86 1
8 16 9 153 3 528 -5 278 -8 562 -9 631 0 69 -1 155 -3 192 -3 103 2 101 -310
102 l-257 1 -5 182 c-7 241 6 227 -208 230 -86 1 -175 -2 -196 -6z"
        />
        <path
          d="M2369 2086 c-30 -14 -35 -39 -13 -60 21 -21 73 -17 88 7 23 36 -31
75 -75 53z"
        />
        <path
          d="M4357 2029 c-9 -6 -17 -19 -17 -29 0 -16 7 -20 35 -20 28 0 35 4 35
20 0 25 -30 41 -53 29z"
        />
        <path
          d="M3663 1973 c-5 -16 -8 -379 -8 -808 l0 -779 27 -16 c26 -14 29 -13
47 5 18 19 19 47 25 655 8 759 -2 932 -54 960 -27 14 -29 13 -37 -17z"
        />
        <path
          d="M2364 1940 c-14 -5 -24 -21 -28 -42 -3 -18 -5 -363 -5 -766 0 -713 1
-734 20 -753 24 -24 51 -24 73 -1 15 17 16 83 14 793 l-3 774 -25 2 c-14 1
-35 -2 -46 -7z"
        />
        <path
          d="M4347 1877 c-16 -11 -18 -65 -19 -746 l-1 -734 22 -19 c30 -24 46
-23 65 4 14 20 16 108 16 750 0 647 -2 728 -16 742 -19 19 -44 20 -67 3z"
        />
        <path
          d="M6642 628 c-27 -27 -3 -77 39 -78 24 0 51 35 47 62 -2 18 -10 24 -38
26 -19 2 -41 -3 -48 -10z"
        />
        <path
          d="M6646 454 c-20 -20 -20 -43 0 -72 22 -32 60 -29 79 8 8 16 15 33 15
39 0 18 -31 41 -55 41 -13 0 -31 -7 -39 -16z"
        />
      </g>
    </svg>
  );
};
