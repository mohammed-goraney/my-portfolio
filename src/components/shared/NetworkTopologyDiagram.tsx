import React from 'react'
import { motion } from 'framer-motion'

/**
 * An interactive, animated network topology diagram based on the user's image.
 * Represents a hierarchical enterprise network (Core, Distribution, Access layers).
 */
export const NetworkTopologyDiagram: React.FC = () => {
  // Define node positions based on the hierarchical structure in the image
  const nodes = [
    { id: 'isp', label: 'ISP-Router', x: 50, y: 5, type: 'router' },
    { id: 'edge', label: 'EDGE-Router', x: 50, y: 20, type: 'router' },
    { id: 'core1', label: 'CORE1', x: 35, y: 40, type: 'router' },
    { id: 'core2', label: 'CORE2', x: 65, y: 40, type: 'router' },
    { id: 'dist1', label: 'DIST1', x: 15, y: 65, type: 'switch' },
    { id: 'dist2', label: 'DIST2', x: 85, y: 65, type: 'switch' },
    { id: 'access1', label: 'ACCESS1', x: 20, y: 90, type: 'switch' },
    { id: 'access2', label: 'ACCESS2', x: 80, y: 90, type: 'switch' },
  ]

  // Define links between nodes
  const links = [
    { from: 'isp', to: 'edge' },
    { from: 'edge', to: 'core1' },
    { from: 'edge', to: 'core2' },
    { from: 'core1', to: 'core2', double: true, label: 'EtherChannel' },
    { from: 'core1', to: 'dist1' },
    { from: 'core1', to: 'dist2' },
    { from: 'core2', to: 'dist1' },
    { from: 'core2', to: 'dist2' },
    { from: 'dist1', to: 'dist2', label: 'HSRP' },
    { from: 'dist1', to: 'access1' },
    { from: 'dist1', to: 'access2' },
    { from: 'dist2', to: 'access1' },
    { from: 'dist2', to: 'access2' },
    { from: 'access1', to: 'access2' },
  ]

  return (
    <div className="relative aspect-[4/5] w-full max-w-2xl mx-auto overflow-hidden rounded-xl border border-accent-gold/20 bg-surface/40 p-6 backdrop-blur-sm">
      {/* Header Info */}
      <div className="absolute top-4 left-6 z-10 font-mono-tech text-[10px] uppercase tracking-widest text-accent-gold/60">
        Topology: Goraney Technologies Enterprise Campus
      </div>

      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_0_15px_rgba(212,165,116,0.1)]">
        {/* Links with data flow animation */}
        {links.map((link, i) => {
          const fromNode = nodes.find((n) => n.id === link.from)!
          const toNode = nodes.find((n) => n.id === link.to)!
          
          return (
            <g key={`link-${i}`}>
              <motion.line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="currentColor"
                strokeWidth={link.double ? 0.8 : 0.4}
                className="text-accent-gold/20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
              {/* Data packet animation */}
              <motion.circle
                r="0.5"
                fill="currentColor"
                className="text-accent-gold"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
                style={{
                  offsetPath: `path('M ${fromNode.x} ${fromNode.y} L ${toNode.x} ${toNode.y}')`,
                }}
              />
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.5 + i * 0.05 }}
          >
            {/* Node Shape */}
            {node.type === 'router' ? (
              <circle
                cx={node.x}
                cy={node.y}
                r="3"
                className="fill-surface stroke-accent-gold stroke-[0.5]"
              />
            ) : (
              <rect
                x={node.x - 2.5}
                y={node.y - 2.5}
                width="5"
                height="5"
                className="fill-surface stroke-accent-gold stroke-[0.5]"
              />
            )}
            
            {/* Node Icon/Lines */}
            <path
              d={node.type === 'router' 
                ? `M ${node.x-1.5} ${node.y} L ${node.x+1.5} ${node.y} M ${node.x} ${node.y-1.5} L ${node.x} ${node.y+1.5}`
                : `M ${node.x-1.5} ${node.y-1} L ${node.x+1.5} ${node.y+1} M ${node.x-1.5} ${node.y+1} L ${node.x+1.5} ${node.y-1}`
              }
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-accent-gold/80"
            />

            {/* Node Label */}
            <text
              x={node.x}
              y={node.y + 6}
              textAnchor="middle"
              className="fill-text-primary font-mono-tech text-[2.5px] font-bold tracking-tighter"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-6 flex gap-4 font-mono-tech text-[8px] text-text-muted">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full border border-accent-gold" />
          Router
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 border border-accent-gold" />
          Switch
        </div>
      </div>
    </div>
  )
}
