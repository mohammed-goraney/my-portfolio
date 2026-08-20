import React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated Docker Compose architecture diagram for the Example Voting App.
 * Lightweight SVG + framer-motion only (no extra libs, no images).
 *
 * Flow: Vote App → Redis → Worker → PostgreSQL ← Result App
 */

type NodeType = 'app' | 'queue' | 'db'

interface DiagramNode {
  id: string
  label: string
  sub: string
  type: NodeType
}

const NODES: DiagramNode[] = [
  { id: 'vote', label: 'Vote App', sub: 'Python (Flask)', type: 'app' },
  { id: 'redis', label: 'Redis', sub: 'Message Queue', type: 'queue' },
  { id: 'worker', label: 'Worker', sub: '.NET', type: 'app' },
  { id: 'postgres', label: 'PostgreSQL', sub: 'Database', type: 'db' },
  { id: 'result', label: 'Result App', sub: 'Node.js', type: 'app' },
]

const TYPE_STYLES: Record<NodeType, { stroke: string; fill: string; icon: string }> = {
  app: { stroke: '#D4A574', fill: 'rgba(212,165,116,0.08)', icon: '⬡' },
  queue: { stroke: '#8FA6BF', fill: 'rgba(143,166,191,0.10)', icon: '◎' },
  db: { stroke: '#7CA98E', fill: 'rgba(124,169,142,0.10)', icon: '⛁' },
}

const EDGE_DASH = '4 4'

/**
 * Path geometry (viewBox 720x300). Nodes are rounded rects;
 * dotted paths connect vote → redis → worker → postgres, and result reads from postgres.
 */
const LAYOUT = [
  { id: 'vote', x: 20 },
  { id: 'redis', x: 180 },
  { id: 'worker', x: 340 },
  { id: 'postgres', x: 500 },
  { id: 'result', x: 600 },
]

const NODE_W = 120
const NODE_H = 64
const NODE_Y = 110
const TOP_Y = 34 // y for flow arrows
const BOTTOM_Y = 252 // y for result read-back arrow

const nodeX = (id: string) => LAYOUT.find((l) => l.id === id)!.x

export const DockerDiagram: React.FC = () => {
  const stagger = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div
      className="relative rounded-xl border border-border/60 bg-background overflow-hidden"
      role="img"
      aria-label="Docker Example Voting App architecture: Vote App, Redis, Worker, PostgreSQL, Result App"
    >
      {/* terminal-style header */}
      <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-surface/70 px-4 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="font-mono-tech text-[11px] uppercase tracking-widest text-text-muted truncate">
          docker-compose.yml · 5 services · 1 network
        </span>
      </div>

      <svg viewBox="0 0 720 300" className="w-full select-none" preserveAspectRatio="xMidYMid meet">
        {/* dotted network boundary */}
        <motion.rect
          x="8" y="8" width="704" height="284" rx="10"
          fill="none" stroke="rgba(212,165,116,0.18)" strokeWidth="1" strokeDasharray="3 5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-5%' }}
        />
        <text x="22" y="26" fill="rgba(212,165,116,0.55)" fontSize="10" fontFamily="monospace">
          voteapp_default bridge network
        </text>

        {/* ---------- edges ---------- */}
        {/* vote → redis */}
        <motion.path
          d={`M ${nodeX('vote') + NODE_W} ${TOP_Y} L ${nodeX('redis') - 8} ${TOP_Y}`}
          fill="none" stroke={TYPE_STYLES.app.stroke} strokeWidth="1.5" strokeDasharray={EDGE_DASH}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points={`${nodeX('redis') - 8},${TOP_Y - 4} ${nodeX('redis') - 1},${TOP_Y} ${nodeX('redis') - 8},${TOP_Y + 4}`}
          fill={TYPE_STYLES.app.stroke}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.95 }}
          viewport={{ once: true }}
        />

        {/* redis → worker */}
        <motion.path
          d={`M ${nodeX('redis') + NODE_W} ${TOP_Y} L ${nodeX('worker') - 8} ${TOP_Y}`}
          fill="none" stroke={TYPE_STYLES.queue.stroke} strokeWidth="1.5" strokeDasharray={EDGE_DASH}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points={`${nodeX('worker') - 8},${TOP_Y - 4} ${nodeX('worker') - 1},${TOP_Y} ${nodeX('worker') - 8},${TOP_Y + 4}`}
          fill={TYPE_STYLES.queue.stroke}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.15 }}
          viewport={{ once: true }}
        />

        {/* worker → postgres (drops down to bottom row, left to right) */}
        <motion.path
          d={`M ${nodeX('worker') + NODE_W / 2} ${NODE_Y + NODE_H} L ${nodeX('worker') + NODE_W / 2} ${BOTTOM_Y} L ${nodeX('postgres') + NODE_W / 2} ${BOTTOM_Y} L ${nodeX('postgres') + NODE_W / 2} ${NODE_Y + NODE_H}`}
          fill="none" stroke={TYPE_STYLES.app.stroke} strokeWidth="1.5" strokeDasharray={EDGE_DASH}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points={`${nodeX('postgres') + NODE_W / 2 - 4},${NODE_Y + NODE_H - 1} ${nodeX('postgres') + NODE_W / 2},${NODE_Y + NODE_H + 6} ${nodeX('postgres') + NODE_W / 2 + 4},${NODE_Y + NODE_H - 1}`}
          fill={TYPE_STYLES.app.stroke}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          viewport={{ once: true }}
        />

        {/* postgres → result (reads back, bottom row, rightwards) */}
        <motion.path
          d={`M ${nodeX('postgres') + NODE_W} ${BOTTOM_Y} L ${nodeX('result') - 8} ${BOTTOM_Y}`}
          fill="none" stroke={TYPE_STYLES.db.stroke} strokeWidth="1.5" strokeDasharray={EDGE_DASH}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          viewport={{ once: true }}
        />
        <motion.polygon
          points={`${nodeX('result') - 8},${BOTTOM_Y - 4} ${nodeX('result') - 1},${BOTTOM_Y} ${nodeX('result') - 8},${BOTTOM_Y + 4}`}
          fill={TYPE_STYLES.db.stroke}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.55 }}
          viewport={{ once: true }}
        />

        {/* ---------- nodes ---------- */}
        {NODES.map((node, i) => {
          const style = TYPE_STYLES[node.type]
          return (
            <motion.g
              key={node.id}
              {...stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <rect
                x={nodeX(node.id)}
                y={NODE_Y}
                width={NODE_W}
                height={NODE_H}
                rx="10"
                fill={style.fill}
                stroke={style.stroke}
                strokeWidth="1.2"
              />
              <text x={nodeX(node.id) + 10} y={NODE_Y + 28} fill={style.stroke} fontSize="12" fontFamily="monospace">
                {style.icon} {node.label}
              </text>
              <text x={nodeX(node.id) + 10} y={NODE_Y + 46} fill="rgba(235,229,218,0.55)" fontSize="10" fontFamily="monospace">
                {node.sub}
              </text>
            </motion.g>
          )
        })}

        {/* data-flow pulse dots */}
        <motion.circle r="2.5" fill="#D4A574">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path={`M ${nodeX('vote') + NODE_W} ${TOP_Y} L ${nodeX('redis') - 8} ${TOP_Y}`}
          />
        </motion.circle>
        <motion.circle r="2.5" fill="#8FA6BF">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path={`M ${nodeX('redis') + NODE_W} ${TOP_Y} L ${nodeX('worker') - 8} ${TOP_Y}`}
          />
        </motion.circle>
        <motion.circle r="2.5" fill="#D4A574">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path={`M ${nodeX('worker') + NODE_W / 2} ${NODE_Y + NODE_H} L ${nodeX('worker') + NODE_W / 2} ${BOTTOM_Y} L ${nodeX('postgres') + NODE_W / 2} ${BOTTOM_Y} L ${nodeX('postgres') + NODE_W / 2} ${NODE_Y + NODE_H}`}
          />
        </motion.circle>
        <motion.circle r="2.5" fill="#7CA98E">
          <animateMotion
            dur="3.6s"
            repeatCount="indefinite"
            path={`M ${nodeX('postgres') + NODE_W} ${BOTTOM_Y} L ${nodeX('result') - 8} ${BOTTOM_Y}`}
          />
        </motion.circle>
      </svg>

      {/* legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-border/60 bg-surface/50 px-4 py-2">
        {(Object.keys(TYPE_STYLES) as NodeType[]).map((t) => (
          <span key={t} className="flex items-center gap-1.5 text-[11px] text-text-muted">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: TYPE_STYLES[t].stroke }} />
            {t === 'app' ? 'Services' : t === 'queue' ? 'Queue' : 'Database'}
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
          <svg width="22" height="6" viewBox="0 0 22 6" aria-hidden="true">
            <line x1="0" y1="3" x2="22" y2="3" stroke="#D4A574" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          data flow
        </span>
      </div>
    </div>
  )
}

DockerDiagram.displayName = 'DockerDiagram'
