"use client"

import { useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { Check, Copy } from "lucide-react"

export default function DemoOne() {
  const speed = 1.0
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pnpm i 21st")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="hero-shader-wrapper">
      <div className="w-full h-full bg-black relative overflow-hidden">
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={speed}
        />

        {/* Lighting overlay effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: `${3 / speed}s` }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/30 rounded-full blur-xl animate-pulse"
            style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center font-mono text-xs text-white/60 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full flex items-center gap-2">
            <div>...21st-cli...</div>
            <div className="flex items-center gap-2 pointer-events-auto">
              <span>pnpm i 21st.dev</span>
              <button
                onClick={copyToClipboard}
                className="p-1 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
                title="Copy to clipboard"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

