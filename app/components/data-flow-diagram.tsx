/**
 * Pipeline-style data-flow schematic (ingest → model → signals).
 * Shared by home + technology pages, keep in sync visually.
 */
export default function DataFlowDiagram() {
  return (
    <div className="neural-wrap" role="img" aria-label="Schematic of data flowing from market inputs through feature layers to directional signals">
      <svg className="neural-svg" viewBox="0 0 460 400" aria-hidden="true">
        <defs>
          <linearGradient id="df-stroke-in" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#4a5d78" />
            <stop offset="1" stopColor="#3d4f66" />
          </linearGradient>
          <linearGradient id="df-stroke-out" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#4d6278" />
            <stop offset="1" stopColor="#556882" />
          </linearGradient>
          {/* Single flow particle, very soft blur, low alpha (motion via animateMotion only) */}
          <filter id="df-particle-soft" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform="rotate(-0.45 230 198)">
          {/* Layer 1, ingest */}
          <g className="nn-conn-1" stroke="rgba(95, 115, 140, 0.38)" strokeWidth="0.38" fill="none">
            <line x1="64" y1="81" x2="166" y2="101" />
            <line x1="64" y1="81" x2="166" y2="176" />
            <line x1="64" y1="81" x2="166" y2="247" />
            <line x1="64" y1="147" x2="166" y2="101" />
            <line x1="64" y1="147" x2="166" y2="176" />
            <line x1="64" y1="147" x2="166" y2="247" />
            <line x1="64" y1="211" x2="166" y2="101" />
            <line x1="64" y1="211" x2="166" y2="176" />
            <line x1="64" y1="211" x2="166" y2="247" />
            <line x1="64" y1="211" x2="166" y2="323" />
            <line x1="64" y1="275" x2="166" y2="176" />
            <line x1="64" y1="275" x2="166" y2="247" />
            <line x1="64" y1="275" x2="166" y2="323" />
            <line x1="64" y1="339" x2="166" y2="247" />
            <line x1="64" y1="339" x2="166" y2="323" />
          </g>
          <g className="nn-conn-2" stroke="rgba(88, 108, 132, 0.42)" strokeWidth="0.42" fill="none">
            <line x1="166" y1="101" x2="266" y2="119" />
            <line x1="166" y1="101" x2="266" y2="206" />
            <line x1="166" y1="176" x2="266" y2="119" />
            <line x1="166" y1="176" x2="266" y2="206" />
            <line x1="166" y1="176" x2="266" y2="292" />
            <line x1="166" y1="247" x2="266" y2="206" />
            <line x1="166" y1="247" x2="266" y2="292" />
            <line x1="166" y1="323" x2="266" y2="206" />
            <line x1="166" y1="323" x2="266" y2="292" />
          </g>
          <g className="nn-conn-3" stroke="rgba(82, 102, 126, 0.45)" strokeWidth="0.45" fill="none">
            <line x1="266" y1="119" x2="356" y2="161" />
            <line x1="266" y1="119" x2="356" y2="246" />
            <line x1="266" y1="206" x2="356" y2="161" />
            <line x1="266" y1="206" x2="356" y2="246" />
            <line x1="266" y1="292" x2="356" y2="161" />
            <line x1="266" y1="292" x2="356" y2="246" />
          </g>

          {/* One particle, one route along existing edges, forward then reverse for continuous loop */}
          <g className="df-flow-particle" aria-hidden="true">
            <path
              id="df-flow-route"
              d="M64,81 L166,101 L266,119 L356,161 L266,119 L166,101 L64,81"
              fill="none"
              stroke="none"
              opacity={0}
            />
            <circle r="2" fill="rgba(105, 122, 145, 0.42)" filter="url(#df-particle-soft)">
              <animateMotion dur="38s" repeatCount="indefinite" calcMode="linear" rotate="0">
                <mpath xlinkHref="#df-flow-route" href="#df-flow-route" />
              </animateMotion>
            </circle>
          </g>

          {/* Input points, unlabeled data taps */}
          <g className="nn-nodes-in" fill="rgba(12, 16, 24, 0.92)" stroke="url(#df-stroke-in)" strokeWidth="0.9">
            <circle cx="64" cy="81" r="5.2" />
            <circle cx="64" cy="147" r="5.2" />
            <circle cx="64" cy="211" r="5.2" />
            <circle cx="64" cy="275" r="5.2" />
            <circle cx="64" cy="339" r="5.2" />
          </g>

          <g className="nn-nodes-h1" fill="rgba(14, 18, 26, 0.88)" stroke="rgba(78, 96, 118, 0.85)" strokeWidth="0.85">
            <circle cx="166" cy="101" r="6" />
            <circle cx="166" cy="176" r="6" />
            <circle cx="166" cy="247" r="6" />
            <circle cx="166" cy="323" r="6" />
          </g>
          <g className="nn-nodes-h2" fill="rgba(16, 20, 28, 0.9)" stroke="rgba(72, 90, 112, 0.88)" strokeWidth="0.85">
            <circle cx="266" cy="119" r="6.2" />
            <circle cx="266" cy="206" r="6.2" />
            <circle cx="266" cy="292" r="6.2" />
          </g>
          <circle
            className="nn-out-node"
            cx="356"
            cy="161"
            r="9"
            fill="rgba(18, 22, 30, 0.95)"
            stroke="url(#df-stroke-out)"
            strokeWidth="1"
          />
          <circle
            className="nn-out-node"
            cx="356"
            cy="246"
            r="9"
            fill="rgba(18, 22, 30, 0.95)"
            stroke="url(#df-stroke-out)"
            strokeWidth="1"
          />

          <text x="382" y="164" fill="#7d8fa3" fontSize="9.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.06em">
            LONG
          </text>
          <text x="382" y="249" fill="#7d8fa3" fontSize="9.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="0.06em">
            SHORT
          </text>

          <text x="64" y="372" fill="#4a5868" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="0.14em">
            INGEST
          </text>
          <text x="166" y="372" fill="#4a5868" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="0.14em">
            FEATURES
          </text>
          <text x="266" y="372" fill="#4a5868" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="0.14em">
            STATE
          </text>
          <text x="356" y="372" fill="#4a5868" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle" letterSpacing="0.14em">
            SIGNAL
          </text>
        </g>
      </svg>
    </div>
  );
}
