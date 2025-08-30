
"use client";
import React, { useState } from 'react';

export default function MobileModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="modal-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
            <button className="close-modal" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
